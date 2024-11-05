import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const logos = [
  { src: require('../assets/parceiros/99.png'), alt: 'Logo 1' },
  { src: require('../assets/parceiros/amago.png'), alt: 'Logo 2' },
  { src: require('../assets/parceiros/azul.png'), alt: 'Logo 3' },
  { src: require('../assets/parceiros/bpw-sp.png'), alt: 'Logo 4' },
  { src: require('../assets/parceiros/cury.png'), alt: 'Logo 5' },
  { src: require('../assets/parceiros/graiche.png'), alt: 'Logo 6' },
  { src: require('../assets/parceiros/grupofleury.png'), alt: 'Logo 7' },
  { src: require('../assets/parceiros/grupolactalis.png'), alt: 'Logo 8' },
  { src: require('../assets/parceiros/grupomulheresdobrasil.png'), alt: 'Logo 9' },
  { src: require('../assets/parceiros/instituto-butantan.png'), alt: 'Logo 10' },
  { src: require('../assets/parceiros/ladydriver.png'), alt: 'Logo 11' },
  { src: require('../assets/parceiros/magalu.png'), alt: 'Logo 12' },
  { src: require('../assets/parceiros/marianas.png'), alt: 'Logo 13' },
  { src: require('../assets/parceiros/mercedes.png'), alt: 'Logo 14' },
  { src: require('../assets/parceiros/procuradoria-especial-da-mulher.png'), alt: 'Logo 15' },
  { src: require('../assets/parceiros/rappi.png'), alt: 'Logo 16' },
  { src: require('../assets/parceiros/re.png'), alt: 'Logo 17' },
  { src: require('../assets/parceiros/romulocarvalho.png'), alt: 'Logo 18' },
  { src: require('../assets/parceiros/um-novo-olhar.png'), alt: 'Logo 19' },
  { src: require('../assets/parceiros/ummb.png'), alt: 'Logo 20' },
  { src: require('../assets/parceiros/vamos-mulherar.png'), alt: 'Logo 21' },
  { src: require('../assets/parceiros/verifact.png'), alt: 'Logo 22' },
  { src: require('../assets/parceiros/wstudio.png'), alt: 'Logo 23' },
];

const Parceiros = React.forwardRef((props, ref) => {
  return (
    <ScrollView contentContainerStyle={styles.container} ref={ref}>
      <Text style={styles.title}>Parceiros</Text>
      <View style={styles.logosContainer}>
        {logos.map((logo, index) => (
          <Image key={index} source={logo.src} style={styles.logo} />
        ))}
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  logosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 10,
    resizeMode: 'contain',
  },
});

export default Parceiros;
