import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Details!"
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
      <Button
        title="Go Back!"
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
