import React from 'react'
import Image from "next/image";
import capaEvent from '../assets/images/capa-eventos.jpeg';
import capaFut from '../assets/images/capa-futebol.jpeg';


export default function Categorias() {
  
  return (
    <section className="relative z-0 flex h-[240px]  w-full bg-gray-600">
        <div className="">
          <span className="absolute bottom-1/2 left-10 z-10 h-[1px] w-[60%] min-w-[40%] rotate-0 bg-yellow-300" />
          <span className='absolute bottom-1/2 right-0 z-10 h-[1px] w-[14%]  rotate-0 bg-yellow-300'/>

          <h3 className="absolute bottom-[42%] right-60 font-terciary text-6xl text-yellow-300">categorias</h3>
        </div>
        <div className="flex w-[70%] items-center justify-center gap-24 ">
          <div className="relative z-10 text-transparent duration-300 hover:-translate-y-5 hover:text-yellow-300 ">
            <Image
              className="z-50 h-80 w-60 rounded-lg  hover:cursor-pointer  "
              width={0}
              height={0}
              alt="Foto de capa seção futebol"
              src={capaFut}
            />
            <h3 className="absolute right-[72px] top-1/2 -translate-y-1/2  text-2xl uppercase ">futebol</h3>
          </div>
          <div className="relative z-10 text-transparent duration-300 hover:-translate-y-5 hover:text-yellow-300">
            <Image
              className=" z-50 h-80 w-56 rounded-lg duration-300  hover:cursor-pointer "
              width={0}
              height={0}
              alt="Foto de capa seção eventos"
              src={capaEvent}
            />
            <h3 className="absolute right-16 top-1/2 -translate-y-1/2  text-2xl uppercase">eventos</h3>
          </div>
        </div>
      </section>
  )
}
