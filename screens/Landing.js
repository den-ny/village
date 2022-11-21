import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";

function Landing({ navigation }) {

  return (
    <View style={styles.container}>

      {/* Big Pic */}
      <View style={styles.bigPic}>
          <Image style={styles.profile_image} source={require('../assets/rocking-horse.png')}></Image>
      </View>
      
      {/* My Posts Section */}
      <View style={styles.words}>

      </View>

      {/* Looking For Section */}
      <View style={styles.lookingFor}>

      </View>

      {/* Would put Menu Here */}
      <View style={styles.bottom}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  /* &&&&&&&&&&&&&&&&&&& Major Views Styles &&&&&&&&&&&&&&&&&&& */

  //Big Container
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: '100%',
    height: '100%'
  },

  //Navbar
  navBar: {
    backgroundColor: "#6AFF4D",
    width: "100%",
    flex: 1
  },

  //Profile View
  profile: {
    backgroundColor: "red",
    width: "100%",
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  //My Posts
  myPost: {
    backgroundColor: "#FFFEF8",
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '5%'

  },

  //Looking For
  lookingFor: {
    backgroundColor: "#FFFEF8",
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '5%'
  },

  //Space on the bottom
  bottom: {
    flex: 0.8
  },

  /* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Child Styles &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

  /* !!!!!!!!!!!!!!!!! Profile !!!!!!!!!!!!!!!!! */

  profile_left: {
    backgroundColor: '#FFFEF8',
    height: '90%',
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  profile_image: {
    width: '90%',
    height: '90%',
    borderRadius: '70%',
    backgroundColor: '#FF6619',
  },

  profile_right: {
    backgroundColor: '#FF99EE',
    height: '90%',
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  profile_lineTwo: {

  },

  profile_lineThree: {

  },

  profile_lineFour: {

  },

  /* !!!!!!!!!!!!!!!!! My Posts !!!!!!!!!!!!!!!!! */

  myPost_title: {
    position: 'absolute',
    top: '5%',
    left: '6%',
    fontSize: 16,
    color: 'black',
  },

  myPost_item: {
    backgroundColor: '#FFFEF8',
    width: '45%',
    height: '70%',
    borderRadius: 25,
    padding: 0
  },

  myPost_item_image: {
    borderRadius: 25,
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },

  myPost_item_details: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    height: '50%',
    backgroundColor: 'rgba(151,141,243,0.80)',
    opacity: '5%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  myPost_item_name: {
    position: 'absolute',
    color: '#FFFEF8',
    top: '10%',
    left: '10%',
  },

  myPost_item_value: {
    color: '#FFFEF8',
  },

  /* !!!!!!!!!!!!!!!!! Looking For !!!!!!!!!!!!!!!!! */

  lookingFor_title: {
    position: 'absolute',
    top: '5%',
    left: '6%',
    fontSize: 16,
    color: 'black',
  },

  lookingFor_item: {
    backgroundColor: '#FFFEF8',
    width: '45%',
    height: '70%',
    borderRadius: 25,
    padding: 0
  },

  lookingFor_item_image: {
    borderRadius: 25,
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },

  lookingFor_item_details: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    height: '50%',
    backgroundColor: 'rgba(151,141,243,0.80)',
    opacity: '5%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  lookingFor_item_name: {
    position: 'absolute',
    color: '#FFFEF8',
    top: '10%',
    left: '10%',
  },
});

export default Landing;