interface TaskPanelProps {
  title: string;
  count: number;
  color: string;
  tooltip: string;
  isActive: boolean;
  className?: string;
  togglePanels: () => void;
  showFilteredTasks: (arg: boolean) => void;
}

export const TaskPanel = ({
  title,
  count,
  color,
  tooltip,
  isActive,
  togglePanels,
  showFilteredTasks,
}: TaskPanelProps) => {
  const borderColor =
    color === 'sky'
      ? 'border-sky'
      : color === 'amber'
      ? 'border-amber'
      : color === 'green'
      ? 'border-green'
      : '';
  const textColor =
    color === 'sky'
      ? 'text-sky'
      : color === 'amber'
      ? 'text-amber'
      : color === 'green'
      ? 'text-green'
      : '';

  const handleTasks = () => {
    showFilteredTasks(true);
    togglePanels();
  };

  return (
    <div
      title={tooltip}
      onClick={handleTasks}
      className={`${isActive ? textColor : ''} 
      flex cursor-pointer flex-col items-center gap-8 
      rounded-sm bg-transparent text-color-base`}>
      <div
        className={`relative ${borderColor} h-28 w-28 rounded-full border-[5px] bg-transparent shadow-md md:h-32 md:w-32 lg:h-44 lg:w-44`}>
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold md:text-4xl`}>
          {count}
        </span>
      </div>
      <p className={`rounded-md p-3 text-2xl capitalize tracking-wide md:text-4xl`}>
        {title}
      </p>
    </div>
  );
};
