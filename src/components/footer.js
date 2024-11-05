import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import styled from 'styled-components/native';

const FooterContainer = styled.View`
  background-color: #763f46;
  padding: 20px;
  align-items: center;
`;

const FooterRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const FooterColumn = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

const FooterLink = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
`;

const FooterText = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

const FooterLogo = styled.Image`
  width: 120px;
  height: 30px;
  resize: contain;
  margin-bottom: 20px;
`;

const InstagramButton = styled.TouchableOpacity`
  background-color: #cb8686;
  padding: 10px 20px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const InstagramButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo source={require('../assets/justiceiras.png')} />
      <FooterRow>
        <FooterColumn>
          <FooterLink onPress={() => Linking.openURL('https://example.com/projeto')}>Projeto</FooterLink>
          <FooterLink onPress={() => Linking.openURL('https://example.com/idealizadores')}>Idealizadores</FooterLink>
          <FooterLink onPress={() => Linking.openURL('https://example.com/seja-voluntaria')}>Seja voluntária</FooterLink>
          <FooterLink onPress={() => Linking.openURL('https://example.com/ajuda')}>Ajuda</FooterLink>
          <FooterLink onPress={() => Linking.openURL('https://example.com/parceiros')}>Parceiros</FooterLink>
          <FooterLink onPress={() => Linking.openURL('https://example.com/materiais')}>Materiais</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink onPress={() => Linking.openURL('https://example.com/politica-de-privacidade')}>Política de Privacidade</FooterLink>
        </FooterColumn>
      </FooterRow>
      <FooterText>© 2020-2024 Justiceiras. Todos os direitos reservados.</FooterText>
      <InstagramButton onPress={() => Linking.openURL('https://www.instagram.com/justiceiras')}>
        <Image source={require('../assets/icons/instagram.png')} style={{ width: 20, height: 20 }} />
        <InstagramButtonText>Instagram</InstagramButtonText>
      </InstagramButton>
      <FooterText>Desenvolvido por Solayos</FooterText>
    </FooterContainer>
  );
};

export default Footer;
