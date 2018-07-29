const reducer = state => state.users;

export const getUser = (state, id) => reducer(state).byId[id];

export const getCurrentUser = state => reducer(state).current;

export const getCurrentUserId = state => getCurrentUser(state).id;

export const getCurrentToken = state => getCurrentUser(state).token;

export const getRole = (state, id) => reducer(state).rolesById[id];

export const getCurrentUserRoleId = state => getCurrentUser(state).role;

export const getLastTokenRefresh = state => getCurrentUser(state).lastRefresh;

export const hasRole = (state, roleId, roleName) =>
  roleId && (getRole(state, roleId) || {}).name === roleName;

export const currentUserHasRole = (state, roleName) =>
  hasRole(state, getCurrentUserRoleId(state), roleName);

export const isAuthenticated = state => !!getCurrentUser(state).token;

export const getUserError = state => reducer(state).errorMessage;
