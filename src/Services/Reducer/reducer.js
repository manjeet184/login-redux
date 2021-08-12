import { ADD_DATA } from '../Constrant'
const initialState = {
  inputData: [],
}

export default function inputItem(state = [], action) {
  console.log('reducer', state, action)
  switch (action.type) {
    case ADD_DATA:
      return [...state, { inputData: action.data }]
    default:
      return state
  }
}
