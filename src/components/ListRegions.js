import React, { PureComponent } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { ListItem, List } from 'react-native-elements'

class ListRegions extends PureComponent {
    render() {
        return (
            <TouchableOpacity onPress={() => alert(this.props.region)}>
                <ListItem
                    // onPress={() => this.props.navigation.navigate('Region', { ...item })}
                    // button  onPress={this.renderOnPress}
                    // roundAvatar={this.props.code}
                    title={this.props.region}
                    // subtitle={this.props.code}
                // avatar={{ uri: item.picture.thumbnail }}
                //   containerStyle={{ borderBottomWidth: 0 }}
                // onPress={() => this.props.navigation.navigate('Region', { ...item })}
                />
            </TouchableOpacity>

        )
    }
}
export default ListRegions;