import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/theme';
import {ToDoCategory} from '../../../interfaces/toDo';

export const ToDoItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
    backgroundColor: theme.colors.white,
    paddingVertical: theme.spacing.s,
    borderRadius: theme.borderRadius.m,
  },
  loadingContainer: {
    opacity: 0.5,
  },
  togglerButton: {
    paddingHorizontal: theme.spacing.m,
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  togglerView: {
    width: 23,
    height: 23,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  togglerIcon: {
    color: theme.colors.white,
  },
  taskInfoContainer: {
    flex: 1,
  },
  statusBadge: {
    ...theme.textVariants.small,
    alignSelf: 'flex-start',
    width: 'auto',
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xxs,
    borderRadius: theme.borderRadius.m,
  },
  taskTitle: {
    ...theme.textVariants.large,
    color: theme.colors.primaryText,
    paddingTop: theme.spacing.xs,
  },
  taskDescription: {
    ...theme.textVariants.small,
    color: theme.colors.secondaryText,
  },
  deleteButton: {
    paddingHorizontal: theme.spacing.m,
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    color: theme.colors.secondaryText,
  },
});

export const getTogglerStyle = (completed: boolean) => {
  return {
    backgroundColor: completed ? theme.colors.primary : theme.colors.white,
  };
};

export const getToDoBadgeStyle = (category: ToDoCategory) => {
  switch (category) {
    case ToDoCategory.personal:
      return {
        backgroundColor: theme.colors.personalTagBackground,
        color: theme.colors.personalTag,
      };
    case ToDoCategory.work:
      return {
        backgroundColor: theme.colors.workTagBackground,
        color: theme.colors.workTag,
      };
    case ToDoCategory.study:
      return {
        backgroundColor: theme.colors.studyTagBackground,
        color: theme.colors.studyTag,
      };
    case ToDoCategory.other:
      return {
        backgroundColor: theme.colors.background,
        color: theme.colors.secondaryText,
      };
    default:
      return {
        backgroundColor: theme.colors.background,
        color: theme.colors.secondaryText,
      };
  }
};

export const getTextInfoStyle = (completed: boolean) => {
  return {
    textDecorationLine: (completed ? 'line-through' : 'none') as
      | 'line-through'
      | 'none',
  };
};
