import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import SkillsInput from './components/SkillsInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startModal = () => {
    setModalIsVisible(true);
  };
  const endModal = () => {
    setModalIsVisible(false);
  };
  const addSkill = (skillTitle) =>{
    console.log(skillTitle)
    endModal()

  }
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button title=" Add skils" color="blue" 
        onPress={startModal} 
        
        
        
        />
        <SkillsInput visible={modalIsVisible} onCancel ={endModal}  onAddSkill={addSkill} />
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
});
