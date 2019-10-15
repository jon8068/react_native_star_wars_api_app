import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class planetDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resident: [],
            film: [],
            isLoading: false,
            flagPrev: false
        };
    }

    componentDidMount() {
        this.props.planet.residents.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.resident];
                    temp.push(response.data.name);
                    this.setState({ resident: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });

        this.props.planet.films.map((resCounter) => {
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
        if (prevProps.planet !== this.props.planet) {
            this.state.resident = [];
            this.state.film = [];

            this.props.planet.residents.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.resident];
                        temp.push(response.data.name);
                        this.setState({ resident: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });

            this.props.planet.films.map((resCounter) => {
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

    loadResidents() {
        const { TextContent } = styles;

        if (this.props.planet.residents.length !== this.state.resident.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.planet.residents.length !== 0) {
            return (
                this.state.resident.map(res =>
                    <Text style={TextContent}>{res}{'\n'}</Text>
                )
            );
        }
        return 'None';
    }

    residentsCounter() {
        const { TextContent } = styles;
        const total = this.props.planet.residents.length;
        let counter = this.state.resident.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadFilms() {
        const { TextContent } = styles;

        if (this.props.planet.films.length !== this.state.film.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.planet.films.length !== 0) {
            return this.state.film.map(fil =>
                <Text style={TextContent}>{fil}{'\n'}</Text>
            );
        }
        return 'None';
    }

    filmsCounter() {
        const { TextContent } = styles;
        const total = this.props.planet.films.length;
        let counter = this.state.film.length;
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

        const { name, climate, population, rotation_period, orbital_period, diameter,
            gravity, terrain, surface_water } = this.props.planet;

        const { TextContent, viewStyle1 } = styles;

        return (
            <ScrollView>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Name: {name}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Climate: {climate} </Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Population: {population}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Rotation Period: {rotation_period}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Orbital Period: {orbital_period}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Diameter: {diameter}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Gravity: {gravity}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Terrain: {terrain}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Surface Water: {surface_water}</Text>
                </View>

                <View style={viewStyle1}>
                    <Text style={TextContent}>Residents:</Text>
                    <Text style={TextContent}>{this.residentsCounter()}</Text>
                    <Text style={TextContent}>{this.loadResidents()}</Text>
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


export default withNavigation(planetDetail);
