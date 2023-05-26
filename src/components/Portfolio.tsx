import React from 'react'
import Image from 'next/image';
import imagem1 from '../assets/images/image1.png';
import imagem2 from '../assets/images/image2.png';
import imagem3 from '../assets/images/image3.png';
import imagem4 from '../assets/images/image4.png';
import imagem5 from '../assets/images/image5.png';
import imagem6 from '../assets/images/image6.png';

export default function Portfolio() {
  const Imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6]
  return (
    <section className="h-max bg-gray-600">
    <h2 className="pt-36 text-center font-secundary text-4xl uppercase text-yellow-300">Portfolio</h2>

    <article className="flex w-full  justify-center pt-16">
      <div className="flex w-3/4 flex-wrap gap-6 pb-12">
        {Imagens.map((imagem, index) => (
          <div key={index}>
            <Image src={imagem} width={280} height={380} alt='a' />
          </div>
        ))}
      </div>

    </article>
  </section>
  )
}
