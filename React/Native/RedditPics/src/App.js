import React from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  ActivityIndicator,
  Platform,
  StyleSheet
} from 'react-native';
import axios from 'axios';

// Styles
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
    flex: 1,
    //Since React Native is cross platform
    //let's handle both platforms.
    //Add top margin to fix status bar overlap
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  textInputStyle: {
    marginLeft: 16,
    marginRight: 16,
    height: Platform.OS === 'ios' ? 30 : undefined
  }
});

export default class App extends React.Component {
  state = {
    text: '',
    loading: false,
    error: null,
    imgUrl: null
  };

  render() {
    return (
      //Predefined style. See below
      <View
        style = {
          styles.containerStyle
        }
      >
        {
        /*
        returnKeyType ~ imeOptions
        onSubmitEditing ~ et.OnEditorActionListener
        */
        }
        <TextInput
          style = {
            styles.textInputStyle
          }
          placeholder = "Enter text to search an image"
          returnKeyType = 'search'
          autoFocus = {
            true
          }
          onChangeText = {
            (text) => this.setState({
              text
            })
          }
          onSubmitEditing = {
            () => this.searchPicture()
          }
          ref = {
            ref => this.searchInput = ref
          }
        />
        {
        /*
        Render error Image component
        if this.state.imgUrl is
        not equal to null
        */
        }
        {
          this.state.imgUrl &&
            <Image
              source = {
                {
                  uri: this.state.imgUrl
                }
              }
              style = {
                {
                  flex: 1
                }
              }
            />
        }
        {
          //Separate method
          this.renderProgress()
        }
        {
          /*
          Render error Text component
          if this.state.error is
          not equal to null
          */
        }
        {
          this.state.error &&
          <Text
            style = {
              {
                margin: 16,
                color: 'red'
              }
            }
          >
            {
              this.state.error
            }
          </Text>
        }
      </View>
    );
  }
  renderProgress() {
    //If this.state.loading is true
    //return View containing a progressbar
    //View takes style array
    if (this.state.loading === true) {
      return (
        <View
          style = {
            [styles.containerStyle,
              {
                justifyContent: 'center'
              }
            ]
          }
        >
          <ActivityIndicator
            color = '#e57373'
          />
        </View>
      );
    }
  }

  searchPicture() {
    //Default state
    this.setState({
      loading: true,
      error: null,
      imgUrl: null
    });
    axios.get('https://www.reddit.com/r/pics/search.json', {
      params: { //the get param map
        restrict_sr: 'on', //search only /r/pics
        limit: 1, //limit to one search item
        sort: 'new', //sort by creation date
        q: this.state.text //our search query
      }
    }).then(response => { //promise is resolved and 'then' block is triggered
      //set state with new values
      this.setState({
        imgUrl: response.data.data.children[0]
          .data.preview.images[0].source.url,
        error: null,
        loading: false
      })
    }).catch(error => { //Some error occurred
      //set error
      this.setState({
        error: error.message,
        loading: false,
        imgUrl: null
      })
    })
  }
  componentDidMount() {
    this.searchInput.focus();
  }
}
