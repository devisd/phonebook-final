import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import PrivateRoute from 'components/CustomRoutes/PrivateRoute';
import PublicRoute from 'components/CustomRoutes/PublicRoute';

const AppBar = lazy(() => import('components/Nav/AppBar/AppBar'));
const HomeView = lazy(() => import('pages/HomeView'));
const ContactsView = lazy(() => import('pages/ContactsView'));
const RegisterView = lazy(() => import('pages/RegisterView'));
const LoginView = lazy(() => import('pages/LoginView'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <div>
      <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index element={<HomeView />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsView />}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute
                    restricted
                    redirectTo="/contacts"
                    component={<RegisterView />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute
                    restricted
                    redirectTo="/contacts"
                    component={<LoginView />}
                  />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </>
    </div>
  );
};
