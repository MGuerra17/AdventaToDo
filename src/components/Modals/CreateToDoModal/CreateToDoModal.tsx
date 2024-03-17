import React from 'react';
import {createToDoModalStyles} from './createToDoModalStyles';
import TextInput from '../../Inputs/TextInput/TextInput';
import CategoryInput from '../../Inputs/CategoryInput/CategoryInput';
import CreateToDoModalControls from '../ModalLayout/ModalControls';
import ModalLayout from '../ModalLayout/ModalLayout';
import {Todo} from '../../../interfaces/toDo';
import useCreateToDo from '../../../hooks/useCreateToDo';

interface CreateToDoModalProps {
  visible: boolean;
  onCreate: (todo: Todo) => Promise<void>;
  onRequestClose: () => void;
}

export default function CreateToDoModal({
  visible,
  onCreate,
  onRequestClose,
}: CreateToDoModalProps) {
  const {
    loading,
    title,
    setTitle,
    description,
    setDescription,
    selectedCategory,
    setSelectedCategory,
    handleCreate,
    errors,
  } = useCreateToDo({onCreate, onRequestClose});

  return (
    <ModalLayout
      title="Crear tarea"
      visible={visible}
      onRequestClose={onRequestClose}>
      <TextInput
        required
        label="Titulo"
        containerStyle={createToDoModalStyles.input}
        placeholder="Ej. Estudiar programación"
        value={title}
        onChangeText={setTitle}
        error={errors.title}
      />
      <TextInput
        label="Descripción"
        placeholder="Ej. Leer el libro de Clean Code"
        multiline
        maxLength={200}
        numberOfLines={3}
        containerStyle={createToDoModalStyles.input}
        value={description}
        onChangeText={setDescription}
      />
      <CategoryInput
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CreateToDoModalControls
        loading={loading}
        mainButtonText={loading ? 'Creando...' : 'Crear'}
        onRequestClose={onRequestClose}
        onConfirm={handleCreate}
      />
    </ModalLayout>
  );
}
