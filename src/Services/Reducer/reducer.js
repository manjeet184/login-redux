import { ADD_DATA, REMOVE_DATA } from '../Constrant'
export default function inputItem(state = [], action) {
  console.log('reducer', state, action)
  switch (action.type) {
    case ADD_DATA:
      return [...state, { inputData: action.data }]
    case REMOVE_DATA:
      state.splice(action.data, 1)
      return [...state]
    default:
      return state
  }
}
