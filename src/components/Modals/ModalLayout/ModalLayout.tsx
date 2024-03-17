import React from 'react';
import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  Pressable,
} from 'react-native';
import XIcon from '../../Icons/XIcon';
import {modalLayoutStyles} from './modalLayoutStyles';

interface ModalLayoutProps {
  title?: string;
  visible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

export default function ModalLayout({
  title,
  visible,
  onRequestClose,
  children,
}: ModalLayoutProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={modalLayoutStyles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={modalLayoutStyles.backdrop}>
            <View style={modalLayoutStyles.contentContainer}>
              <View style={modalLayoutStyles.header}>
                <Text style={modalLayoutStyles.title}>{title}</Text>
                <Pressable onPress={onRequestClose}>
                  <XIcon
                    width={24}
                    height={24}
                    styles={modalLayoutStyles.closeIcon}
                  />
                </Pressable>
              </View>
              {children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
}
