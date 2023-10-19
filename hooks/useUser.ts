// hooks/useAuth.js
import { useState, useEffect } from 'react';
import { auth } from '@/firebase/db';
import { User } from 'firebase/auth';

const useUser = () => {
  const [user, setUser] = useState<User|null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export default useUser;
