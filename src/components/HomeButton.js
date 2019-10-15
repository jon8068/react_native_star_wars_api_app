import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';


class HomeButton extends Component {
    render() {
        const { buttonStyle, containerStyle } = styles;
        return (
                <View style={containerStyle}>
                    <Button
                        rounded dark style={buttonStyle} onPress={() => (
                            this.props.navigation.push('Planets')
                        )}
                    >
                        <Text>Planets</Text>
                    </Button>
                    <Button
                        rounded dark style={buttonStyle} onPress={() => {
                            this.props.navigation.push('Spaceships');
                        }}
                    >
                        <Text>Spaceships</Text>
                    </Button>
                    <Button
                        rounded dark style={buttonStyle} onPress={() => {
                            this.props.navigation.push('Vehicles');
                        }}
                    >
                        <Text>Vehicles</Text>
                    </Button>
                    <Button rounded dark style={buttonStyle} onPress={() => {
                            this.props.navigation.push('People');
                        }}>
                        <Text>People</Text>
                    </Button>
                    <Button rounded dark style={buttonStyle} onPress={() => {
                            this.props.navigation.push('Films');
                        }}>
                        <Text>Films</Text>
                    </Button>
                    <Button rounded dark style={buttonStyle} onPress={() => {
                            this.props.navigation.push('Species');
                        }}>
                        <Text>Species</Text>
                    </Button>
                </View>
        );
    }
}

const styles = {
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 150,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    containerStyle: {
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0)',
        justifyContent: 'space-around',
        height: 500
    }
};

export default withNavigation(HomeButton);

