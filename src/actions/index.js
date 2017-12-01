export const SET_JSON = 'SET_JSON'
export const SET_JSON_TWO = 'SET_JSON_TWO'


export function set_json(response){
  return {
    type: SET_JSON,
    response
  }
}


export function set_json_2(response){
  return {
    type: SET_JSON_TWO,
    response
  }
}

export function set_json_two(response){
  return (dispatch,getState) => {
    setTimeout(() => dispatch(set_json_2(response)),5000)
    setTimeout(() => dispatch(set_json()),10000)
  }
}
