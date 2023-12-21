import React, { useContext } from 'react';
import { userInfoProvider } from '../../Provider/AuthProvider';

const useUserInfo = () => {
      const userdata = useContext(userInfoProvider)
      return userdata
};

export default useUserInfo;