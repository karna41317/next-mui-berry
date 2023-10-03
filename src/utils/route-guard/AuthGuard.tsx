import { useRouter } from 'next/router';
// project imports
import useAuth from 'hooks/useAuth';
import { GuardProps } from 'types';
import { useEffect } from 'react';
// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  return children;
};

export default AuthGuard;
