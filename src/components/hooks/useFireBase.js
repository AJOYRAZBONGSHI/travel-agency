import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import authenticationInitialize from "../../FireBase/FireBase.init";

authenticationInitialize();

const useFireBase = () => {
  const [user, setUser] = useState({});
  const [isLoading,setIsLoading]=useState(true);
  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
    .then(() => {})
    .catch(error=>{})
    .finally(()=>setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
  };
};

export default useFireBase;
