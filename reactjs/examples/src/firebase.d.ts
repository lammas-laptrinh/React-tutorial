declare module 'firebase/app' {
    interface FirebaseOptions {
      // Define các thuộc tính của FirebaseOptions mà bạn đang sử dụng
      // ví dụ: apiKey, authDomain, projectId, storageBucket, messagingSenderId
    }
  
    interface Firebase {
      // Định nghĩa các thuộc tính của đối tượng Firebase mà bạn đang sử dụng
      // ví dụ: firestore, auth, storage, analytics
      firestore(): any; // Ví dụ về định nghĩa cho firestore
    }
  
    export function initializeApp(options: FirebaseOptions): Firebase;
  }
  