import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight } from 'react-native';

class SearchPage extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
              <Text>SearchPage</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});

export default SearchPage;
