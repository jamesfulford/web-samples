import React from 'react';
import {
    Image
} from "react-native";
export default class PicturePreview extends React.Component {
    static _navigationOptions = ({
        navigation
    }) => ({
        title: navigation.state.params.title
    });
    render() {
        const {
            url
        } = this.props.navigation.state.params;

        return (
            <Image
                style = {{
                    flex: 1
                }}
                source = {{
                    uri: url
                }}
            />
        );
    }
}
