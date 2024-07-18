import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBnhso3worpLaQSUE6oV1li1n_KtmyObF8",
    authDomain: "read-relay.firebaseapp.com",
    projectId: "read-relay",
    storageBucket: "read-relay.appspot.com",
    messagingSenderId: "123410390455",
    appId: "1:123410390455:web:1a83d6d8821183b5c3dc32",
    databaseURL: "https://read-relay-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export { app };