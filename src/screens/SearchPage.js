import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight, TextInput } from 'react-native';

class SearchPage extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <TextInput style={styles.input} placeholder="Search Query" onChangeText={(text) => this.setState({ searchQuery: text })} />
                <TouchableHighlight style={styles.button} onPress={this.onSearchPressed.bind(this)}>
                    <Text style={styles.buttonText}>
                        Search
                </Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }

    onSearchPressed() {
        console.log('onSearchPressed', this.state.searchQuery);
         this.props.navigator.push({
            screen: 'githubBrowser.SearchPage.Results',
            title: 'Search results',
            passProps: {
                searchQuery: this.state.searchQuery,
            }
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 40,
        padding: 10
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        width: '100%'
    },
    row: {
        height: 48,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },
    text: {
        fontSize: 16,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
});

export default SearchPage;
