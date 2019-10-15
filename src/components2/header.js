import React from 'react';
import { Text, View } from 'react-native';

// ******************************************************************************************** //
// Passing props is a major part of the React library
// It's one of the primary means of making components more reusable
// By passing a props, we allow a component (like the header) to be reconfigured on the fly
//  with some new or different form of data
// ******************************************************************************************** //

// Parse a "props" variable from the index file
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            {/* Make the "Albums" text a variable so that it can be dynamically changed on the fly */}
            {/* Whenever we make reference to a javascript variable inside of JSX, we use curly braces */}
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#96ceb4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#ffeead',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25
    }
};

export { Header };

