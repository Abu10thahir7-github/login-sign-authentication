import React from 'react'
import { useNavigate } from 'react-router-dom'
function Dash() {
    const navigate = useNavigate();

    const handlechange = () => {
        navigate('/show')
    }

  return (
    <div>
       Dashboard

       <button onClick={handlechange} >Veiw all</button>
    </div>
  )
}

export default Dash
