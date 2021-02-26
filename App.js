
import React from 'react';
import Tts from 'react-native-tts';
import call from 'react-native-phone-call';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NUMBER: " ",
      AMOUNT: "",
      AcNUMBER:""

    };
  }
  handleNumber = text => {
    this.setState({ NUMBER: text });
  };
  handleAmount = text => {
    this.setState({ AMOUNT: text });
  };
  handleAcNUMBER = text => {
    this.setState({AcNUMBER : text})


  };


  getBalance = async () => {
    try {
      let response = await fetch(
        'https://sandbox.momodeveloper.mtn.com/collection/v1_0/account/balance', {
        'method': 'GET', 'headers': {
          'Ocp-Apim-Subscription-Key': '756d65210f384bc6b835932101f70491',
          'X-Target-Environment': 'sandbox',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSMjU2In0.eyJjbGllbnRJZCI6IjczOTcxNmYzLTQ5NDMtNDU0My1hMzg0LWIxMGM0YTE0NDRhYyIsImV4cGlyZXMiOiIyMDIxLTAyLTA4VDA5OjM0OjQ2LjMyNSIsInNlc3Npb25JZCI6ImY5Mjc5M2NkLTJkNzMtNDk1NS1iMThhLWQ4MmFmY2JlZjIwYSJ9.Ppmdn2SBSUV5TqhK9AQh4LSQ8TTw36f37vXLvBMD8NFMOD0CNkAdZKPt-vmUV5VRbHmK4RQ4eYbXro4neGVrMZzgyKbuXSxWNdkToAzedAC5YsrrooL0ir-IhLCKbmDrucLFtOireiJC94OWwlERULhhvD9en3JwtM-t4vGucedz-gchGn9qUUTdD4eXSrsMudroGRBJdB4ded2nMz2ob6iEhWcViyshVxBXZXOEICTbXA8KtoxerIU53UmUgszkwfmR-kjDC11qfChFYhIea9N3D5un4pNE-pImXSJ8eD9rDQwUsB_RkQmtyoCKih_xctdqkMBc0baHUTPwmAlDtQ'
        }
      }
      );
      let json = await response.json();
      return json.availableBalance;
    } catch (error) {
      console.error(error);
    }
  };
  triggerCall = (task) => {
    // Check for perfect 10 digit length
    if (task == 'a') {
      const airtimeB = "*131" + encodeURIComponent('#');

      const args = {
        number: airtimeB,
        prompt: true,
      };
      // Make a call
      //RNImmediatePhoneCall.immediatePhoneCall('3');
      call(args).catch(console.error);

    } else if (task == 'b') {
      const mobileMb = "*165*8*1" + encodeURIComponent('#');

      const args = {
        number: mobileMb,
        prompt: true,
      };
      // Make a call
      call(args).catch(console.error);



    } else if (task == 'c') {
      const dataB = "*175*4" + encodeURIComponent('#');

      const args = {
        number: dataB,
        prompt: true,
      };
      // Make a call
      call(args).catch(console.error);
    } else if (task == 'd') {
      const sendMoney = `*165*1*1*${this.state.NUMBER}*${this.state.AMOUNT}*ss` + encodeURIComponent('#');

      const args = {
        number: sendMoney,
        prompt: true,
      };
      // Make a call
      if(this.state.NUMBER.length === 10){
        call(args).catch(console.error);


      }else{
        Tts.speak('invalid number entered');
        alert("Should be 10 characters in length !");

      }
      


    } else if (task == 'e') {
      const freaky = '*149*10' + encodeURIComponent('#');

      const args = {
        number: freaky,
        prompt: true,
      };
      // Make a call
      Tts.speak('only use this on friday');

      call(args).catch(console.error);




    } else if (task == 'f') {
      const voiceBundle = '*165*2*2*1*1' + encodeURIComponent('#');

      const args = {
        number: voiceBundle,
        prompt: true,
      };
      // Make a call
      
      call(args).catch(console.error);




    }else if (task == 'g') {
      const dataBundle = '*165*2*3*1' + encodeURIComponent('#');

      const args = {
        number: dataBundle,
        prompt: true,
      };
      // Make a call
      
      call(args).catch(console.error);




    }else if (task == 'h') {
      const yaka = `*165*4*1*1*2*${this.state.AcNUMBER}`+ encodeURIComponent('#');

      const args = {
        number: yaka,
        prompt: true,
      };
      // Make a call
      
      if(this.state.AcNUMBER.length === 11){
        call(args).catch(console.error);


      }else{
        Tts.speak('invalid account number entered');
        alert("Should be 11 characters in length!");

      }




    }else if(task == 'i'){
      const dataBundle = '*165*4*2*1*1' + encodeURIComponent('#');

      const args = {
        number: dataBundle,
        prompt: true,
      };
      // Make a call
      
      call(args).catch(console.error);



    }else if(task == 'j'){
      const dataBundle = '*165*4*2*1*2' + encodeURIComponent('#');

      const args = {
        number: dataBundle,
        prompt: true,
      };
      // Make a call
      
      call(args).catch(console.error);



    }





  };



  render() {

    return (
      <View style={styles.container}>
         <TouchableOpacity
          onPress={()=>{Tts.speak('its all about convenience')}}
          >
          <Text style={styles.titleText}>M
          <Text style={{color:'red',fontSize:70}}>e</Text>
          KKA
          <Text style={{color:'red',fontSize:60}}>?</Text>
          </Text>
          </TouchableOpacity>
        <ScrollView>
         
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => { this.triggerCall('a') }}
          >
            <Text style={styles.submitButtonText}>AIRTIME BALANCE (ALL) </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mtnButton}
            onPress={() => { this.triggerCall('b') }}
          >
            <Text style={styles.submitButtonText}>CASH BALANCE (MTN) </Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={styles.airtelButton}
            onPress={() => { this.triggerCall('c') }}
          >
            <Text style={styles.submitButtonText}>DATA BALANCE(AIRTEL) </Text>
          </TouchableOpacity>



          <TouchableOpacity
            style={styles.airtelButton}
            onPress={() => { this.triggerCall('e') }}
          >
            <Text style={styles.submitButtonText}>FREAKY FRIDAY(AIRTEL) </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.airtelButton}
            onPress={() => { this.triggerCall('f') }}
          >
            <Text style={styles.submitButtonText}>VOICE BUNDLES (MTN) </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.airtelButton}
            onPress={() => { this.triggerCall('g') }}
          >
            <Text style={styles.submitButtonText}>DATA BUNDLES (MTN) </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.airtelButton}
            onPress={() => { this.triggerCall('i') }}
          >
            <Text style={styles.submitButtonText}>PAY DStv (MTN) </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.airtelButton}
            onPress={() => { this.triggerCall('j') }}
          >
            <Text style={styles.submitButtonText}>PAY Gotv (MTN) </Text>
          </TouchableOpacity>
           <View style={styles.balances}>


            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="NUMBER "
              placeholderTextColor="black"
              autoCapitalize="none"
              onChangeText={text => this.handleNumber(text)}
              backgroundColor="snow"
            />
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="AMOUNT TO SEND"
              placeholderTextColor="black"
              autoCapitalize="none"
              secureTextEntry={false}
              onChangeText={text => this.handleAmount(text)}
              backgroundColor="snow"
            />

            <TouchableOpacity
              style={styles.audioButton}
              onPress={() => { this.triggerCall('d') }}
            >
              <Text style={styles.submitButtonText}> SEND MONEY (MTN) </Text>
            </TouchableOpacity>


          </View>
          <View style ={styles.balances}>
          <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="ACCOUNT NUMBER"
              placeholderTextColor="black"
              autoCapitalize="none"
              secureTextEntry={false}
              onChangeText={text => this.handleAcNUMBER(text)}
              backgroundColor="snow"
            />
            
            <TouchableOpacity
              style={styles.audioButton}
              onPress={() => { this.triggerCall('h') }}
            >
              <Text style={styles.submitButtonText}>PAY YAKA (MTN) </Text>
            </TouchableOpacity>
            

          </View>





        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "snow",

  },
  input: {
    margin: 10,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius:5

    

  },
  submitButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    alignItems: "center",
    height: 40,
    borderRadius: 5
  },
  submitButtonText: {
    color: "snow",
    fontSize:16,
    fontWeight:'600',
    fontStyle:'normal'
  },
  audioButton: {
    backgroundColor: "red",
    padding: 10,
    margin: 15,
    alignItems: "center",
    height: 40,
    borderRadius: 5,
    
  


  },

  balances: {
    backgroundColor: 'black',
    margin: 15,
    borderRadius: 5,
    

    



  },
  airtelButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    alignItems: "center",
    height: 40,
    borderRadius: 5
  },
  mtnButton: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    alignItems: "center",
    height: 40,
    borderRadius: 5
  },
  titleText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 50,
    textDecorationLine: 'underline',
    color:'black'
  }


});
