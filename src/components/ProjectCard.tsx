import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function ProjectCard() {
    const projects = await getProjects()
  return (
    <>
      {projects.map((project) => (
        <div key={project._id} className="bg-slate-200 p-3 rounded-md">
          <div className="relative overflow-hidden h-[400px] lg:h-[300px]">
            <Image
              src={project.image}
              layout="fill"
              objectFit="cover"
              className="hover:scale-110 transition-all ease-in-out duration-150 rounded-md"
              alt="image"
            />
          </div>
          <div className="py-2 px-4 bg-slate-300 mt-2 rounded-full">
            <Link
              href={`/projects/${project.slug}`}
              title="view detail"
              className="text-lg text-blue-600"
            >
              {project.name}
            </Link>
            <p className="font-medium text-gray-500">
              <strong className="text-black">Author:</strong> Asaiah Henson
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard