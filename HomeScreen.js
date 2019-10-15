/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';
import { Container } from 'native-base';
import HomeButton from './src/components/HomeButton';



class HomeScreen extends Component {

    static navigationOptions = {
        title: 'STAR WARS',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'yellow',
            marginRight: 'auto',
            marginLeft: 'auto'
        },
    };
    render() {
        return (
            <ImageBackground
                source={require('./src/image/starwarswallpaper.jpg')}
                style={{ flex: 1, height: '100%', width: '100%' }}
            >

                <Container style={{ backgroundColor: 'rgba(52, 52, 52, 0)' }}>
                    <View>
                        <StatusBar backgroundColor="black" barStyle="light-content" />
                        <HomeButton />
                    </View>
                </Container>
            </ImageBackground>
        );
    }
}


export default HomeScreen;
