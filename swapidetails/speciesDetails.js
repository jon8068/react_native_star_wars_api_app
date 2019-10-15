import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import axios from 'axios';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class speciesDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: [],
            film: [],
            isLoading: false,
            home: '',
        };
    }

    componentDidMount() {
        axios.get(this.props.speci.homeworld)
            .then(response => this.setState({ home: response.data.name }))
            .catch((err) => {
                console.log(err);
            });

        this.props.speci.films.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.film];
                    temp.push(response.data.title);
                    this.setState({ film: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });

        this.props.speci.people.map((resCounter) => {
            axios.get(resCounter)
                .then((response) => {
                    const temp = [...this.state.person];
                    temp.push(response.data.name);
                    this.setState({ person: temp });
                }).catch((err) => {
                    console.log(err);
                });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.speci !== this.props.speci) {
            this.state.film = [];
            this.state.person = [];
            this.state.home = '';

            axios.get(this.props.speci.homeworld)
                .then(response => this.setState({ home: response.data.name }))
                .catch((err) => {
                    console.log(err);
                });

            this.props.speci.films.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.film];
                        temp.push(response.data.title);
                        this.setState({ film: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });

            this.props.speci.people.map((resCounter) => {
                axios.get(resCounter)
                    .then((response) => {
                        const temp = [...this.state.person];
                        temp.push(response.data.name);
                        this.setState({ person: temp });
                    }).catch((err) => {
                        console.log(err);
                    });
            });
        }
    }

    loadPeople() {
        console.log(this.state.person);
        const { TextContent } = styles;

        if (this.props.speci.people.length !== this.state.person.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.speci.people.length !== 0) {
            return this.state.person.map(per =>
                <Text style={TextContent}>{per}{'\n'}</Text>
            );
        }
        return 'None';
    }

    peopleCounter() {
        const { TextContent } = styles;
        const total = this.props.speci.people.length;
        const counter = this.state.person.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    loadFilms() {
        console.log(this.state.film);
        const { TextContent } = styles;

        if (this.props.speci.films.length !== this.state.film.length) {
            return (
                <ActivityIndicator size='large' style={{ marginTop: 20, height: 30, width: 30 }} />
            );
        }

        if (this.props.speci.films.length !== 0) {
            return this.state.film.map(fil =>
                <Text style={TextContent}>{fil}{'\n'}</Text>
            );
        }
        return 'None';
    }

    filmsCounter() {
        const { TextContent } = styles;
        const total = this.props.speci.films.length;
        const counter = this.state.film.length;
        return (
            <Text style={TextContent}>{counter} out of {total}</Text>
        );
    }

    render() {
        const { TextContent, viewStyle1 } = styles;
        const { name, classification, designation, average_height,
            skin_colors, hair_colors, eye_colors, average_lifespan,
            language } = this.props.speci;
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
                    <Text style={TextContent}>Classification: {classification}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Designation: {designation}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Average Height: {average_height}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Skin Colors: {skin_colors}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Hair Colors: {hair_colors}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Eye Colors: {eye_colors}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Average Lifespan: {average_lifespan}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Homeworld: {this.state.home}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>Language: {language}</Text>
                </View>
                <View style={viewStyle1}>
                    <Text style={TextContent}>People:</Text>
                    <Text style={TextContent}>{this.peopleCounter()}</Text>
                    <Text style={TextContent}>{this.loadPeople()}</Text>
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
export default withNavigation(speciesDetails);
