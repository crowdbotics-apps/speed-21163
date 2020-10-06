import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed8129449Navigator from '../features/Feed8129449/navigator';
import Feed1129448Navigator from '../features/Feed1129448/navigator';
import Feed2129447Navigator from '../features/Feed2129447/navigator';
import Feed3129446Navigator from '../features/Feed3129446/navigator';
import Feed5129445Navigator from '../features/Feed5129445/navigator';
import Feed6129444Navigator from '../features/Feed6129444/navigator';
import BlankScreen1129443Navigator from '../features/BlankScreen1129443/navigator';
import BlankScreen0129442Navigator from '../features/BlankScreen0129442/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed8129449: { screen: Feed8129449Navigator },
Feed1129448: { screen: Feed1129448Navigator },
Feed2129447: { screen: Feed2129447Navigator },
Feed3129446: { screen: Feed3129446Navigator },
Feed5129445: { screen: Feed5129445Navigator },
Feed6129444: { screen: Feed6129444Navigator },
BlankScreen1129443: { screen: BlankScreen1129443Navigator },
BlankScreen0129442: { screen: BlankScreen0129442Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
