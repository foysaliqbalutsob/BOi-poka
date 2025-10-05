import React, { use } from 'react';

const Book = ({booksPromise,data}) => {
    const {bookName,author,image,review, Alchemist,category } =data



    // const booksData = use(booksPromise)
    console.log(data)
    // console.log(booksData);
    return (
        <div >
            <div className="card bg-base-100 w-96 shadow-sm border p-4">
  <figure className='bg-gray-100 p-4'>
    <img className='h-[180px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <h2 className="card-title">{author}</h2>
    <p className='line-clamp-2'>{review}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Book;