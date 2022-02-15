import 'react-native-gesture-handler';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

import React  from 'react';
import { Provider } from 'react-redux'
import { store } from './src/store/store';
import { StackLogin } from './src/navigator/StackLogin';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackLogin />
      </NavigationContainer>
    </Provider>
    );
};

export default App;
