import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTitle
        text={item.title}
        color={item.color}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Categories',
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
