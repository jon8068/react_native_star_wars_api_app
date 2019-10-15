import { withNavigation } from 'react-navigation';
import React, { Component } from 'react';
import { View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Button, Text } from 'native-base';
import axios from 'axios';
import FilmDetail from '../swapidetails/filmDetail';
import AppFooter from '../src/components/AppFooter';

class App extends Component {

    static navigationOptions = {
        title: 'FILMS',
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
            films: {},
            isLoading: true,
        };
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/films/${Math.floor(Math.random() * 7)}/`)
            .then(response => this.setState({ films: response.data, isLoading: false }))
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
                <ScrollView>
                    <View style={{ backgroundColor: '#FFD900' }}>
                    <View
                        style={viewStyle1}
                    >
                        
                        <View style={{ flexDirection: 'row', alignContent: 'space-around' }}>
                            <Button
                                rounded dark style={buttonStyle} onPress={() => (
                                    axios.get(`https://swapi.co/api/films/${Math.floor(Math.random() * 7)}/`)
                                    .then(response => this.setState({ films: response.data, isLoading: false }))
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
                        <Image source={require('../src/image/moviesstarwars.jpg')} style={imgStyle} />
                        <FilmDetail film={this.state.films} />

                    </View>
                    <View>
                        <AppFooter planet={this.state.films} />
                    </View>
                    </View>
                </ScrollView>
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
        height: 250,
        width: 250,
    }
};

export default withNavigation(App);
