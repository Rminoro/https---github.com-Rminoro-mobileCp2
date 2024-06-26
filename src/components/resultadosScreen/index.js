import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

const AgiotaBonzinho = ({ navigation, route }) => {
  const { investimento, retorno, roi } = route.params;

  const dividendos = parseFloat(retorno) - parseFloat(investimento);
  const percentInvestimento = ((parseFloat(retorno) - parseFloat(investimento)) / parseFloat(investimento)) * 100;

  return (
    <ImageBackground source={require('../../../assets/maquiagem.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text>Dados do investimento</Text>
        <Text>Preço inicial R$ {investimento}</Text>
        <Text>Preço final R$ {retorno}</Text>
        <Text>Dividendos R$ {dividendos}</Text>
        <Text>ROI: {roi}</Text>
        <Text>% De investimento {percentInvestimento}</Text>
        <Button title="Fechar" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default AgiotaBonzinho;
