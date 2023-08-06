import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import React, { useState } from 'react';
import SkillsInput from './src/components/SkillsInput';
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.frame}>
        <Button style={styles.button} title="Add Skill" color='white'  onPress={openModal} />
      
        </View>
        <SkillsInput visible={openModal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  button: {
  
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  frame: {  
    backgroundColor: 'blue',
    borderRadius: 15,
    marginTop: 20,
  }

});
