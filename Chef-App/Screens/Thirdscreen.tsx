import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { use, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';




export default function List({ route }: { route: any }) {
    const [Add, Setadded] = useState('')
    const Starter2 = route.params.StarterSend
    const Drinks2 = route.params.DrinksSend
    const Meals2 = route.params.MealsSend
    const Deserts2 = route.params.DesertsSend
    const [selectedValue, SetselectedValue] = useState('')
    return (
        <LinearGradient colors={['#12D936', '#CBFF83']}
            style={{ flex: 1 }}
        >
            <View>
                <Text style={{ fontSize: 20, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginTop: 100, alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>List</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => SetselectedValue(itemValue)}
                    mode="dropdown"
                >
                    <Picker.Item label='Select' value='' />
                    <Picker.Item label='Starter' value='Starter' />
                    <Picker.Item label='Drinks' value='Drinks' />
                    <Picker.Item label='Meals' value='Meals' />
                    <Picker.Item label='Deserts' value='Deserts' />
                </Picker>

                <Button
                    title='Add'
                    color="Green"
                    onPress={() => { }}
                />
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Descriptions</Text>
                {selectedValue === `Starter` && <Text>{Starter2[0]},{Starter2[1]}</Text>}
                {selectedValue === `Starter` && <Button title='Remove' color="red" onPress={() => Starter2.shift()} />}
                {selectedValue === `Drinks` && <Text style={{ textAlign: 'center', fontSize: 16 }}>here</Text>}
                {selectedValue === `Meals` && <Text style={{ textAlign: 'center', fontSize: 16 }}>here</Text>}
            </View>
        </LinearGradient>


    )
}