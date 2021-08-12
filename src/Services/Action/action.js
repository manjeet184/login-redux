import { ADD_DATA } from '../Constrant'
export const ADD = (data) => {
  console.log('action', data)
  return {
    type: ADD_DATA,
    data: data,
  }
}
