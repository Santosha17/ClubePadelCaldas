import Link from 'next/link';
import Image from 'next/image';
// Importar a imagem diretamente
import splitImg from '../assets/split_image.jpg';

export default function SplitSection() {
    return (
        <section className="grid md:grid-cols-2" id="clube">
            {/* Lado Esquerdo - Texto */}
            <div className="bg-brand-navy text-white p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
                {/* Elemento decorativo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <span className="text-brand-terracotta font-bold tracking-widest uppercase mb-4 relative z-10">
          Sobre Nós
        </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative z-10">
                    O primeiro clube das <br /> Caldas da Rainha.
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-lg relative z-10">
                    Localizado na Zona Industrial, o Clube Padel Caldas oferece as melhores condições para a prática da modalidade.
                    Com 5 campos indoor e 1 coberto de última geração com vidro panorâmico e relva WPT.
                    A melhor experiência de jogo garantida.
                </p>

                <ul className="mb-8 space-y-3 text-gray-300 relative z-10">
                    <li className="flex items-center gap-2">✓ Estacionamento Privativo</li>
                    <li className="flex items-center gap-2">✓ Campos Premium</li>
                    <li className="flex items-center gap-2">✓ Aulas para todos os níveis</li>
                    <li className="flex items-center gap-2">✓ Organização de Torneios sociais, ligas e clínicas</li>
                    <li className="flex items-center gap-2">✓ Comunidade Ativa</li>
                </ul>

                <Link
                    href="/contactos"
                    className="w-fit border-b-2 border-brand-terracotta text-white pb-1 font-bold hover:text-brand-terracotta transition-colors relative z-10"
                >
                    VISITAR O CLUBE
                </Link>
            </div>

            {/* Lado Direito - Imagem Corrigida */}
            <div className="relative min-h-[400px]">
                <Image
                    src={splitImg}
                    alt="Interior do Clube Padel Caldas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </section>
    );
}