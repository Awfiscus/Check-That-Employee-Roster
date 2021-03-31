import React from "react";
import { Card, Image } from "semantic-ui-react";

function CardData({ image, firstName, lastName, email, gender }) {
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>Name: {firstName + " " + lastName}</Card.Header>
        <Card.Meta>Email: {email}</Card.Meta>
        <Card.Meta>Gender: {gender}</Card.Meta>
        {/* <Card.Description>{picture.thumbnail}</Card.Description> */}
      </Card.Content>
    </Card>
  );
}

export default CardData;
