import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

// we want to return an array of comments to be rendered
export default function(state = [], action) {
  switch (action.type) {
    default:
      return state;

    case SAVE_COMMENT:
      console.log('flowing through the SAVE_COMMENT reducer');
      // action payload contains the new comment
      // destructure the old array, add a new comment
      // and return the new array
      return [...state, action.payload];

    case FETCH_COMMENTS:
      console.log('flowing through the FETCH_COMMENTS reducer');
      const comments = action.payload.data.map((comment) => {
        return comment.name;
      });
      return [...state, ...comments];
  }
}
