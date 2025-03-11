import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bai1 from './components/bai1';
import Bai2_1 from './components/bai2_1';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Bai1/> */}
      <Bai2_1/>

      <StatusBar style="auto" />
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
});
