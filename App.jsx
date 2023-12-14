import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Life from './src/components/Life';
import Tools from './src/components/Tools';

export default function App() {
  return (
    <View style={styles.container}>
      <Life />
      <Tools />
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
