import React, { useEffect, useState } from "react";

function Home() {
  const [employeesState, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((data) => {
        setEmployees([{ employees: data.results }]);
        console.log(employeesState);
      });
  }, []);

  return <></>;
}

export default Home;
