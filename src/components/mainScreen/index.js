import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Principal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de ROI</Text>
      <Text style={styles.description}>
        O Retorno sobre Investimento (ROI) é uma medida de desempenho financeiro usada para avaliar a eficiência de um investimento ou comparar a eficiência de vários investimentos.
      </Text>
      <Image source={require('../../../assets/investimento.png')} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CalculatorScreen')}
      >
        <Text style={styles.buttonText}>Vamos Calcular?</Text>
      </TouchableOpacity>
      <Text style={styles.signature}>Desenvolvido por [Rafael Minoro Itokazo] RM: [99988]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF00FF',
  },
  signature: {
    position: 'absolute',
    bottom: 10,
    fontSize: 12,
    color: '#FFFFFF',
  },
});

export default Principal;
