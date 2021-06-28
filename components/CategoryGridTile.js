import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onPress}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.text}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    // borderWidth: 1,
    borderRadius: 10,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3, // for android
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right', // for android, iOS does not need it
  },
});
