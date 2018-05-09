import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableNativeFeedback, StatusBar, ListView, ScrollView } from "react-native";
import { List, ListItem, SearchBar, Header, Icon } from 'react-native-elements'
import ListCountries from '../components/ListCountries'

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      isSubmitting: false,
    };
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.item !== nextState.item) {
  //     return true;
  //   }
  //   return false;
  // }
  // shouldComponentUpdate() {
  //   return false;
  // }

  componentDidMount() {
    this.makeRemoteRequest();
  }
  navigateRegion = async (item) =>{
    //console.log(item);
    if(this.state.isSubmitting){
      return
    }
    this.setState({
      isSubmitting: true
    })
    await this.props.navigation.navigate('Region', { ...item })
    this.setState({
      isSubmitting: false
    })
  }
  makeRemoteRequest = () => {
    // const { API_KEY } = this.state;
    const url = `http://battuta.medunes.net/api/country/all/?key=42d63283f6e16c7f49e3ec5c72a10595`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        // console.log(res);
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
  };
  renderHeader = () => {
    return <SearchBar
      placeholder="Type Here..."
      round
      containerStyle={{ backgroundColor: '#ff7f67', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
      inputStyle={{ backgroundColor: '#e74c3c', color: 'white' }}
      placeholderTextColor='#ae0c13'
      icon={{ color: '#ae0c13' }}
    />;
  };
  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" color='#ae0c13' />
      </View>
    );
  };
  handleRefresh = () => {
    this.setState({
      refreshing: true,
    }, () => {
      this.makeRemoteRequest();
    })
  };
  _renderItem = ({ item }) => (
    <ListCountries
      name={item.name}
      code={item.code}
      onpress={() => this.navigateRegion(item)}
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
            name='menu'
            // type='entypo'
            color='#e74c3c'
          />}
          centerComponent={{ text: 'Countries', style: { color: 'black', fontWeight: 'bold' } }}
          rightComponent={<Icon
            name='more-vert'
            // type='evilicon'
            color='#e74c3c'
          />}
        />
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
              data={this.state.data}
              renderItem={this._renderItem}
              onEndReachedThreshold={50}
              initialNumToRender={20}
              keyExtractor={item => item.name}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
              onEndReached={this.handleMore}
              // removeClippedSubViews={false}
            />
          </List>
      </View>
    );
  }
}

export default Country;
// api key 42d63283f6e16c7f49e3ec5c72a10595