import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class peopleDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            speci: [],
            film: [],
            vehicle: [],
            starship: [],
            isLoading: false,
            home: '',
        };
    }

    componentDidMount() {
        axios.get(this.props.person.homeworld)
            .then(response => this.setState({ home: response.data.name }))
            .catch((err) => {
                console.log(err);
            });

        this.props.person.films.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.film];
                    temp.push(response.data.title);
                    this.setState({ film: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });

        this.props.person.species.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.speci];
                    temp.push(response.data.name);
                    this.setState({ speci: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });


        this.props.person.vehicles.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.vehicle];
                    temp.push(response.data.name);
                    this.setState({ vehicle: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });


        this.props.person.starships.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.starship];
                    temp.push(response.data.name);
                    this.setState({ starship: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.person !== this.props.person) {
            this.state.vehicle = [];
            this.state.starship = [];
            this.state.speci = [];
            this.state.film = [];

            this.props.person.films.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.film];
                        temp.push(response.data.title);
                        this.setState({ film: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });


            this.props.person.species.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.speci];
                        temp.push(response.data.name);
                        this.setState({ speci: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });


            this.props.person.vehicles.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.vehicle];
                        temp.push(response.data.name);
                        this.setState({ vehicle: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });


            this.props.person.starships.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.starship];
                        temp.push(response.data.name);
                        this.setState({ starship: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });

            axios.get(this.props.person.homeworld)
                .then(response => this.setState({ home: response.data.name }))
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    loadFilms() {
        console.log(this.state.film);
        const { TextContent } = styles;

        if (this.props.person.films.length !== this.state.film.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.person.films.length !== 0) {
            return this.state.film.map(fil =>
                <Text style={TextContent}>{fil}{'\n'}</Text>
            );
        }
        return 'None';
    }

    filmsCounter() {
        const { TextContent } = styles;
        const total = this.props.person.films.length;
        const counter = this.state.film.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadSpecies() {
        console.log(this.state.speci);
        const { TextContent } = styles;

        if (this.props.person.species.length !== this.state.speci.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.person.species.length !== 0) {
            return this.state.speci.map(spec =>
                <Text style={TextContent}>{spec}{'\n'}</Text>
            );
        }
        return 'None';
    }

    speciesCounter() {
        const { TextContent } = styles;
        const total = this.props.person.species.length;
        const counter = this.state.speci.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadVehicles() {
        console.log(this.state.vehicle);
        const { TextContent } = styles;

        if (this.props.person.vehicles.length !== this.state.vehicle.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.person.vehicles.length !== 0) {
            return this.state.vehicle.map(veh =>
                <Text style={TextContent}>{veh}{'\n'}</Text>
            );
        }
        return 'None';
    }

    vehiclesCounter() {
        const { TextContent } = styles;
        const total = this.props.person.vehicles.length;
        const counter = this.state.vehicle.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadStarships() {
        console.log(this.state.starship);
        const { TextContent } = styles;

        if (this.props.person.starships.length !== this.state.starship.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.person.starships.length !== 0) {
            return this.state.starship.map(star =>
                <Text style={TextContent}>{star}{'\n'}</Text>
            );
        }
        return 'None';
    }

    starshipCounter() {
        const { TextContent } = styles;
        const total = this.props.person.starships.length;
        const counter = this.state.starship.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    render() {
        const { TextContent, viewStyle1 } = styles;
        const { name, height, mass, hair_color, skin_color, eye_color,
            birth_year, gender } = this.props.person;
        if (this.state.isLoading) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20 }} />
            );
        }

        return (
            <ScrollView>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Name: {name}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Height: {height}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Mass: {mass}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Hair Color: {hair_color}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Skin Color: {skin_color}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Eye Color: {eye_color}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Birth Year: {birth_year}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Gender: {gender}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Homeworld: {this.state.home}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Films:</Text>
                    <Text style={TextContent}>{this.filmsCounter()}</Text>
                    <Text style={TextContent}>{this.loadFilms()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Species:</Text>
                    <Text style={TextContent}>{this.speciesCounter()}</Text>
                    <Text style={TextContent}>{this.loadSpecies()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Vehicles:</Text>
                    <Text style={TextContent}>{this.vehiclesCounter()}</Text>
                    <Text style={TextContent}>{this.loadVehicles()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Starships:</Text>
                    <Text style={TextContent}>{this.starshipCounter()}</Text>
                    <Text style={TextContent}>{this.loadStarships()}</Text>
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


export default withNavigation(peopleDetail);
