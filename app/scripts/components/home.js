/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import Products from '../components/products';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="home">
                <div className="content">
                  <Products 
                    {...this.props}
                  />
                </div>
            </section>
        );
    }


}

// Export out the React Component
module.exports = Home;