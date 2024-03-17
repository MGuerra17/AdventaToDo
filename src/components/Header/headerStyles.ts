import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export const headerStyles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    padding: theme.spacing.m,
    backgroundColor: theme.colors.primary,
    overflow: 'hidden',
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: theme.spacing.m,
  },
  searchInput: {
    width: '80%',
  },
  mainContentContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 1,
  },
  dateText: {
    ...theme.textVariants.body,
    color: theme.colors.white,
  },
  titleText: {
    ...theme.textVariants.header,
    color: theme.colors.white,
  },
  logo: {
    width: 90,
    objectFit: 'contain',
  },
  decorationCircle: {
    position: 'absolute',
    top: 30,
    left: -60,
    width: 200,
    height: 200,
    backgroundColor: theme.colors.white,
    opacity: 0.1,
    borderRadius: 100,
    zIndex: -1,
  },
});
