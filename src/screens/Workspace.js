import React from 'react';
import {View,Text,FlatList,TouchableOpacity,TouchableHighlight,Button,Image,ImageBackground} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export default class Workspace extends React.Component{
    state={
WorkspaceAllocations:[],
status:[],
requestedWst:"",
workspacerequests:[],
count:0,
users:"",
Email:[],
Time:[]
  }
  componentDidMount()
  {
firebase.database().ref('/users/workspaces/bucket_1').on('value',snapshot=>{

var temp;
temp=snapshot.val().workspace;
this.setState({
WorkspaceAllocations:temp

})


})


firebase.database().ref('/users/workspaces/status/bucket_1').on('value',snapshot=>{

var temp;
temp=snapshot.val().statuses;
this.setState({
status:temp

})


})


firebase.database().ref('/users/admin/workspace').on('value',snapshot=>{

var temp;
if(snapshot.val().requests)
{
temp=snapshot.val().requests;

this.setState({
  workspacerequests:temp
})
}
})

firebase.database().ref('/users/admin/workspace').on('value',snapshot=>{
var temp;
if(snapshot.val().usernames)
{
temp=snapshot.val().usernames;

this.setState({
  Email:temp
})
}


})



firebase.database().ref('/users/admin/workspace').on('value',snapshot=>{

var temp;
if(snapshot.val().times)
{
temp=snapshot.val().times;

this.setState({
  Time:temp
})
}
})

  }
submitToDatabase=()=>
{

if(this.state.status[this.state.WorkspaceAllocations.indexOf(this.state.requestedWst)]=="blue")
{
this.state.status.splice(this.state.WorkspaceAllocations.indexOf(this.state.requestedWst),1,"green")
firebase.database().ref('/users/workspaces/status/bucket_1').update({statuses:this.state.status});
}
  //console.log(this.state.workspacerequests.indexOf(this.state.requestedWst));
Actions.main()
    //console.log("Hi from database")
    if(this.state.count==1)
    {

firebase.database().ref('/users/admin/workspace').update({requests:this.state.workspacerequests});
  firebase.database().ref('/users/admin/workspace').update({usernames:this.state.Email});
    firebase.database().ref('/users/admin/workspace').update({times:this.state.Time});
    }


}


allotWorkspace=()=>
{
  
  var email=firebase.auth().currentUser.email

if(this.state.status[this.state.WorkspaceAllocations.indexOf(this.state.requestedWst)]=="blue")
{
  var date=new Date().toLocaleString()
  this.setState(
    {
count:1,
workspacerequests:this.state.workspacerequests.concat(this.state.requestedWst),
Email:this.state.Email.concat(email),
Time:this.state.Time.concat(date)

    }
  )
this.state.status.splice(this.state.WorkspaceAllocations.indexOf(this.state.requestedWst),1,"orange")

firebase.database().ref('/users/workspaces/status/bucket_1').update({statuses:this.state.status});
}

}

render()
{
return(
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
<FlatList numColumns={5} columnWrapperStyle={{justifyContent:"space-between"}} horizontal={false} extraData={this.state} data={this.state.WorkspaceAllocations} renderItem={({item})=>{return<TouchableOpacity><Text></Text><Text key={item} onPress={()=>{

if(this.state.status[this.state.WorkspaceAllocations.indexOf(item)]=="green")
{

this.state.status.splice(this.state.WorkspaceAllocations.indexOf(item),1,"blue")
firebase.database().ref('/users/workspaces/status/bucket_1').update({statuses:this.state.status});
this.setState({requestedWst:item})
}
else if(this.state.status[this.state.WorkspaceAllocations.indexOf(item)]=="blue")
{

this.state.status.splice(this.state.WorkspaceAllocations.indexOf(item),1,"green")
firebase.database().ref('/users/workspaces/status/bucket_1').update({statuses:this.state.status})
}

}} style={{borderStyle:"solid",borderColor:this.state.status[this.state.WorkspaceAllocations.indexOf(item)],borderWidth:3,alignSelf:"center",borderRadius:8,color:this.state.status[this.state.WorkspaceAllocations.indexOf(item)]}}>{item}</Text><Text></Text><Text></Text></TouchableOpacity>}}></FlatList>
<Text></Text>
<TouchableHighlight><Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={this.allotWorkspace}>Request</Text></TouchableHighlight>
<Text></Text>
<TouchableHighlight><Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={this.submitToDatabase}>Logout</Text></TouchableHighlight>
</View>

)
  }




}