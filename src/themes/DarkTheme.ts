import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { MD3DarkTheme as PaperDarkTheme } from 'react-native-paper';

const MyosotisDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

export default MyosotisDarkTheme;
