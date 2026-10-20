import React, { Children } from 'react';
import { fraunces, inter, plusJakarta } from './fonts'
import './globals.css';
  import Link from 'next/link';


export default function RootLayout( {
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <html lang="pt-br" className={`${fraunces.variable} ${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <header className="flex justify-between items-center bg-white border-[#E7E0D6] border-[0.7px] w-full h-20 pt-4.5 pb-4.5 pl-13.75 pr-13.75">
          <div className='flex flex-row items-center gap-3'>
            <div className="flex items-center justify-center bg-linear-to-r from-[#EA580C] to-[#F59E0B] w-10.5 h-10.5 rounded-xl">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1.83337C12.375 5.04171 14.6667 6.87504 14.6667 10.0834C14.6667 11.0558 14.2804 11.9885 13.5928 12.6761C12.9051 13.3637 11.9725 13.75 11 13.75C10.0276 13.75 9.09495 13.3637 8.40732 12.6761C7.71968 11.9885 7.33337 11.0558 7.33337 10.0834C7.33337 8.25004 8.25004 6.87504 9.16671 5.04171C10.0834 6.41671 11 6.87504 11 1.83337Z"
                  strokeWidth="2.01667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="white"
                />
                <path
                  d="M4.58333 15.5834H17.4167C17.9029 15.5834 18.3692 15.7765 18.713 16.1203C19.0568 16.4642 19.25 16.9305 19.25 17.4167V18.3334C19.25 18.8196 19.0568 19.2859 18.713 19.6297C18.3692 19.9736 17.9029 20.1667 17.4167 20.1667H4.58333C4.0971 20.1667 3.63079 19.9736 3.28697 19.6297C2.94315 19.2859 2.75 18.8196 2.75 18.3334V17.4167C2.75 16.9305 2.94315 16.4642 3.28697 16.1203C3.63079 15.7765 4.0971 15.5834 4.58333 15.5834Z"
                  strokeWidth="2.01667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="white"
                />
            </svg>
            </div>

            <div className='flex flex-col'>
              <h2 className='font-display text-[22px] text-black font-bold'>Brasa & Grão</h2>
              <span className='font-jakarta text-[11px] text-gray-400 font-semibold tracking-[0.66px]'>SMASH BURGERS & SPEACIALTY COFFEE</span>
            </div>

          </div>

          <div className='flex flex-row items-center bg-[#FAF7F2] border-[#E7E0D6] border w-66.25 h-12.5 rounded-full gap-6.5 pl-6 pt-3.5 pb-3.5'>
            <span className='font-jakarta text-[14px] text-gray-600 font-semibold'>Início</span>

            <div className='flex items-center justify-center bg-white w-42.75 h-9.25 rounded-full'>
              <span className='font-jakarta font-semibold text-[14px] text-orange-400'>Cardápio Completo</span>
            </div>

          </div>
            
            <div className='flex flex-row items-center gap-3.5'>
              <div className='flex items-center justify-center bg-green-200 w-37.5 h-7.5 rounded-full gap-1.5'>
                <div className='w-2 h-2 bg-green-400 rounded-full'>
                </div>
                <span className='font-jakarta font-bold text-green-700 text-[12px]'>
                  Aberto • 25-35 min
                </span>
              </div>

              <div className='flex flex-row items-center justify-center w-35 h-9.5 bg-white border border-[#E7E0D6] rounded-lg gap-2'>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.875 1.875H6.25V6.25H1.875V1.875Z"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#1C1917"
                  />
                  <path
                    d="M8.75 1.875H13.125V6.25H8.75V1.875Z"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#1C1917"
                  />
                  <path
                    d="M8.75 8.75H13.125V13.125H8.75V8.75Z"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#1C1917"
                  />
                  <path
                    d="M1.875 8.75H6.25V13.125H1.875V8.75Z"
                    strokeWidth="1.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#1C1917"
                  />
                </svg>

                <span className='font-jakarta font-bold text-black text-[13px]'>Painel Gestor</span>
              </div>
            </div>
        </header>

        <main className="site-main">
          {children}
        </main>

        <footer className="site-footer">
          <div className="container bg-black w-full h-50">

          </div>
        </footer>
      </body>
    </html>
  )
}