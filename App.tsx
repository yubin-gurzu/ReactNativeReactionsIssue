import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Reaction, ReactionProvider} from 'react-native-reactions/src';
import Emoji from 'react-native-emoji';

const STYLES = StyleSheet.create({
  transparent: {
    backgroundColor: 'transparent',
    color: 'transparent',
    borderColor: 'transparent',
  },
});

const App = () => {
  const ReactionItems = [
    {
      id: 0,
      emoji: '😇',
      title: 'like',
    },
    {
      id: 1,
      emoji: '🥰',
      title: 'love',
    },
    {
      id: 2,
      emoji: '🤗',
      title: 'care',
    },
    {
      id: 3,
      emoji: '😘',
      title: 'kiss',
    },
    {
      id: 4,
      emoji: '😂',
      title: 'laugh',
    },
    {
      id: 5,
      emoji: '😎',
      title: 'cool',
    },
  ];

  const [onPress, setOnPress] = useState('');

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ReactionProvider>
        <Reaction
          type="modal"
          showPopupType="onPress"
          items={ReactionItems}
          onTap={() => setOnPress('onTap')}
          onPress={() => setOnPress('onPress')}
          iconSize={20}
          titleStyle={STYLES.transparent}
          titleBoxStyle={STYLES.transparent}
          onLongPress={() => setOnPress('onLongPress')}>
          <View>
            <Emoji name={'heart'} style={{fontSize: 20}} />
          </View>
        </Reaction>
      </ReactionProvider>

      <Text>{onPress}</Text>
    </SafeAreaView>
  );
};

export default App;
