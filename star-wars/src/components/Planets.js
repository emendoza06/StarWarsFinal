import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

export default function Planets({ data }) {
    return (
        <>
        <h1>Planets</h1>
        <Grid columns={3}>
            {data.map((planets, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{planets.name}</Card.Header>
                                <Card.Description>
                                    <strong>Climate</strong>
                                    <p>{planets.climate}</p>
                                    <strong>Terrain</strong>
                                    <p>{planets.terrain}</p>
                                    <strong>Population</strong>
                                    <p>{planets.population}</p>
                                    <strong>Films</strong>
                                    <p>{planets.films}</p>

                                    <button class="button " type="button" onClick={() => alert(JSON.stringify(planets, null, 4))}><span>Read More</span></button>       
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