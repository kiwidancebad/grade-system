import { observable, action } from 'mobx';
import { injectable } from 'inversify';
import 'reflect-metadata';

import * as go from 'gojs';

export interface IGraphStore {
  diagram: go.Diagram | null;
  setDiagram: (d: go.Diagram) => void;
}

@injectable()
export default class GraphStore implements IGraphStore {
  @observable diagram: go.Diagram | null = null;
  @action.bound
  setDiagram = (diagram: go.Diagram) => {
    this.diagram = diagram;
  };
  @action.bound
  initDiagram = () => {
    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, {});
    this.setDiagram(diagram);

    return diagram;
  };
}
