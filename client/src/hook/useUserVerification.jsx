import { useContext, useEffect } from 'react';
import { ContextUser } from '../context/ContextUser.jsx';
import { useNavigate } from 'react-router';

const useUserVerification = () => {
  const { user } = useContext(ContextUser);
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate('/login', { replace: true });
  }, [user]);
};

export default useUserVerification;
