import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelectMeal={() =>
          navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: item.id,
            },
          })
        }
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
        numColumns={1}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
