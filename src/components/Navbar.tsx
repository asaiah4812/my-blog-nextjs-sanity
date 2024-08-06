import Link from 'next/link'
import React from 'react'

const Navbar:React.FC = () => {
  return (
    <div className="py-3 px-2 md:px-[5%] fixed top-0 left-0 right-0 z-40 lg:px-[10%] flex bg-slate-100 justify-between items-center">
      <div className="font-bold text-lg md:text-3xl bg-gradient-to-r from-orange-500 via-red-300 to-purple-600 text-transparent bg-clip-text">
        <Link href={'/'}>Dreamer Blog</Link>
      </div>
      <div className="flex gap-5">
        <Link
          className="bg-gradient-to-br rounded-md from-orange-500 hover:bg-gradient-to-b ease-in-out duration-100 transition-all via-red-300 py-3 px-5 to-purple-400 "
          href={"/contact/"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar