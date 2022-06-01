// import { createSelector } from "reselect";

// const selectLoginDomain = (state) => state["Auth"];

// export const makeSelectAuthToken = () =>
//   createSelector(selectLoginDomain, (globalState) => globalState.token);

// export const makeSelectTenantId = () =>
//   createSelector(selectLoginDomain, (globalState) => globalState.tenantId);

// export const makeSelectRoleId = () =>
//   createSelector(selectLoginDomain, (globalState) => globalState.user.RoleId);

import { createSelector } from "reselect";

const selectLoginDomain = (state) => state["Auth"];

export const makeSelectAuthToken = () =>
  createSelector(selectLoginDomain, (globalState) => globalState.token);

// export const makeSelectTenantId = () =>
//   createSelector(selectLoginDomain, (globalState) => globalState.tenantId);

// export const makeSelectRoleId = () =>
//   createSelector(selectLoginDomain, (globalState) => globalState.user.RoleId);
