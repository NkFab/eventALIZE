import React from "react";
import { StackNavigator } from "react-navigation";
import Country from './screens/country'
import Region from './screens/region'
import ListCountries from './components/ListCountries'
import ListRegions from './components/ListRegions'
const AppNavigator = StackNavigator(
    {
        // Drawer: { screen: Drawer },
        Country: { screen: Country },
        Region: { screen: Region },
        ListCountries: { screen: ListCountries },
        ListRegions: { screen: ListRegions },
    },
    {
        initialRouteName: "Country",
        headerMode: "none"
    }
);
export default AppNavigator;