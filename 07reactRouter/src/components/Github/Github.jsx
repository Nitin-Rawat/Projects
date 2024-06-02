import React, { useEffect, useState } from 'react'

function Github() {
//     const data = useLoaderData()
 
    //This Below can be done Using above Hook.

    const [data, setData] = useState([])
     useEffect(()=>{
          fetch('https://api.github.com/users/nitin-rawat')
          .then(Response => Response.json())
          .then(data =>{ 
               console.log(data)
               setData(data)})
     },[])
//++++++++++++++++++++++++++++++++++ Read line 7 +++++++++++++++++++++++++++++

     return (
          <div className='  m-4 p-4 bg-gray-400'>
               Github followers :-  {data.followers }
               <img   src={data.avatar_url} alt="Git Picture" width={200} />
          </div>
     )
}

export default Github

// export const githubInfoLoader = async ()=>{
//      const response = await fetch('https://api.github.com/users/nitin-rawat')
//      return response.json()
// }
