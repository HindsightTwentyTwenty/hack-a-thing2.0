import React, { Component, PropTypes } from 'react';
import style from './MainSection.css';


export default class MainSection extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }


  openTabs = () => {
    console.log("HELLO TOMMY");
    console.log(this.props);

    this.props.actions.getTabs();

    console.log("GOT HRE");
    console.log(this.props);
    console.log(this.state);
  }

  render() {

    const { opentabs, actions } = this.props;
    console.log(this.state);


    return (
      <main>
        <span>Hello TOMMY!!!!</span>
        <br/>
        <button onClick={this.openTabs}>Get List of open tabs</button>
      </main>
    );
  }
}
