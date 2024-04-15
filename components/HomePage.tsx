import React, {useRef} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

type StackParamList = {
  Home: undefined;
  News: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomePage: React.FC<Props> = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.ValueXY({x: 200, y: 0})).current;
  const scale = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: {x: 0, y: 0},
          duration: 3000,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(position, {
        toValue: {x: -5, y: 0},
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(position, {
        toValue: {x: 5, y: 0},
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(position, {
        toValue: {x: 0, y: 0},
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const fadeOut = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(position, {
        toValue: {x: 200, y: 0},
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const shake = () => {
    Animated.sequence([
      Animated.timing(position, {
        toValue: {x: -5, y: 0},
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(position, {
        toValue: {x: 10, y: 0},
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(position, {
        toValue: {x: 0, y: 0},
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const jump = () => {
    Animated.sequence([
      Animated.timing(position, {
        toValue: {x: 0, y: -50},
        useNativeDriver: true,
        duration: 200,
      }),
      Animated.spring(position, {
        toValue: {x: 0, y: 0},
        bounciness: 8,
        speed: 24,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 50,
        delay: 0,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1.05,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={shake} activeOpacity={1}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
              transform: [
                {translateX: position.x},
                {translateY: position.y},
                {scale: scale},
              ],
            },
          ]}>
          <Text>Fading View</Text>
        </Animated.View>
      </TouchableOpacity>
      <View style={styles.buttonRow}>
        <Button title="News" onPress={() => navigation.navigate('News')} />
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
        <Button title="Jump" onPress={jump} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadingContainer: {
    padding: 20,
    transform: [{translateY: 100}],
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 200,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default HomePage;
