import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './mainScreen/Home';
import {  ApolloProvider } from '@apollo/client';
import { client } from './services/apiService';





export default function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <StatusBar style="auto" />
        <Home/>

    </ApolloProvider>
    </>  
  );
}



