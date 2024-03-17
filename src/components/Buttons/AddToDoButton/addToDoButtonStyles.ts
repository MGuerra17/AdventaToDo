import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const addToDoButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: theme.spacing.m,
    right: theme.spacing.m,
    zIndex: 20,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: theme.colors.white,
  },
});
