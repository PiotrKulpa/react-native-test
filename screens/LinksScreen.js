import React from 'react';
import { ScrollView, StyleSheet, View, FlatList, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {withApollo} from "react-apollo";
import gql from 'graphql-tag';
import {graphql} from "react-apollo";

const testQuery = gql`
{
        rates(currency: "USD") {
          currency
          rate
          name
        }
      }
`;


class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    const {loading, errors, data} = this.props.data;

        console.log(loading);
    return (
      
      <View style={styles.container}>
           <FlatList
               data={this.props.data.rates}
               renderItem={({item}) => <Text key={item.name} style={styles.item}>{item.name}</Text>}

           />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default graphql(testQuery)(withApollo(LinksScreen));
