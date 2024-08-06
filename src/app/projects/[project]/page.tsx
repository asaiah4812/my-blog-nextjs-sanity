import { getProject } from '@/sanity/sanity-utils';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


type Props = {
   params: {project:string}
}
const Project = async ({params}:Props) => {
    const slug = params.project;
    const project = await getProject(slug)
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold py-5">{project.name}</h2>
      <div className="flex justify-between gap-8 flex-wrap md:flex-nowrap">
        <div className="relative w-full md:w-[50%] h-[400px]">
          <Image src={project.image} className='object-cover' fill alt={project.name} />
        </div>
        <div className="md:w-[50%] text-justify mb-4">
          <PortableText value={project.content} />
          <span className='font-medium text-gray-500 mt-4'><strong className='text-black'>Author:</strong> Asaiah Henson</span>
          <div className='flex gap-4 items-center mt-5 bg-slate-200 w-fit p-2 rounded-full'>
            <Link href={""} className='bg-slate-300 p-1.5 hover:bg-slate-400 rounded-full'>
              <Facebook />
            </Link>
            <Link href={""} className='bg-slate-300 p-1.5 hover:bg-slate-400 rounded-full'>
              <Linkedin />
            </Link>
            <Link href={""} className='bg-slate-300 p-1.5 hover:bg-slate-400 rounded-full'>
              <Instagram />
            </Link>
            <Link href={""} className='bg-slate-300 p-1.5 hover:bg-slate-400 rounded-full'>
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project