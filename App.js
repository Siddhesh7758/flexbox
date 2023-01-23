import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.red}>
        <View style={styles.green} />
        <View style={styles.yellow} />
        <View style={styles.purple} />
      </View>

      <View style={styles.white}>
        <View style={styles.green} />
        <View style={styles.yellow} />
        <View style={styles.purple} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  
  red: {
    flex: 2,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  white: {
    flex: 2,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  green: {
    backgroundColor: '#17fc03',
    width: 50,
    height: 50,
  },
  yellow: {
    backgroundColor: '#fcdf03',
    width: 50,
    height: 50,
  },
  purple: {
    backgroundColor: '#d142f5',
    width: 50,
    height: 50,
  }
});
