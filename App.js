import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from "./src/screens/Index";

const navigator = createStackNavigator(
  {
    Home: Index
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Index",
      header:null
    }
  }
);

export default createAppContainer(navigator);
