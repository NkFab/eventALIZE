import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableNativeFeedback, StatusBar } from "react-native";
import { List, ListItem, SearchBar, Header, Icon } from 'react-native-elements'
import ListRegions from '../components/ListRegions'
class Region extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { code, name } = this.props.navigation.state.params;
        // console.log(this.props.navigation.state.params.name);
        const country_code = { code }.code;
        // console.log({code}.code);
        const url = `http://battuta.medunes.net/api/region/${country_code}/all/?key=42d63283f6e16c7f49e3ec5c72a10595`;
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    data: res,
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false, refreshing: false });
            });
    };
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    }
    _renderItem = ({ item }) => (
        <ListRegions
            region={item.region}
            // code={item.code}
        />
    );
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="white"
                    barStyle="light-content"
                />
                <Header
                    backgroundColor='white'
                    leftComponent={<Icon
                        name='arrow-back'
                        onPress={() => this.props.navigation.goBack()}
                        color='#e74c3c'
                    />}
                    centerComponent={{ text: 'Region', style: { color: 'black', fontWeight: 'bold' } }}
                    rightComponent={<Icon
                        name='more-vert'
                        // type='evilicon'
                        color='#e74c3c'
                    />}
                />
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.region}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        );
    }
}

export default Region;
// api key 42d63283f6e16c7f49e3ec5c72a10595