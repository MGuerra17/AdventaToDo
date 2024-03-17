import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const searchInputStyles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: theme.colors.white,
    borderRadius: 100,
    paddingLeft: 50,
    ...theme.textVariants.body,
  },
  searchIcon: {
    position: 'absolute',
    color: theme.colors.secondaryText,
    top: 12,
    left: 16,
    zIndex: 20,
  },
});
