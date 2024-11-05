import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styled from 'styled-components/native';

const AjudaContainer = styled.View`
  background-color: #ffd0b1;
  padding: 20px;
  margin-top: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-items: center;
`;

const AjudaTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #3d3d3d;
  margin-bottom: 10px;
  text-align: center;
`;

const AjudaSubtitle = styled.Text`
  font-size: 16px;
  color: #3d3d3d;
  margin-bottom: 20px;
  text-align: center;
`;

const AjudaButton = styled.TouchableOpacity`
  background-color: #763f46;
  padding: 15px 20px;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

const AjudaButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const AjudaButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Ajuda = React.forwardRef((props, ref) => {
  const openHelpForm = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSft--ccomNpgfVaU0O9Xjpmg_vLmhHsKZ8SG5YiphdMRshpgg/viewform');
  };

  return (
    <AjudaContainer ref={ref}>
      <AjudaTitle>Procure ajuda</AjudaTitle>
      <AjudaSubtitle>Preencha o formulário para se cadastrar. Entraremos em contato com você para lhe dar auxílio.</AjudaSubtitle>
      <AjudaButton onPress={openHelpForm}>
        <AjudaButtonText>Pedir ajuda</AjudaButtonText>
        <AjudaButtonIcon source={require('../assets/icons/arrow-right.png')} />
      </AjudaButton>
    </AjudaContainer>
  );
});

export default Ajuda;
