import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert, Dimensions  } from 'react-native';

export default function App() {
  btnFollow = () => {
    Alert.alert(
      'Follow',
      'Follow rồi'
    );
  }
  btnSendMess = () => {
    Alert.alert(
      'send',
      'Gữi rồi'
    );
  }
  return (
    <View style={styles.init}>
      
      <View style={styles.borderLeft}></View>
      <View style={styles.container}>

        <View style={styles.headerTab}>
          <TouchableOpacity style={styles.buttonBack}>
                  <Image source={require('./assets/back.png')}
                  style={styles.nomarButtom}
                  />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonMenu}>
                  <Image source={require('./assets/menu.png')}
                  style={styles.nomarButtom}
                  />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.imageView}>
            <Image source={require('./assets/avatar.png')}
            style={styles.imageAvater}
            />
            </View>
            <View style={styles.infor}>
              <Text style={styles.textBold}>LE Quang Dai Loc</Text>
              <Text style={styles.textNomarl}>Nghe Nghiep: ABC XYZ</Text>
              <View style={styles.buttonHeader}>
                <TouchableOpacity style={styles.followButton} onPress={this.btnFollow}>
                  <Text>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sendMessButton} onPress={this.btnSendMess}>
                  <Image source={require('./assets/send.png')}
                  style={styles.imageSendMess}
                  />
                </TouchableOpacity>
              </View>
            </View> 
            
        </View>
        <View style={styles.countlike}>
          <View style={styles.countPhotos}>
            <Text style={styles.textBold}>210</Text>
            <Text style={styles.textNomarl}>photos</Text>
          </View>
          <View style={styles.countFollowers}>
            <Text style={styles.textBold}>15K</Text>
            <Text style={styles.textNomarl}>Followers</Text>
          </View>
          <View style={styles.countFollowing}>
            <Text style={styles.textBold}>567</Text>
            <Text style={styles.textNomarl}>Following</Text>
          </View>
        </View>
        
          <View style={styles.imageGroup}>
          <ScrollView style={{ flex: 1}}>
            <View style={{flexDirection: "row"}}>
            <View style={styles.imageGroupLeft}>
              {imgData.slice(0,centerImgData).map( item => {
                return <Image source={item.imgSource} style={styles.imageGroupItem}/>;
              })}
            </View>
            <View style={styles.imageGroupRight}>
            {imgData.slice(centerImgData).map( item => {
                return <Image source={item.imgSource} style={styles.imageGroupItem}/>;
              })}
            </View>
            </View>
          </ScrollView>
          </View>
        <View style={styles.bottomTab}>
          <TouchableOpacity style={styles.buttonBotton}>
                  <Image source={require('./assets/bottom.png')}
                  style={styles.nomarButtom}
                  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonAdd}>
                  <Image source={require('./assets/add.png')}
                  style={styles.nomarButtom}
                  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonUser}>
                  <Image source={require('./assets/user.png')}
                  style={styles.nomarButtom}
                  />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderRight}></View>
    </View>
  );
}

const imgData = [
  { id: 1, imgSource: require('./assets/1.png') },
  { id: 2, imgSource: require('./assets/2.png') },
  { id: 3, imgSource: require('./assets/3.png') },
  { id: 4, imgSource: require('./assets/4.png') },
  { id: 5, imgSource: require('./assets/5.png') },
  { id: 6, imgSource: require('./assets/6.png') },
  { id: 7, imgSource: require('./assets/7.png') },
  { id: 8, imgSource: require('./assets/8.png') },
  { id: 9, imgSource: require('./assets/4.png') },
  { id: 10, imgSource: require('./assets/5.png') },
  { id: 11, imgSource: require('./assets/6.png') },
];
const centerImgData = Math.floor(imgData.length / 2);
//const win = Dimensions.get('window');
//const ratio = win.width/541;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  init: {
    flex:1,
    flexDirection: "row",
  },
  headerTab: {
    flex: 0.075,
    flexDirection: "row",
  },
  bottomTab: {
    flex: 0.075,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonBotton:{
      flex: 0.33,
      alignItems: "flex-end",
  },
  buttonAdd:{
    flex: 0.33,
    alignItems: "center",
  },
  buttonUser:{
    flex: 0.33,
    alignItems: "flex-start",
  },
  header: {
    flex: 0.15,
    flexDirection: "row",
  },
  countlike: {
    flex: 0.1,
    flexDirection: "row",
  },
  imageGroup: {
    flex: 0.6,
    flexDirection: 'row',
  },
  borderLeft: {
    flex: 0.1,
    },
  borderRight: {
    flex: 0.1,
  },
  imageAvater:{
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  imageView:{
    justifyContent: "center",
    flex: 0.4,
  },
  infor: {
    flex: 0.6,
    justifyContent: "center",
  },
  followButton: {
    width: 80,
    height: 25,
    backgroundColor: '#3079F7',
    marginRight: 10,
    borderRadius: 20, 
    justifyContent: "center",
    alignItems: "center", 
    
    elevation: 24,
  },
  nomarButtom: {
    width: 25, 
    height: 25, 
    resizeMode: "stretch", 
    opacity: 0.5
  },
  buttonBack: {
    flex: 0.5,
    justifyContent: "center",
  },
  buttonMenu: {
    flex: 0.5,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  sendMessButton: {
    width: 50,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#30C6F7', 
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
  },
  imageSendMess: {
    width: 15,
    height: 15,
  },
  buttonHeader: {
    flexDirection: "row",
    marginTop: 25,
  },
  countPhotos:{
    flex: 0.333,
    justifyContent: "center",
    alignItems: "center",
  },
  countFollowers: {
    flex: 0.333,
    alignItems: "center",
    justifyContent: "center",
  },
  countFollowing: {
    flex: 0.333,
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textNomarl: {
    fontWeight: '100',
    color: '#5E5F5F',
  },
  imageGroupItem: {
    //flex: 1,
    //backgroundColor: "black",
    //resizeMode: "contain",
    width: 140,
    height: 150,
    marginBottom: 3,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  imageGroupLeft: {
    flex: 0.5,
    alignItems: "center",
    marginRight: 2,
  },
  imageGroupRight: {
    alignItems: "center",
    flex: 0.5,
    marginLeft: 2,
  }
});
