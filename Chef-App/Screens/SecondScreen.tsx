import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { use, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';




export default function Menu({ route }: { route: any }) {
    const [selectedValue, SetselectedValue] = useState('')
    const ChefName = route.params.Namesend
    const [Meal, Setmeals] = useState('')
    const Starter = ['samosa:R9', 'spring_rolls:R30', 'bruschetta:R40', 'stuffed_mushrooms:R20', 'deviled_eggs:R30']
    const Drinks = ['coke:R15', 'pepsi:R15', 'orange_juice:R20', 'water:R5', 'lemonade:R25']
    const Meals = ['pizza:R50', 'burger:R60', 'pasta:R40', 'salad:R30', 'sushi:R70']
    const Deserts = ['cake:R25', 'ice_cream:R15', 'brownie:R20', 'cheesecake:R30', 'fruit_salad:R10']
    return (
        <LinearGradient colors={['#12D936', '#CBFF83']}
            style={{ flex: 1 }}
        >
            <View style={styles.body}>
                <Text style={{ fontSize: 20, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginTop: 100, alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>Welcome {ChefName}</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Menu</Text>
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
                {selectedValue === `Drinks` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Drinks.join(", ")}</Text>}
                {selectedValue === `Meals` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Meals.join(", ")}</Text>}
                {selectedValue === `Deserts` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Deserts.join(", ")}</Text>}
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

