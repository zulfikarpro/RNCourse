import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'

const styles = StyleSheet.create({
    containers: {
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    text: {
      color: '#4a4a4a',
      fontSize: 15,
    },
    separator: {
      flex: 1,
      height: 1,
      backgroundColor: '#e4e4e4',
      marginLeft: 10,
    },
    leftAction: {
      backgroundColor: '#388e3c',
      justifyContent: 'center',
      flex: 1,
    },
    actionText: {
      color: '#fff',
      fontWeight: '600',
      padding: 20,
    },
  });

export const Separator = () => <View style={styles.separator} />;

const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
        inputRange: [0, 100], // menampilkan actionText setelah digeser sejauh 100px
        outputRange: [0, 1], // untuk menegaskan bahwa tampilkan seluruh text (1) setelah melakukan inputRange
        extrapolate: 'clamp', // untuk membatasi ukuran text hanya sampai ukuran aslinya, kalian bisa mencobanya dengan melakukan comment terlebih dahulu
      });
    return (
    <View style={styles.rightAction}>
        <Text style={styles.actionText}>
          Add to Cart
        </Text>
    </View>
    );
  };

  const RightActions = ({ progress, dragX, onPress }) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rightAction}>
          <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  const ListItem = ({ text, onSwipeFromLeft, onRightPress }) => (
    <Swipeable
      renderLeftActions={LeftActions}
      onSwipeableLeftOpen={onSwipeFromLeft}
      renderRightActions={(progress, dragX) => (
        <RightActions progress={progress} dragX={dragX} onPress={onRightPress} />
      )}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Swipeable>
  );
export default ListItem;

