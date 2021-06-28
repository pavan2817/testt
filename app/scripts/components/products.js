import React from 'react';
import Product from '../components/product';

class Products extends React.Component {

    /**
     * Renders Products in Home component.
     * 
     * @returns JSX
     * @memberof Products
    */

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            data: []
        };
    }

    fetchProducts(search) {
        this.setState({
            isLoading: true
        });
        let fetchUrl = 'http://localhost:3035/products';
        if (search) {
            fetchUrl = `${fetchUrl}?search=${search}`;
        }
        fetch(fetchUrl, {
            method: "GET",
            headers: {
                "Content-Type": "text/plain"
            },
        })
        .then(response => response.json())
        .then(data => this.setState({ data, isLoading: false }));
    }

    componentDidMount() {
        this.fetchProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.searchText !== prevProps.searchText) {
            this.fetchProducts(this.props.searchText);
        }
    }

    render() {
        const { isLoading, data } = this.state;
        const customMessageStyle = {
            position: 'absolute',
            left: '40%',
            top: '50%'
        };
        return (
            <>
            { isLoading && <h3 style={customMessageStyle}>LOADING...</h3> }
            { !isLoading && !data.length && <h3 style={customMessageStyle}>NO PRODUCTS FOUND</h3>}
            { !isLoading && !!data.length &&
                <section id="home">
                    <div className="container mb-5 mt-5">
                        <div className="row">
                            {
                                data.map((item) => 
                                <Product
                                key={item._id}
                                {...item}
                                >
                                </Product>)
                            }
                        </div>
                    </div>
                </section>
            }
        </>
        );
    }


}

// Export out the React Component
module.exports = Products;