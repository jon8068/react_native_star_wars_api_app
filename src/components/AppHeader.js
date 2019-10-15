import React from 'react';
import { Container, Header, Body, Text } from 'native-base';

const AppHeader = (props) => {
    const { ContainerStyle, textStyle, ContainerMain, bodyStyle } = styles;
    return (
        <Container style={ContainerMain}>
            <Header style={ContainerStyle}>
                <Body style={bodyStyle}>
                    <Text style={textStyle}>{props.headerText}</Text>
                </Body>
            </Header>
        </Container>
    );
};

const styles = {
    ContainerMain: {
        flex: 1,
        textAlign: 'center',
        margin: 0,
        padding: 0,
    },
    ContainerStyle: {
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'yellow'
    },
    bodyStyle: {
        alignItems: 'center',
    }
};

export default AppHeader;

