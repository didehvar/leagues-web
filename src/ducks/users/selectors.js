const reducer = state => state.users;

export const getUser = (state, id) => reducer(state).byId[id];

export const getCurrentUser = state => reducer(state).current;

export const getCurrentUserId = state => getCurrentUser(state).id;

export const getCurrentToken = state => getCurrentUser(state).token;

export const getLastTokenRefresh = state => getCurrentUser(state).lastRefresh;

export const getUserAuthenticated = state => !!getCurrentUser(state).id;

export const getErrorMessage = state => reducer(state).errorMessage;
