import React from "react";

function Card({item}) {
    // console.log(item);
    
  return (
    <>
      <div>
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 durtion-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt={item.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">Buy Now</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card;
