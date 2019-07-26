import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard(props) {
  const { name, air_date, episode, characters } = props.episode;
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {name} - {episode}
        </Card.Header>
        <Card.Description className="episode-card">
          <strong>Aired:</strong> {air_date}
          <br />
          <strong>Featuring:</strong> {characters.length} characters
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
