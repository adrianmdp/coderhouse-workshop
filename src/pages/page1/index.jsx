// El siguiente componente esta solo a modo de prueba
// --------------------------------------------------
const Location = () => <></>
// --------------------------------------------------


// Acá comienza el código que necesita mejoras.
const locations = {
  argentina: [
    { name: "location1", address: "Calle 123, 1234 Ciudad - Provincia" },
    { name: "location2", address: "Calle 123, 1234 Ciudad - Provincia" },
  ],
  uruguay: [
    { name: "location1", address: "Calle 123, 1234 Ciudad - Provincia" },
    { name: "location2", address: "Calle 123, 1234 Ciudad - Provincia" },
  ],
  brasil: [
    { name: "location1", address: "Calle 123, 1234 Ciudad - Provincia" },
    { name: "location2", address: "Calle 123, 1234 Ciudad - Provincia" },
  ],
};

const Locations = () => {
  const getUsersFromArgentina = () => {
    return locations.argentina.map((user) => (
      <Location name={user.name} email={user.email} />
    ));
  };
  const getUsersFromUruguay = () => {
    return locations.uruguay.map((user) => (
      <Location name={user.name} email={user.email} />
    ));
  };
  const getUsersFromBrasil = () => {
    return locations.brasil.map((user) => (
      <Location name={user.name} email={user.email} />
    ));
  };

  return (
    <div>
      <h1>Page1</h1>
      <div className="locations-argentina">{getUsersFromArgentina()}</div>
      <div className="locations-uruguay">{getUsersFromUruguay()}</div>
      <div className="locations-brasil">{getUsersFromBrasil()}</div>
    </div>
  );
};

export { Locations };
