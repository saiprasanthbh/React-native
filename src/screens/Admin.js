import React from 'react';
import {View,Text,FlatList,TouchableOpacity,Button,Image,ImageBackground} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export default class Admin extends React.Component
{
  state={

workspacerequests:[],
WorkspaceAllocations:[],
status:[],
count:0,
Email:[],
details:"",
Time:[],
timedetails:"",
selected:"",
Message:""
  }
  componentDidMount()
  {
  
firebase.database().ref('/users/admin/workspace').on('value',snapshot=>{

var temp;
if(snapshot.val().requests)
{
temp=snapshot.val().requests;

this.setState({
  workspacerequests:temp,count:0
})
}
})
  
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
 
allotWorkstation=()=>
{


 if(this.state.selected!="")
 {
   var index=this.state.workspacerequests.indexOf(this.state.selected);
  if(this.state.count==1)
  {
    this.setState({
      selected:""
    })
this.state.status.splice(this.state.WorkspaceAllocations.indexOf(this.state.selected),1,"red")
firebase.database().ref('/users/workspaces/status/bucket_1').update({statuses:this.state.status});

this.state.workspacerequests.splice(this.state.workspacerequests.indexOf(this.state.selected),1)
this.state.Email.splice(index,1);
this.state.Time.splice(index,1);


firebase.database().ref('/users/admin/workspace').update({requests:this.state.workspacerequests})
firebase.database().ref('/users/admin/workspace').update({usernames:this.state.Email})

firebase.database().ref('/users/admin/workspace').update({times:this.state.Time})

  }
  else if(this.state.count==0)
  {
       this.setState({
      selected:""
    })
    this.state.status.splice(this.state.WorkspaceAllocations.indexOf(this.state.selected),1,"green")
firebase.database().ref('/users/workspaces/status/bucket_1').update({statuses:this.state.status});
this.state.workspacerequests.splice(this.state.workspacerequests.indexOf(this.state.selected),1)
this.state.Email.splice(index,1);
this.state.Time.splice(index,1);

firebase.database().ref('/users/admin/workspace').update({requests:this.state.workspacerequests})

firebase.database().ref('/users/admin/workspace').update({usernames:this.state.Email});

firebase.database().ref('/users/admin/workspace').update({times:this.state.Time})
  }
}


}

render()
{
  if(this.state.workspacerequests.length>0)
  {
return(
   <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"http://eskipaper.com/images/orange-light-background-1.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
  <Image source={{uri:"https://icon-library.net/images/logo-icon-png/logo-icon-png-8.jpg"}} style={{height:80,width:100,alignSelf:"center",marginTop:20}}/>
  <Text></Text>
<View style={{flexDirection:"row"}}>
<Text></Text>
<FlatList extraData={this.state} data={this.state.workspacerequests} renderItem={({item})=>{return<TouchableOpacity style={{flexDirection:"row",alignSelf:"center"}}><Button title={item}></Button><Button  onPress={()=>{this.setState({selected:item,count:1,details:"",timedetails:""})}} title="Approve"></Button><Button onPress={()=>{this.setState({selected:item,count:0,details:"",timedetails:""})}} title="Reject"></Button><Button title="Details" onPress={()=>{this.setState({details:this.state.Email[this.state.workspacerequests.indexOf(item)],timedetails:this.state.Time[this.state.workspacerequests.indexOf(item)]
})}} ></Button></TouchableOpacity>}}></FlatList>
<Text></Text>
</View >
<Text  style={{alignSelf:"center"}}>{this.state.selected}</Text>
<Text style={{alignSelf:"center"}}>{this.state.details}</Text>
<Text style={{alignSelf:"center"}}>{this.state.timedetails}</Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}}  onPress={this.allotWorkstation}>Update</Text>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.more()}}>More...</Text>
<Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.main()}}>Logout</Text>
<Text></Text>
<Text style={{color:"red"}}>**Note:Please Update,Everytime you make changes</Text>
</View>
</ImageBackground>
)
  }
  if(this.state.workspacerequests.length==0)
  {
    return(
        <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"https://icon-library.net/images/logo-icon-png/logo-icon-png-8.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA"}}>
        <Text style={{color:"red",alignSelf:"center"}}>No More Requests To Show</Text>
        <Text></Text>
  <Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.more()}}>More...</Text>
  <Text></Text>
<Text style={{color:"#274DF6",alignSelf:"center",fontSize:20}} onPress={()=>{Actions.main()}}>Logout</Text>
    </View>
    </ImageBackground>
    )
  
  }



}



}