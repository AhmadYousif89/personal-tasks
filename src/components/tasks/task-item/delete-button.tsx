import { FC, useState } from 'react';

import { wait } from 'helpers';
import { useAppDispatch } from 'app/hooks';
import { deleteTasks } from 'features/services/tasks';
import { setTaskActionType } from 'features/slices/task';

import { TrashIcon } from 'assets/icons';
import { ActionModal, Backdrop, Button } from 'components/ui';

type Props = { taskId: string };

export const TaskDeleteButton: FC<Props> = ({ taskId }) => {
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);

  const deleteTaskHandler = () => {
    dispatch(setTaskActionType('deleting'));
    dispatch(deleteTasks(taskId));
    wait(() => dispatch(setTaskActionType('')), 1);
  };

  return (
    <>
      {modal ? (
        <>
          <ActionModal
            msg="Delete this task ?"
            confirmAction={() => deleteTaskHandler()}
            closeModal={() => setModal(false)}
          />
          <Backdrop onClick={() => setModal(false)} />
        </>
      ) : null}
      <Button
        title="delete task"
        className="absolute top-5 right-[3px] !ring-0"
        onClick={() => setModal(true)}>
        <TrashIcon />
      </Button>
    </>
  );
};
