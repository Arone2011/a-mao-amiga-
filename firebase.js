<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAfne9LDZHlJP2XaHMRqIKJvq_94RjuGEk",
    authDomain: "mao-amiga-7aeda.firebaseapp.com",
    projectId: "mao-amiga-7aeda",
    storageBucket: "mao-amiga-7aeda.firebasestorage.app",
    messagingSenderId: "783344469756",
    appId: "1:783344469756:web:5cab440ccb72ab986a7979",
    measurementId: "G-S9VFMRYTXW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>