import Firebase from 'firebase'


let firebaseConfig = {
    apiKey: "AIzaSyAV2uSIY-EEmhwJEI52z1uMhQxr7WsYapU",
    authDomain: "proyek-tes-b41f5.firebaseapp.com",
    databaseURL: "https://proyek-tes-b41f5.firebaseio.com",
    projectId: "proyek-tes-b41f5",
    storageBucket: "",
    messagingSenderId: "574842704968",
    appId: "1:574842704968:web:14e8257e7884a2e4"
};

let app = Firebase.initializeApp(firebaseConfig)
export const db = app.database()