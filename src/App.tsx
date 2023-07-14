/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { persistor, store } from './store';
import RootNavigator from './navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './style';

function App(): JSX.Element {

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
