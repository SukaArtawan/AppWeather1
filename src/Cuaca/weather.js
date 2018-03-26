import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class BelajarLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
    }
};
}
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city+ '&appid=9817054fa552a7600413c065c4e410cb&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
      }
    });
  }
  );

}
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>*Prakiraan Cuaca*</Text>
        </View>

        <View style={styles.boxSlider}>
          <Text style={styles.textSlider}>Masukkan Nama Kota :</Text>
          <TextInput style = {styles.textTampilkan}
              placeholder="Masukkan Kota"
              onChangeText={(city)=>this.setState({city})}
          />
          <Button
            onPress={() => this.getWeather()}
            title="Tampilkan"
            accessibilityLabel="Klik Untuk Menampilkan"
          />
        </View>

        <View style={styles.boxContent}>
            <Text>Kota : {this.state.city}</Text>
            <Text>Suhu : {this.state.forecast.temp}</Text>
            <Text>Deskripsi : {this.state.forecast.description}</Text>
            <Text>Cuaca : {this.state.forecast.main}</Text>
        </View>

        <View style={styles.boxFoot}>
          <Text style={styles.textFoot}>
          JaenKuliahdiPTI{'\n'}
          </Text>
          <Text style={styles.textFoot}>
          Copyright @Dante_Amaral
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex:1,
    backgroundColor: '#DCEDC8',
    flexDirection: 'column'
  },
  boxHeader: {
    flex: 1,
    backgroundColor: '#69F0AE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  boxSlider: {
    flex: 3,
    backgroundColor: '#81C784',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15
  },
  boxContent: {
    flex: 4,
    backgroundColor: '#69F0AE',
    flexDirection: 'column',
    //justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    padding: 10
  },
  boxFoot: {
    flex: 2,
    backgroundColor: '#00E676',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  textHeader: {
    fontSize: 25,
    fontWeight:'bold',
    color: 'black'
  },
  textSlider: {
    fontSize: 20,
    color: 'black',
    flex: 1,
    padding: 10
  },
  textTampilkan:{
    height: 45,
    width: 150,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 40
  },
  textContent: {
    fontSize: 25,
    color: 'white',
    textAlign: 'justify'
  },
  textFoot: {
    fontSize: 13,
    color: 'black',
    fontWeight:'bold',
    //padding: 10
  }
});
