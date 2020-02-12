import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Linking,
  ActivityIndicator,
  TouchableHighlight,Image,ImageBackground
} from 'react-native';
import { Card, Picker } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
export default class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    Message: '',
    Countforworkspace: '',
    Dates: [],
    Hours: [],
    Minutes: [],
    IndexOfrequestedwst: [],
    ConferenceStatus:[],
    StopChangingToGreen:[]
  };
  componentDidMount() {
    firebase
      .database()
      .ref('/users/admin/countforworkspace')
      .on('value', snapshot => {
        var temp;
        temp = snapshot.val().count;
        this.setState({
          Countforworkspace: temp,
        });
      });

    firebase
      .database()
      .ref('/users')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().conferenceroom) {
          temp = snapshot.val().conferenceroom;
          this.setState({
            Conferencelist: temp,
          });
        }
      });

    firebase
      .database()
      .ref('/users')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().conferencestatus) {
          temp = snapshot.val().conferencestatus;
          this.setState({
            ConferenceStatus: temp,
          });
        }
      });


    firebase
      .database()
      .ref('/users')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().conferenceroomdetails) {
          temp = snapshot.val().conferenceroomdetails;
          this.setState({
            ConferenceroomDetails: temp,
          });
        }
      });

    firebase
      .database()
      .ref('/users/admin/conference/conferenceOut')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confDate) {
          temp = snapshot.val().confDate;
          this.setState({
            Dates: temp,
          });
        }
      });

    firebase
      .database()
      .ref('/users/admin/conference/conferenceOut')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confHour) {
          temp = snapshot.val().confHour;
          this.setState({
            Hours: temp,
          });
        }
      });

    firebase
      .database()
      .ref('/users/admin/conference/conferenceOut')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confMin) {
          temp = snapshot.val().confMin;
          this.setState({
            Minutes: temp,
          });
        }
      });


firebase
      .database()
      .ref('/users/admin/conference/conferenceIn')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confDate) {
          temp = snapshot.val().confDate;
          this.setState({
            DatesIn: temp,
          });
        }
      });

    firebase
      .database()
      .ref('/users/admin/conference/conferenceIn')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confHour) {
          temp = snapshot.val().confHour;
          this.setState({
            HoursIn: temp,
          });
        }
      });

    firebase
      .database()
      .ref('/users/admin/conference/conferenceIn')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().confMin) {
          temp = snapshot.val().confMin;
          this.setState({
            MinutesIn: temp,
          });
        }
      });


    firebase
      .database()
      .ref('/users/admin/conference/conferenceOut')
      .on('value', snapshot => {
        var temp;
        if (snapshot.val().indexes) {
          temp = snapshot.val().indexes;
          this.setState({
            IndexOfrequestedwst: temp,
          });
        }
      });
  }


  authenticate = () => {

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        if (this.state.Countforworkspace==1) {
          Actions.workspace();
        }

        if (this.state.Countforworkspace==0) {
 
            for (var i=0;i<this.state.IndexOfrequestedwst.length; i++) {
        
             if (this.state.IndexOfrequestedwst.length==0) {
               Actions.conference();
             }
            if (this.state.IndexOfrequestedwst.length>0) {

console.log("value of i",i)
for(var j=0;j<this.state.IndexOfrequestedwst.length;j++)
{
  if(i!=j)
{
  if(this.state.StopChangingToGreen.length>=0)
  {
    
   if(this.state.IndexOfrequestedwst[i]==this.state.IndexOfrequestedwst[j])
              {
if(this.state.HoursIn[i]<this.state.HoursIn[j])
               {
                  this.setState({
                  StopChangingToGreen:this.state.StopChangingToGreen.concat(j)
                })
              }

if(this.state.HoursIn[i]>this.state.HoursIn[j])
               
               {
                  this.setState({
                  StopChangingToGreen:this.state.StopChangingToGreen.concat(i)
                })
              }
if(this.state.HoursIn[i]==this.state.HoursIn[j])
{
  if(this.state.MinutesIn[i]<this.state.MinutesIn[j])
  {
    this.setState({
                  StopChangingToGreen:this.state.StopChangingToGreen.concat(j)
                })
                   
  }

  if(this.state.MinutesIn[i]>this.state.MinutesIn[j])
  {
    this.setState({
                  StopChangingToGreen:this.state.StopChangingToGreen.concat(i)
                })
                      
  }


}


              } 
}
}
}

              var currentDate = parseInt(new Date().getDate());
              var currentmonth = parseInt(new Date().getMonth() + 1);
              var currentyear = parseInt(new Date().getFullYear());
              var currentHour = parseInt(
                new Date().getHours().toLocaleString()
              );

              var currentMinutes = parseInt(
                new Date().getMinutes().toLocaleString()
              );

              var checkDate = parseInt(this.state.Dates[i].slice(8, 10));
              var checkmonth = parseInt(this.state.Dates[i].slice(5, 7));
              var checkyear = parseInt(this.state.Dates[i].slice(0, 4));
              var checkminutes = parseInt(this.state.Minutes[i]);
              var checkhours = parseInt(this.state.Hours[i]);
          var checkminutesIn = parseInt(this.state.MinutesIn[i]);
              var checkhoursIn = parseInt(this.state.HoursIn[i]);
               var checkDateIn = parseInt(this.state.DatesIn[i].slice(8, 10));
//THIS IS FOR CHANGING THE COLOUR BASED ON THE IN TIME

if(currentyear<checkyear)
{
   if(this.state.StopChangingToGreen.indexOf(i)==-1)
  {
    this.state.ConferenceStatus.splice(
                  this.state.IndexOfrequestedwst[i],
                  1,
                  'green'
                );
                firebase
                  .database()
                  .ref('/users')
                  .update({ conferencestatus: this.state.ConferenceStatus });
 continue;
}
}
 else if(currentyear==checkyear)
  {
if(currentmonth<checkmonth)
{
  if(this.state.StopChangingToGreen.indexOf(i)==-1)
  {
  
   this.state.ConferenceStatus.splice(
                  this.state.IndexOfrequestedwst[i],
                  1,
                  'green'
                );
                firebase
                  .database()
                  .ref('/users')
                  .update({ conferencestatus: this.state.ConferenceStatus });
 continue;

}
}
else if(currentmonth==checkmonth)
{
  if(currentDate<checkDate)
  {
 if(this.state.StopChangingToGreen.indexOf(i)==-1)
  {
 this.state.ConferenceStatus.splice(
                  this.state.IndexOfrequestedwst[i],
                  1,
                  'green'
                );
                firebase
                  .database()
                  .ref('/users')
                  .update({ conferencestatus: this
                  .state.ConferenceStatus });
 continue;
  }

  }
  else if(currentDate==checkDate)
  {  
    if(currentHour<checkhoursIn)
    {
 if(this.state.StopChangingToGreen.indexOf(i)==-1)
  {
 this.state.ConferenceStatus.splice(
                  this.state.IndexOfrequestedwst[i],
                  1,
                  'green'
                );
                firebase
                  .database()
                  .ref('/users')
                  .update({ conferencestatus: this.state.ConferenceStatus });
 continue;

    }
    }
    else if(currentHour==checkhoursIn)
    {
       if(currentMinutes<checkminutesIn)
       {
 if(this.state.StopChangingToGreen.indexOf(i)==-1)
  {
      this.state.ConferenceStatus.splice(
                  this.state.IndexOfrequestedwst[i],
                  1,
                  'green'
                );
                firebase
                  .database()
                  .ref('/users')
                  .update({ conferencestatus: this.state.ConferenceStatus });
              continue;
                  
       }
       }
       else if(currentMinutes>=checkminutesIn)
      {

         this.state.ConferenceStatus.splice(
                  this.state.IndexOfrequestedwst[i],1,'red');
                firebase
                  .database()
                  .ref('/users')
                  .update({ conferencestatus: this.state.ConferenceStatus });
      }

    }

  }



}

  }



//THIS IS FOR CHANGING AFTER THE TIME ELAPSES THE SET TIME
              if (currentyear > checkyear) {
  

 if(this.state.StopChangingToGreen.indexOf(i)==-1)
  {
            this.state.ConferenceStatus.splice(
                        this.state.IndexOfrequestedwst[i],
                        1,
                        'green'
                      );
                      firebase
                        .database()
                        .ref('/users')
                        .update({
                          conferencestatus: this.state.ConferenceStatus,
                        });

                      this.state.Dates.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confDate: this.state.Dates });

                      this.state.DatesIn.splice(i, 1);

                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confDate: this.state.DatesIn });
                        
                      this.state.Hours.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confHour: this.state.Hours });
this.state.HoursIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confHour: this.state.HoursIn });
                      this.state.Minutes.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confMin: this.state.Minutes });

                      this.state.MinutesIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confMin: this.state.MinutesIn });

                      this.state.IndexOfrequestedwst.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ indexes: this.state.IndexOfrequestedwst });
                         this.state.StopChangingToGreen.splice(i,1);
                            i=-1;
                  continue;
              }
              } else if (currentyear == checkyear) {
                if (currentmonth > checkmonth) {
 if(this.state.StopChangingToGreen.indexOf(i)==-1)
  { this.state.ConferenceStatus.splice(
                        this.state.IndexOfrequestedwst[i],
                        1,
                        'green'
                      );
                      firebase
                        .database()
                        .ref('/users')
                        .update({
                          conferencestatus: this.state.ConferenceStatus,
                        });

                      this.state.Dates.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confDate: this.state.Dates });

                      this.state.DatesIn.splice(i, 1);

                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confDate: this.state.DatesIn });
                        
                      this.state.Hours.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confHour: this.state.Hours });
this.state.HoursIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confHour: this.state.HoursIn });
                      this.state.Minutes.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confMin: this.state.Minutes });

                      this.state.MinutesIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confMin: this.state.MinutesIn });

                      this.state.IndexOfrequestedwst.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ indexes: this.state.IndexOfrequestedwst });
                        this.state.StopChangingToGreen.splice(i,1);
                            i=-1;
                  continue;
                }
                } else if (currentmonth == checkmonth) {
                  if (currentDate > checkDate) {

 if(this.state.StopChangingToGreen.indexOf(i)==-1)
  { this.state.ConferenceStatus.splice(
                        this.state.IndexOfrequestedwst[i],
                        1,
                        'green'
                      );
                      firebase
                        .database()
                        .ref('/users')
                        .update({
                          conferencestatus: this.state.ConferenceStatus,
                        });

                      this.state.Dates.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confDate: this.state.Dates });

                      this.state.DatesIn.splice(i, 1);

                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confDate: this.state.DatesIn });
                        
                      this.state.Hours.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confHour: this.state.Hours });
this.state.HoursIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confHour: this.state.HoursIn });
                      this.state.Minutes.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confMin: this.state.Minutes });

                      this.state.MinutesIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confMin: this.state.MinutesIn });

                      this.state.IndexOfrequestedwst.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ indexes: this.state.IndexOfrequestedwst });
                         this.state.StopChangingToGreen.splice(i,1);
                            i=-1;
                  continue;
                  }
                  } else if (currentDate == checkDate) {
                    if (currentHour > checkhours) {

  if(this.state.StopChangingToGreen.indexOf(i)==-1)
  {
                      this.state.ConferenceStatus.splice(
                        this.state.IndexOfrequestedwst[i],
                        1,
                        'green'
                      );
                      firebase
                        .database()
                        .ref('/users')
                        .update({
                          conferencestatus: this.state.ConferenceStatus,
                        });

                      this.state.Dates.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confDate: this.state.Dates });

                      this.state.DatesIn.splice(i, 1);

                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confDate: this.state.DatesIn });

                      this.state.Hours.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confHour: this.state.Hours });
this.state.HoursIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confHour: this.state.HoursIn });
                      this.state.Minutes.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confMin: this.state.Minutes });

                      this.state.MinutesIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confMin: this.state.MinutesIn });

                      this.state.IndexOfrequestedwst.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ indexes: this.state.IndexOfrequestedwst });
                         this.state.StopChangingToGreen.splice(i,1);
                            i=-1;
                  continue;
                    }
                    } else if (currentHour == checkhours) {
                      if (currentMinutes>=checkminutes) {
 if(this.state.StopChangingToGreen.indexOf(i)==-1)
  {
     this.state.ConferenceStatus.splice(
                        this.state.IndexOfrequestedwst[i],
                        1,
                        'green'
                      );
                      firebase
                        .database()
                        .ref('/users')
                        .update({
                          conferencestatus: this.state.ConferenceStatus,
                        });

                      this.state.Dates.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confDate: this.state.Dates });

                      this.state.DatesIn.splice(i, 1);

                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confDate: this.state.DatesIn });
                        
                      this.state.Hours.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confHour: this.state.Hours });
this.state.HoursIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confHour: this.state.HoursIn });
                      this.state.Minutes.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ confMin: this.state.Minutes });

                      this.state.MinutesIn.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceIn')
                        .update({ confMin: this.state.MinutesIn });

                      this.state.IndexOfrequestedwst.splice(i, 1);
                      firebase
                        .database()
                        .ref('/users/admin/conference/conferenceOut')
                        .update({ indexes: this.state.IndexOfrequestedwst });
                         this.state.StopChangingToGreen.splice(i,1);
                            i=-1;
                  continue;
                      }
                      }
                    }
                  }
                }
              }
            }
        }
          Actions.conference();
        
        }
      })
      .catch(() => {
        this.setState({ Message: 'Invalid Credentials' });
      });
  };

  render() {
    return (
         <ImageBackground style={{width:null,height:null,flex:1}} source={{uri:"http://eskipaper.com/images/orange-light-background-1.jpg"}}>
<View style={{marginTop:20,backgroundColor:"#EBEAEA00"}}>
        <Card containerStyle={{borderRadius:15}}>
        <Image source={{uri:"https://icon-library.net/images/logo-icon-png/logo-icon-png-8.jpg"}} style={{height:80,width:100,alignSelf:"center",marginTop:20}}/>
  <Text></Text>
          <Text
            style={{ marginLeft: 270, color: '#274DF6' }}
            onPress={() => {
              Actions.main();
            }}>
            Home
          </Text>

          <Text style={{ alignSelf: 'center' }}>
            Hello User !!!! Welcome!!!!!!!!
          </Text>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, marginTop: 20 }}>Email *:</Text>
            <TextInput
              style={{ flex: 2, marginTop: 20 }}
              placeholder="Enter a valid Email Address"
              onChangeText={e => {
                this.setState({ email: e, Message: '' });
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, marginTop: 20 }}>Password*:</Text>
            <TextInput
              style={{ flex: 2, marginTop: 20 }}
              secureTextEntry={true}
              placeholder="Enter a valid Password"
              onChangeText={e => {
                this.setState({ password: e, Message: '' });
              }}
            />
          </View>

          <TouchableHighlight>
            <Text
              style={{ color: '#274DF6', alignSelf: 'center', fontSize: 20 }}
              onPress={this.authenticate}>
              Login
            </Text>
          </TouchableHighlight>
          <Text style={{ color: 'red', alignSelf: 'center' }}>
            {this.state.Message}
          </Text>
        </Card>
      </View>
      </ImageBackground>
    )
  }
}
