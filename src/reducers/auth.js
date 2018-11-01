import { CHANGE_AUTH } from "actions/types";

// by default, the user is not signed in
export default function(state = false, action) {
  switch (action.type) {
    default:
      return state;

    case CHANGE_AUTH:
    return action.payload;
  }
}
