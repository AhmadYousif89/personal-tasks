import { FC, useEffect, useState } from 'react';

import { Card } from 'components/ui';
import { Task } from 'features/types';
import { TaskProvider } from './context';

import { TaskDeleteButton } from './delete-button';
import { SwitchTaskStatus } from './switch-status';
import { TaskUpdateButtons } from './update-buttons';
import { DisplayTaskTime } from './display-time';
import { DetailsSection } from './details-section';

export const TaskItem: FC<{ task: Task }> = ({ task }) => {
  const [animate, setAnimate] = useState(false);

  const wasUpdated = task.createdAt !== task.updatedAt;
  const styles = task.status === 'InProgress' ? 'ring-1 ring-color-validating' : '';
  const transition = animate
    ? 'translate-y-0 opacity-100 visible'
    : 'translate-y-10 opacity-0 invisible';

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <TaskProvider>
      <Card
        priority={task.priority}
        className={`relative ${styles} ${transition} transition-transform duration-700`}>
        <li className={`flex -translate-y-0 flex-col gap-6 py-6 px-4 text-color-base md:text-3xl`}>
          <TaskDeleteButton taskId={task.id} />

          <header className="space-y-4 self-start">
            <h2 className="text-3xl tracking-wide">{task.title}</h2>
            <DisplayTaskTime label="created" time={task.createdAt} />
          </header>

          <DetailsSection taskDetails={task.details} />

          <footer className="mt-6 flex items-end justify-between gap-4">
            <SwitchTaskStatus taskId={task.id} taskStatus={task.status} />
            <TaskUpdateButtons taskId={task.id} />
          </footer>

          {wasUpdated ? <DisplayTaskTime label="updated" time={task.updatedAt} /> : null}
        </li>
      </Card>
    </TaskProvider>
  );
};
