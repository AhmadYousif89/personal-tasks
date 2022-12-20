export const ArrowIcon = ({ className = 'h-6 w-6' }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      fill="none"
      strokeWidth={3}
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`${className}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
      />
    </svg>
  );
};
