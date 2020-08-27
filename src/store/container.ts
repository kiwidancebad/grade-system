import { Container } from 'inversify';
import GraphStore, { IGraphStore } from './graph/graphStore';

import { STORE_NAMES } from './names';

export const container = new Container();
export { STORE_NAMES };

container.bind<IGraphStore>(STORE_NAMES.GRAPH_STORE).to(GraphStore).inSingletonScope();
