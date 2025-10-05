const getStoredBook = () => { 
    const storedBook = localStorage.getItem('readList')
    if(storedBook){
        const storedBookData = JSON.parse(storedBook);
        return storedBookData;
    }
    else{
        return[];
    }

}
const addToStoredDB = (id) =>{
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
        alert('Already Exist')
    }
    else{
        storedBookData.push(id);
        console.log(storedBookData);
        const setData = JSON.stringify(storedBookData);
        localStorage.setItem("readList",setData)
    }

}
export {addToStoredDB,getStoredBook}