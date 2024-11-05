import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

const MateriaisContainer = styled.View`
  background-color: #f6decd;
  padding: 20px;
  border-radius: 20px;
  align-items: center;
  margin-top: 20px;
`;

const MateriaisTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #3d3d3d;
  margin-bottom: 10px;
  text-align: center;
`;

const MateriaisDescription = styled.Text`
  font-size: 16px;
  color: #3d3d3d;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`;

const MateriaisButton = styled.TouchableOpacity`
  background-color: #763f46;
  padding: 12px 20px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
`;

const MateriaisButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const MateriaisButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

const ModalButton = styled.TouchableOpacity`
  background-color: #763f46;
  padding: 10px 17px;
  border-radius: 15px;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: row;
`;

const ModalButtonExit = styled.TouchableOpacity`
  padding: 12px 20px;
  border-radius: 10px;
  margin-bottom: 3px;
  align-items: center;
`;

const ModalButtonTextExit = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const MateriaisButtonIconModal = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 7px;
`;

const ModalContent = styled.View`
  background-color: #fff;
  padding: 17px;
  border-radius: 10px;
  align-items: center;
`;

const Materiais = React.forwardRef((props, ref) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDownload = (url) => {
    Linking.openURL(url);
    toggleModal();
  };

  return (
    <MateriaisContainer ref={ref}>
      <MateriaisTitle>Materiais Jurídicos</MateriaisTitle>
      <MateriaisDescription>
        Acesse os documentos do Projeto Justiceiras e faça download.
      </MateriaisDescription>
      <MateriaisButton onPress={toggleModal}>
        <MateriaisButtonText>Baixar documentos jurídicos</MateriaisButtonText>
        <MateriaisButtonIcon source={require('../assets/icons/arrow-right.png')} />
      </MateriaisButton>
      <Modal isVisible={isModalVisible}>
        <ModalContent>
          <ModalButton onPress={() => handleDownload('https://drive.google.com/file/d/1gBjgdndbtBCgAHsmTZ4cXjxpQGhDM3gC/view')}>
            <ModalButtonText>Baixar Relatório</ModalButtonText>
            <MateriaisButtonIconModal source={require('../assets/icons/download.png')} />
          </ModalButton>
          <ModalButton onPress={() => handleDownload('https://www.justicadesaia.com.br/category/noticias/direito-das-mulheres/decisoes/')}>
            <ModalButtonText>Baixar Boletim</ModalButtonText>
            <MateriaisButtonIconModal source={require('../assets/icons/download.png')} />
          </ModalButton>
          <ModalButton onPress={() => handleDownload('https://drive.google.com/file/d/1lLy42jJSfdlnhb0l5IEVYKNheX36I5sN/view')}>
            <ModalButtonText>Baixar Ofícios</ModalButtonText>
            <MateriaisButtonIconModal source={require('../assets/icons/download.png')} />
          </ModalButton>
          <ModalButtonExit onPress={toggleModal}>
            <ModalButtonTextExit>Fechar</ModalButtonTextExit>
          </ModalButtonExit>
        </ModalContent>
      </Modal>
    </MateriaisContainer>
  );
});

export default Materiais;
