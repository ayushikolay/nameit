import React from 'react';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div className="App">
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
