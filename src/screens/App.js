import React from 'react';
import {ImageBackground,Text,View} from 'react-native';
import {Router,Scene,Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import AllocationType from './AllocationType';
import Workspace from './Workspace';
import Admin from './Admin';
import Start from './Start';
import LoginForm from './LoginForm';
import AdminLoginForm from './AdminLoginForm';
import AddUsers from './AddUsers';
import Calendar from './Calendar';
import CalendarOut from './CalendarOut';
import Conference from './Conference';
import ChangeStatus from './ChangeStatus';
import More from './More';
import ChangePasswordForAdmin from './ChangePasswordForAdmin';
export default class App extends React.Component{

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
})
    
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

<Scene key="main" title="Freez">
<Scene key="main" component={AllocationType} initial></Scene>
<Scene key="start" component={Start}></Scene>
</Scene>

<Scene key="login" title="Login Form">
<Scene key="login" component={LoginForm}></Scene>
</Scene>

<Scene key="workspace" title="Select Workspace">
<Scene key="workspace" component={Workspace}></Scene>
</Scene>

<Scene key="adminlogin" title="Login Form">
<Scene key="adminlogin" component={AdminLoginForm}></Scene>
</Scene>

<Scene key="admin">
<Scene key="admin" component={Admin}></Scene>
</Scene>

<Scene key="more">
<Scene key="more" component={More}></Scene>
</Scene>

<Scene key="addusers">
<Scene key="addusers" component={AddUsers}></Scene>
</Scene>

<Scene key="changestatus" title="Change Status">
<Scene key="changestatus" component={ChangeStatus}></Scene>
</Scene>

<Scene key="changepassword" title="Change Password">
<Scene key="changepassword" component={ChangePasswordForAdmin}></Scene>
</Scene>

<Scene key="conference" title="Select Conference Romm">
<Scene key="conference" component={Conference}></Scene>
</Scene>


<Scene key="calendar" title="Check-In">
<Scene key="calendar" component={Calendar} initial></Scene>
</Scene>

<Scene key="calendarout" title="Check-Out">
<Scene key="calendarout" component={CalendarOut}></Scene>
</Scene>


</Scene>
</Router>

)





}



}