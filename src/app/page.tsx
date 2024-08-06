import ProjectCard from "@/components/ProjectCard";
import Typewriter from "@/components/Typewriter";

export default function Home() {


  return (
    <div className="mx-auto md:w-[90%] lg:w-[80%]">
      <div className="min-h-20">
        <Typewriter />
        <p className="text-2xl px-2 py-4 text-purple-600">Welcome to my Blog website</p>
      </div>
      <div className="p-2 bg-slate-50 mt-5">
      <div className="py-4">
        <h1 className=" font-semibold bg-gray-200 w-fit p-2 rounded-full text-3xl">My Projects</h1>
      </div>
      <div className="mt-5 grid md:grid-cols-3 gap-5 lg:grid-cols-4">
        <ProjectCard />
      </div>

      </div>
    </div>
  );
}
