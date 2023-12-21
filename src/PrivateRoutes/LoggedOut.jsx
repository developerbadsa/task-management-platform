import React, { useEffect } from 'react';
import useUserInfo from '../Hooks/useUserInfo/useUserInfo';
import { useNavigate } from 'react-router-dom';

const LoggedOut = ({children}) => {
const {user} = useUserInfo()
const navigate = useNavigate()
useEffect(() => {
      if (user) {
        navigate('/');
      }
    }, [user, navigate]);

      return children
};

export default LoggedOut;