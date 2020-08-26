import { observable, action } from 'mobx';
import { injectable } from 'inversify';

import * as go from 'gojs';

@injectable()
export default class GraphStore {
  @observable diagram: go.Diagram | null = null;
  @action.bound
  setDiagram = (diagram: go.Diagram) => {
    this.diagram = diagram;
  };
}
