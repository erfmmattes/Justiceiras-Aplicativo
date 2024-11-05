import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styled from 'styled-components/native';

const ColetivoContainer = styled.View`
  background-color: #CB8686;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
  align-items: center;
`;

const ColetivoTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #3d3d3d;
  margin-bottom: 10px;
  text-align: center;
`;

const ColetivoSubtitle = styled.Text`
  font-size: 16px;
  color: #3d3d3d;
  margin-bottom: 20px;
  font-size: 16px;
  text-align: end;
  font-weight: 500;
`;

const ColetivoButton = styled.TouchableOpacity`
  background-color: #763f46;
  padding: 11px 20px;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
`;

const ColetivoButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const ColetivoButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

 const ColetiveImage = styled.Image`
width: 100%;
height: 200px;
margin-top: 30px;
border-radius: 10px;
padding-left: 10px;
padding-right: 10px;
`;



export default function Coletivo() {
  const openDenunciaForm = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSfOJL_xo6DcNtWe5ncNyDVI4FOwxsw4JCrhgV1u_P7nPW4ORw/viewform?pli=1&pli=1');
  };

  return (
    <ColetivoContainer>
      <ColetivoTitle>Coletivo de Respeito</ColetivoTitle>
      <ColetivoSubtitle>
        Neste breve formulário você irá inserir os principais dados para registrarmos sua denúncia.
      </ColetivoSubtitle>
      <ColetivoSubtitle>
        Após o envio do formulário sua demanda será encaminhada para uma das voluntárias das Justiceiras e oferecemos suporte emocional, assessoria jurídica e psicossocial, para lidar da melhor forma com as consequências deste acontecimento.
      </ColetivoSubtitle>
      <ColetivoButton onPress={openDenunciaForm}>
        <ColetivoButtonText>Denunciar</ColetivoButtonText>
        <ColetivoButtonIcon source={require('../assets/icons/arrow-right.png')} />
      </ColetivoButton>
      <ColetiveImage source={require('../assets/justiceiras-imagem-03.png')}/>      
    </ColetivoContainer>
  );
}
