// atv01


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView, Image, Button, Platform, Alert } from 'react-native';

const logo = require('./assets/logo.png')

export default function App() {
  return (
    <SafeAreaView style={[styles.androidSafeArea]}>
      <ScrollView>
        <View style={styles.container}>
        <Image source={logo} ></Image>
          <View>
            <Text style={styles.labelInput}>Nome/Usuário:</Text>
            <TextInput placeholder='Seu email' style={styles.input}></TextInput>
        
            <Text style={styles.labelInput}>Senha:</Text>
            <TextInput secureTextEntry={true} placeholder='*******' style={styles.input}></TextInput>
            </View>

            <View style={styles.button}>
            <Button title='ACESSAR' color='red' onPress={() => Alert.alert('Seja bem vindo(a)!')}></Button>
          </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: '100%',

  },
  alinhar: {
     flex: 1,
     flexDirection: 'row',
     width: '100%',
    },
  input: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  labelInput: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
    padding: 10
  }
});
