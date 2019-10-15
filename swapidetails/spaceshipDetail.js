import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class spaceshipDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pilot: [],
            film: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.props.spaceship.pilots.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.pilot];
                    temp.push(response.data.name);
                    this.setState({ pilot: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });

        this.props.spaceship.films.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.film];
                    temp.push(response.data.title);
                    this.setState({ film: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.spaceship !== this.props.spaceship) {
            this.state.pilot = [];
            this.state.film = [];

            this.props.spaceship.pilots.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.pilot];
                        temp.push(response.data.name);
                        this.setState({ pilot: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });

            this.props.spaceship.films.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.film];
                        temp.push(response.data.title);
                        this.setState({ film: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });
        }
    }

    loadPilots() {
        console.log(this.state.pilot);
        const { TextContent } = styles;

        if (this.props.spaceship.pilots.length !== this.state.pilot.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.spaceship.pilots.length !== 0) {
            return this.state.pilot.map(pil =>
                <Text style={TextContent}>{pil}{'\n'}</Text>
            );
        }
        return 'None';
    }

    pilotsCounter() {
        const { TextContent } = styles;
        const total = this.props.spaceship.pilots.length;
        const counter = this.state.pilot.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadFilms() {
        console.log(this.state.film);
        const { TextContent } = styles;

        if (this.props.spaceship.films.length !== this.state.film.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.spaceship.films.length !== 0) {
            return this.state.film.map(fil =>
                <Text style={TextContent}>{fil}{'\n'}</Text>
            );
        }
        return 'None';
    }

    filmsCounter() {
        const { TextContent } = styles;
        const total = this.props.spaceship.films.length;
        const counter = this.state.film.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20 }} />
            );
        }

        const { TextContent, viewStyle1 } = styles;
        const { name, model, manufacturer, cost_in_credits, length,
            max_atmosphering_speed, crew, passengers, cargo_capacity,
            consumables, hyperdrive_rating, MGLT, starship_class } = this.props.spaceship;

        return (
            <ScrollView>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Name: {name}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Model: {model}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Manufacturer: {manufacturer}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Cost in Credits: {cost_in_credits}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Length: {length}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Max Atmosphering Speed: {max_atmosphering_speed}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Crew: {crew}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Passengers: {passengers}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Cargo Capacity: {cargo_capacity}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Consumables: {consumables}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Hyperdrive Rating: {hyperdrive_rating}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>MGLT: {MGLT}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Starship Class: {starship_class}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Pilots:</Text>
                    <Text style={TextContent}>{this.pilotsCounter()}</Text>
                    <Text style={TextContent}>{this.loadPilots()}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Films:</Text>
                    <Text style={TextContent}>{this.filmsCounter()}</Text>
                    <Text style={TextContent}>{this.loadFilms()}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    TextContent: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    viewStyle1: {
        borderWidth: 1,
        margin: 3,
        padding: 2,
    }
};

export default withNavigation(spaceshipDetail);
