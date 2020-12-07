import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default function page2({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e67e22'}}>
            <Text>Je suis sur la page Groupe</Text>
            <Button 
            title="Suivant"
            onPress={() => navigation.navigate('Home')}
            
        />
      </View>
    );
  

}