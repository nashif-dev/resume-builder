import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <div className="h-screen bg-cover bg-center bg-fixed flex justify-center items-center" style={{ backgroundImage: "url('/bg1.png')" }}>
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl text-center shadow-lg max-w-md">
          <h2 className="text-4xl font-bold text- mb-3">Designed to get hired.</h2>
          <h4 className="text-xl font-bold mb-6">Your skills, your story, your next job — all in one.</h4>
          <Link to='/resume' className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md transition"> Make Your Resume </Link>
        </div>
      </div>  
    </div>
  )
}

export default Home