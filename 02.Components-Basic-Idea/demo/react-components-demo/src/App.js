import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {
    const movies = [
        { title: 'Man of Steel', year: 2008, cast: ['Henry Cavil', 'Russell Crowe'] },
        { title: 'Harry Potter', year: 2008, cast: ['Daniel', 'Ema Watson'] },
        { title: 'Lord of the Rings', year: 2008, cast: ['Orlando Bloom'] },
    ];

    return (
        <div className="App">
            <h1>React Demo</h1>

            <Counter canReset />

            <Timer start={0} />

            <MovieList movies={movies} />
        </div>
    );
}

export default App;
