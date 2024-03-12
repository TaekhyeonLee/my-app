import React from 'react';
import { ConfigProvider } from 'antd';


const App = ({ Component, pageProps }) => (
  <ConfigProvider 
  theme={{
    hashed: false,
    token: {
      fontFamily: 'Spoqa Han Sans',
    },
  }}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;