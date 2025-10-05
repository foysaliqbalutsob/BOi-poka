import React, { Suspense, useEffect, useState } from 'react';
import Book from '../../Book/Book';

const Books = ({data}) => {
    const [books, setAllBooks] = useState([])

    const booksPromise = fetch('booksData.json').then(res => res.json())
    console.log(data)
    




    // useEffect(()=>{
    //     fetch('booksData.json').then(res=>res.json())
    //     .then((data) =>
    //     {
    //         setAllBooks(data)
    //     })
    // },[])


    return (
        <div>
           <div className='text-3xl text-center p-6'>
             <h1>Books</h1>
           </div>
           <Suspense fallback={<h1>Loading...</h1>}>
           <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 shadow-2xl'>
            {
            // <Book booksPromise={booksPromise}></Book>
            data.map(data =><Book key={data.bookId} data ={data} className="border"  ></Book>)
           }
           
           </div>
           </Suspense>
            

        </div>
    );
};

export default Books;