import React, { useEffect, useState } from "react";
import CardData from "../components/CardData";
import { Container, Card } from "semantic-ui-react";

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?results=15&inc=name,gender,email,picture&noinfo"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployees(data.results);
        console.log(employees);
      })
      .then(() => console.log(employees));
  }, []);

  return (
    <>
      <Container>
        <h1>Employee Roster</h1>
        <Card.Group itemsPerRow={3}>
          {employees.map((employee) => (
            <CardData
              firstName={employee.name.first}
              lastName={employee.name.last}
              image={employee.picture.medium}
              email={employee.email}
              gender={employee.gender}
              key={employee.email}
            />
          ))}
        </Card.Group>
      </Container>
    </>
  );
}

export default Home;
