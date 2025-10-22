import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { use, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';




export default function Menu({ navigation }: { navigation: any }) {
    const [selectedValue, SetselectedValue] = useState('')
    const Starter = ['1.samosa', '2.spring_rolls', '3.bruschetta', '4.stuffed_mushrooms', '5.deviled_eggs']
    const StarterPrice = ["1.R9", "2.R12", "3.R15", "4.R20", "5.R25"]
    const Drinks = ['1.coke', '2.orange_juice', '3.water', '4.lemonade']
    const DrinksPrice = ["1.R8", "2.R10", "3.R5", "4.R7"]
    const Meals = ['1.pizza', '2.burger', '3.pasta', '4.salad', '5.sushi']
    const MealsPrice = ["1.R50", "2.R40", "3.R45", "4.R30", "5.R60"]
    const Deserts = ['cake', 'ice_cream', 'brownie', 'cheesecake', 'fruit_salad']
    const DesertsPrice = ["R20", "R15", "R18", "R25", "R12"]
    return (
        <LinearGradient colors={['#12D936', '#CBFF83']}
            style={{ flex: 1 }}
        >
            <View style={styles.body}>
                <Text style={{ fontSize: 20, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginTop: 100, alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>Restaurant</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Current Menu</Text>
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
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Descriptions</Text>
                {selectedValue === `Starter` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Starter.join(", ")}</Text>}
                {selectedValue === `Starter` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{StarterPrice.join(", ")}</Text>}
                {selectedValue === `Starter` && <Text style={{ textAlign: 'center', fontSize: 16, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10 }}>Number of Items: {Starter.length}</Text>}
                {selectedValue === `Drinks` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Drinks.join(", ")}</Text>}
                {selectedValue === `Drinks` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{DrinksPrice.join(", ")}</Text>}
                {selectedValue === `Drinks` && <Text style={{ textAlign: 'center', fontSize: 16, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10 }}>Number of Items: {Drinks.length}</Text>}
                {selectedValue === `Meals` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Meals.join(", ")}</Text>}
                {selectedValue === `Meals` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{MealsPrice.join(", ")}</Text>}
                {selectedValue === `Meals` && <Text style={{ textAlign: 'center', fontSize: 16, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10 }}>Number of Items: {Meals.length}</Text>}
                {selectedValue === `Deserts` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Deserts.join(", ")}</Text>}
                {selectedValue === `Deserts` && <Text style={{ textAlign: 'center', fontSize: 16, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10 }}>Number of Items: {Deserts.length}</Text>}
                <Button title='Add More' color="#000000ff" onPress={() => {
                    navigation.navigate("List", {
                        StarterSend: Starter,
                        DrinksSend: Drinks,
                        MealsSend: Meals,
                        DesertsSend: Deserts
                    })
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


    },
})

