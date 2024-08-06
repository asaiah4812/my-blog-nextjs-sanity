import Image from 'next/image';
import prof from '/public/prof.jpg'
import img from '/public/image.jpg'

const Contact:React.FC = () => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto bg-gradient-to-br text-transparent bg-clip-text from-rose-600 via-blue-500 to-blue-500">
      <div className="flex items-center justify-center py-8 ">
        <div className="font-extrabold text-5xl sm:text-7xl md:text-9xl">PASSI</div>
        <div>
          <Image src={prof} width={120} height={150} className='w-[100px]' alt="profile" />
        </div>
        <div className="font-extrabold text-5xl sm:text-7xl md:text-9xl">ONATE</div>
      </div>
      <div className="font-extrabold text-center text-5xl sm:text-7xl md:text-9xl">
        SOFTWARE ENGINEER
      </div>
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap mx-auto">
        <div className="md:w-[45%] mx-auto text-2xl md:text-start py-4 text-center md:text-3xl lg:text-4xl text-black">
          IN <span className="font-bold">DEVELOPMENT</span> WITH OVER THREE
          YEARS OF EXPERIENCE I TURN{" "}
          <span className="font-bold">IDEAS NTO AMAZING</span> I PROJECTS
          THROUGH THE WORLD OF <span className="font-bold">CREATIVE</span> AND{" "}
          <span className="font-bold">INTERACTIVE</span> WEBAPPLICATIONS
        </div>
        <div className="relative mx-auto md:w-[45%] h-[400px] ">
          <Image src={img} width={300} height={300} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact