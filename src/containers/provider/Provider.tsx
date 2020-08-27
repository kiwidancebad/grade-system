import React from 'react';
import { Context } from './constants';
import * as storeContainer from 'store/container';

export class Provider extends React.PureComponent {
  render() {
    return (
      <Context.Provider value={storeContainer}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
