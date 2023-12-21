import React, { useEffect } from 'react';
import useUserInfo from '../Hooks/useUserInfo/useUserInfo';
import { useNavigate } from 'react-router-dom';

const LoggedIn = ({ children }) => {

  const { user, loading } = useUserInfo()
  const navigate = useNavigate()


  useEffect(() => {
    if (loading) {
       'loading'
    }else if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (loading) {
    return 'loading'
  }

  return children

};

export default LoggedIn;