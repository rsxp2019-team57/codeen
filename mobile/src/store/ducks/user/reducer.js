import produce from "immer";

export const Types = {
  SET_USER: "@user/SET_USER",
};

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SUCCESS: {
        draft.profile = user;
        break;
      }

      default:
    }
  });
}
