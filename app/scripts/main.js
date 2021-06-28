/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };
    }

    onSearch(searchText) {
        this.setState({ searchText });
    }

    render() {
        const { searchText } = this.state;
        return (
            <div className="App">
                <Menu onSearch={(e) => this.onSearch(e)} />
                <Home searchText={searchText}/>
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
