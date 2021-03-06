import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

const App = () => {
   return (
      <>
         <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="#fff"
            translucent={true}
         />
         <Routes />
      </>
   );
};
export default App;
