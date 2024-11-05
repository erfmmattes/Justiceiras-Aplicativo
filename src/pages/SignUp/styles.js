import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #f6decd;
`;

export const ContainerTopButtons = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const EmergencyContainer = styled.View`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const EmergencyButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #FF4040;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EmergencyText = styled.Text`
  color: #fff;
  font-weight: bold;
  padding-left: 5px;
`;

export const CloseButtonContainer = styled.View`
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 1;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  align-self: center;
  margin-bottom: 25px;
  margin-top: 50px;
  justify-content: center;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 80%;
  height: 50px;  /* Ajuste a altura conforme necessário */
`;

export const IconContainer = styled.View`
  width: 50px;
  height: 100%; /* Garante que o contêiner ocupe toda a altura do input */
  justify-content: center;
  align-items: center;
  background-color: #763f46;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const NameInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 17px;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 100%; /* Garante que o input ocupe toda a altura disponível */
  color: #000;

`;

export const EmailInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 17px;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 100%; /* Garante que o input ocupe toda a altura disponível */
  color: #000;

`;

export const PhoneInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 17px;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 100%; /* Garante que o input ocupe toda a altura disponível */
  color: #000;

`;

export const PasswordInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  font-size: 17px;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 100%; /* Garante que o input ocupe toda a altura disponível */
  color: #000;
`;

export const IconInput = styled.Image`
  width: 24px;
  height: 24px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  background-color: #763f46;
  width: 80%;
  margin-top: 7px;
  padding: 13px;
  border-radius: 10px;
`;

export const RegisterText = styled.Text`
  color: #ffffff;
  text-align: center;
  font-weight: bold;
`;

export const ButtonLogin = styled.TouchableOpacity`
  align-items:center;
  justify-content: center;
  margin: 10px;
`;

export const TextLogin = styled.Text`
  color: #3d3d3d;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  margin-top: 5px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const ModalButton = styled.TouchableOpacity`
  padding: 8px 17px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  margin-left: 40px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 70%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
`;