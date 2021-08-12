import { ADD_DATA, REMOVE_DATA } from '../Constrant'

export const ADD = (data) => {
  console.log('action', data)
  return {
    type: ADD_DATA,
    data: data,
  }
}
export const REMOVE = (data) => {
  console.log('action remove call', data)
  return {
    type: REMOVE_DATA,
    data: data,
  }
}
