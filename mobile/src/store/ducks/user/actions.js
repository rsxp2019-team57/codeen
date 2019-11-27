import { Types } from "./reducer";

export function setUser(user) {
  return {
    type: Types.SET_USER,
    user,
  };
}
