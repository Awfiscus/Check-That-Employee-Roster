import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

function CardData({}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{}</Card.Header>
        <Card.Meta>{}</Card.Meta>
        <Card.Meta>{}</Card.Meta>
        <Card.Description>{}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default CardData;
