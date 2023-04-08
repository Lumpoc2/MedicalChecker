import React, { useState } from 'react';
import { ImageBackground, View, TextInput, Button, Text, StyleSheet} from 'react-native';
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
          symptoms: ["fever"],
          specificDays:"Few days only",
          maxDays:2,
          recommendation: '\nAn acute fever is a fever that comes on suddenly and typically lasts for a short period of time, usually a few days to a week. Common causes of acute fever include infections such as the flu or a cold, and it is usually self-limiting. \n\n\n Recommendations: \n• Drink plenty of fluids, such as water, fruit juice, or herbal tea, to stay hydrated. \n• Rest and avoid overexertion. \n• Use a cold compress, such as a damp cloth or a bag of ice, to help reduce fever.'
        },
        {
          symptoms: ['fever'],
          specificDays: "More than a week",
          maxDays:3,
          recommendation: ' \nA subacute fever is a fever that lasts longer than a week but less than a month. Some causes of subacute fever include infections, autoimmune diseases, and some types of cancer. \n\nRecommendations: \n• Stay hydrated by drinking plenty of water or other fluids. \n• Take a lukewarm bath or shower to help lower your body temperature. \n• Rest and avoid overexertion.'
        },
        {
          symptoms: ['fever'],
          specificDays: "Almost a Month",
          maxDays:4,
          recommendation: '\nA chronic fever is a fever that lasts longer than a month. Some causes of chronic fever include infections, autoimmune diseases, and some types of cancer. \n\nRecommendations: \n• See a doctor \n• Stay hydrated by drinking plenty of water or other fluids. \n• Avoid spicy or greasy foods that may trigger inflammation. \n• Practice stress-reducing techniques such as meditation, yoga, or deep breathing exercises.'
        },
        {
          symptoms: ['fever'],
          specificDays: "More than a Month",
          maxDays:5,
          recommendation: '\nA recurrent fever is a fever that comes and goes, with periods of normal temperature in between. Recurrent fever may be caused by a number of underlying conditions, including infections, autoimmune diseases, and certain types of cancer.\n\n Recommendations: \n• See a doctor \n• Stay hydrated by drinking plenty of water or other fluids. \n• Use a cold compress or cool, damp cloth to help reduce fever during episodes. \n• Avoid triggers that may cause fever, such as certain foods or allergens.'
        },
        {
          symptoms: ['headache'],
          specificDays: "Few days only",
          maxDays:2,
          recommendation: '\nAn acute headache is a headache that comes on suddenly and typically lasts for a short period of time, usually a few hours to a few days. Common causes of acute headaches include tension headaches, sinus headaches, and headaches caused by an illness or infection. \n\nRecommendations: \n• Use a cold compress or ice pack on your forehead or neck to help reduce pain. \n• Take a warm bath or shower to help relax tense muscles. \n• Try relaxation techniques such as deep breathing, meditation, or yoga to help reduce stress and tension.'
        },
        {
          symptoms: ['headache'],
          specificDays: "More than a week",
          maxDays: 3,
          recommendation: '\nA subacute headache is a headache that lasts longer than a few days but less than a month. Some causes of subacute headaches include medication overuse headaches, rebound headaches, and post-traumatic headaches. \n\n Recommendations: \n• Get plenty of rest and avoid overexertion. \n• Use a hot or cold compress on your forehead or neck to help alleviate pain. \n• Try over-the-counter pain relievers such as acetaminophen, ibuprofen, or aspirin'
        },
        {
          symptoms: ['headache'],
          specificDays: "Almost a month",
          maxDays:4,
          recommendation:'A chronic headache is a headache that lasts for more than 15 days per month for at least three months. Some causes of chronic headaches include tension headaches, migraines, cluster headaches, and medication overuse headaches. \n\nRecommendations: \n• See a doctor \n• Identify and avoid triggers that may be causing your headaches, such as certain foods or stressors.\n • Practice stress-reducing techniques such as meditation, yoga, or deep breathing exercises. \n• Try acupuncture, massage, or other complementary therapies as recommended by your doctor.'
        },
        {
          symptoms: ['headache'],
          specificDays: "More than a month",
          maxDays:5,
          recommendation: '\nEpisodic headaches are headaches that occur intermittently, with pain-free periods in between. Examples of episodic headaches include migraines, cluster headaches, and tension headaches. \n\nRecommendations: \n• See a doctor \n• Identify and avoid triggers that may be causing your headaches, such as certain foods or stressors.\n • Use a cold or hot compress on your forehead or neck to help alleviate pain.\n• Try over-the-counter pain relievers such as acetaminophen, ibuprofen, or aspirin (if appropriate and recommended by your doctor).'
        },
        {
          symptoms: ['stomachache'],
          specificDays: "Few days only",
          maxDays:2,
          recommendation: '\nAcute stomachache is pain that comes on suddenly and typically lasts for a short period of time, usually a few hours to a few days. Common causes of acute stomach pain include gastroenteritis stomach flu, food poisoning, and indigestion. \n\nRecommendations: \n • Drink plenty of clear fluids, such as water or herbal tea, to prevent dehydration. \n• Eat bland foods, such as rice, bananas, or applesauce, to help settle your stomach.\n• Avoid spicy, fatty, or greasy foods, as they can make symptoms worse. \n• Try over-the-counter antacids, such as Tums or Maalox, to help neutralize stomach acid.'
        },
        {
          symptoms: ['stomachache'],
          specificDays: "More than a week",
          maxDays: 3,
          recommendation: '\nSubacute stomachache is stomach pain that lasts longer than a few days but less than a month. Some causes of subacute stomach pain include gastritis, peptic ulcer disease, and inflammatory bowel disease. \n\nRecommendations: \n • Avoid alcohol and smoking, as they can irritate the stomach lining. \n• Eat smaller, more frequent meals to avoid overloading the digestive system. \n• Avoid trigger foods that may be exacerbating your symptoms, such as spicy or acidic foods. \n• Try drinking ginger tea or using ginger supplements, as ginger has anti-inflammatory properties that may help reduce stomach pain.'
        },
        {
          symptoms: ['stomachache'],
          specificDays: "Almost a month",
          maxDays:4,
          recommendation: 'Chronic stomachache is stomach pain that lasts for more than a month. Some causes of chronic stomach pain include gastroesophageal reflux disease GERD, irritable bowel syndrome IBS, and chronic pancreatitis.\n\n Recommendations: \n• See a doctor \n • Practice stress-reducing techniques, such as yoga or meditation, as stress can exacerbate symptoms. \n• Avoid trigger foods that may be exacerbating your symptoms, such as fatty or fried foods. \n• Eat a high-fiber diet to promote regular bowel movements and prevent constipation.\n • Try drinking peppermint tea or using peppermint to help alleviate stomach pain.'
        },
        {
          symptoms: ['stomachache'],
          specificDays: "More than a month",
          maxDays:5,
          recommendation: ' \nEpisodic stomachache is pain that occurs intermittently, with pain-free periods in between. Examples of episodic stomach pain include menstrual cramps, lactose intolerance, and gallstones. \n\n Recommendations: \n• See a doctor \n• Use a heating pad or hot water bottle on the affected area to help alleviate pain. \n• Try over-the-counter pain relievers, such as ibuprofen or acetaminophen, as recommended by your doctor. \n • Avoid trigger foods that may be exacerbating your symptoms.'
        },
        {
          symptoms: ['skin irritation'],
          specificDays: "Few days only",
          maxDays:2,
          recommendation: '\nAcute skin irritation is a sudden onset of redness, itching, and swelling on the skin, usually lasting for a few hours to a few days. Common causes of acute skin irritation include contact dermatitis, insect bites, and hives. \n\nRecommendations: \n• Avoid the irritant or allergen that caused the reaction, if possible. \n• Apply a cold compress to the affected area to reduce inflammation and itching.\n• Use topical creams or ointments containing hydrocortisone or other anti-inflammatory agents. \n • Take oral antihistamines to relieve itching and swelling. \n • If the skin irritation is caused by an infection, such as impetigo, a doctor may prescribe antibiotics.'
        },
        {
          symptoms: ['skin irritation'],
          specificDays: "More than a week",
          maxDays: 3,
          recommendation: '\nSubacute skin irritation lasts longer than a few days but less than a month. Some causes of subacute skin irritation include eczema, psoriasis, and fungal infections. \n\nRecommendations: \n• Moisturize the affected area with a non-fragrant, hypoallergenic lotion or cream.\n• Use topical corticosteroids to reduce inflammation and itching. \n• Apply cool compresses to the affected area to relieve itching and inflammation. \n• Avoid scratching or picking at the affected area to prevent further damage to the skin. \n• If the skin irritation is caused by a fungal infection, a doctor may prescribe antifungal medications.'
        },
        {
          symptoms: ['skin irritation'],
          specificDays: "Almost a month",
          maxDays:4,
          recommendation: ' \nSkin irritation can have many possible causes, and it can be difficult to determine the underlying cause without a medical evaluation. Some common causes of skin irritation that can persist for a month or longer include allergic reactions, contact dermatitis, eczema, psoriasis, and fungal infections. \n\n Recommendations: \n• See a doctor. \n•  may recommend using topical corticosteroids. \n• If the skin irritation is due to dry skin, a healthcare professional may recommend using a moisturizer. Moisturizers help to hydrate the skin and can reduce symptoms such as itching and flaking. '
        },
        {
          symptoms: ['skin irritation'],
          specificDays: "More than a month",
          maxDays:5,
          recommendation: ' \nChronic skin irritation lasts for more than a month. Some causes of chronic skin irritation include rosacea, acne, and lupus. \n\n Recommendations: \n• See a doctor. \n• Apply topical treatments prescribed by a dermatologist, such as retinoids, benzoyl peroxide, or azelaic acid for acne.\n• Use gentle skincare products and avoid harsh chemicals, fragrances, or other irritants.\n• Avoid direct sunlight and use sunscreen with a high SPF to protect the skin from UV damage. \n• For conditions like lupus or rosacea, a dermatologist may prescribe immunosuppressive medications or other prescription medications.'
        },{
          symptoms: ['muscle pain'],
          specificDays: "Few days only",
          maxDays:2,
          recommendation: '\nAcute muscle pain is a sudden onset of pain that typically lasts less than a week. Common causes of acute muscle pain include muscle strain, overuse, and injury. \n\nRecommendations: \n• Rest the affected muscle and avoid any strenuous activities that may cause further injury or strain. \n• Apply ice to the affected area for 15-20 minutes every 2-3 hours to reduce inflammation and pain. \n• Use over-the-counter pain relievers such as acetaminophen, ibuprofen, or naproxen to relieve pain and inflammation. \n• Massage the affected area gently to promote blood flow and reduce muscle tension.'
        },
        {
          symptoms: ['muscle pain'],
          specificDays: "More than a week",
          maxDays: 3,
          recommendation: '\nSubacute muscle pain lasts longer than a week but less than a month. Some causes of subacute muscle pain include fibromyalgia, viral infections, and arthritis. \n\nRecommendations: \n• Apply heat to the affected area using a heating pad or hot water bottle for 15-20 minutes at a time to relax muscles and reduce pain. \n• Practice gentle stretching exercises to promote flexibility and relieve muscle tension.\n• Get enough rest and sleep to help the body recover and reduce inflammation. \n• Try relaxation techniques such as deep breathing, meditation, or yoga to reduce stress and tension in the muscles.'
        },
        {
          symptoms: ['muscle pain'],
          specificDays: "Almost a month",
          maxDays:4,
          recommendation: ' \nTake over-the-cFibromyalgia: Fibromyalgia is a chronic condition that can cause muscle pain, fatigue, and other symptoms. It can last for almost a months or even years.ounter pain medication and rest.\n\n Recommendation:\n•Exercise: Regular low-impact exercise, such as walking, swimming, or yoga, can help reduce pain, improve mood, and increase energy levels.\n•Stress reduction: Stress can worsen fibromyalgia symptoms, so its important to find ways to reduce stress, such as meditation, deep breathing exercises\nSleep hygiene: Getting enough sleep is essential for managing fibromyalgia symptoms.'      
        },
        {
          symptoms: ['muscle pain'],
          specificDays: "More than a month",
          maxDays:5,
          recommendation: '\nChronic muscle pain lasts for more than a month. Some causes of chronic muscle pain include chronic fatigue syndrome, myofascial pain syndrome, and neuropathic pain. \n\nRecommendations: \n• See a doctor \n• Practice regular low-impact exercises such as swimming, walking, or cycling to help improve muscle strength and flexibility. \n• Apply heat or cold therapy to the affected area depending on what feels better for the individual. \n• Use foam rollers or massage balls to release tension in the muscles. \n• Maintain a healthy and balanced diet to ensure adequate nutrition and hydration to the muscles.'
        },
        
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
     
      <ImageBackground ImageBackground source={require('./assets/med.png')} resizeMode='contain' blurRadius={2} marginRight={44} style={styles.chatContainer}>
        <Text style={styles.botText}>{recommendation}</Text>
      </ImageBackground>
      
      <Text style={styles.headerText}>How many days you are in this state: </Text>
      <View style={styles.containers}>
      <Picker
  style={styles.inputText}
  selectedValue={days}
  onValueChange={handleDaysChange}
>
  
  <Picker.Item label="Few days only" value="2" />
  <Picker.Item label="More than a week" value="3" />
  <Picker.Item label="Almost a month" value="4" />
  <Picker.Item label="More than a month" value="5" />
 
</Picker>
      </View>
      <Text style={styles.headerTexts}>What do you feel right now:</Text>
      <View style={styles.inputContainer}>
      <Picker
  style={styles.inputText}
  selectedValue={symptoms}
  onValueChange={handleSymptomsChange}
>
  <Picker.Item label="Headache" value="headache" />
  <Picker.Item label="Stomachache" value="stomachache" />
  <Picker.Item label="Skin Irritation" value="skin irritation" />
  <Picker.Item label="Muscle Pain" value="muscle pain" />
  <Picker.Item label="Fever" value="fever"/>
  
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
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',

    
  },
});
export default MedicalChecker;