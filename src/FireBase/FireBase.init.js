import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";

const authenticationInitialize = () => {
  initializeApp(firebaseConfig);
};

export default authenticationInitialize;
