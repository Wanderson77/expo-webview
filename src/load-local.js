//This is an example code to Load Local HTML File in WebView//

import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';


import { WebView } from "react-native-webview";

class App extends Component {
  render() {
    return (
      <WebView
        style={styles.WebViewStyle}
        //Loading html file from project folder
        source={require('./resources/index.html')}
        //Enable Javascript support
        javaScriptEnabled={true}
         //For the Cache
        domStorageEnabled={true}
      />
    );
  }
}
export default App;

const styles = StyleSheet.create({

  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 30,
  },
  
});