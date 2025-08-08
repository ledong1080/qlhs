import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

(async () => {
  try {
    // thử ghi 1 doc tạm
    await addDoc(collection(db, "___connect_test"), { ping: Date.now() });
    // thử đọc lại
    const snap = await getDocs(collection(db, "___connect_test"));
    console.log("Firestore OK. Docs:", snap.size);
  } catch (e:any) {
    alert("Firestore error: " + (e?.message || e));
    console.error(e);
  }
})();
