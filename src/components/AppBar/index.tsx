import * as React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Appbar, Button } from 'react-native-paper';
import { RootStackParamList } from '../../types/RootStackParamList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

type AppBarProps = NativeStackScreenProps<RootStackParamList> & { back: boolean } & NativeStackNavigationOptions;

export const AppBar = ({ navigation, route, options, back }: AppBarProps) => {
  const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title ?? 'Myosotis'} />
      <Button
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <Icon name="cog" />
      </Button>
    </Appbar.Header>
  );
};
