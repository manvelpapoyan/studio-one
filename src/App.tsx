import './App.css'
import { Provider } from 'react-redux';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import withAuth from './hoc/withAuth';
import { lazy,Suspense } from 'react';
import Loader from './components/Loader';
import { RoutesName } from './constants';
import {store} from "./redux/store.ts";

const HomePage = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const News = lazy(() => import('./pages/news'));
const Profile = lazy(() => import('./pages/profile'));


const ProtectedProfile = withAuth(Profile);



function App() {

  return (
  <Provider store={store}>
      <Router>
      <Header />
     <Suspense
        fallback={
          <Loader/>
        }
      >
        <Routes>
          <Route path={RoutesName.HOME} element={<HomePage />} />
          <Route path={RoutesName.LOGIN} element={<Login />} />
          <Route path={RoutesName.NEWS} element={<News />} />
          <Route path={RoutesName.PROFILE} element={<ProtectedProfile />} />
        </Routes>
      </Suspense>

    </Router>

  </Provider>
  )
}

export default App
