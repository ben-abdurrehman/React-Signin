import React from 'react'
import Nav from './Componants/Nav'
import First from './Componants/First'
import Second from './Componants/Second'

const App = () => {
  return (
    <div className='w-[100vw] h-[100vh] font-poppins flex items-center justify-center box-border' style={{background: 'linear-gradient(180deg, #0089ED 50%, #ffffff 50%)'}}>
      <div className='w-[95%] h-full flex flex-col items-center justify-between box-border p-2'>
        <Nav/>
        <div className='w-[90%] h-auto flex items-center box-border justify-center'>
          <First/>
          <Second/>
        </div>
      </div>
    </div>
  )
}

export default App