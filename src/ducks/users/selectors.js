const reducer = state => state.users;

export const getCurrentUser = state => reducer(state).current;

export const getCurrentUserId = state => getCurrentUser(state).id;

export const getUserAuthenticated = state => !!getCurrentUser(state).id;

export const getErrorMessage = state => reducer(state).errorMessage;
