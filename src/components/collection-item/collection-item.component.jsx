import React from "react";
import Classes from "./collectionItem.module.scss";

export default function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className={Classes.collectionItem}>
      <div
        className={Classes.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={Classes.collectionFooter}>
        <span className={Classes.name}>{name}</span>
        <span className={Classes.price}>{price}</span>
      </div>
    </div>
  );
}
