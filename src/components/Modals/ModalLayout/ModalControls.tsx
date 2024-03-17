import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {getMainButtonStyles, modalLayoutStyles} from './modalLayoutStyles';

interface CreateToDoModalControlsProps {
  mainButtonText: string;
  type?: 'confirm' | 'delete';
  loading: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
}

export default function ModalControls({
  mainButtonText,
  type,
  loading,
  onRequestClose,
  onConfirm,
}: CreateToDoModalControlsProps) {
  const mainButtonStyles = getMainButtonStyles(type);

  return (
    <View style={modalLayoutStyles.controlsContainer}>
      <Pressable
        style={[modalLayoutStyles.button, modalLayoutStyles.cancelButton]}
        onPress={onRequestClose}
        disabled={loading}>
        <Text>Cancelar</Text>
      </Pressable>
      <Pressable
        style={[modalLayoutStyles.button, mainButtonStyles.container]}
        onPress={onConfirm}
        disabled={loading}>
        <Text style={mainButtonStyles.textStyle}>{mainButtonText}</Text>
      </Pressable>
    </View>
  );
}
