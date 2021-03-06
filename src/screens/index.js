import { Navigation } from 'react-native-navigation';

import FeedsPage from './FeedsPage';
import SearchPage from './SearchPage';
import LoginPage from './LoginPage';

import Details from './Feeds/Details';
import SearchResults from './Search/SearchResults';


export default function () {
    Navigation.registerComponent('githubBrowser.FeedsPage', () => FeedsPage);
    Navigation.registerComponent('githubBrowser.SearchPage', () => SearchPage);
    Navigation.registerComponent('githubBrowser.LoginPage', () => LoginPage);

    Navigation.registerComponent('githubBrowser.FeedsPage.Details', () => Details);

    Navigation.registerComponent('githubBrowser.SearchPage.Results', () => SearchResults);
    
}
