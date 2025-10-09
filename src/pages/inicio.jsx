import { motion } from "motion/react";
import {VerticalAccordion} from "@/components/verticalAccordion";
import { LetterMove } from "@/components/letterMove";
import { SlideTabs } from "@/components/slideTabs";
import { CardInit } from "@/layouts/cardInit";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp,FaEnvelope } from "react-icons/fa";
import { SiGithub,SiLinkedin } from "react-icons/si";
import { FaPython,FaJava,FaPhp,FaJs,FaReact } from 'react-icons/fa';
const redes = [
    { name: "GitHub", url: "https://github.com/Danny2602",icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/danny-roberto-simba-taipe-81b703352/", icon: <FaLinkedin /> },
    { name: "Facebook", url: "https://facebook.com", icon: <FaFacebook /> },
    { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
    { name: "WhatsApp", url: "https://wa.me/+593995878111?text=Hola%2C%20Comunicate%20más%20información", icon: <FaWhatsapp /> },
    {name:"Gmail", url:"https://mail.google.com/mail/?view=cm&fs=1&to=danny.simba02@gmail.com&su=Asunto%20del%20correo&body=Hola%2C%20este%20es%20el%20mensaje%20inicial", icon:<FaEnvelope /> }
];
import { RevealBento } from "@/components/moveCard";
const icons1=[
    {icon:<FaPython/>, color:"bg-yellow-400"},
    {icon:<FaJava/>, color:"bg-red-400"},
    {icon:<FaPhp/>, color:"bg-blue-400"},
    {icon:<FaJs/>, color:"bg-green-400"},
    {icon:<FaJs/>, color:"bg-green-400"},
]
const icons2=[
    {icon:<FaReact/>, color:"bg-purple-400"},
    {icon:<FaJava/>, color:"bg-red-400"},
    {icon:<FaPhp/>, color:"bg-blue-400"},
    {icon:<FaJs/>, color:"bg-green-400"},
]


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
            <div id="skills" className=" grid grid-cols-3  p-5 h-screen bg-black">
                <div><RevealBento icons={icons1} /></div>
                <div><RevealBento icons={icons2} /></div>
                <div><RevealBento icons={icons1} /></div>
            </div>
            <div className="h-24 bg-gray-800">
                <p className="text-center text-white p-5">© 2024 Danny Simba. Todos los derechos reservados.</p>
            </div>
          
            
        </>
    );
}

export default Inicio;