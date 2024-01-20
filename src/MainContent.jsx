export const MainContent = ({ user, country = "India" }) => {
  return (
    <main>
      <h1>User details</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Address: {user.address}</p>
      <p>Country: {country}</p>
    </main>
  );
};
