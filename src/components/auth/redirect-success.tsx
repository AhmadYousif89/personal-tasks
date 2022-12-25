import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'app/hooks';
import { User } from 'features/types';
import { path } from 'components/app';
import { addTimer } from 'helpers/timeout';

export const RedirectOnSuccess = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isRegistered } = user as User;

  useEffect(() => {
    if (isRegistered) navigate(path.dashboard);
    if (user) addTimer(() => navigate(path.dashboard));
  }, [user, isRegistered]);

  return (
    <div className="flex h-screen w-full flex-col justify-center">
      <div className="mx-auto w-11/12 max-w-5xl space-y-6 rounded-md px-4 py-16 text-center text-color-base ring-2 ring-neutral-500 xs:py-24">
        <h1 className="text-3xl leading-10 xs:text-4xl">Thank you for using Taskify</h1>
        <p className="text-2xl xs:text-3xl">Redirecting to Dashboard . . .</p>
      </div>
    </div>
  );
};
