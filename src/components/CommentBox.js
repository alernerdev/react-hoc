import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "components/requireAuth";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveCommentAction(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button
          className="fetch-comments"
          onClick={this.props.fetchCommentsAction}
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

/* connect component becomes the parent of the child and thats 
what we are exporting
*/
export default connect(null, actions)(requireAuth(CommentBox));
