import React from 'react';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

class App extends React.Component {
    state = {
      headerText: "This is a cool app"
    };

    render() {
        return (
            <div className="App">
                <Header />
                <SearchBox />
            </div>
        );
    }
}

export default App;
