import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto p-3 flex items-center justify-between bg-slate-100 rounded-full">
      <div className="bg-gradient-to-r from-red-600 via-blue-600 bg-clip-text text-transparent font-bold  md:text-2xl to-purple-400">
        DreamerBlog
      </div>
      <div className="flex gap-4 items-center bg-slate-200 w-fit p-2 rounded-full">
        <Link
          href={"https://web.facebook.com/asaiah.henson.7"}
          target="_blank"
          className="bg-slate-300 p-1 md:p-1.5 hover:bg-slate-400 rounded-full"
        >
          <Facebook />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/asaiah-henson-440bb62a6/"}
          target="_blank"
          className="bg-slate-300 p-1 md:p-1.5 hover:bg-slate-400 rounded-full"
        >
          <Linkedin />
        </Link>
        <Link
          href={"https://www.instagram.com/hensonasaiah/"}
          target="_blank"
          className="bg-slate-300 p-1 md:p-1.5 hover:bg-slate-400 rounded-full"
        >
          <Instagram />
        </Link>
        <Link
          href={"https://x.com/dreamer_webdev"}
          target="_blank"
          className="bg-slate-300 p-1 md:p-1.5 hover:bg-slate-400 rounded-full"
        >
          <Twitter />
        </Link>
      </div>
    </div>
  );
}

export default Footer