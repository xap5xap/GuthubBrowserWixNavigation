import { Navigation } from 'react-native-navigation';

import FeedsPage from './FeedsPage';
import SearchPage from './SearchPage';
import LoginPage from './LoginPage';


export default function () {
    Navigation.registerComponent('githubBrowser.FeedsPage', () => FeedsPage);
    Navigation.registerComponent('githubBrowser.SearchPage', () => SearchPage);
    Navigation.registerComponent('githubBrowser.LoginPage', () => LoginPage);
    
}
