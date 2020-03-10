import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Movies from './components/Movies';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.co/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.co/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    async function fetchMovies() {
      let res = await fetch('https://swapi.co/api/films/?format=json');
      let data = await res.json();
      setMovies(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    fetchMovies();
    
  }, [])
  console.log("people", people);
  console.log('planets', planets);
  console.log('movies', movies);

  return (
    <>
      <Router>
        <NavBar />
        <Container> 
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/people'>
              <People data={people}/>
            </Route>
            <Route exact path='/planets'>
              <Planets data={planets}/>
            </Route>
            <Route exact path='/movies'>
              <Movies data={movies}/>
            </Route>
          </Switch>
          )}
          
        </Container>
      </Router>
      
    </>
  );
}

export default App;
