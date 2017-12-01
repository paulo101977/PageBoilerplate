import Immutable from 'immutable'

import {SET_JSON, SET_JSON_TWO} from '../actions'

import defaultJSON from './mock_original'

let defaultState = Immutable.fromJS({
  JSONTarget:defaultJSON,
  current: defaultJSON
})

function reducer (state = defaultState, action) {
  switch ( action.type ) {
  	case SET_JSON:
      return state.mergeDeep(
        {
          JSONTarget : state.get('JSONTarget')
                              .set('TabTitle1','Test Reducer 1')
        }
      );
    case SET_JSON_TWO:
      return state.mergeDeep(
        {
          JSONTarget : action.response
        }
      );


  	default:
  		return state
  }
}

export default reducer
export {reducer}
