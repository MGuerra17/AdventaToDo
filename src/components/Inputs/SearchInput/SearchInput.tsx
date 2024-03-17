import React from 'react';
import {StyleProp, TextInput, View, ViewStyle} from 'react-native';
import {searchInputStyles} from './searchInputStyles';
import SearchIcon from '../../Icons/SearchIcon';

interface SearchInputProps {
  styles?: StyleProp<ViewStyle>;
}

export default function SearchInput({styles}: SearchInputProps) {
  return (
    <View style={[searchInputStyles.container, styles]}>
      <SearchIcon styles={searchInputStyles.searchIcon} />
      <TextInput
        style={searchInputStyles.input}
        placeholder="Buscar tarea"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
      />
    </View>
  );
}
