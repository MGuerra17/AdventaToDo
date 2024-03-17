import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const ToDoListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.m,
  },
  title: {
    ...theme.textVariants.largeBold,
    color: theme.colors.primaryText,
    marginBottom: theme.spacing.m,
  },
  taskList: {
    flex: 1,
  },
  taskListContainer: {
    paddingBottom: 70,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    ...theme.textVariants.largeBold,
    color: theme.colors.secondaryText,
  },
});
