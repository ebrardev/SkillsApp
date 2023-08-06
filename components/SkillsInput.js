import { StyleSheet, Text, View,Modal,Image, TextInput, Button,Platform } from 'react-native'
import React, { useState } from 'react'

export default function SkillsInput({visible,onAddSkill,onCancel}) {

  const [enteredSkill, setEnteredSkill] = useState('')

  const addSkillHandler = () => {
    onAddSkill(enteredSkill)
     
  }

  return (
    <Modal
    animationType="slide"
  
    visible={visible}
   >
    <View style={styles.inputContainer}>
      <Image   source={require('../assets/images/skill.png')} style={styles.image} />
      <TextInput placeholder="Enter your skills" style={styles.input} value={enteredSkill} 
      onChangeText={(text)=>setEnteredSkill(text)}  
       />
      <View style={styles.buttonContainer}>
   <View style={styles.button}>
    <Button title="Remove" color="red" onPress={onCancel} />
   </View>
   <View style={styles.button}>
    <Button title="Add" color="green"  onPress={addSkillHandler} />
   </View>
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',

  },
  image: {
    borderRadius: 20,
    width: 350,
    height: 250,
    margin: 20,
    marginBottom: 50,
    // Gölge eklemek için platforma göre özellikleri ayarla
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'lightgrey',
    color: 'black',
    // Gölge eklemek için platforma göre özellikleri ayarla
    ...Platform.select({
      ios: {
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
   
  },
  button: {
    padding: 8,
    justifyContent: 'center',
    marginHorizontal:8,
    
    width:100,
  }
})