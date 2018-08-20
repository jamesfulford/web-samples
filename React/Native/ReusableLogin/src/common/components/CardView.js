import React from "react";
import {
    View, Text
} from "react-native";

export default CardView = (props) => {
    return (
        //Style will be merged from default containerStyle
        //and props.style. props.style attributes will override
        //values if parameters are same.
        <View style = {
            {
                ...styles.containerStyle,
                ...props.style
            }
        } >{
    props.children
}</View>
    );
};

const styles = {
    containerStyle: {
        borderRadius: 4,
        margin: 5,
        padding: 5,
        elevation: 5,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        backgroundColor: 'white'
    }
};
