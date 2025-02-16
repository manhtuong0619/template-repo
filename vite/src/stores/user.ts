import { create } from 'zustand';

type UserState = {};

type UserAction = {};

const initialState: UserState = {};

// eslint-disable-next-line unused-imports/no-unused-vars
export const useUserStore = create<UserState & UserAction>((set) => ({
  ...initialState,
}));
