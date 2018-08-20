import React from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import axios from "axios";
import CardView from "../common/CardView";
export default class PictureList extends React.Component {
    state = {
        loading: true,
        error: null,
        posts: null
    };
    componentDidMount() {
        axios.get('https://www.reddit.com/r/pics.json')
            .then(response => {
                // console.log(response);
                this.setState({
                    posts: response.data.data.children,
                    loading: false
                })
            }).catch(error => {
                this.setState({
                    error: error.message,
                    loading: false
                })
            })
    }
    render() {
        return (
            <View
                style = {{
                    flex: 1,
                    justifyContent: 'center'
                }}
            >{
                    this.state.posts &&
                    <FlatList
                        data = {
                            this.state.posts
                        }
                        renderItem = {
                            this.renderItem.bind(this)
                        }
                        keyExtractor = {
                            (item) => (item.data.id + '')
                        }
                    />
                }{
                    this.state.loading &&
                    <ActivityIndicator
                        size = "large"
                        color = "#f4511e"
                    />
                }
            </View>
        );
    }
    navigateToPicture(title, url) {
        this.props.navigation.navigate('PicturePreview', {
            'title': title,
            'url': url
        })
    }
    renderItem(item) {
        //Destructuring values from item
        //Read more 'ES6 destructuring'
        const data = item.item.data;
        const title = data.title;

        const url = data.url;
        return (
            <TouchableHighlight onPress = {
                () => this.navigateToPicture(title, url)
            } ><CardView><Image
                style = {{
                    height: 150
                }}
                source = {{
                    uri: url
                }}
            /><Text
                style = {{
                    padding: 5
                }}
            >{title}</Text></CardView>
            </TouchableHighlight>
        )
    }
}
