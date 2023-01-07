import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const AppBar = lazy(() =>
  import('components/Nav/AppBar/AppBar' /* webpackChunkName: "app-bar" */)
);

const HomeView = lazy(() =>
  import('pages/HomeView' /* webpackChunkName: "home-page" */)
);

const ContactsView = lazy(() =>
  import('pages/ContactsView' /* webpackChunkName: "contacts-page" */)
);

const RegisterView = lazy(() =>
  import('pages/RegisterView' /* webpackChunkName: "register-page" */)
);

const LoginView = lazy(() =>
  import('pages/LoginView' /* webpackChunkName: "login-page" */)
);

export const App = () => {
  return (
    <div>
      <>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index element={<HomeView />} />
              <Route path="/contacts" element={<ContactsView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/login" element={<LoginView />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    </div>
  );
};
