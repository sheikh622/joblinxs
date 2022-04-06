/*// ForJWT Auth
import {getUserFromJwtAuth} from './helper/AuthHelper';
import {
  useJWTAuth,
  useJWTAuthActions,
} from '../services/auth/jwt-auth/JWTAuthProvider';

export const useAuthUser = () => {
  const {user, isAuthenticated, isLoading} = useJWTAuth();
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromJwtAuth(user),
  };
};

export const useAuthMethod = () => {
  const {signInUser, signUpUser, logout} = useJWTAuthActions();

  return {
    signInUser,
    logout,
    signUpUser,
  };
};*/
//For Firebase Auth
import {useFirebase, useFirebaseActions} from '../services/auth/firebase/FirebaseAuthProvider';
import {getUserFromFirebase, getUserFromAuth} from './helper/AuthHelper';
import { useDispatch, useSelector } from "react-redux";

export function useAuthUser() {
  const {isLoading} = useFirebase();
  const userDetails = useSelector((state: any) => state.auth);
  const isAuthenticated: boolean = userDetails.token ? true : false;
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromAuth(userDetails.user),
  };
};

export const useAuthUserOld = () => {
  const {user, isAuthenticated, isLoading} = useFirebase();
  console.log("isAuthenticated", isAuthenticated);
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromFirebase(user),
  };
};

export const useAuthMethod = () => {
  const {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    logout,
  } = useFirebaseActions();

  return {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    logout,
  };
};

//For AWS Auth
// import {getUserFromAWS} from './helper/AuthHelper';
// import {
//   useAwsCognito,
//   useAwsCognitoActions,
// } from '../services/auth/aws-cognito/AWSAuthProvider';
//
// export const useAuthUser = () => {
//   const {user, isAuthenticated, isLoading} = useAwsCognito();
//   return {
//     isLoading,
//     isAuthenticated,
//     user: getUserFromAWS(user),
//   };
// };
//
// export const useAuthMethod = () => {
//   const {
//     signIn,
//     signUpCognitoUser,
//     confirmCognitoUserSignup,
//     logout,
//   } = useAwsCognitoActions();
//
//   return {
//     signIn,
//     signUpCognitoUser,
//     confirmCognitoUserSignup,
//     logout,
//   };
// };

/*
//For Auth0
export const useAuthUser = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();
  console.log(
    'user, isAuthenticated, isLoading',
    user,
    isAuthenticated,
    isLoading,
  );
  return {
    isLoading,
    isAuthenticated,
    user: useMemo(() => getUserFromAuth0(user), []),
  };
};

export const useAuthMethod = () => {
  const {loginWithRedirect, logout} = useAuth0();

  return loginWithRedirect;
};*/
