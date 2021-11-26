/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {

  addEntry = () =>{
   alert("Abrir a tela de adicionar lançamento")
  }

  return (
    <SafeAreaView>
    <View styles={{padding: 10}}>
      
      <Text
      style={{fontSize: 22, fontWeight: "bold", marginTop: 15, marginBottom: 15, marginLeft: 20,}}
      >Saldo R$ 2.102,00
      </Text>

      
      <Text
      style={{fontSize: 22, fontWeight: "bold", marginTop: 15, marginBottom: 15, marginLeft: 20,}}
      >Categorias
      </Text>
      
      <FlatList style={{marginLeft: 20}}
        data={[
          {key: "Alimentaçao R$ 200,00"},
          {key: "Combustivel R$ 200,00"},
          {key: "Aluguel R$ 200,00"},
          {key: "Lazer R$ 200,00"},
          {key: "Outros R$ 200,00"},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}>
      </FlatList>

      <Text
      style={{fontSize: 22, fontWeight: "bold", marginTop: 15, marginBottom: 15, marginLeft: 20,}}
      >Últimos lançamentos
      </Text>
      
      <FlatList style={{marginLeft: 20}}
        data={[
          {key: "Padaria Asa Branca R$ 200,00"},
          {key: "Viagem praia R$ 200,00"},
          {key: "Happy hour R$ 200,00"},
          {key: "Posto Sorriso R$ 200,00"},
          {key: "Coocapec R$ 200,00"},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}>
      </FlatList>

    <Button onPress={addEntry} title="Adicionar"></Button>


    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
