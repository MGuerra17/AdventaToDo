import React from 'react';
import {Pressable} from 'react-native';
import AddToDoIcon from '../../Icons/AddToDoIcon';
import {addToDoButtonStyles} from './addToDoButtonStyles';
import CreateToDoModal from '../../Modals/CreateToDoModal/CreateToDoModal';
import {Todo} from '../../../interfaces/toDo';

interface AddToDoButtonProps {
  onCreate: (todo: Todo) => Promise<void>;
}

export default function AddToDoButton({onCreate}: AddToDoButtonProps) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Pressable
        style={addToDoButtonStyles.container}
        onPress={() => setShowModal(true)}>
        <AddToDoIcon styles={addToDoButtonStyles.icon} width={26} height={26} />
      </Pressable>
      <CreateToDoModal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        onCreate={onCreate}
      />
    </>
  );
}
