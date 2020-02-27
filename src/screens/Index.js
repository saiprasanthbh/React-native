import React from 'react';
import {Text,View} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';
import App from './App'
import Cart from './Cart'
import firebase from 'firebase'
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);

console.disableYellowBox = true;

export default class Index extends React.Component{
    componentWillMount()
    {
      try{
firebase.initializeApp({
apiKey: "AIzaSyA8fVeqAU1QsHbWS7EfVQBLnU_oIhcrGTc",
authDomain: "loginform-5a2b1.firebaseapp.com",
databaseURL: "https://loginform-5a2b1.firebaseio.com",
projectId: "loginform-5a2b1",
storageBucket: "loginform-5a2b1.appspot.com",
messagingSenderId: "437817913958",
appId: "1:437817913958:web:f476596568db30bc"
});
}
catch(error)
{
console.log(error);

}
    }
    render()
    {
        return(
<Router>
<Scene key="root" hideNavBar>
<Scene key="home"  title="Home" titleStyle={{alignSelf:"center"}}>
    <Scene key="home" component={App}></Scene>
</Scene>
<Scene key="cart" title="Cart">
<Scene key="cart" component={Cart} ></Scene>

</Scene>

</Scene>
</Router>


        )
    }
}
