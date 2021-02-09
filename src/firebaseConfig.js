import firebase from "firebase/app"
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APPKEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID ,
    storageBucket: process.env.REACT_APP_FIREBASE_BUKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID

})
export const auth = app.auth()
export default app;