import './App.css';
import Register from './screens/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserList from './screens/UserList';
import { Provider } from 'react-redux';
import { store } from "./store/store"; 
import { CountProvider } from './context/CountContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user-list",
    element: <UserList />,
  },

  // ⭐ MUST HAVE – fixes __shim-error-route__
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  }
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <CountProvider>
          <RouterProvider router={router} />
        </CountProvider>
      </Provider>
    </div>
  );
}

export default App;
