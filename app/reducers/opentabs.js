import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
  opentabs: ['poop']
}];

const opentabs = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_TABS:
      return {
        opentabs: ['grace', 'tommy', 'zach']
      }

    default:
      return state
  }
}
export default opentabs

// const actionsMap = {
//   [ActionTypes.GET_TABS](state) {
//     return [{
//       // opentabs: chrome.tabs.query({currentWindow: true}, function mytabs(tabs) {
//       //   console.log("GET TABS");
//       //   console.log(tabs);
//       //   return tabs;
//       // })
//       opentabs: ['grace', 'zach', 'tommy']
//
//     }, ...state];
//   }
//
//
// };
//
// export default function opentabs(state = initialState, action) {
//   const reduceFn = actionsMap[action.type];
//   if (!reduceFn) return state;
//   return reduceFn(state, action);
// }
