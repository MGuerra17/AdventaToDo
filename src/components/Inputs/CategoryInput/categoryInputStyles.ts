import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const categoryInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: theme.spacing.s,
    paddingBottom: theme.spacing.l,
  },
  label: {
    ...theme.textVariants.body,
    color: theme.colors.primaryText,
    marginBottom: theme.spacing.s,
  },
  required: {
    color: theme.colors.red,
  },
  itemContainer: {
    padding: theme.spacing.s,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: theme.borderRadius.s,
    borderColor: theme.colors.secondaryText,
  },
  itemLabel: {
    ...theme.textVariants.extraSmall,
    color: theme.colors.secondaryText,
    marginBottom: theme.spacing.s,
  },
  icon: {
    color: theme.colors.secondaryText,
  },
});

export const getCategoryItemStyles = (isSelected: boolean) => ({
  container: {
    backgroundColor: isSelected
      ? theme.colors.transparentAccent
      : theme.colors.white,
    borderColor: isSelected ? theme.colors.accent : theme.colors.secondaryText,
    color: isSelected ? theme.colors.accent : theme.colors.secondaryText,
  },
  label: {
    color: isSelected ? theme.colors.accent : theme.colors.secondaryText,
  },
  icon: {
    color: isSelected ? theme.colors.accent : theme.colors.secondaryText,
  },
});
