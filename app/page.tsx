'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 pt-9 pb-17.5 px-13.75">
      <section>
        <div className="w-283 h-135 bg-linear-to-l from-[#431407] to-[#181310] rounded-3xl px-14 pt-12 pb-12">
            <div className="flex flex-col gap-3.75">
              <div className="flex items-center justify-center bg-white/12 w-65 h-7.5 rounded-2xl border border-[#FDE68A40]">
              <span className=" font-jakarta text-[12px] font-bold text-[#FDE68A]">🔥 Eleito o Melhor Smash Burger de 2026</span>
              </div>
              <h1 className="font-display font-black text-[44px]">
                  Sabor defumado na brasa,
                  crosta perfeita a cada
                  mordida.
              </h1>

              <p className="font-jakarta text-[#D6D3D1] text-[16px]">
                Blend 100% Angus moído no dia, pão brioche selado na manteiga
              de garrafa e cafés especiais torrados artesanalmente na nossa
              casa.
              </p>

              <div className="flex flex-row gap-3.5 ">
                <button
                onClick={() => router.push('/cardapio')}
                className="inline-flex items-center justify-center gap-2
                          bg-[#EA580C] text-white font-jakarta font-semibold rounded-lg
                          shadow-[0_6px_16px_-4px_rgba(234,88,12,0.4)]
                          hover:shadow-[0_8px_24px_-4px_rgba(234,88,12,0.6)]
                          hover:bg-[#ff4800]
                          transition-all w-50 h-11.25
                          cursor-pointer"
              >
                <span className="font-jakarta text-white text-[14px]">Explorar Cardápio</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 9H14.25" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                  <path d="M9 3.75L14.25 9L9 14.25" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                </svg>
              </button>

              <button
                className="inline-flex items-center justify-center gap-2
                          bg-[#EA580C] text-white font-jakarta font-semibold rounded-lg
                          shadow-[0_6px_16px_-4px_rgba(234,88,12,0.4)]
                          hover:shadow-[0_8px_24px_-4px_rgba(234,88,12,0.6)]
                          hover:bg-[#ff4800]
                          transition-all w-50 h-11.25"
              >
                <span className="font-jakarta text-white text-[14px]">Explorar Cardápio</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.75 9H14.25" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                  <path d="M9 3.75L14.25 9L9 14.25" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
                </svg>
              </button>

              </div>

              

            </div>
        </div>
      </section>
    </div>
  );
}
