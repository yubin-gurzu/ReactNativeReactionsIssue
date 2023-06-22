import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
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

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ReactionProvider>
        <Reaction
          type="modal"
          showPopupType="onPress"
          items={ReactionItems}
          onTap={() => console.log('This is on tap function.')}
          iconSize={20}
          titleStyle={STYLES.transparent}
          titleBoxStyle={STYLES.transparent}
          onLongPress={() => console.log('This is on long press function.')}>
          <View>
            <Emoji name={'heart'} style={{fontSize: 20}} />
          </View>
        </Reaction>
      </ReactionProvider>
    </SafeAreaView>
  );
};

export default App;
