import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDb';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('')




    const data = useLoaderData()
    console.log(data);
    useEffect(() => {
  const storedData = getStoredBook();
  console.log(storedData);
  const convertedStoredData = storedData.map(id=> parseInt(id))
  console.log(convertedStoredData);
  const myReadBook = data.filter(book =>convertedStoredData.includes(book.bookId));
  console.log(myReadBook);
  setReadList(myReadBook)
}, [data]);


const handleSort = (sortType) =>{
    setSort(sortType)
    if(sortType ==='pages'){
        const sortedByPage = [...readList].sort((a,b)=>a.totalPages -b.totalPages)
        setReadList(sortedByPage)

    }
    if(sortType ==='pages'){
        const sortedByPage = [...readList].sort((a,b)=>a.rating
 -b.rating
)
        setReadList(sortedByPage)

    }
    

}
console.log(sort)











    return (
        <div className='max-w-5xl mx-auto mt-10 p-4'>

            <div className="dropdown">
                <h2 className='bg-cyan-300 w-full p-5'>sort By: {sort ? sort : ''} </h2>
  <div tabIndex={0} role="button" className=" m-1 bg-red-600 py-2 px-10 rounded-2xl text-white  ">Sort</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('rating')} >By Rating</a></li>
    <li><a onClick={()=>handleSort('pages')}>ByPages</a></li>
  </ul>
</div>






             <Tabs >
    <TabList className="flex border-b mb-4">
      <Tab className="px-4 py-2 cursor-pointer">Read Book List</Tab>
      <Tab className="px-4 py-2 cursor-pointer">My Wish List</Tab>
    </TabList>

      <TabPanel>
          <h2 className="text-2xl font-bold mb-4">Books I Read</h2>
          {readList.length === 0 ? (
            <p>No books read yet!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {readList.map(book => (
                <div key={book.bookId} className="border rounded-lg shadow p-4 flex flex-col items-center">
                  <img src={book.image} alt={book.bookName} className="h-48 w-36 object-cover rounded mb-4" />
                  <h3 className="text-lg font-semibold">{book.bookName}</h3>
                  <p className="text-gray-600">By {book.author}</p>
                  <p className="text-sm text-gray-500 mt-1">Category: {book.category}</p>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-bold mb-4">My Wish List</h2>
          {wishList.length === 0 ? (
            <p>No books in wishlist yet!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishList.map(book => (
                <div key={book.bookId} className="border rounded-lg shadow p-4 flex flex-col items-center">
                  <img src={book.image} alt={book.bookName} className="h-48 w-36 object-cover rounded mb-4" />
                  <h3 className="text-lg font-semibold">{book.bookName}</h3>
                  <p className="text-gray-600">By {book.author}</p>
                  <p className="text-sm text-gray-500 mt-1">Category: {book.category}</p>
                </div>
              ))}
            </div>
          )}
        </TabPanel>
      
  </Tabs>
            
        </div>
    );
};

export default ReadList;