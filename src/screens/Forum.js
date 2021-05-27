import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Feed} from '../components/Feed';
import Constants from 'expo-constants';
import {useIsFocused} from '@react-navigation/native';
import {PreferencesContext} from '../context/PreferencesContext';

const paragraphs = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis malesuada feugiat. Sed gravida eros id interdum interdum. Donec blandit laoreet arcu ac tincidunt. Cras efficitur tempus lacus, nec sollicitudin purus imperdiet eget. Aenean tempus purus vitae erat luctus cursus. Aliquam et ipsum eu risus facilisis commodo non nec ex. Ut quis diam ut purus ultrices commodo pellentesque quis magna. Proin sollicitudin elit eget orci malesuada, eget iaculis turpis sodales. Nullam feugiat ligula placerat, mattis est quis, commodo lectus. Morbi id magna ac lacus convallis dapibus.',
];

const ForumScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const {focused, setFocusedScreen} = React.useContext(PreferencesContext);

  React.useEffect(() => {
    if (isFocused && focused !== 'Forum') {
      setFocusedScreen('Forum');
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Feed data={paragraphs} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 20,
    marginTop: Constants.statusBarHeight,
  },
  text: {
    marginBottom: 14,
  },
});

export default ForumScreen;
