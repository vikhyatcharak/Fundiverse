import React from 'react'

const Footer = () => {
  const currentYear= new Date().getFullYear().toString()
  return (
    <>
        <nav className="sm:flex bg-slate-950 text-center text-white justify-center items-center sm:p-2 p-1 sticky bottom-0 w-full mt-6">
            <span>Copyrights &copy; {currentYear} Fundiverse - All rights reserved</span>
        </nav>
    </>
  )
}

export default Footer
