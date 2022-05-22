import { auth, db } from "../libs/Firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  getDocs,
  getDoc,
  collection,
  doc,
  docs,
  query,
  where,
} from "firebase/firestore";
import AdminDashboard from "../views/Admin/AdminDashboard";

export default function User() {
  const [user, setUser] = useState("");
  const [name, setName] = useState([]);

  const nameUser = [];

  const bringUser = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        console.log(email);
        setUser(email);
      } else {
        console.log("user not found");
      }
    });

    const q = query(collection(db, "Users"), where("Email", "==", user));

    const snap = await getDocs(q);

    //nameUser.push(snap.data());
    snap.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data().Name);
      nameUser.push({ ...doc.data(), id: doc.id });
      //console.log(nameUser);
    });
    setName(nameUser);
    //    console.log(q);
  };

  useEffect(() => {
    bringUser();
  }, [user]);

  // como llamar useEffect sin colapsar en el intento
  return (
    <div>
      {name.map((doc, key) => (
        <section className="user" key={key}>
          <p> {doc.Name}</p>
          <></>
          {console.log(doc)}
          <p> {doc.Role}</p>
          {/* <AdminDashboard name={doc.Name} role={doc.Role} /> */}
        </section>
      ))}
    </div>
  );
}
