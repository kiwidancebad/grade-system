import React from 'react';
import { Context } from './constants';
import { STORE_NAMES } from 'store/names';

import { Container } from 'inversify';

type IReactComponent<P = any> =
  | React.FC<P>
  | React.FunctionComponent<P>
  | React.ComponentClass<P>
  | React.ComponentType<P>;

export type IContextValue = {
  container: Container;
  STORE_NAMES: typeof STORE_NAMES;
};

export type IMapDependencyToProps<R = any, P = {}> = (
  container: Container,
  names: typeof STORE_NAMES,
  props: P,
) => R;

export type InjectType<R extends any, P extends object = {}> = (
  mapDependencyToProps: IMapDependencyToProps<R, P>,
) => (
  Component: IReactComponent<P & ReturnType<IMapDependencyToProps<R, P>>>,
) => IReactComponent<P>;

export const Inject = <R extends any, P extends object = {}>(
  mapDependencyToProps: IMapDependencyToProps<R, P>,
) => (
  Component: IReactComponent<P & ReturnType<IMapDependencyToProps<R, P>>>,
): IReactComponent<P> => {
  return class extends React.PureComponent<P> {
    render() {
      return (
        <Context.Consumer>
          {(context) => {
            let values: any = {};
            if (context !== null && typeof mapDependencyToProps === 'function') {
              try {
                values = mapDependencyToProps(context.container, context.STORE_NAMES, this.props);
              } catch (err) {
                console.error('Inject error: ', err);
              }
            }

            return <Component {...this.props} {...values} />;
          }}
        </Context.Consumer>
      );
    }
  };
};
