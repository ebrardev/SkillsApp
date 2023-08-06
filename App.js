import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // 'react' importunu ekleyin
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import SkillsInput from './components/SkillsInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [skills, setSkills] = useState([]); // skills state'i ekleyin

  const startModal = () => {
    setModalIsVisible(true);
  };

  const endModal = () => {
    setModalIsVisible(false);
  };

  const addSkill = (skillTitle) => {
    setSkills((currentSkills) => [...currentSkills, { id: Math.random().toString(), value: skillTitle }]);
    endModal();
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button 
        
          title="Add skills" // " Add skils" -> "Add skills" düzeltmesi
          color="blue"
          onPress={startModal}
        />
        <SkillsInput visible={modalIsVisible} onCancel={endModal} onAddSkill={addSkill} />
        <View>
          <FlatList
            data={skills}
            keyExtractor={(item) => item.id} // keyExtractor eklenmeli
            renderItem={(itemData) => (
              <View style={styles.listItem}>
                <Text style={styles.text}>{itemData.item.value}</Text>
              </View>
            )}
          />
        </View>
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
  listItem: { // Stil için listItem düzenlemesi
    padding: 10,
    backgroundColor: 'blue',
    
    color: 'white',
    borderRadius: 10,
    marginVertical: 5,
  },
  text: { // Stil için text düzenlemesi
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
 
});
