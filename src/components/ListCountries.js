import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ListItem, List } from 'react-native-elements'

class ListCountries extends PureComponent {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onpress}>
                <ListItem
                    // onPress={() => this.props.navigation.navigate('Region', { ...item })}
                    // button  onPress={this.renderOnPress}
                    // roundAvatar
                    title={this.props.name}
                    subtitle={this.props.code}
                // avatar={{ uri: this.props.code }}
                  containerStyle={{ borderBottomWidth: 0 }}
                // onPress={() => this.props.navigation.navigate('Region', { ...item })}
                />
            </TouchableOpacity>

        )
    }
}
export default ListCountries;