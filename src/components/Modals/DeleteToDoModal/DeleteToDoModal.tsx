import React from 'react';
import {Text, View} from 'react-native';
import ModalLayout from '../ModalLayout/ModalLayout';
import ModalControls from '../ModalLayout/ModalControls';
import {deleteToDoModalStyles} from './deleteToDoModalStyles';

interface DeleteToDoModalProps {
  visible: boolean;
  onDelete: () => void;
  onRequestClose: () => void;
}

export default function DeleteToDoModal({
  visible,
  onDelete,
  onRequestClose,
}: DeleteToDoModalProps) {
  return (
    <ModalLayout
      title="Eliminar tarea"
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={deleteToDoModalStyles.container}>
        <Text style={deleteToDoModalStyles.text}>
          Se eliminará la tarea seleccionada de forma permanente y no podrá ser
          recuperada.
        </Text>
        <Text style={deleteToDoModalStyles.confirmText}>
          ¿Estás seguro de que deseas eliminarla?
        </Text>
      </View>
      <ModalControls
        mainButtonText="Eliminar"
        type="delete"
        onRequestClose={onRequestClose}
        onConfirm={onDelete}
      />
    </ModalLayout>
  );
}
