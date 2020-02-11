export const Types = {
    GET_RANKING: 'RANKING/GET_RANKING',
    GET_RANKING_SUCCESS: 'RANKING/GET_RANKING_SUCCESS',
    GET_RANKING_ERROR: 'RANKING/GET_RANKING_ERROR',
  };
  
  const INITIAL_STATE = {
    data: [],
    loading: false,
    error: ''
  };
  
  export default function ranking(state = INITIAL_STATE, action) {
    switch (action.type) {
      case Types.GET_RANKING: {
        action.data = { data: [], loading: true, error: '' };
  
        return { data: action.data };
      }
      case Types.GET_RANKING_SUCCESS: {
        return { data: action.data, loading: false, error: '' };
      }
      case Types.GET_RANKING_ERROR: {
        return { loading: false, error: action.error, ...state };
      }
      default:
        return state;
    }
  }