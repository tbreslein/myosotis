import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { RootStackParamList } from '../../types/RootStackParamList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type AppBarProps = NativeStackScreenProps<RootStackParamList> & { back: boolean };

export const AppBar = ({ navigation, back }: AppBarProps) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Myosotis" />
      <Button
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <Icon name="cog" />
      </Button>
    </Appbar.Header>
  );
};
