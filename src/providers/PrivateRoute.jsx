import React, { useContext } from 'react';
import { AuthContext } from './AuthPrivider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation()

  // console.log(user)
  if(loading){
    return <Loading></Loading>
  }
  if(user && user?.email){
  return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PrivateRoute;