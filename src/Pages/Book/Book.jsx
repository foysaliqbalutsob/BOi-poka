import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({booksPromise,data}) => {
    const {bookName,author,image,review,rating, yearOfPublishing,category,tags,bookId} =data
    
const categoryColors = 
  category ==='Fiction'
  ?'text-purple-600'
  :category ==='Mystery'
  ?'text-red-500'
  :category === 'Classic'
  ?'text-blue-500'
  :'text-green-600'


    // const booksData = use(booksPromise)
    console.log(data)
    // console.log(booksData);
    return (
        <Link to={`/bookDetail/${bookId}`}>
        <div >
            <div className="card bg-base-100 w-96 shadow-sm  p-4">
  <figure className='bg-gray-100 p-4'>
    <img className='h-[180px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className='flex items-center justify-between'>
    {
      tags.map(tag=><button className='btn'>{tag}</button>)
    }
  </div>
  
    <div className='flex justify-between items-center mt-4 '>
      <h2 className={`text-sm font-semibold ${categoryColors}`}>{category}</h2>
      <p className='badge badge-secondary'> {yearOfPublishing}</p>
    </div>
    <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <h2 className="text-xl">By:{author}</h2>
   
    <p className='line-clamp-2'>{review}</p>
    <div className='border-1 border-dashed' ></div>
  </div>
  <div className='flex items-center gap-4 justify-end'>
    {rating}<FaRegStarHalfStroke />
  </div>
</div>
            
        </div>
        
        </Link>
    );
};

export default Book;