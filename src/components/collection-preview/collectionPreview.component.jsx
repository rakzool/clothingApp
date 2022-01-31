import React from "react";

import Classes from "./collectionPreview.module.scss";
import CollectionItem from "../collection-item/collection-item.component";

export default function CollectionPreview({ title, items }) {
  return (
    <div className={Classes.collectionPreview}>
      <h1 className={Classes.title}>{title.toUpperCase()}</h1>
      <div className={Classes.preview}>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
}
