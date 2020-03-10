import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Movies({ data }) {
    return (
        <>
        <h1>Movies</h1>
        <Grid columns={3}>
            {data.map((movies, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{movies.title}</Card.Header>
                                <Card.Description>
                                    <strong>Episode ID</strong>
                                    <p>{movies.episode_id}</p>
                                    <strong>Director</strong>
                                    <p>{movies.director}</p>
                                    <strong>Release Data</strong>
                                    <p>{movies.release_date}</p>
                                    <strong>Opening Crawl</strong>
                                    <p>{movies.opening_crawl}</p>
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