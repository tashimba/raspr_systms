import * as auth from "./auth";

export const api = {
  ...auth, // Теперь в api будут методы login и register
};
