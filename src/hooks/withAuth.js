import { selectorUser } from "features/user/userSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PATHS from "routes/path";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const user = useSelector(selectorUser);

    if(user && user.isAuthenticated){
      return <Component />
    } else {
      return <Navigate to={PATHS.LOGIN} />
    }
  }

  return AuthRoute;
}

export default withAuth;