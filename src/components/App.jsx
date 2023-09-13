import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { fetchCurrentUser } from "./redux/auth/authOperations";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout/Layout";

const Register = lazy(() => import('./Register/Register'));
const Login = lazy(() => import('./Login/Login'));
const ContactComponent = lazy(() => import('./ContactComponent/ContactComponent'));

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
  

  return (
    <>
      <Suspense fallback='Загрузка...'>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/register" element={<RestrictedRoute component={Register} redirectTo='/contacts'/>} />
          <Route path="/login" element={<RestrictedRoute component={Login} redirectTo='/contacts'/>} />
            <Route path="/contacts" element={<PrivateRoute component={ContactComponent} redirectTo='/login' />} />
            </Route>
        </Routes>
      </Suspense>
    </>
  );
};
 
export default App;