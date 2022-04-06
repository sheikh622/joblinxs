import { createSelector } from "reselect";

const selectLoginDomain = (state: any) => state["auth"];

export const makeSelectAuthToken = () =>
  createSelector(selectLoginDomain, (globalState) => globalState.token);

export const makeSelectAuthUser = () =>
  createSelector(selectLoginDomain, (globalState) => globalState.user);
// import {} from 'react';
// export default {}