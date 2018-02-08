import React from 'react';
import { View,} from 'react-native';
import { Title } from '../../components';
import Styles from './styles';

const Home = ({ user }) => {
        return (
            <View style={Styles.container}>
                <View style={Styles.titleContainer}>
                    <Title text={`Hello, ${user.username}!`}/>
                </View>
                <View style={Styles.paddingContainer}></View>
            </View>
        );
}

export default Home;