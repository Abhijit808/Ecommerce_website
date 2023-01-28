import React from 'react'

const subfooter = () => {
  return (
    <>
    <footer className='flex items-center justify-center bg-slate-900 md:flex-col '>
      <div className='text-md p-2 text-white text-center'>
      {new Date().getFullYear()} Print Poster Powered by Spotify
    </div>
    </footer>
    </>
  )
}

export default subfooter