import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import StorageManager from '../helpers/storageManager';
import { RoutesName, StorageKey } from '../constants';

const isAuthenticated = () => {
  return StorageManager.getItem(StorageKey.IS_AUTHENTICATED) === 'true';
};

function withAuth<T extends object>(WrappedComponent: ComponentType<T>) {
  return (props: T) => {
    return isAuthenticated() ? <WrappedComponent {...props} /> : <Navigate to={RoutesName.LOGIN} />;
  };
}

export default withAuth;
