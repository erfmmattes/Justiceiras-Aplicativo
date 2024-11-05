import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styled from 'styled-components/native';

const ApoioContainer = styled.View`
  background-color: #ffd0b1;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
  align-items: center;
`;

const ApoioTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #3d3d3d;
  margin-bottom: 10px;
`;

const ApoioText = styled.Text`
  font-size: 16px;
  color: #3d3d3d;
  text-align: center;
  margin-bottom: 20px;
`;

const ApoioButton = styled.TouchableOpacity`
  background-color: #763f46;
  padding: 12px 20px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ApoioButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const ApoioButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export default function Apoio() {
  const handlePress = () => {
    Linking.openURL('https://drive.google.com/drive/u/0/folders/1OH1wAUhj0oadzM_Q_FdxM-0_Rg0LTd5c')
  };

  return (
    <ApoioContainer>
      <ApoioTitle>Material de Apoio</ApoioTitle>
      <ApoioText>Já é voluntária? Baixe aqui seu material de apoio.</ApoioText>
      <ApoioButton onPress={handlePress}>
        <ApoioButtonText>Baixar material de apoio</ApoioButtonText>
        <ApoioButtonIcon source={require('../assets/icons/arrow-right.png')} />
      </ApoioButton>
    </ApoioContainer>
  );
}
