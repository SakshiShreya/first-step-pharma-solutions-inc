import { TDevice } from "../types/genericTypes";

// eslint-disable-next-line import/prefer-default-export
export const calculateDevice = (width: number): TDevice => {
  if (width >= 992) {
    return "desktop";
  }
  if (width >= 576) {
    return "tablet";
  }
  return "mobile";
};
