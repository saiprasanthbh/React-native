import React from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity,Image,ImageBackground,Button} from 'react-native';
import {Card} from 'react-native-elements';
import productsdata from './products';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
export default class Cart extends React.Component{
    state={
        Cart:[],
        Title:[],
        CartCounter:0
    }

componentDidMount()
{
//this.setState({Cart:this.state.Cart.concat(this.props.Cart)})


productsdata.map((d)=>{this.setState({Title:this.state.Title.concat(d.title)})})
firebase.database().ref('/users').on('value',snapshot=>{
    var temp;
    temp=snapshot.val().Cart;
    this.setState({Cart:temp})
})

firebase.database().ref('/users').on('value',snapshot=>{
    var temp;
    temp=snapshot.val().CartCounter;
    this.setState({CartCounter:temp})
})

}
RemoveFromCart=()=>
{
    this.state.Cart.splice(this.state.Cart.indexOf(item.id),1),this.setState({Cart:this.state.Cart,CartCounter:this.state.CartCounter-1})
}


update=()=>{
    Actions.home(),firebase.database().ref('/users').update({Cart:this.state.Cart}),firebase.database().ref('/users').update({CartCounter:this.state.CartCounter})
}

    render()
    {

      if(!this.state.Cart)
      {
          return(
            <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:'https://cdn3.vectorstock.com/i/1000x1000/78/57/shopping-cart-icon-isolated-on-purple-background-vector-21547857.jpg'}}>
              <Text style={styles.textStyle}>No-Items In Cart</Text>
              </ImageBackground>
          )
      }


        return(
<ImageBackground style={{width:null,height:null,flex:1}} source={{uri:'https://cdn3.vectorstock.com/i/1000x1000/78/57/shopping-cart-icon-isolated-on-purple-background-vector-21547857.jpg'}}>
<View>

<Text></Text>
<Text style={styles.logoutButtonStyle} onPress={this.update}>Logout</Text>
<FlatList extraData={this.state} data={productsdata.filter((d)=>{if(this.state.Cart.includes(d.id)){{return d}}})} renderItem={({item})=>{return<TouchableOpacity><Card title={item.title}>
    
    <Image style={styles.imageStyle} source={item.src_1}></Image><Button onPress={this.RemoveFromCart} title="Remove-From-Cart"></Button></Card></TouchableOpacity>}}></FlatList>
    </View>
    </ImageBackground>
        )
    }
}


const styles=StyleSheet.create({
    textStyle:{
        color:"red",
        fontSize:25,
        alignSelf:"center",
        justifyContent:"center"
    },
    logoutButtonStyle:{
        alignSelf:"center",
        color:"black",
        fontSize:20
    },
    imageStyle:{
        width:120,
        height:220,
        alignSelf:"center"
    }

})