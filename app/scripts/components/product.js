import React from 'react';


class Product extends React.Component {

    /**
     * Renders Products in Home component.
     * 
     * @returns JSX
     * @memberof Product
    */

    constructor(props) {
        super(props);
    }

    render() {
        const {
            _id,
            about,
            isActive,
            name,
            price,
            picture
        } = this.props;
        return (
        <div className="col-md-3">
            <div className="card mt-3">
                <div className="product-1 align-items-center p-2 text-center"> 
                <span className="dot">{_id}</span>
                <img src={picture} className="rounded" width="160" height="300px" />
                    <h5 className="text-body mx-auto w-75" style={{
                        height: '60px'
                    }}>{name}</h5>
                    <div className="mt-3 small"> <span className="text-body">{about}</span></div>
                    <div className="mt-3 text-dark fw-bolder"> <span>${price}</span></div>
                </div>
                <div className="p-3 bg-danger text-center text-white mt-3 cursor"> <span className="text-uppercase">{isActive === 'true' ? 'Add to cart' : 'Out of stock'}</span> </div>
                </div>
        </div>
        );
    }


}

// Export out the React Component
module.exports = Product;