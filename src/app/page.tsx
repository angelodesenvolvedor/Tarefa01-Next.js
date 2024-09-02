"use client";

import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const [playing, setPlaying] = useState(false);

  // Array de imagens para a galeria com títulos e descrições
  const imageDetails = [
    { src: '/image/Projet1.png', title: 'O Lógica Quiz', description: 'Um jogo educativo que aprimora o raciocínio lógico através de perguntas sobre lógica proposicional.' },
    { src: '/image/Projet2.png', title: 'Lista de Tarefas', description: 'Projeto desenvolvido no curso Front-end em React na Ada Tech.' },
    { src: '/image/Projet3.png', title: 'FootCoder', description: 'Loja online especializada na venda de camisetas de times de futebol, com várias formas de pagamento.' },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200">
      <div className="relative flex flex-col items-center w-full max-w-6xl">
        {/* Gallery Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-24 ${playing ? 'block' : 'hidden'}`}>
          {imageDetails.map(({ src, title, description }, index) => (
            <div
              key={index}
              className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-lg"
            >
              <Image
                className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                src={src}
                alt={title}
                fill
                priority
              />
              {/* Overlay with description */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Play/Pause Button Section */}
        <div className="flex justify-center w-full mb-12">
          <button
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            onClick={() => setPlaying(!playing)}
          >
            {playing ? (
              <>
                <FaPause className="text-2xl" />
                <span className="text-md font-semibold">Executando</span>
              </>
            ) : (
              <>
                <FaPlay className="text-2xl" />
                <span className="text-md font-semibold">Pausado</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full max-w-6xl flex flex-col items-center justify-center mt-8 text-center bg-gray-900 text-white py-6 rounded-t-3xl shadow-lg">
        <p className="text-sm opacity-70">
          Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}