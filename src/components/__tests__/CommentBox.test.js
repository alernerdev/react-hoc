import React from 'react';
import Root from 'Root';

// mount is Full DOM
import { mount } from "enzyme";

// using absolute paths relative to the .env specified path
import CommentBox from "components/CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
      </Root>
    );
});
afterEach(() => {
  wrapped.unmount();
});

it("has a text area and 2 buttons", () => {
  // enzyme find returns an array
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the text area", () => {
  beforeEach(() => {
    // find the textarea element
    // simulate a change event
    // provide a fake event object

    wrapped
      .find("textarea")
      // 'change' is HTML event name
      .simulate("change", {
        target: {
          value: "new comment"
        }
      });

    // force a sync update
    wrapped.update();
  });

  it("has a text area that users can type in", () => {
    // assert that textarea value has changed
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted text area is emptied", () => {
    // simulate submit event
    wrapped.find("form").simulate("submit");

    // force a sync update
    wrapped.update();
    // now it should be empty
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
