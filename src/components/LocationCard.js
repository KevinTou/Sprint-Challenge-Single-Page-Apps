import React from "react";
import { Card, Icon, Label } from "semantic-ui-react";

export default function LocationCard({ location }) {
  const { name, type, dimension, residents } = location;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description className="location-card">
          {type} - {dimension}
        </Card.Description>
        <Card.Content extra>
          <Label attached="bottom right">
            <Icon name="group" /> Residents: {residents.length}
          </Label>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}
