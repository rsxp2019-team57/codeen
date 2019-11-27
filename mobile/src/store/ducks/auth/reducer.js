import produce from "immer";

export const Types = {
  REQUEST: "@auth/SIGN_IN_REQUEST",
  SUCCESS: "@auth/SIGN_IN_SUCCESS",
  FAILURE: "@auth/SIGN_FAILURE",
  SIGN_UP: "@auth/SIGN_UP_REQUEST",
  SIGN_OUT: "@auth/SIGN_OUT",
};

const INITIAL_STATE = {
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.REQUEST: {
        draft.loading = true;
        break;
      }

      case Types.SUCCESS: {
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case Types.FAILURE: {
        draft.loading = false;
        break;
      }

      case Types.SIGN_OUT: {
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
