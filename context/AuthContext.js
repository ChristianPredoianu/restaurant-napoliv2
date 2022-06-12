import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../plugins/firebase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe();
  }, []);

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function logOut() {
    setUser(null);
    await signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, logOut }}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
}
