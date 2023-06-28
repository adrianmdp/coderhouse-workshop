import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setServices(data);
    });
  }, []);

  return (
    <div>
      <h1>Services</h1>

      <div className="container">
        <div className="services">
          {services.map((service) => (
            <div className="service">
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Services };
