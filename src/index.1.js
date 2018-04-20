import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
// import { ApolloProvider } from 'react-apollo'
// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import Country from './screens/country'
import Region from './screens/region'

// const Drawer = DrawerNavigator(
//     {
//         D1: {
//             screen: D1,
//         },
//         D2: {
//             screen: D2,
//         },
//     },
//     {
//         initialRouteName: "D1",
//         contentOptions: {
//             activeTintColor: "#e91e63"
//         },
//         contentComponent: props => <SideBar {...props} />
//     }
// );

const AppNavigator = StackNavigator(
    {
        // Drawer: { screen: Drawer },
        Country: { screen: Country },
        Region: { screen: Region },
    },
    {
        initialRouteName: "Country",
        headerMode: "none"
    }
);
export default AppNavigator;
// const client = new ApolloClient({
//     link: new HttpLink({ uri: `wss://subscriptions.graph.cool/v1/cjfteiivs1xab0103rz0h41pa` }),
//     cache: new InMemoryCache(),
// });

// export default () =>
//     <ApolloProvider client={client}>
//         <AppNavigator />
//     </ApolloProvider>

// const Navs = StackNavigator({
//    Home: {screen: Home },
//    Settings: {screen: Settings },
// //    TabNavScreen: { screen: TabNavScreen },
// //    DrawerNav: {screen: DrawerNav},
// //    Users: {screen: Users,},
// //    Bureaus: {screen: Bureaus,},
// //    Currency: {screen: Currency},
// //    CurrencyList: {screen: CurrencyList}
// //    // LaunchScreen: { screen: LaunchScreen }
// }, {
//    headerMode: 'none',
//    initialRouteName: 'Home',
// })

// export default Navs;