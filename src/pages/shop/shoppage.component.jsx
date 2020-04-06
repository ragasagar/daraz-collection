import React, { Component } from 'react';
import SHOP_DATA from '../../services/shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return <div className="shop-pages">
            {collections.map(({ id, ...otherCollectionitems }) => (
                <CollectionPreview key={id} {...otherCollectionitems} />
            ))}
        </div>
    }
}

export default ShopPage;