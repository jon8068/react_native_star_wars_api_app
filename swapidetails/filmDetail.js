import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class filmDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: [],
            planet: [],
            vehicle: [],
            starship: [],
            speci: [],
        };
    }

    componentDidMount() {
        this.props.film.characters.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.character];
                    temp.push(response.data.name);
                    this.setState({ character: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });

        this.props.film.planets.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.planet];
                    temp.push(response.data.name);
                    this.setState({ planet: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });


        this.props.film.species.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.speci];
                    temp.push(response.data.name);
                    this.setState({ speci: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });


        this.props.film.vehicles.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.vehicle];
                    temp.push(response.data.name);
                    this.setState({ vehicle: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });


        this.props.film.starships.map((resCounter) => {
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
        if (prevProps.film !== this.props.film) {
            this.state.character = [];
            this.state.planet = [];
            this.state.vehicle = [];
            this.state.starship = [];
            this.state.speci = [];

            this.props.film.characters.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.character];
                        temp.push(response.data.name);
                        this.setState({ character: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });

            this.props.film.planets.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.planet];
                        temp.push(response.data.name);
                        this.setState({ planet: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });

            this.props.film.species.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.speci];
                        temp.push(response.data.name);
                        this.setState({ speci: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });

            this.props.film.vehicles.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.vehicle];
                        temp.push(response.data.name);
                        this.setState({ vehicle: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });

            this.props.film.starships.map((resCounter) => {
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
    }

    loadCharacters() {
        console.log(this.state.character);
        const { TextContent } = styles;

        if (this.props.film.characters.length !== this.state.character.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.film.characters.length !== 0) {
            return this.state.character.map(char =>
                <Text style={TextContent}>{char}{'\n'}</Text>
            );
        }
        return 'None';
    }

    characterCounter() {
        const { TextContent } = styles;
        const total = this.props.film.characters.length;
        const counter = this.state.character.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadPlanets() {
        console.log(this.state.planet);
        const { TextContent } = styles;

        if (this.props.film.planets.length !== this.state.planet.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.film.planets.length !== 0) {
            return this.state.planet.map(pla =>
                <Text style={TextContent}>{pla}{'\n'}</Text>
            );
        }
        return 'None';
    }

    planetsCounter() {
        const { TextContent } = styles;
        const total = this.props.film.planets.length;
        const counter = this.state.planet.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadSpecies() {
        console.log(this.state.speci);
        const { TextContent } = styles;

        if (this.props.film.species.length !== this.state.speci.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.film.species.length !== 0) {
            return this.state.speci.map(spec =>
                <Text style={TextContent}>{spec}{'\n'}</Text>
            );
        }
        return 'None';
    }

    speciesCounter() {
        const { TextContent } = styles;
        const total = this.props.film.species.length;
        const counter = this.state.speci.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadStarships() {
        console.log(this.state.starship);
        const { TextContent } = styles;

        if (this.props.film.starships.length !== this.state.starship.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.film.starships.length !== 0) {
            return this.state.starship.map(stars =>
                <Text style={TextContent}>{stars}{'\n'}</Text>
            );
        }
        return 'None';
    }

    starshipCounter() {
        const { TextContent } = styles;
        const total = this.props.film.starships.length;
        const counter = this.state.starship.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadVehicles() {
        console.log(this.state.vehicle);
        const { TextContent } = styles;

        if (this.props.film.vehicles.length !== this.state.vehicle.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.film.vehicles.length !== 0) {
            return this.state.vehicle.map(veh =>
                <Text style={TextContent}>{veh}{'\n'}</Text>
            );
        }
        return 'None';
    }

    vehiclesCounter() {
        const { TextContent } = styles;
        const total = this.props.film.vehicles.length;
        const counter = this.state.vehicle.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    render() {
        const { TextContent, viewStyle1 } = styles;
        const { title, episode_id, opening_crawl, director, producer,
            release_date } = this.props.film;

        return (
            <ScrollView>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Title: {title}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Episode ID: {episode_id}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Opening Crawl: {opening_crawl}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Director: {director}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Producer: {producer}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Release Date: {release_date}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Characters:</Text>
                    <Text style={TextContent}>{this.characterCounter()}</Text>
                    <Text style={TextContent}>{this.loadCharacters()}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Planets:</Text>
                    <Text style={TextContent}>{this.planetsCounter()}</Text>
                    <Text style={TextContent}>{this.loadPlanets()}</Text>
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
export default withNavigation(filmDetail);
