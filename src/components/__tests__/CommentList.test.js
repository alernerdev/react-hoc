import React from "react";
// mount is Full DOM
import { mount } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "And another comment"]
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it("creates one LI per comment", () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it("shows text for each comment", () => {
    // enzyme render returns CheerioWrapper
    console.log(wrapped.render().text());
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('And another comment');
});
