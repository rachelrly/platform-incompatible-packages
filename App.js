import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyModal from './MyModal'

export default function App() {
  const [visible, setVisible] = useState(false)
  const closeModal = () => setVisible(false)
  const openModal = () => setVisible(true)

  const view1 = {...styles.block, backgroundColor: 'red'}
  const view2 = {...styles.block, backgroundColor: 'orange'}
  const view3 = {...styles.block, backgroundColor: 'pink'}
  const view4 = {...styles.block, backgroundColor: 'blue'}

  return (
    <View style={styles.container}>
      <MyModal visible={visible} closeModal={closeModal}/>
      <View style={view1} onPress={openModal}/>
      <View style={view2} onPress={openModal}/>
      <View style={view3} onPress={openModal}/>
      <View style={view4} onPress={openModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    flex: 1,
    padding: 2,
    width: '100%',
    height: '20%',
  }
});
