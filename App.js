import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/blogs/IndexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/blogs/ShowScreen';
import CreateScreen from './src/screens/blogs/CreateScreen';
import EditScreen from './src/screens/blogs/EditSceen';

const AppNavigator = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
    },
    Show: {
      screen: ShowScreen,
    },
    Create: {
      screen: CreateScreen,
    },
    Edit: {
      screen: EditScreen,
    },
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
      headerTitleAlign: 'center',
    },
    headerMode: 'screen',
  },
);

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
