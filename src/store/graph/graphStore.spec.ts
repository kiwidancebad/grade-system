import GraphStore from './graphStore';
import * as go from 'gojs';

describe('GraphStore', () => {
  let Store = new GraphStore();

  afterAll(() => {
    Store = new GraphStore();
  });

  describe('action', () => {
    describe('setDiagram', () => {
      it('set diagram', () => {
        const diagram = go.GraphObject.make(go.Diagram);

        Store.setDiagram(diagram);
        expect(Store.diagram).toEqual(diagram);
      });
    });

    describe('initDiagram', () => {
      it('initialize diagram', () => {
        Store.initDiagram();
        expect(Store.diagram).toBeInstanceOf(go.Diagram);
      });

      it('returns the diagram', () => {
        expect(typeof Store.initDiagram() === 'object');
      });
    });
  });
});
