import React from 'react';
import {Text,View,StyleSheet,ScrollView,FlatList,ImageBackground, TouchableHighlight, TouchableOpacity,Image, requireNativeComponent,Button} from 'react-native';
import {Card,Badge} from 'react-native-elements';
import productsdata from './products';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
export default class App extends React.Component{


    state={
        ProductsData:[],
        Titles:[],
        Prices:[],
        Images_Primary:[],
        SelectedSize:"M",
        AddToCart:[],
        CartCounter:0
    }
    componentWillMount()
    {
productsdata.map((item)=>{this.state.Titles.push(item.title)})
productsdata.map((item)=>{this.state.Prices.push(item.price)})
productsdata.map((item)=>{this.state.Images_Primary.push(item.src_1)})


    }
    componentDidMount()
    {
        firebase.database().ref('/users').on('value',snapshot=>{
var temp;
 temp=snapshot.val().Cart
this.setState({AddToCart:temp})
        })


        firebase.database().ref('/users').on('value',snapshot=>{
            var temp;
             temp=snapshot.val().CartCounter
            this.setState({CartCounter:temp})
                    })



    }

    update=()=>{
        Actions.cart(),firebase.database().ref('/users').update({Cart:this.state.AddToCart}),firebase.database().ref('/users').update({CartCounter:this.state.CartCounter})
    }

    addToCart=()=>
    {
        this.setState({AddToCart:this.state.AddToCart.concat(productsdata[this.state.Titles.indexOf(item)].id),CartCounter:this.state.CartCounter+1})
    }

    render()
    { 
        
              

            return(
                <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:'https://cdn3.vectorstock.com/i/1000x1000/78/57/shopping-cart-icon-isolated-on-purple-background-vector-21547857.jpg'}}>
                <ScrollView>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                   <View style={styles.containerStyle}>
                   <Badge  onPress={()=>{this.setState({SelectedSize:"S"})}} badgeStyle={styles.badgeStyle} value="S"></Badge>
                   <Badge onPress={()=>{this.setState({SelectedSize:"M"})}} badgeStyle={styles.badgeStyle} value="M"></Badge>
                   <Badge onPress={()=>{this.setState({SelectedSize:"L"})}} badgeStyle={styles.badgeStyle}value="L"></Badge>
                   <Badge onPress={()=>{this.setState({SelectedSize:"XL"})}} badgeStyle={styles.badgeStyle} value="XL"></Badge>
                   <Badge onPress={()=>{this.setState({SelectedSize:"ML"})}} badgeStyle={styles.badgeStyle} value="ML"></Badge>
                     </View>
                    <TouchableOpacity onPress={this.update}><Badge badgeStyle={styles.counterStyle} value={this.state.CartCounter}></Badge><Image style={styles.iconStyle} source={require('./Icons/cart.png')}></Image></TouchableOpacity>
    <FlatList data={this.state.Titles.filter((item)=>{ if(productsdata[this.state.Titles.indexOf(item)].availableSizes.includes(this.state.SelectedSize)){{if(!this.state.AddToCart.includes(productsdata[this.state.Titles.indexOf(item)].id)){return item}}} })} renderItem={({item})=>{return<TouchableOpacity><Card title={item}><Image style={styles.imageStyle} source={this.state.Images_Primary[this.state.Titles.indexOf(item)]}></Image><Text style={{alignSelf:"center"}}>Price:$ {this.state.Prices[this.state.Titles.indexOf(item)]}</Text><Button onPress={this.addToCart} title="Add-To-Cart"></Button></Card></TouchableOpacity>}}></FlatList>    

     </ScrollView>
     </ImageBackground>
            )
    }
}

const styles=StyleSheet.create({
    containerStyle:{
        flexDirection:"row",
        alignSelf:"center"
    },
    badgeStyle:{
        height:30,
        width:30,
        marginLeft:10
    },
    counterStyle:{
        height:20,
        width:20,
        marginLeft:320
    },
    iconStyle:
    {
        width:50,
        height:50,
        alignSelf:"flex-end"
    },
    imageStyle:{
        width:120,
        height:220,
        alignSelf:"center"
    }
})