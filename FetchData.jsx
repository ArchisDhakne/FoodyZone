import React, { useEffect, useState } from 'react';
import Button from './Button';

const BASE_URL = 'http://localhost:9000';

function FetchData({ data, setData }) {
  const [localdata, setLocalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setLocalData(json);
        setData(json); // Pass data to the parent component
        setLoading(false);
      } catch (error) {
        setError("Unable to Fetch Data");
      }
    };

    fetchFoodData();
  }, [setData]);

  console.log(data);

  if (error) return <div>{error}</div>;
  if (loading) return <div>{"Loading..."}</div>;

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {data?.map(({ name, image, text, price }) => (
        <div
          className='card w-1/4 
                     bg-[url("box_bg.png")] 
                     bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,_rgba(165,239,255,0.2)_0%,_rgba(110,191,244,0.0447917)_77.08%,_rgba(70,144,213,0)_100%)] 
                     border border-white  rounded-2xl p-4 m-2
                      '
          key={name}
        >
          <div className="food_image">
            <img src={BASE_URL + image} alt={name} className="w-full h-40 object-cover rounded-2xl" />
          </div>

          <div className="food_info flex flex-col justify-between items-end mt-4">
            <div className="info">
              <h3 className="mt-4 font-medium text-lg">{name}</h3>
              <p className="mt-2 text-sm">{text}</p>
            </div>

            <Button text={"Rs. " + price.toFixed(2)} className="mt-4" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FetchData;
