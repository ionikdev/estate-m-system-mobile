
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
 
    padding: 20,
    borderRadius: 10,
  },
});

export default Spinner;
