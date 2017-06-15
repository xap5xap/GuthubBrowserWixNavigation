import React from 'react';
import { StyleSheet, View, Text, ScrollView, ListView, ActivityIndicator, Image, TouchableHighlight, TextInput } from 'react-native';
import SearchService from '../../services/SearchService';

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds,
            showProgress: true,
            searchQuery: props.searchQuery
        };
    }

    componentDidMount() {
        this.doSearch();
    }

    doSearch() {
        console.log('doing seracg');
        SearchService.searchRepositories(encodeURIComponent(this.state.searchQuery))
            .then(responseData => {
                console.log('responseData', responseData);
                this.setState({
                    repositories: responseData.repositories,
                    dataSource: this.state.dataSource.cloneWithRows(responseData.items)
                });
            })
            .finally(() => {
                this.setState({
                    showProgress: false
                });
            });

    }

    renderRow(rowData) {
        return (
            <View style={styles.viewRow}>
                <Text>{rowData.full_name}</Text>
                <View style={styles.viewRow2}>
                    <View style={styles.repoCell}>
                        <Image source={require('../../assets/img/star.png')} style={styles.repoCellIcon}></Image>
                        <Text style={styles.repoCellLabel}> {rowData.stargazers_count}</Text>
                    </View>
                    <View style={styles.repoCell}>
                        <Image source={require('../../assets/img/fork.png')} style={styles.repoCellIcon}></Image>
                        <Text style={styles.repoCellLabel}> {rowData.forks}</Text>
                    </View>
                    <View style={styles.repoCell}>
                        <Image source={require('../../assets/img/issues2.png')} style={styles.repoCellIcon}></Image>
                        <Text style={styles.repoCellLabel}> {rowData.open_issues}</Text>
                    </View>
                </View>
            </View>
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
                <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}></ListView>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 40,
        padding: 10
    },
    repoCell: {
        width: 50,
        alignItems: 'center'
    },
    repoCellIcon: {
        width: 20,
        height: 20
    },
    repoCellLabel: {
        textAlign: 'center'
    },
    viewRow2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20
    },
    viewRow: {
        padding: 20,
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
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
    textRow: {
        fontSize: 20,
        fontWeight: '600'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
});

export default SearchResults;
