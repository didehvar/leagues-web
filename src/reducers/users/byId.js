const byId = (state = {}, { response }) => {
  if (response && response.entities.users) {
    return {
      ...state,
      ...Object.keys(response.entities.users).reduce((previous, current) => {
        const { avatar, ...user } = response.entities.users[current];
        previous[current] = {
          ...user,
          avatar: avatar.startsWith('http')
            ? avatar
            : `https://d3nn82uaxijpm6.cloudfront.net/assets/${avatar}`
        };
        return previous;
      }, {})
    };
  }
  return state;
};

export default byId;

export const getUser = (state, id) => state[id];
