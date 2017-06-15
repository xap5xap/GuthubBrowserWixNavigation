import React from 'react';
import moment from 'moment'
import {
    StyleSheet, View, Text, ScrollView, ListView, ActivityIndicator,
    TouchableHighlight,
    Image
} from 'react-native';
import AuthService from '../../services/AuthService';

class Details extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.pushEvent.payload),
            pushEvent: props.pushEvent
        };

    }

    renderRow(rowData) {
        console.log('renderRow rowData',rowData);
        return (
            <View style={styles.commits}>
            </View>
        );
    }

    render() {

        console.log('this.props', this.state.pushEvent);
        return (
            <ScrollView >
                <View style={styles.container}>
                    <Image style={styles.image} source={{ uri: this.state.pushEvent.actor.avatar_url }}></Image>
                    <Text style={styles.created}>{moment(this.state.pushEvent.created_at).fromNow()}</Text>
                    <Text >{this.state.pushEvent.actor.login}</Text>
                    <Text >{this.state.pushEvent.payload.ref}</Text>
                    <Text >{this.state.pushEvent.repo.name}</Text>


                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderColor: '#D7D7D7',
        borderBottomWidth: 1
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 60
    },
    created: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 20
    },
    commits: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default Details;
