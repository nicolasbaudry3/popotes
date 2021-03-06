import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StyleSheet, Text, View , Image} from 'react-native';
import { TouchableOpacity } from 'react-native'

export default function App() {


  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay overlayStyle={{backgroundColor:'#dfe6e9', borderRadius: 50,}} isVisible={visible} onBackdropPress={toggleOverlay} >
        <Button
          title="passer"
          type="clear"
          buttonStyle={{ borderColor: '#dfe6e9', justifyContent: 'flex-end' }}
          titleStyle={{ color: 'black', fontFamily: 'Kohinoor Telugu', fontSize: 11, paddingBottom: 20, paddingRight:17 }}
        />
        <View style={styles.overlay}>
          <Text style={{ fontFamily: 'Kohinoor Telugu', fontSize: 18 }}>Laisse moi en apprendre un peu plus sur toi...{"\n"}{"\n"}</Text>
          <Text style={{ fontFamily: 'Kohinoor Telugu', fontSize: 18, paddingBottom:30 }}>Tout d'abord, selectionne tes préférences : </Text>
            <View style={styles.prefalim}>
              <TouchableOpacity style={styles.picto} activeOpacity={0.3}>
                <Image style={{width:100, height:100}}
                  source={require('./assets/noGluten.png')}
                />
                <Text style={{ fontFamily: 'Kohinoor Telugu', fontSize: 11 }}>Sans Gluten</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.picto} activeOpacity={0.3}>
                <Image style={{width:100, height:100}}
                  source={require('./assets/noMeat.png')}
                />
                <Text style={{ fontFamily: 'Kohinoor Telugu', fontSize: 11 }}>Végétarien</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.prefalim}>
              <TouchableOpacity style={styles.picto} activeOpacity={0.3}>
                <Image style={{width:100, height:100}}
                  source={require('./assets/noMilk.png')}
                />
                <Text style={{ fontFamily: 'Kohinoor Telugu', fontSize: 11 }}>Sans Lactose</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.picto} activeOpacity={0.3}>
                <Image style={{width:100, height:100}}
                  source={require('./assets/vegetalien.png')}
                />
                <Text style={{ fontFamily: 'Kohinoor Telugu', fontSize: 11 }}>Végétalien</Text>
              </TouchableOpacity>
            </View>
        <Button
          title="suivant"
          type="clear"
          buttonStyle={{ borderColor: 'white', justifyContent: 'flex-end' }}
          titleStyle={{ color: 'black', fontFamily: 'Kohinoor Telugu', fontSize: 18, paddingTop: 30 }}
        />
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
        overlay: {
        width: 290,
        margin:18,
        justifyContent: 'center',
      }, prefalim: {
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:'row',
      }, picto: {
        alignItems: 'center',
        justifyContent:'center',
        margin:15,
      }
});