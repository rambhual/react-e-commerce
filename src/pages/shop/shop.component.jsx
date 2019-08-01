import React, { Component } from "react";
import SHOP_DATA from "../../data/shop_data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
export default class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <React.Fragment>
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </React.Fragment>
    );
  }
}
