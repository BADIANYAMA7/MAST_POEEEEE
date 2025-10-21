import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


export default function Welcome({ navigation }: { navigation: any }) {
  const [Name, setName] = useState('')
  const handle = () => {

  }
  return (
    <LinearGradient colors={['#12D936', '#CBFF83']}
      style={{ flex: 1, }}
    >
      <View style={styles.body}>
        <Text style={styles.text}>Welcome Back Chef</Text>
        <TextInput
          placeholder="Please state your name, Chef"
          onChangeText={(text) => setName(text)}
          value={Name}
          style={styles.border}
          autoCapitalize="characters"
        />

        <Text style={{ fontSize: 20 }}>Ready To Change The Menu</Text>
        <Button title='Enter' color="#000000ff" onPress={() => {
          navigation.navigate("Menu", { Namesend: Name })
        }} />


      </View>
    </LinearGradient>

  )
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 200,
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
  },
  border: {
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20
  }
})