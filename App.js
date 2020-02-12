import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App from "./src/screens/App";

const navigator = createStackNavigator(
  {
    Home: App
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      header:null
    }
  }
);

export default createAppContainer(navigator);
