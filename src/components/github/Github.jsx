import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState();
    
    // useEffect(()=>{
    //     const fun = async()=>{
    //     // fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    //     await fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>res.json())
    //     .then((res)=>{
    //         console.log(res);
    //         setData(res);
    //     })
    // }
    // fun();
    
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      github  followers : {data && data.followers}
      
      <img src={data && data.avatar_url} width={300} alt='img ' />
     
    </div>
  )
}

export default Github

export  const githubInfo = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')

    return response;
}

