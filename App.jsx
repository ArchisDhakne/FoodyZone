import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import FetchData from './components/FetchData';

function App() {
  const [data, setData] = useState(null);

  const [filteredData, setFilterdData] = useState(null);

  const searchFood = (e) => {  
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue === "") {
      setFilterdData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterdData(filter);
  }; 

  return (
    <>
      <div>
        <div className='h-48 bg-black'>
          <div className='bg-black text-white flex justify-between items-center p-4'>
            <img src="logo.svg" alt="Logo" />
            <input
              type="text"
              placeholder='Search Food'
              onChange={searchFood} 
              className='rounded-xl pl-4 text-black h-8'
            />
          </div>
          <div className='flex mt-16 justify-center space-x-6'>
            <Button text={'All'} />
            <Button text={'Break Fast'} />
            <Button text={'Lunch'} />
            <Button text={'Dinner'} />
          </div>
        </div>
        <div className='bg-[url("/bg.png")] bg-cover bg-center w-screen h-auto'>
          <div className='text-white p-8'>
            <FetchData data={data} setData={setData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
