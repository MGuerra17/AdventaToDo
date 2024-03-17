import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';

export const modalLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backdrop,
    padding: theme.spacing.m,
  },
  contentContainer: {
    width: '100%',
    padding: theme.spacing.m,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  title: {
    ...theme.textVariants.largeBold,
    color: theme.colors.primaryText,
  },
  closeIcon: {
    color: theme.colors.primaryText,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: theme.spacing.s,
  },
  button: {
    ...theme.textVariants.body,
    paddingHorizontal: theme.spacing.l,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: theme.borderRadius.s,
  },
  cancelButton: {
    borderColor: theme.colors.secondaryText,
  },
  cancelButtonText: {
    color: theme.colors.secondaryText,
  },
  mainButtonConfirm: {
    borderColor: theme.colors.accent,
    backgroundColor: theme.colors.accent,
  },
  mainButtonTextConfirm: {
    color: theme.colors.white,
  },
  mainButtonDelete: {
    borderColor: theme.colors.red,
    backgroundColor: theme.colors.red,
  },
  mainButtonTextDelete: {
    color: theme.colors.white,
  },
});

export const getMainButtonStyles = (type?: 'confirm' | 'delete') => {
  if (type === 'delete') {
    return {
      container: modalLayoutStyles.mainButtonDelete,
      textStyle: modalLayoutStyles.mainButtonTextDelete,
    };
  }
  return {
    container: modalLayoutStyles.mainButtonConfirm,
    textStyle: modalLayoutStyles.mainButtonTextConfirm,
  };
};
