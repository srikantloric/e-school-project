import firebase from 'firebase'


const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyDKol2whJU77OFRQPN98w0JwmgxVHFEJBM",
        authDomain: "orient-public-school.firebaseapp.com",
        projectId: "orient-public-school",
        storageBucket: "orient-public-school.appspot.com",
        messagingSenderId: "54950814214",
        appId: "1:54950814214:web:970b0ee7c967149bfb1987",
        measurementId: "G-HWF98CSVYZ"
      }
)

export const auth = app.auth();
export default app;

