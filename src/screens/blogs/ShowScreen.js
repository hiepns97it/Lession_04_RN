import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context} from '../../context/BlogContext';
import {Icon} from 'react-native-elements';

const ShowScreen = props => {
  const {state} = useContext(Context);
  const {navigation} = props;
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id'),
  );
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', {id: navigation.getParam('id')})
        }>
        <Icon name="edit" type="entypo" color="black" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
