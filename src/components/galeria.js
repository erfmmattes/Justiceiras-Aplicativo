import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

const GaleriaContainer = styled.View`
  background-color: #ffe4e1;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
  align-items: center;
`;

const GaleriaTitle = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #C71585;
  margin-bottom: 10px;
`;

const GaleriaDescription = styled.Text`
  font-size: 16px;
  color: #C71585;
  margin-bottom: 20px;
  text-align: center;
`;

const GaleriaButton = styled.TouchableOpacity`
  background-color: #C71585;
  padding: 15px 20px;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const GaleriaButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 10;
`;

const CloseButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const ImageGallery = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 20px;
  background-color: #f6decd;
`;

const GalleryImage1 = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const GalleryImage2 = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const GalleryImage3 = styled.Image`
  width: 100%;
  height: 190px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const GalleryImage4 = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const GalleryImage5 = styled.Image`
  width: 100%;
  height: 130px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const GalleryImage6 = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const GalleryImage7 = styled.Image`
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const GalleryImage8 = styled.Image`
  width: 100%;
  height: 170px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const GalleryImage9 = styled.Image`
  width: 40%;
  height: 120px;
  margin-bottom: 10px;
  border-radius: 25px;
`;

const GaleryText = styled.Text`
  width: 80% ;
  font-size: 16px;
  color: #763f46;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 900;
`;

const Galeria = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <GaleriaContainer>
      <GaleriaTitle>Galeria das Justiceiras</GaleriaTitle>
      <GaleriaDescription>Veja as fotos das nossas voluntárias e suas atividades.</GaleriaDescription>
      <GaleriaButton onPress={openModal}>
        <GaleriaButtonText>Ver Galeria</GaleriaButtonText>
      </GaleriaButton>

      <Modal isVisible={modalVisible} animationType="slide" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, width: '100%', backgroundColor: '#f6decd', borderRadius: 10, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <CloseButton onPress={closeModal}>
              <CloseButtonText>X</CloseButtonText>
            </CloseButton>
            <ImageGallery contentContainerStyle={{ alignItems: 'center' }}>
              <GaleryText>Sueli Amoedo - Liderança Nacional Jurídica</GaleryText>
              <GalleryImage9 source={require('../assets/galeria/GALERIA9.jpg')}/>
              <GalleryImage1 source={require('../assets/galeria/GALERIA1.png')} />
              <GalleryImage2 source={require('../assets/galeria/GALERIA2.png')} />
              <GalleryImage3 source={require('../assets/galeria/GALERIA3.png')} />
              <GalleryImage4 source={require('../assets/galeria/GALERIA4.png')} />
              <GalleryImage5 source={require('../assets/galeria/GALERIA5.png')} />
              <GalleryImage6 source={require('../assets/galeria/GALERIA6.png')} />
              <GalleryImage7 source={require('../assets/galeria/GALERIA7.png')} />
              <GalleryImage8 source={require('../assets/galeria/GALERIA8.png')} />
            </ImageGallery>
          </View>
        </View>
      </Modal>
    </GaleriaContainer>
  );
};

export default Galeria;
