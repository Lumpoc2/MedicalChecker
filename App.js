import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';


const MedicalChecker = () => {
    const [symptoms, setSymptoms] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [days, setDays] = useState('');
  
    const handleSymptomsChange = (value) => {
      setSymptoms(value);           
    };
  
    const handleDaysChange = (value) => {
      setDays(value);           
    };
  
    const handleCheckMediczal = () => {
      // Define the rules for the expert system
      const rules = [
        {
          symptoms: ['fever'],
          specificDays: "Few days only",
          maxDays: 1,
          recommendation: 'An acute fever is a fever that comes on suddenly and typically lasts for a short period of time'
        },
        {
          symptoms: ['fever'],
          specificDays: "More than a week",
          maxDays:2  ,
          recommendation: ' Drink plenty of fluids and get rest.'
        },
        {
          symptoms: ['fever'],
          specificDays: "Almost a Month",
          maxDays: 3,
          recommendation: 'You may have a cold or flu. '
        },
        {
          symptoms: ['fever'],
          specificDays: "More than a Month",
          maxDays: 4,
          recommendation: 'You may have a cold or.'
        },
        {
          symptoms: ['headache'],
          specificDays: "Few days only",
          maxDays:1,
          recommendation: 'You may have a headache. Take over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['headache'],
          specificDays: "More than a week",
          maxDays: 2,
          recommendation: 'You may have a migraine.'
        },
        {
          symptoms: ['headache'],
          specificDays: "Almost a month",
          maxDays:3,
          recommendation: ' Take over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['headache'],
          specificDays: "More than a month",
          maxDays:4,
          recommendation: ' over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['stomachache'],
          specificDays: "Few days only",
          maxDays:1,
          recommendation: 'You may have a headache. Take over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['stomachache'],
          specificDays: "More than a week",
          maxDays: 2,
          recommendation: 'You may have a migraine.'
        },
        {
          symptoms: ['stomachache'],
          specificDays: "Almost a month",
          maxDays:3,
          recommendation: ' Take over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['stomachache'],
          specificDays: "More than a month",
          maxDays:4,
          recommendation: ' over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['skin irritation'],
          specificDays: "Few days only",
          maxDays:1,
          recommendation: 'You may have a headache. Take over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['skin irritation'],
          specificDays: "More than a week",
          maxDays: 2,
          recommendation: 'You may have a migraine.'
        },
        {
          symptoms: ['skin irritation'],
          specificDays: "Almost a month",
          maxDays:3,
          recommendation: ' Take over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['skin irritation'],
          specificDays: "More than a month",
          maxDays:4,
          recommendation: ' over-the-counter pain medication and rest.'
        },{
          symptoms: ['muscle pain'],
          specificDays: "Few days only",
          maxDays:1,
          recommendation: 'You may have a headache. Take over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['muscle pain'],
          specificDays: "More than a week",
          maxDays: 2,
          recommendation: 'You may have a migraine.'
        },
        {
          symptoms: ['muscle pain'],
          specificDays: "Almost a month",
          maxDays:3,
          recommendation: ' Take over-the-counter pain medication and rest.'
        },
        {
          symptoms: ['muscle pain'],
          specificDays: "More than a month",
          maxDays:4,
          recommendation: ' over-the-counter pain medication and rest.'
        }
        
      ];
  
      // Check the user's symptoms against the rules in the expert system
      const matchingRule = rules.find(rule => {
        const isMatchingSymptoms = rule.symptoms.every(symptom => symptoms.toLowerCase().includes(symptom));
        const isMatchingDays = (rule.specificDays !== null && rule.specificDays == days) || (rule.maxDays !== null && rule.maxDays >= days);
        return isMatchingSymptoms && isMatchingDays;
      });
      
      // Set the recommendation based on the results of the check
      if (matchingRule) {
        setRecommendation(matchingRule.recommendation);
      } else {
        setRecommendation('Your symptoms do not match any known medical condition or please fill in the blank.');
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <Text style={styles.botText}>{recommendation}</Text>
       
      </View>
      <Text style={styles.headerText}>How many days you are in this state: </Text>
      <View style={styles.containers}>
      <Picker
  style={styles.inputText}
  selectedValue={days}
  onValueChange={handleDaysChange}
>
  
  <Picker.Item label="Few days only" value="1" />
  <Picker.Item label="More than a week" value="2" />
  <Picker.Item label="Almost a month" value="3" />
  <Picker.Item label="More than a month" value="4" />
 
</Picker>
      </View>
      <Text style={styles.headerTexts}>What do you feel right now:</Text>
      <View style={styles.inputContainer}>
      <Picker
  style={styles.inputText}
  selectedValue={symptoms}
  onValueChange={handleSymptomsChange}
  placeholder = "Fili In the blank"
>
  
  <Picker.Item label="Fever" value="Fever" />
  <Picker.Item label="Headache" value="Headache" />
  <Picker.Item label="Stomachache" value="Stomachache" />
  <Picker.Item label="Skin Irritation" value="Skin Irritation" />
  <Picker.Item label="Muscle Pain" value="Muscle Pain" />
  
</Picker>
        <Button
          title="Send"
          onPress={handleCheckMediczal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignSelf: 'stretch',
    padding: 10,
  },
  botText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    
  },
  botMessage: {
    
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    maxWidth: '80%',
   
  },
  containers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    fontSize: 16,
    borderColor: '#ccc',
  },
  headerText:{
    marginRight:85,
    fontSize:15,
    fontWeight:'bold',
  },
  headerTexts:{
    marginRight:150,
    fontSize:15,
    fontWeight:'bold',
  },
  botMessages: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#0099ff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    
  },
});
export default MedicalChecker;