import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...otherCollections }) => (
            <CollectionItem key={id} {...otherCollections} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
