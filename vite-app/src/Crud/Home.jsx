import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate();

    const handlechange = () => {
        navigate('/show')
    }
  return (
    <div>
      user
      <button onClick={handlechange} >Veiw all</button>
    </div>
  )
}

export default Home
