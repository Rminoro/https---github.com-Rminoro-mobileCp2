import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const BananaAzul = ({ navigation }) => {
  const [initialPrice, setInitialPrice] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [dividends, setDividends] = useState('');
  const [returnAmount, setReturnAmount] = useState(null);

  const calculateReturn = () => {
    if (initialPrice && finalPrice && dividends) {
      const returnAmountValue = ((parseFloat(finalPrice) - parseFloat(initialPrice) + parseFloat(dividends)) / parseFloat(initialPrice)) * 100;
      setReturnAmount(returnAmountValue.toFixed(2) + '%');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };
  

  const handleCalculateReturn = () => {
    calculateReturn();
    navigation.navigate('ReturnScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário de Entrada</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço Inicial (R$)"
        keyboardType="numeric"
        onChangeText={text => setInitialPrice(text)}
        value={initialPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço Final (R$)"
        keyboardType="numeric"
        onChangeText={text => setFinalPrice(text)}
        value={finalPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Dividendos (R$)"
        keyboardType="numeric"
        onChangeText={text => setDividends(text)}
        value={dividends}
      />
      <Button title="Calcular Retorno" onPress={handleCalculateReturn} />
      {returnAmount && <Text style={styles.result}>Retorno:{returnAmount}%</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BananaAzul ;
