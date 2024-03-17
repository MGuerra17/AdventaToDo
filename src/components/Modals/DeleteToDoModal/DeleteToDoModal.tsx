import React from 'react';
import {Text, View} from 'react-native';
import ModalLayout from '../ModalLayout/ModalLayout';
import ModalControls from '../ModalLayout/ModalControls';
import {deleteToDoModalStyles} from './deleteToDoModalStyles';

interface DeleteToDoModalProps {
  visible: boolean;
  loading: boolean;
  onDelete: () => Promise<void>;
  onRequestClose: () => void;
}

export default function DeleteToDoModal({
  visible,
  loading,
  onDelete,
  onRequestClose,
}: DeleteToDoModalProps) {
  const handleDelete = async () => {
    await onDelete?.();
    onRequestClose();
  };

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
        loading={loading}
        mainButtonText={loading ? 'Eliminando...' : 'Eliminar'}
        type="delete"
        onRequestClose={onRequestClose}
        onConfirm={handleDelete}
      />
    </ModalLayout>
  );
}
