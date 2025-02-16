import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

import dogImg from "../../../public/hero-dog.webp"
import catImg from "../../../public/cat-hero.png"

export function Hero() {
    return (
        <section className="bg-orange-400 text-white relative overflow-hidden">

            <div>
                <Image
                    src={dogImg}
                    alt="Foto do doguinho"
                    fill
                    className="object-cover opacity-60 lg:hidden"
                    sizes="100vw"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
            </div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className="space-y-6">
                        <h1
                            data-aos="fade-down"
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>
                        <p
                            data-aos="fade-right"
                            className="lg:text-lg">Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.</p>


                        <a
                            data-aos="fade-down-right"
                            data-aos-delay="300"
                            target='_blank'
                            href={`https://wa.me/00000000000?text=Olá vim pelo site e gostaria de mais informações`}

                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center max-w-fit gap-2">
                            <WhatsappLogo className="w-5 h-5" />
                            Contato pelo Whatsapp
                        </a>


                        <div className="mt-8">
                            <p data-aos="flip-up" className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>
                            <div data-aos="flip-right" className="flex mt-4">
                                <div className="w-32 hidden lg:block">
                                    <Image
                                        src={catImg}
                                        alt="Imagem de uma gato"
                                        className="object-fill"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="hidden md:block h-full relative">
                        <Image
                            src={dogImg}
                            alt="Foto do doguinho"
                            fill
                            className="object-contain"
                            sizes="(max-width: 760px) 0vw, 50vw "
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>

        </section>
    )
} 