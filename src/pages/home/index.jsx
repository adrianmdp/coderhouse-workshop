import { collection, getDocs, getFirestore } from "firebase/firestore";

const discounttaxes = (total) => {
  return total * 0.35;
};

const Home = () => {
  const getAmountEconomicBenefits = () => {
    const initValue = 0; // Definimos el valor inicial en 0;
    let data;
    const db = getFirestore(); // Inicializamos la base de datos
    const categoriesCollection = collection(db, "moves"); // Definimos la coleccion

    // Voy a buscar los datos a firestore
    getDocs(categoriesCollection).then((snapshot) => {
      data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Guardo los datos en la variable data
    });
    // Retorno la suma de los beneficios
    const total = data.reduce((acc, curr) => {
      return acc + curr.amount; // Sumo el valor actual con el acumulado
    }, initValue);

    return discounttaxes(total);
  };

  return (
    <div>
      <h1>Home</h1>

      <div>
        <h2>
          Beneficios obtenidos en los ultimos 12 años{" "}
          {getAmountEconomicBenefits()}
        </h2>
      </div>
    </div>
  );
};

export { Home };
