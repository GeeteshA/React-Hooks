import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [ count, setCount ] = useState(0);
    const [ productList, setProductList ] = useState([]);


    async function fetchAllProduct() {
        try{
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json()

            if( result && result.products) setProductList(result.products)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if (count === 5) {
            fetchAllProduct()
        }
    },[count])

  return (

    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>UseEffect Hook:</h1>
        <h1 className='font-semibold'>Count is {count}</h1>
        <button onClick={()=>setCount(count+1)}  className="m-3 px-4 py-2 border-black border-[2px] rounded-lg bg-yellow-300">Increment</button>
        
        <ul>
            { productList && productList.length > 0 ? 
                productList.map((item)=>
                    <li>{item.title}</li>
                ) : null
            }
        </ul>
    </div>
  )
}

export default UseEffect