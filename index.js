/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/nav/RootStack';
import {name as appName} from './app.json';
import './src/config/AssetsConfig';
import './src/config/FoundationConfig';

AppRegistry.registerComponent(appName, () => App);
