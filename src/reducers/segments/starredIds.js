const starredIds = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STARRED_SEGMENTS_SUCCESS':
      return action.response.result;
    default:
      return state;
  }
};

export default starredIds;

export const getSegmentIds = state => state;
