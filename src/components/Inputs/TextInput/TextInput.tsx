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
  required?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  error?: string | null | undefined;
};

export default function TextInput({
  label,
  style,
  required,
  containerStyle,
  ...props
}: TextInputProps) {
  return (
    <View style={containerStyle}>
      <Text style={textInputStyles.label}>
        {label}
        {required && <Text style={textInputStyles.required}>*</Text>}
      </Text>
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
