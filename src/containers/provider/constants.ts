import React from 'react';
import { IContextValue } from './consumer';

export const Context = React.createContext<null | IContextValue>(null);
