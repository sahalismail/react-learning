import { useEffect, useState } from "react";
import "./UsersList.css";
import axios from "axios";

export const UsersList = () => {
  const [usersData, setUsersData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = () => {
    // fetch("https://reqres.in/api/users?page=1")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setUsersData(res.data);
    //   });
    axios
      .get("https://reqres.in/api/users", {
        params: {
          page: pageNumber,
        },
      })
      .then((response) => {
        setUsersData(response.data.data);
      })
      .catch((err) => {
        console.log("Error occured: ", err);
      })
      .finally(() => {
        console.log("API call completed");
      });

    // axios.get() => for just reading from server
    // axios.post() => for saving some data in server side
    // axios.put() => for updating existing data
    // axios.delete() => for deleting existing data
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  const handlePagination = () => {
    setPageNumber((oldValue) => oldValue + 1);
  };

  return (
    <section>
      <h1>Hello users!</h1>
      <button onClick={handlePagination}>Next page</button>
      <div className="users-wrapper">
        {usersData?.map((user) => (
          <div className="user" key={user.id}>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <h4>{user.email}</h4>
            <img src={user.avatar} />
          </div>
        ))}
      </div>
    </section>
  );
};
