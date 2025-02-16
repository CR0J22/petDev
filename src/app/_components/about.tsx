import Image from "next/image";

import about1img from "../../../public/about-1.png"
import about2img from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">

            <div className="container px-4 mx-auto ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1img}
                                alt="Um dog e um gato"
                                className="object-cover hover:scale-110 duration-300"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                        <div className="absolute h-40 w-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                            <Image
                                src={about2img}
                                alt="Um gato"

                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">SOBRE</h2>
                        <p>
                            Until one has loved an animal, a part of one's soul remains unawakened. We believe in it and we believe in easy access to things that are good for our mind, body and spirit. With a clever offering, superb support and a secure checkout you're in good hands.
                        </p>

                        <ul className="space-y-4">

                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2016
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinários.
                            </li>

                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade
                            </li>

                        </ul>

                        <div className="flex gap-2">
                            <a
                                className="bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-lg"
                                target='_blank'
                                href={`https://wa.me/00000000000?text=Olá vim pelo site e gostaria de mais informações`}

                            >
                                <WhatsappLogo className="text-white w-5 h-5" />
                                Contato via Whatsapp
                            </a>

                            <a
                                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-lg"
                                href="#"
                            >
                                <MapPin className="text-black w-5 h-5" />
                                Endereço da loja
                            </a>
                        </div>

                    </div>


                </div>


            </div>

        </section>

    )
}