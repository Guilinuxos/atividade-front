type CardProps = {
    icone: React.ReactNode;
    titulo: string;
    conteudo: string;
}

export default function InfoCard({icone, titulo, conteudo}: CardProps){
    return(
        <>
        <div className="flex flex-row items-center justify-center gap-4 max-w-90 max-h-26.25 bg-white/20 backdrop-blur-sm rounded-2xl py-[28.42px] px-[24.67px] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] border border-white/20 hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.12)] transition-shadow">
            <div className="w-12 h-12 flex rounded-lg">
                    {icone}
            </div>

            <div className="flex flex-col">
                <h3 className="font-jakarta">

                </h3>
            </div>
        </div>
        </>
    )
}