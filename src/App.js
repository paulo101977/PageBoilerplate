import React from 'react';
import * as Actions from './actions';
import SVA from './pages'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import currentMock from './reducers/mock_original';
import modifiedJson from './reducers/mock_modified';

const SVAAsync = (props) => <Async load={import('./pages')} componentProps={props}/>

class App extends React.Component {
  componentWillMount() {
    this.props.set_json(currentMock)
  }

  componentDidMount() {
      this.props.set_json_two(modifiedJson)
  }

  render() {
    const {JSONTarget} = this.props;

    return(
        <SVA JSONTarget={JSONTarget}/>
    )
  }
}

function mapStateToProps(state) {
  return {JSONTarget:state.get('JSONTarget')}
}

//dispatch the action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch)
}


export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App)
