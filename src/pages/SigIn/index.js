import React, { useState, useRef, useContext } from 'react';
import { SafeAreaView, View, Image, Text, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { 
  Background, NavbarContainer, Logo, MenuButton, ContentContainer, 
  MenuContainer, TextContainer, Title, Subtitle, List, 
  ListItem, ButtonContainer, ButtonOne, ButtonTwo, ButtonThree, ButtonFour, ButtonFive, 
  ButtonText, ButtonIcon, ImageStrip, StatsContainer, StatsRow, 
  StatBox, StatText, StatDescription, AboutSection, AboutTitle, AboutTextOne,
  AboutTextTwo, AboutTextThree, AboutTextFour, AboutTextFive, AboutTextSix,
  PrinciplesSection, PrinciplesTitle, PrinciplesList, PrincipleItem,
  ProjectSection, ProjectTitle, ProjectTextOne, ProjectTextTwo, ProjectImageOne,
  ProjectImageTwo, IdelizadorProjectSection, IdealizadorTitle, IdealizadorTextOne,
  IdealizadorTextTwo, IdealizadorTextThree, IdealizadorTextFour, IdealizadorImage, 
  IdealizadorImageTwo, InstagramButton, InstagramText, MenuText, MenuButtonOne, MenuButtonTwo,
  MenuButtonThree, MenuButtonFour, MenuButtonFive, MenuButtonSix
} from './styles';

import { AuthContext } from '../../contexts/auth';

import Voluntario from '../../components/voluntario';
import Ajuda from '../../components/ajuda';
import Coletivo from '../../components/coletivo';
import Parceiros from '../../components/parceiros';
import Materiais from '../../components/materiais';
import Apoio from '../../components/apoio';
import Loja from '../../components/loja';
import Galeria from '../../components/galeria';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { signOut } = useContext(AuthContext);

  const scrollViewRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const idealizadorSectionRef = useRef(null);
  const voluntarioSectionRef = useRef(null);
  const helpSectionRef = useRef(null);
  const parceirosSectionRef = useRef(null);
  const materiaisSectionRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openHelpForm = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSft--ccomNpgfVaU0O9Xjpmg_vLmhHsKZ8SG5YiphdMRshpgg/viewform');
  };

  const politicalResearch = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLScJx-Cb3Lfqcsy7irzWw24QN0sCdQaTJlFve_f2jIM86fnAAg/viewform');
  };

  const apresentationJusiceiras = () => {
    Linking.openURL('https://drive.google.com/file/d/16iCPzDrwUB7JstNj6W8Xy6MK-nfo6-29/view');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/justiceirasoficial/');
  };

  const handleVolunterForm = () => {
    Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdRaN8RiBdH7iYLQuZB-78FNr9kZPmsr-vrywpqo_IhBrmUSg/viewform');
  };

  const handlePanicoPress = () => {
    Linking.openURL('tel:190');
  };

  const handleScrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({ x: 0, y, animated: true });
          setMenuOpen(false);
        }
      );
    }
  };

  return (
    <Background>
      <SafeAreaView>
        <NavbarContainer>
          <Logo source={require('../../assets/justiceiras.png')} />
          <MenuButton onPress={toggleMenu}>
            <Image 
              source={menuOpen ? require('../../assets/icons/x.png') : require('../../assets/icons/menu.png')} 
              style={{ width: 24, height: 24 }} 
            />
          </MenuButton>
        </NavbarContainer>
        {menuOpen && (
          <MenuContainer>
            <MenuButtonOne onPress={() => handleScrollToSection(aboutSectionRef)}>
              <MenuText>Projeto</MenuText>
            </MenuButtonOne>
            <MenuButtonTwo onPress={() => handleScrollToSection(idealizadorSectionRef)}>
              <MenuText>Idealizadores</MenuText>
            </MenuButtonTwo>
            <MenuButtonThree onPress={() => handleScrollToSection(voluntarioSectionRef)}>
              <MenuText>Seja voluntária</MenuText>
            </MenuButtonThree>
            <MenuButtonFour onPress={() => handleScrollToSection(helpSectionRef)}>
              <MenuText>Ajuda</MenuText>
            </MenuButtonFour>
            <MenuButtonFive onPress={() => handleScrollToSection(parceirosSectionRef)}>
              <MenuText>Parceiros</MenuText>
            </MenuButtonFive>
            <MenuButtonSix onPress={() => handleScrollToSection(materiaisSectionRef)}>
              <MenuText>Materiais</MenuText>
            </MenuButtonSix>
            <InstagramButton onPress={handleInstagramPress}>
              <InstagramText>Instagram</InstagramText>
              <Image source={require('../../assets/icons/instagram.png')} style={{ width: 20, height: 20 }} />
            </InstagramButton>
          </MenuContainer>
        )}
      </SafeAreaView>
      <ScrollView ref={scrollViewRef}>
        <ContentContainer>
          <TextContainer>
            <Title>Justiceiras</Title>
            <Subtitle>SEJA VOLUNTÁRIA NESSE PROJETO PRÓ-MULHER</Subtitle>
            <List>
              <ListItem>• Orientação jurídica</ListItem>
              <ListItem>• Orientação psicológica</ListItem>
              <ListItem>• Orientação socioassistencial</ListItem>
              <ListItem>• Orientação médica</ListItem>
              <ListItem>• Rede de apoio gratuita</ListItem>
              <ListItem>• Acolhimento on-line</ListItem>
            </List>
          </TextContainer>
          <ButtonContainer>
            <ButtonFive onPress={handlePanicoPress}>
              <ButtonText>Botão do Pânico</ButtonText>
              <ButtonIcon source={require('../../assets/icons/siren.png')}/>
            </ButtonFive>
            <ButtonOne onPress={openHelpForm}>
              <ButtonText>Procure ajuda</ButtonText>
              <ButtonIcon source={require('../../assets/icons/arrow-right.png')} />
            </ButtonOne>
            <ButtonTwo onPress={handleVolunterForm}>
              <ButtonText>Quero ser voluntária</ButtonText>
              <ButtonIcon source={require('../../assets/icons/arrow-right.png')} />
            </ButtonTwo>
            <ButtonThree onPress={politicalResearch}>
              <ButtonText>Pesquisa Política de Saia</ButtonText>
              <ButtonIcon source={require('../../assets/icons/arrow-right.png')} />
            </ButtonThree>
            <ButtonFour onPress={apresentationJusiceiras}>
              <ButtonText>Apresentação</ButtonText>
              <ButtonIcon source={require('../../assets/icons/arrow-right.png')} />
            </ButtonFour>
          </ButtonContainer>
          <ImageStrip source={require('../../assets/safari-pinned-tab.png')} />
          <StatsContainer>
            <StatsRow>
              <StatBox>
                <StatText>+16.700</StatText>
                <StatDescription>vítimas atendidas pelo projeto</StatDescription>
              </StatBox>
              <StatBox>
                <StatText>+16.000</StatText>
                <StatDescription>voluntárias ativas inscritas</StatDescription>
              </StatBox>
            </StatsRow>
            <StatsRow>
              <StatBox>
                <StatText>+50.000</StatText>
                <StatDescription>atendimentos em estados da Federação e no DF</StatDescription>
              </StatBox>
              <StatBox>
                <StatText>2.012</StatText>
                <StatDescription>psicólogas oferecendo orientação psicológica</StatDescription>
              </StatBox>
            </StatsRow>
            <StatsRow>
              <StatBox>
                <StatText>5.289</StatText>
                <StatDescription>profissionais do direito oferecendo orientação jurídica</StatDescription>
              </StatBox>
              <StatBox>
                <StatText>5.671</StatText>
                <StatDescription>mulheres compartilhando experiência de vida na rede de apoio</StatDescription>
              </StatBox>
            </StatsRow>
            <StatsRow>
              <StatBox>
                <StatText>+100</StatText>
                <StatDescription>médicas orientando mulheres via telemedicina</StatDescription>
              </StatBox>
              <StatBox>
                <StatText>2.076</StatText>
                <StatDescription>assistentes sociais engajadas</StatDescription>
              </StatBox>
            </StatsRow>
          </StatsContainer>
          <AboutSection ref={aboutSectionRef}>
            <AboutTitle>Quem somos? 🤔 </AboutTitle>
            <AboutTextOne>Na China, onde a COVID-19 deixou mais de três mil mortos, ONGs informaram que denúncias de agressões aumentaram três vezes desde o início do isolamento implantado no país. A explicação para esse crescimento é simples: impedidos de sair de casa, vítima e agressor passaram a conviver mais tempo juntos.</AboutTextOne>
            <AboutTextTwo>O Brasil já foi considerado em 2015 o quinto país do mundo com maior número de feminicídios e, atualmente, autoridades já perceberam um aumento do número de denúncias de violência contra a mulher por conta das práticas de isolamento domiciliar relacionadas à prevenção da transmissão do citado vírus. De acordo com a Ouvidoria Nacional de Direitos Humanos, houve um aumento de quase 9% de ligações para o canal que recebe esse tipo de denúncia, o número de denúncias saltou de 829, de 01 de março a 16 de março, para 978, do dia 17 ao dia 25, primeiro período que o isolamento social se iniciou no Brasil.</AboutTextTwo>
            <AboutTextThree>O Projeto “Justiceiras” visa suprir a necessidade de canais e sistemas alternativos para combater e prevenir à violência de gênero. Exatamente por isso, a advogada especialista em Direitos das Mulheres e Promotora de Justiça (2003-2022) Gabriela Manssur – “Instituto Justiça de Saia” -, desenvolveu o projeto “Justiceiras”.</AboutTextThree>
            <AboutTextFour>Para atender meninas e mulheres vítimas de violência doméstica, os institutos pretendem reunir o maior número possível de mulheres voluntárias nas áreas do Direito, Psicologia e Assistência Social de todo o Brasil, para que acolham, apoiem e prestem orientação técnica à distância, por meio do atendimento virtual. Também há busca por mulheres que desejem compartilhar experiências de vida, profissional e que possuem empatia com o tema da violência contra a mulher, em exercício de solidariedade e esperança.</AboutTextFour>
            <AboutTextFive>O “Justiceiras” possibilitará uma orientação para que mulheres em situação de violência realizem quando desejarem, o boletim de ocorrência on-line ou presencial, ou façam o pedido de medidas protetivas. De outro modo, será uma rede de mulheres unidas para informar e, antes mais nada, apoiar, fortalecer e encorajar as meninas e mulheres que estão em situação de violência doméstica.</AboutTextFive>
            <AboutTextSix>Esse período despertou em muitas pessoas a vontade de ajudar, um sentimento de generosidade e solidariedade com o próximo. Caminhando nessa esteira, o projeto reuniu essas mulheres que acreditam que sim, existe vida após a violência e formaram um grande exército de voluntárias “Justiceiras”: a primeira rede interdisciplinar on-line no Brasil.</AboutTextSix>
          </AboutSection>
          <PrinciplesSection>
            <PrinciplesTitle>Princípios Justiceiras</PrinciplesTitle>
            <PrinciplesList>
              <PrincipleItem>1. Acesso</PrincipleItem>
              <PrincipleItem>2. Acolhimento</PrincipleItem>
              <PrincipleItem>3. Comprometimento</PrincipleItem>
              <PrincipleItem>4. Coragem</PrincipleItem>
              <PrincipleItem>5. Dignidade</PrincipleItem>
              <PrincipleItem>6. Elo</PrincipleItem>
              <PrincipleItem>7. Ética</PrincipleItem>
              <PrincipleItem>8. Esperança</PrincipleItem>
              <PrincipleItem>9. Fortalecimento</PrincipleItem>
              <PrincipleItem>10. Generosidade</PrincipleItem>
              <PrincipleItem>11. Liberdade</PrincipleItem>
              <PrincipleItem>12. Saúde</PrincipleItem>
              <PrincipleItem>13. Empatia</PrincipleItem>
              <PrincipleItem>14. Cuidado</PrincipleItem>
            </PrinciplesList>
          </PrinciplesSection>
          <ProjectSection>
            <ProjectTitle>Sobre o Projeto</ProjectTitle>
            <ProjectTextOne>O projeto Justiceiras foi idealizado em meio à preocupação com o aumento dos casos de violência doméstica durante o isolamento social. Para se ter uma ideia, somente em março foram decretadas 2.500 medidas protetivas em caráter de urgência, enquanto, no mês anterior, em fevereiro, foram 1.934. Houve também o aumento no número de prisões em flagrante devido a casos de violência doméstica em aproximadamente 50%. Em fevereiro, foram registradas 177, e, em março, subiram para 268.</ProjectTextOne>
            <ProjectImageOne source={require('../../assets/justiceiras-imagem-01.png')} />          
            <ProjectTextTwo>Este cenário levou a promotora a buscar parceiros e a reunir uma rede de voluntárias para prestar apoio às vítimas. Profissionais das áreas jurídica, psicológica, saúde e assistência social se engajaram na iniciativa e se colocaram à disposição para prestar orientações nos âmbitos jurídicos, psicológicos, médicos, assistência social, e, ainda, oferecer uma rede de acolhimento para apoiar mulheres em situação de violência nessa difícil fase de buscar ajuda e fazer uma denúncia.</ProjectTextTwo>
            <ProjectImageTwo source={require('../../assets/justiceiras-imagem-02.png')} />          
          </ProjectSection>
          <IdelizadorProjectSection ref={idealizadorSectionRef}>
            <IdealizadorTitle>Idealizadora do Projeto</IdealizadorTitle>
            <IdealizadorTextOne>Gabriela Manssur atualmente é advogada especialista em Direitos das Mulheres e presidente do Instituto Justiça de Saia, que desde 2011 é pioneiro na implementação de projetos sociais e políticas públicas sobre Direitos das Mulheres.</IdealizadorTextOne>
            <IdealizadorImageTwo source={require('../../assets/justiceiras-imagem-04.png')} />          
            <IdealizadorTextTwo>Criadora da frase Lugar de Mulher é Onde ela Quiser Gabriela é idealizadora do Compliance Feminino, Tem Saída, Tempo de Despertar, Menssana, Movimento pela Mulher, entre outros de grande impacto para a sociedade brasileira.</IdealizadorTextTwo>
            <IdealizadorTextThree>Ex-promotora de Justiça do Ministério Público do Estado de São Paulo (2003-2022), atuou em diversos casos emblemáticos e de grande repercussão.</IdealizadorTextThree>
            <IdealizadorTextFour>Referência na área com a construção de uma carreira sólida e trajetória reconhecida, depois de quase duas décadas dedicadas ao cargo de Promotora de Justiça na linha de frente da prevenção e combate à violência contra a mulher, Gabriela exonerou-se do Ministério Público com o firme propósito de ampliar sua atuação na proteção dos Direitos das Mulheres para atender a TODAS que escutam a sua voz.</IdealizadorTextFour>
            <IdealizadorImage source={require('../../assets/justica-de-saia.png')} />          
          </IdelizadorProjectSection>
          <Voluntario ref={voluntarioSectionRef}/>
          <Ajuda ref={helpSectionRef}/>
          <Coletivo/>
          <Parceiros ref={parceirosSectionRef}/>
          <Materiais ref={materiaisSectionRef}/>
          <Apoio/>
          <Loja/>
          <Galeria/>
        </ContentContainer>
      </ScrollView>
    </Background>
  );
}
