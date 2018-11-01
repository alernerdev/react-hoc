import React, { Component } from "react";
import { connect } from "react-redux";

// this component is rendering a list of comments from a prop
class CommentList extends Component {
  renderComments = (comments) => {
      return comments.map( (comment)=>{
          return (
              <li key={comment}>
                  {comment}
              </li>
          )
      })
  };

  render() {
    return (
      <div>
          <h4>Comment List</h4>
        <ul>{this.renderComments(this.props.comments)}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    // state.comments here comes from the combineReducers object
    return {comments: state.comments}
}
// every component with a connect expects to see a parent up the chain
// with a Provider wrapper
export default connect(mapStateToProps)(CommentList);