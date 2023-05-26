import Image from 'next/image';
import FotoCapa from '../assets/images/iarlyn-capa.png';
export default function Capa() {
  return (
    <section className="relative grid h-5/6 w-full grid-cols-2">
        <div className="mr-[-70px] flex flex-col items-end justify-center  pb-20 font-primary">
          <span className="absolute bottom-[200px] left-[-280px] z-10 h-[1px] w-[40rem] rotate-90 bg-yellow-300 "/>
          <div>
            <div className="flex items-center">
              <span className="mr-3 h-[1px] w-8 bg-white"  />
              <h4 className="font-extralight text-yellow-300">bem-vindo</h4>
            </div>
            <div className="my-10">
              <h2 className="mb-2 text-4xl font-light">Me chamo <strong className="font-medium text-yellow-300">Iarly</strong> Cauã
              </h2>
              <p className="w-[500px] text-3xl font-thin">Vivendo a magia da fotografia: Um ano de amor, experiência e cliques inesquecíveis!</p>
            </div>
            <button className="rounded-sm bg-yellow-300 px-2 py-1 font-light text-gray-800 duration-150 hover:bg-yellow-500">saiba mais</button>
          </div>
        </div>
        <div className="relative">
          <Image className="absolute bottom-0 right-0 min-w-[500px]"
            src={FotoCapa}
            width={570}
            height={300}
            alt="Foto de capa da página" />
        </div>
      </section>
  )
}
