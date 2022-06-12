import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBX6hgm1Tr4U_FxYP65Hj7aynQkEOMr74U',
  authDomain: 'napoliv2.firebaseapp.com',
  projectId: 'napoliv2',
  storageBucket: 'napoliv2.appspot.com',
  messagingSenderId: '450778939645',
  appId: '1:450778939645:web:81d2ec8264d00ffef4be94',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
