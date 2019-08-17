import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard({ char }) {
  return (
    <Card>
      <Image src={char.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{char.name}</Card.Header>
        <Card.Meta>
          <span className="status">
            {char.species}: {char.status}
          </span>
        </Card.Meta>
        <Card.Description>
          Location: {char.location.name}
          <br />
          Origin: {char.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="video camera" />
        Number of episodes featured: {char.episode.length}
      </Card.Content>
    </Card>
  );
}
