import { DrawerNavigator, StackNavigator } from "react-navigation";
import { View } from 'react-native';
import React from 'react';
import { HomeContainer, LogoutContainer, StackoverflowContainer } from '../containers';
import { FontAwesome } from '@expo/vector-icons';

const DrawerButton = ({ navigate }) => (
    <View>
        <FontAwesome
            name="bars"
            size={30}
            color="black"
            onPress={() => navigate('DrawerOpen')}
            style={{ marginLeft: 10 }}
        />
    </View>
);

const ScreenWithTitleiOS = (options) => ({
    screen: StackNavigator(
        {
            Screen: options
        }
    )
})

const Drawer = DrawerNavigator(
	{
        Home: ScreenWithTitleiOS({
            screen: HomeContainer,
            navigationOptions: ({ navigation }) => ({
                title: 'Home',
                headerLeft: (<DrawerButton navigate={navigation.navigate} />)
            })
        }),
        Stackoverflow: ScreenWithTitleiOS({
            screen: StackoverflowContainer,
            navigationOptions: ({ navigation }) => ({
                title: 'StackOverflow',
                headerLeft: (<DrawerButton navigate={navigation.navigate} />)
            })
        }),
        Logout: ScreenWithTitleiOS({
            screen: LogoutContainer,
            navigationOptions: ({ navigation }) => ({
                drawerLabel: 'Log Out',
                title: 'Log Out',
                headerLeft: (<DrawerButton navigate={navigation.navigate} />)
            })
        })
    }
);

export default Drawer;