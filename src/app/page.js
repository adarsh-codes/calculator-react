"use client"
import React, { useState } from 'react'
import Button from './components/Buttons.jsx'

function page() {

  const [total,setTotal] = useState("")


  const handleclick = (name) =>{
  

   if(name=='C') setTotal("")

   else if(name=='=') {
    const result = eval(total)
    setTotal(result)
   }
   else{
      const result = total + name
      setTotal(result)
   }

    

    
}



  return (
    <>
      <div className='outer text-center border-black mx-48  border-2 border-solid w-96'>
       <input type='text' className='border-zinc-500 border-2 border-solid p-4 m-4 ' value={total} readOnly/>
       <br/>
       <Button click={handleclick}/>
       
      </div>
    </>
  )
}

export default page

