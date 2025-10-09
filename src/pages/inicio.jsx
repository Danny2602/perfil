import { motion } from "motion/react";

import { LetterMove } from "@/components/letterMove";
import { SlideTabs } from "@/components/slideTabs";
import { CardInit } from "@/layouts/cardInit";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp,FaEnvelope } from "react-icons/fa";
const redes = [
    { name: "GitHub", url: "https://github.com/Danny2602",icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin /> },
    { name: "Facebook", url: "https://facebook.com", icon: <FaFacebook /> },
    { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
    { name: "WhatsApp", url: "https://whatsapp.com", icon: <FaWhatsapp /> },
    {name:"Gmail", url:"https://gmail.com", icon:<FaEnvelope /> }
];


function Inicio() {
    
    return (
        <>
            <div className="h-screen grid lg:grid-cols-3 grid-cols-1">
                <div className=" col-span-1 bg-gray-950 justify-center items-center content-center ">
                    <CardInit/>
                </div>
                <div className="col-span-2 p-5 content-center  ">
                    <LetterMove letter="Sobre Mi" fontSize={18}></LetterMove>

                    <p className="text-2xl">Programador Full Stack con experiencia en desarrollo web y móvil. Apasionado por crear soluciones innovadoras y eficientes.</p>
                    <br></br>
                    <SlideTabs redes={redes}></SlideTabs>
                </div>
            </div>
            <div>
                
            </div>
            <div className="h-24 bg-gray-800">
                <p className="text-center text-white p-5">© 2024 Danny Simba. Todos los derechos reservados.</p>
            </div>
          
            
        </>
    );
}

export default Inicio;