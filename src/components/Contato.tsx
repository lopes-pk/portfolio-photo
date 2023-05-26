import Image from 'next/image';
import logoGmail from "../assets/images/icone-gmail.png";
import logoIg from "../assets/images/icone-ig.png";
import logoWp from "../assets/images/icone-wp.png";

export default function Contato() {
  return (
    <section className="flex h-auto flex-col items-center bg-gray-800 pb-28">
        <h2 className="p-14 text-center font-secundary text-4xl uppercase text-yellow-300">contato</h2>
        <div className="h-72 w-[70%] border-y-2 border-yellow-300  ">
          <div className="flex h-full w-full items-center justify-center pr-8">
            <a href='https://api.whatsapp.com/send?phone=11 98501-8073&text=Quero agendar uma foto! 🚀
' className="flex  flex-col items-center justify-around gap-10 duration-300 hover:scale-105 hover:cursor-pointer " >
              <Image
                height={50}
                width={50}
                alt="Icone para contato WhatsApp"
                src={logoWp}
              />
              <h3 className="font-primary text-2xl font-light text-gray-300">WhatsApp</h3>
            </a>
            <span className="h-[1px] min-w-[24%] rotate-90  bg-yellow-300" />
            <a href='https://instagram.com/larly.caua?igshid=MzRlODBiNWFlZA==' className="flex flex-col items-center justify-center gap-10 duration-300 hover:scale-105 hover:cursor-pointer" >
              <Image
                height={60}
                width={60} className="font-primary text-2xl font-light text-gray-300"
                alt="Icone para contato Instagram"
                src={logoIg}
              />
              <h3 className="font-primary text-2xl font-light text-gray-300">Instagram</h3>
            </a>
            <span className="h-[1px]  min-w-[24%] rotate-90 bg-yellow-300" />
            <a href='#' className="flex flex-col items-center justify-center gap-10 pl-2 duration-300 hover:scale-105 hover:cursor-pointer " >
              <Image
                height={56}
                width={56}
                alt="Icone para contato Gmail"
                src={logoGmail}
              />
              <h3 className="font-primary text-2xl font-light text-gray-300">Gmail</h3>
            </a>
          </div>
        </div>
      </section>
  )
}
