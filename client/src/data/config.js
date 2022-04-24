// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAakrDdp-CtjlWa5cs1s89wih1fSTSflM0",
  authDomain: "facebook-clone-6dbcb.firebaseapp.com",
  projectId: "facebook-clone-6dbcb",
  storageBucket: "facebook-clone-6dbcb.appspot.com",
  messagingSenderId: "407699796606",
  appId: "1:407699796606:web:dabd82abc7447e1effde2f",
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}
