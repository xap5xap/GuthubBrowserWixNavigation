import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

// screen related book keeping
registerScreens();

const tabs = [{
    label: 'Feeds',
    screen: 'githubBrowser.FeedsPage',
    icon: require('./assets/img/1497474712_mark-github.png'),
    title: 'Feeds Page',
}, {
    label: 'Search',
    screen: 'githubBrowser.SearchPage',
    icon: require('./assets/img/search.png'),
    title: 'Search page',
}];
let isLogged = false;
if (!isLogged) {
    console.log('not loggeg');
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'githubBrowser.LoginPage', // unique ID registered with Navigation.registerScreen
            title: 'Login', // title of the screen as appears in the nav bar (optional)
        }
    });


} else {
    console.log('loggeg');

    // this will start our app
    Navigation.startTabBasedApp({
        tabs,
        tabsStyle: {
            tabBarBackgroundColor: '#003a66',
            navBarButtonColor: '#ffffff',
            tabBarButtonColor: '#ffffff',
            navBarTextColor: '#ffffff',
            tabBarSelectedButtonColor: '#ff505c',
            navigationBarColor: '#003a66',
            navBarBackgroundColor: '#003a66',
            statusBarColor: '#002b4c',
            tabFontFamily: 'BioRhyme-Bold',
        },
        appStyle: {
            tabBarBackgroundColor: '#003a66',
            navBarButtonColor: '#ffffff',
            tabBarButtonColor: '#ffffff',
            navBarTextColor: '#ffffff',
            tabBarSelectedButtonColor: '#ff505c',
            navigationBarColor: '#003a66',
            navBarBackgroundColor: '#003a66',
            statusBarColor: '#002b4c',
            tabFontFamily: 'BioRhyme-Bold',
        }
    });

}

