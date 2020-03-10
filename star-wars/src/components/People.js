import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

export default function People({ data }) {
    return (
      <>
        <h1>People</h1>
        <Grid columns={3}>
            {data.map((people, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Description>
                                    <strong>Gender</strong>
                                    <p>{people.gender}</p>
                                    <strong>Height</strong>
                                    <p>{people.height}</p>
                                    <strong>Homeworld</strong>
                                    <p>{people.homeworld}</p>
                                    <strong>Films</strong>
                                    <p>{people.films}</p>
                                </Card.Description>
                            </Card.Content>    
                        </Card>
                    </Grid.Column>
                );
            })}
        </Grid>
      </>
    );
}