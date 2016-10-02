import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainSection from '../components/MainSection';
import * as OpenTabActions from '../actions/opentab';
import style from './App.css';

@connect(
  state => ({
    opentabs: state.opentabs
  }),
  dispatch => ({
    actions: bindActionCreators(OpenTabActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    opentabs: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { opentabs, actions } = this.props;

    return (
      <div className={style.normal}>
        <MainSection actions={actions} />
      </div>
    );
  }
}
