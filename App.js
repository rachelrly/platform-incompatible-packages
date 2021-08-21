import React, {useState} from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import BlurView from './BlurView'
import MyModal from './MyModal'

export default function App() {
  const [visible, setVisible] = useState(false)
  const closeModal = () => setVisible(false)
  const openModal = () => setVisible(true)
  console.log('THE MODAL STATE IS VISIBLE:', visible)

  const view1 = {...styles.block, backgroundColor: 'red'}
  const view2 = {...styles.block, backgroundColor: 'orange'}
  const view3 = {...styles.block, backgroundColor: 'pink'}
  const view4 = {...styles.block, backgroundColor: 'blue'}

  return (
    <View style={styles.container}> 
      <MyModal visible={visible} closeModal={closeModal}/>
      <BlurView visible={visible}>
        <Pressable style={view1} onPress={openModal}/>
        <Pressable style={view2} onPress={openModal}/>
        <Pressable style={view3} onPress={openModal}/>
        <Pressable style={view4} onPress={openModal}/>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
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
