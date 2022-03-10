import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { store } from '@store/index';

import '@/styles';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <StoreProvider store={store}>
            <Component {...pageProps} />
        </StoreProvider>
    );
};

export default App;
