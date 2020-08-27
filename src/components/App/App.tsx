import React from 'react';
import styled from 'styled-components';

import { Provider } from 'containers/provider';
import { ThemeProvider } from 'styled-components';

import theme from '../../themes';

const Wrapper = styled.div`
  font-family: 'Open Sans', Arial, sans-serif;
  flex: 1;
`;

const App = () => {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Wrapper></Wrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
