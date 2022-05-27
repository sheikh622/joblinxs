import React,{useEffect, useState} from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "./logCheck";
import Preloader from "../components/Preloader";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      console.log('islog', isLogin())
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLogin() && restricted ? (
//           <Redirect to="/" />
//         ) : (
//           <>
//             <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
//           </>
//         )
//       }
//     />
//   );
return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {" "}
          <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
        </>
      )}
    />
  );
};

export default PublicRoute;
