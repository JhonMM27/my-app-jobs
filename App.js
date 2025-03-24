import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A  la nati le gusta jamir 2 xd</Text>
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
  text: {
    fontSize: 24, // Cambia el tamaño de la letra
    fontWeight: 'bold', // Opcional: negrita
    color: 'color: hsl(200, 100%, 50%)',

  },
});
