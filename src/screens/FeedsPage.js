import React from 'react';
import {
    StyleSheet, View, Text, ScrollView, ListView, ActivityIndicator,
    TouchableHighlight,
    Image
} from 'react-native';
import AuthService from '../services/AuthService';

class FeedsPage extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            // dataSource: ds.cloneWithRows([{ actor: { login: '' } }]),
            dataSource: ds,
            showProgress: true
        };
    }

    componentDidMount() {
        this.fetchFeed();
    }

    fetchFeed() {
        // let authService = new AuthService();
        AuthService.getAuthInfo().then((authInfo) => {
            var url = 'https://api.github.com/users/'
                + authInfo.user.login
                + '/received_events';

            fetch(url, {
                headers: authInfo.headers
            })
                .then(response => response.json())
                .then(responseData => {
                    var feedItems = responseData.filter(ev => {
                        return ev.type !== 'PushEvent'
                    });
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(feedItems),
                        showProgress: false
                    });
                });
        });
    }

    pressRow(rowData) {
        console.log(rowData);
    }

    renderRow(rowdata) {
        return (
            <TouchableHighlight underlayColor='#ddd'
                onPress={() => this.pressRow(rowdata)}>
                <View style={styles.row}>
                    <Image source={{ uri: rowdata.actor.avatar_url }} style={{
                        height: 36,
                        width: 36,
                        borderRadius: 18
                    }}></Image>
                    <View style={{
                        paddingLeft: 20
                    }}>
                        <Text >{rowdata.created_at}</Text>
                        <Text >{rowdata.actor.login}</Text>
                        <Text >{rowdata.repo.name}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {

        if (this.state.showProgress) {
            return (
                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator size="large" animating={true}></ActivityIndicator>
                </View>
            );
        }
        return (
            <ScrollView style={styles.container}>
                <Text>Results</Text>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}></ListView>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderColor: '#D7D7D7',
        borderBottomWidth: 1
    }
});

export default FeedsPage;
