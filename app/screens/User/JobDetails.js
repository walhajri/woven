import React, {Component} from 'react';
import {Text, Button, View, Image, ActivityIndicator} from 'react-native';
import {Container} from '../../components/Container';
import {Divider} from '../../components/Shapes/Divider';
import EStyleSheet from 'react-native-extended-stylesheet';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import assetsObject from '../../assets/assets';
import appliedJobState from './AppliedJobs'

class JobDetails extends Component {
  //NOTE: this method will trigger when the user will apply to job, and will check if the postion exists or not
  handlePress = () => {
    this.setState({loading: true});
    this.render();
    let db = firestore();
    const {navigate} = this.props.navigation;
    if (auth().currentUser) {
      //TODO : move the the calls to the data folder
      const path = db.collection('appliedJobs');
      const job = path.doc(this.state.position.position+auth().currentUser.uid);
      const positionID = this.state.position.position;
      const businessID = this.state.position.businessID;
      const jobCompany = this.state.position.jobCompany;
      const jobDays = this.state.position.jobDays;
      const jobDescription = this.state.position.jobDescription;
      const jobTitle = this.state.position.jobTitle;
      const jobTotalSalary = this.state.position.jobTotalSalary;
      const jobLocation = this.state.position.jobLocation;
      job.get().then(function(doc) {
        if (doc.exists) {
          console.log("Already appiled to this job");
          navigate('CandidateStatus', {status: {}});
        } else {
          console.log('Applying for this job', doc.ref)
          job.set({
            position: positionID,
            seekerID: auth().currentUser.uid,
            businessID: businessID,
            status: 'review',
            jobCompany: jobCompany,
            jobDays: jobDays,
            jobDescription: jobDescription,
            jobTitle: jobTitle,
            jobTotalSalary: jobTotalSalary,
            jobLocation: jobLocation,
          })
          .then(() => {
            //TODO: make sure to empty the navigation stack
            console.log("Document written with ID: ", job.id);
            navigate('AppliedJobs');
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    } else {
      navigate('Auth');
    }
  };
  state = {
    position: {},
    loading: false,
  };
  componentDidMount() {
    const param = this.props.navigation.getParam('item');
    this.setState({position: param});
  }
  render() {
    const param = this.state.position;
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size={'large'} style={styles.loader} />
        </View>
      );
    }
    return (
      <Container>
        <View style={styles.mainDetail}>
          <View>
            <Image
              source={param.img ? {uri: param.img} : assetsObject.companyIcon}
            />
          </View>
          <View>
            <Text style={styles.mainText}>{param.jobTitle}</Text>
            <Text style={styles.subText}>{param.jobLocation}</Text>
            <Text style={styles.subText}>{param.jobTotalSalary + ' SR'}</Text>
          </View>
        </View>
        <Button
          style={styles.pagelayout}
          title="Apply"
          color={styles.row}
          onPress={() => this.handlePress()}
        />
        <Divider />
        <Text style={styles.title}>Job Description:</Text>
        <Text style={styles.pagelayout}>{param.jobDescription}</Text>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  pagelayout: {margin: 20},
  loader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    marginTop: 90,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainText: {fontWeight: 'bold', fontSize: 18, margin: 10},
  subText: {
    fontStyle: 'italic',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
  },
  mainDetail: {
    flexDirection: 'row',
  },
});

export default JobDetails;
