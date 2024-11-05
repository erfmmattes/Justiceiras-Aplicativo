import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

const LojaContainer = styled.View`
  background-color: #FFE4E1;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const LojaTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #800020;
  margin-bottom: 10px;
`;

const LojaDescription = styled.Text`
  font-size: 16px;
  color: #333333;
  margin-bottom: 20px;
  text-align: center;
`;

const LojaButton = styled.TouchableOpacity`
  background-color: #800020;
  padding: 15px 20px;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const LojaButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const LojaButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

    const handlePress = () => {
      Linking.openURL('https://loja.gabrielamanssur.com.br/loja/')
    };

const Loja = () => {
  return (
    <LojaContainer>
      <LojaTitle>Loja das Justiceiras</LojaTitle>
      <LojaDescription>Adquira produtos e ajude a causa das mulheres.</LojaDescription>
      <LojaButton onPress={handlePress}>
        <LojaButtonText>Visitar loja</LojaButtonText>
        <LojaButtonIcon source={require('../assets/icons/arrow-right.png')} />
      </LojaButton>
    </LojaContainer>
  );
};

export default Loja;
