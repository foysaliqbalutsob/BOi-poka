import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const data =useLoaderData();
    const {bookId} = useParams();
    console.log(data,bookId);
    const singleBookData = data.find(book => book.bookId == bookId);
    console.log(singleBookData);
    const {bookName,image,author,review,category,yearOfPublishing,publisher,totalPages,rating} =singleBookData


    return (
        <div>

            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Book Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={bookName}
            className="h-80 w-60 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{bookName}</h1>
          <p className="text-lg text-gray-700 mb-1">By {author}</p>
          <p className="text-sm text-gray-500 mb-2">Category: {category}</p>
          <p className="text-gray-600 mb-4 line-clamp-4">{review}</p>

          <div className="grid grid-cols-2 gap-2 text-gray-700 mb-4">
            <div><span className="font-semibold">Publisher:</span> {publisher}</div>
            <div><span className="font-semibold">Year:</span> {yearOfPublishing}</div>
            <div><span className="font-semibold">Pages:</span> {totalPages}</div>
            <div><span className="font-semibold">Rating:</span> {rating}/5</div>
          </div>

         <div className="flex gap-4 mt-4">
            <button className="btn btn-primary">Mark asRead</button>
            <button className="btn btn-secondary">Add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default BookDetails;