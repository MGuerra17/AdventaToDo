import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const textInputStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: theme.spacing.s,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.s,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  label: {
    ...theme.textVariants.body,
    color: theme.colors.primaryText,
    marginBottom: theme.spacing.xs,
  },
  input: {
    ...theme.textVariants.body,
    color: theme.colors.primaryText,
  },
  error: {
    ...theme.textVariants.extraSmall,
    color: theme.colors.red,
  },
});
