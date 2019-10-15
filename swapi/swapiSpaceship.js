import { withNavigation } from 'react-navigation';
import React, { Component } from 'react';
import { View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Button, Text } from 'native-base';
import axios from 'axios';
import SpaceshipDetail from '../swapidetails/spaceshipDetail';
import AppFooter from '../src/components/AppFooter';

class App extends Component {

    static navigationOptions = {
        title: 'SPACESHIPS',
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
        headerTitleContainerStyle: {
            left: 0,
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            spaceships: {},
            isLoading: true,
            spaceshipArray: [2, 5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27,
                28, 29, 31, 32, 39, 40, 41, 43, 47, 48, 49],
        };
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/starships/${this.state.spaceshipArray[Math.floor(Math.random() * 14)]}/`)
            .then(response => this.setState({ spaceships: response.data, isLoading: false }))
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { buttonStyle, viewStyle1, textStyle, imgStyle } = styles;
        if (this.state.isLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20 }} />
            );
        }

        return (
            <View>
                <View style={{ backgroundColor: '#FFD900' }}>
                    <ScrollView>
                        <View style={viewStyle1}>
                        <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                                <Button
                                    rounded dark style={buttonStyle} onPress={() => (
                                        axios.get(`https://swapi.co/api/starships/${this.state.spaceshipArray[Math.floor(Math.random() * 14)]}/`)
                                        .then(response => this.setState({ spaceships: response.data, isLoading: false }))
                                        .catch((err) => {
                                            console.log(err);
                                        })
                                    )}
                                >
                                    <Text style={textStyle}>Generate Another One</Text>
                                </Button>
                                <Button
                                    rounded dark style={buttonStyle} onPress={() => (
                                        this.props.navigation.navigate('Home')
                                    )}
                                >
                                    <Text style={textStyle}>Go Back To Home</Text>
                                </Button>
                            </View>
                            <Image source={require('../src/image/spaceshipFix.png')} style={imgStyle} />
                            <SpaceshipDetail spaceship={this.state.spaceships} />
                        </View>
                        <View>
                            <AppFooter planet={this.state.spaceships} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = {
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 2,
        marginRight: 2,
        width: 150,
        textAlign: 'center',
    },
    viewStyle1: {
        marginTop: 20,
        backgroundColor: 'white',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    },
    textStyle: {
        textAlign: 'center',
        color: '#FFFC72'
    },
    imgStyle: {
        alignSelf: 'center',
        marginTop: 10,
        height: 150,
        width: 260,
    }
};

export default withNavigation(App);
