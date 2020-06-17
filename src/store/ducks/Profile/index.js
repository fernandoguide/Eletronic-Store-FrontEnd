// export const Types = {
//     GET_PROFILE: 'GET_PROFILE/GET_PROFILE',
//     GET_PROFILE_SUCCESS: 'GET_PROFILE/GET_PROFILE_SUCCESS',
//     GET_PROFILE_ERROR: 'GET_PROFILE/GET_PROFILE_ERROR',
// };

// const INITIAL_STATE = {
//     data: {},
//     loading: false,
//     error: '',
// };

// export default function PROFILE(state = INITIAL_STATE, action) {
//     switch (action.type) {
//         case Types.GET_PROFILE: {
//             return { data: {}, loading: true, error: '' };
//         }
//         case Types.GET_PROFILE_SUCCESS: {
//             return {
//                 data: action.data,
//                 loading: false,
//                 error: '',
//             };
//         }
//         case Types.GET_PROFILE_ERROR: {
//             return {
//                 data: [],
//                 loading: false,
//                 error: action.error,
//             };
//         }
//         default:
//             return state;
//     }
// }
