const reducer = state => state.ducks.users;

export const getCurrentUser = state => reducer(state).current;

export const getCurrentUserId = state => getCurrentUser(state).id;

export const getUserAuthenticated = state => !!getCurrentUser(state).id;
