import React from 'react';
import {
  View,
  Text,
  TextInput as DefaultTextInput,
  TextInputProps as DefaultProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {textInputStyles} from './textInputStyles';

type TextInputProps = DefaultProps & {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  error?: string | null | undefined;
};

export default function TextInput({
  label,
  style,
  containerStyle,
  ...props
}: TextInputProps) {
  return (
    <View style={containerStyle}>
      <Text style={textInputStyles.label}>{label}</Text>
      <View style={[textInputStyles.container, style]}>
        <DefaultTextInput
          {...props}
          textAlignVertical={props.numberOfLines ? 'top' : 'center'}
          numberOfLines={props.numberOfLines}
          style={textInputStyles.input}
          placeholder={props.placeholder}
        />
      </View>
      {props.error && <Text style={textInputStyles.error}>{props.error}</Text>}
    </View>
  );
}
