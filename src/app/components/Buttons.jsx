import React, { useEffect, useState } from 'react'

function Buttons({click}) {

   
    const buttonnames = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]

 
   
  return (
    <>
    
    {buttonnames.map((buttoname)=>(
        <button className='border-2 border-black text-black bg-slate-500 h-20 w-28 m-1 font-semibold' onClick={()=>{click(buttoname)}}>{buttoname}</button>
   ))}
   
      
    </>
  )
}

export default Buttons
