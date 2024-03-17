import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const deleteToDoModalStyles = StyleSheet.create({
  container: {
    paddingBottom: theme.spacing.l,
    rowGap: theme.spacing.s,
  },
  text: {
    ...theme.textVariants.body,
  },
  confirmText: {
    ...theme.textVariants.body,
  },
});
