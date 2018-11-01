import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    // fudge data to return to axios
    response: [
      { name: "fetched comment 1" },
      { name: "fetched comment 2" },
      { name: "fetched comment 3" }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  // render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the fetchComments button and click it
  // I gave it a class name so as to find it later on
  wrapped.find(".fetch-comments").simulate("click");

  // Ajax requests only work within the browser
  // moxios watches axios requests and tricks it by giving it fake data
  // -- so no network trip

  // wether going to the network or waiting for moxios, have to
  // introduce a delay here to wait for the results before checking
  moxios.wait(() => {
      wrapped.update(); // force render()

    // expect to find a list of comments
    expect(wrapped.find("li").length).toEqual(3);

    // have to tell Jest we are done
    done();
    wrapped.unmount();
  });
});
