import React, { useState, useContext } from 'react';
import { Modal, TouchableOpacity, Text, Image, View, BackHandler, Linking, ActivityIndicator } from 'react-native';
import { 
  Background, Container, Logo, AreaInput, NameInput, EmailInput, PhoneInput, PasswordInput, 
  ModalContainer, ModalContent, ContainerTopButtons, CloseButtonContainer, CloseButton, 
  EmergencyContainer, EmergencyButton, EmergencyText, ButtonRegister, RegisterText, 
  IconInput, IconContainer, TextLogin, ButtonLogin, ModalTitle, ModalButton, ModalButtonText 
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const { SignUp, loadingAuth } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleEmergencyPress = () => {
    Linking.openURL('tel:190');
  };

  const handleExitApp = () => {
    BackHandler.exitApp();
  };

  function handleSignUp() {
    if (nome === '' || email === '' || senha === '' || telefone === '') return;
    SignUp(email, senha, email, nome, telefone);
  }

  return (
    <Background>
      <ContainerTopButtons>
        <EmergencyContainer>
          <EmergencyButton onPress={handleEmergencyPress}>
            <Image source={require('../../assets/icons/emergency.png')} style={{ width: 24, height: 24 }} />
            <EmergencyText>Emergência</EmergencyText>
          </EmergencyButton>
        </EmergencyContainer>

        <CloseButtonContainer>
          <CloseButton onPress={toggleModal}>
            <Image source={require('../../assets/icons/x.png')} style={{ width: 24, height: 24 }} />
          </CloseButton>
        </CloseButtonContainer>
      </ContainerTopButtons>

      <Container>
        <Logo source={require('../../assets/justiceiras.png')} />

        <AreaInput>
          <IconContainer>
            <IconInput source={require('../../assets/icons/user.png')} />
          </IconContainer>
          <NameInput 
            placeholder="Nome Completo"
            placeholderTextColor="#333" 
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <IconContainer>
            <IconInput source={require('../../assets/icons/email.png')} />
          </IconContainer>
          <EmailInput 
            placeholder="E-mail"
            placeholderTextColor="#333" 
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <IconContainer>
            <IconInput source={require('../../assets/icons/phone.png')} />
          </IconContainer>
          <PhoneInput 
            placeholder="Telefone"
            placeholderTextColor="#333" 
            value={telefone}
            onChangeText={(text) => setTelefone(text)}
          />
        </AreaInput>

        <AreaInput>
          <IconContainer>
            <IconInput source={require('../../assets/icons/password.png')} />
          </IconContainer>
          <PasswordInput 
            placeholder="Senha"
            placeholderTextColor="#333" 
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <ButtonRegister onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <RegisterText>Cadastrar</RegisterText>
          )}
        </ButtonRegister>
        <ButtonLogin onPress={() => navigation.navigate('SignIn')}>
          <TextLogin>Fazer login!</TextLogin>
        </ButtonLogin>
      </Container>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Ei, você está indo embora?</ModalTitle>
            <Text style={{ marginVertical: 10 }}>Tem certeza que quer nos deixar? 😢</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <ModalButton style={{ backgroundColor: '#4CAF50' }} onPress={toggleModal}>
                <ModalButtonText>Ficar</ModalButtonText>
              </ModalButton>
              <ModalButton style={{ backgroundColor: '#F44336', marginLeft: 10 }} onPress={handleExitApp}>
                <ModalButtonText>Sair</ModalButtonText>
              </ModalButton>
            </View>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Background>
  );
}
