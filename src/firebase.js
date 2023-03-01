import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional // Đây là file config cá nhân được khởi tạo dự trên firebase 
const firebaseConfig = {
    apiKey: "AIzaSyBC0ClJegTINIdNRzKCMxA0tINWM0a__UM",
    authDomain: "projectmd2-430a0.firebaseapp.com",
    projectId: "projectmd2-430a0",
    storageBucket: "projectmd2-430a0.appspot.com",
    messagingSenderId: "850072962198",
    appId: "1:850072962198:web:c1f9919ca0aab6eb8daeb7",
    measurementId: "G-TZ9T1TL7NF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Storage and get a reference to the service
// Nhận tham chiếu đến dịch vụ lưu trữ, được sử dụng để tạo tham chiếu trong bộ chứa lưu trữ của bạn
export const storage = getStorage(app);