import React from 'react';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
        };
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
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
            </div>
        );
    }
}

export default App;
