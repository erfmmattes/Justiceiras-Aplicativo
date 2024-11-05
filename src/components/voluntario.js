import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styled from 'styled-components/native';

const VoluntarioContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  align-items: center;
`;

const VoluntarioTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #3d3d3d;
  margin-bottom: 10px;
`;

const VoluntarioSubtitle = styled.Text`
  font-size: 16px;
  color: #3d3d3d;
  margin-bottom: 20px;
  text-align: center;
`;

const VoluntarioButton = styled.TouchableOpacity`
  background-color: #763f46;
  padding: 15px 20px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const VoluntarioButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`;

const VoluntarioButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const Voluntario = React.forwardRef((_props, ref) => {
  const openVolunteerForm = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdRaN8RiBdH7iYLQuZB-78FNr9kZPmsr-vrywpqo_IhBrmUSg/viewform');
  };

  return (
    <VoluntarioContainer ref={ref}>
      <VoluntarioTitle>Seja voluntária</VoluntarioTitle>
      <VoluntarioSubtitle>Preencha o formulário para se tornar uma voluntária</VoluntarioSubtitle>
      <VoluntarioButton onPress={openVolunteerForm}>
        <VoluntarioButtonText>Faça parte</VoluntarioButtonText>
        <VoluntarioButtonIcon source={require('../assets/icons/arrow-right.png')} />
      </VoluntarioButton>
    </VoluntarioContainer>
  );
});

export default Voluntario;
