import React from 'react'

function Letter({arr,letterClass}) {

    
return (

    <span>
        {arr.map((char, i)=>
            <span key={i} className={letterClass}> <h1>{char}</h1></span>
        )}
    </span>
  )
}

export default Letter