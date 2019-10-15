import React, { Component } from 'react';
import { Container, Footer, Text } from 'native-base';

class AppFooter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }

        render() {
            const { ContainerMain, ContainerStyle, textStyle } = styles;
            const { created, url, edited } = this.props.planet;
            return (
                <Container style={ContainerMain}>
                    <Footer style={ContainerStyle}>
                            <Text style={textStyle}>Created: {'\n'} {created}</Text>
                            <Text style={textStyle}>Edited: {'\n'}{edited}</Text>
                            <Text style={textStyle}>URL: {'\n'}{url}</Text>
                    </Footer>
                </Container>
            );
        }
}


const styles = {
    ContainerMain: {
        flex: 1,
        textAlign: 'center',
        margin: 0,
        padding: 0,
        height: 120,
        backgroundColor: 'black',
    },
    ContainerStyle: {
        justifyContent: 'center',
        backgroundColor: 'black',
        flexWrap: 'wrap',
    },
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'yellow'
    },
};

export default AppFooter;

