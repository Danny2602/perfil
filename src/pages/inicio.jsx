import { motion } from "motion/react";
import {VerticalAccordion} from "@/components/verticalAccordion";
import { useState } from "react";
import { LetterMove } from "@/components/letterMove";
import { SlideTabs } from "@/components/slideTabs";
import { CardInit } from "@/layouts/cardInit";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp,FaEnvelope } from "react-icons/fa";
import { PiFileCSharpBold } from 'react-icons/pi';
import { FaPython,FaJava,FaPhp,FaJs,FaReact,FaWordpress,FaTools, FaNetworkWired } from 'react-icons/fa';
import { PiMicrosoftExcelLogoDuotone } from 'react-icons/pi';
import { SiDjango, SiCodeigniter, SiFlutter,SiGithub,SiGitlab,SiPostman,SiScrumalliance, } from "react-icons/si";
import { CSharpDescription, JavaScriptDescription, PhpDescription, JavaDescription, PythonDescription } from "@/content/languajeDescriptions";
import { DjangoDescription, ReactDescription, CodeIgniterDescription, FlutterDescription,WordPressDescription } from "@/content/frameworkDescriptions";
import { ExcelDescription, GitHubDescription, GitLabDescription, PostmanDescription, MantenimientoDescription, InfraestructuraDescription, MetodologiaDescription } from "@/content/toolsDescriptions";
const redes = [
    { name: "GitHub", url: "https://github.com/Danny2602",icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/danny-roberto-simba-taipe-81b703352/", icon: <FaLinkedin /> },
    { name: "Facebook", url: "https://facebook.com", icon: <FaFacebook /> },
    { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
    { name: "WhatsApp", url: "https://wa.me/+593995878111?text=Hola%2C%20Comunicate%20más%20información", icon: <FaWhatsapp /> },
    {name:"Gmail", url:"https://mail.google.com/mail/?view=cm&fs=1&to=danny.simba02@gmail.com&su=Asunto%20del%20correo&body=Hola%2C%20este%20es%20el%20mensaje%20inicial", icon:<FaEnvelope /> }
];
import { RevealBento } from "@/components/moveCard";
import { ModalUP } from "../components/modalUp";

const Lenguajes = [
  { icon: <FaPython />, color: "bg-[#3776AB]", Text: "Python" , description: <PythonDescription /> },
  { icon: <FaJava />, color: "bg-[#EA2D2E]", Text: "Java" , description: <JavaDescription /> },
  { icon: <FaPhp />, color: "bg-[#777BB4]", Text: "PHP" , description: <PhpDescription /> },
  { icon: <FaJs />, color: "bg-[#F7DF1E]", Text: "JavaScript" , description: <JavaScriptDescription /> },
  { icon: <PiFileCSharpBold />, color: "bg-[#512BD4]", Text: "C#" , description: <CSharpDescription /> },
];
const Frameworks = [
  { icon: <FaReact />, color: "bg-[#61DAFB]", Text: "React" , description: <ReactDescription /> },
  { icon: <SiDjango />, color: "bg-[#092E20]", Text: "Django" , description: <DjangoDescription /> },
  { icon: <SiCodeigniter />, color: "bg-[#EE4323]", Text: "CodeIgniter" , description: <CodeIgniterDescription /> },
  { icon: <SiFlutter />, color: "bg-[#21759B]", Text: "Flutter" , description: <FlutterDescription /> },
  { icon: <FaWordpress />, color: "bg-[#02569B]", Text: "WordPress" , description: <WordPressDescription /> },
];
const Herramientas = [
  { icon: <PiMicrosoftExcelLogoDuotone />, color: "bg-[#217346]", Text: "Excel", description: <ExcelDescription /> },
  { icon: <SiGithub />, color: "bg-[#181717]", Text: "GitHub", description: <GitHubDescription /> },
  { icon: <SiGitlab />, color: "bg-[#FC6D26]", Text: "GitLab", description: <GitLabDescription /> },
  { icon: <SiPostman />, color: "bg-[#FF6C37]", Text: "Postman", description: <PostmanDescription /> },
  { icon: <FaTools />, color: "bg-[#5A5A5A]", Text: "Mantenimiento-Computadoras", description: <MantenimientoDescription /> },
  { icon: <FaNetworkWired />, color: "bg-[#0078D7]", Text: "Infraestrtura-Redes", description: <InfraestructuraDescription /> },
  { icon: <SiScrumalliance />, color: "bg-[#009FDA]", Text: "Metodologías Ágiles", description: <MetodologiaDescription /> },
];


function Inicio() {
    const [open, setOpen] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState(null);
    return (
        <>
            <div className="min-h-screen grid lg:grid-cols-3 grid-cols-1">
                <div className=" col-span-1 bg-gray-950 justify-center items-center content-center ">
                    <CardInit/>
                </div>
                <div className="col-span-2 p-5 content-center "> 
                    <LetterMove letter="Sobre Mi" fontSize={18} color1="black" color2="gray"></LetterMove>
                    <p className="text-base sm:text-lg md:text-xl lg:text-1xl xl:text-2xl">
                        Programador Full Stack con experiencia en desarrollo web y móvil. Apasionado por crear soluciones innovadoras y eficientes.
                    </p>

                    <br></br>
                    <SlideTabs redes={redes}></SlideTabs>
                    <br></br>
                </div>
            </div>

            <div id="skills" className="min-h-screen  bg-black justify-center text-center pt-8">
                <div className="row-span-1">
                    <LetterMove letter="Skills" fontSize={16} color1="white" color2="gray"></LetterMove>
                </div>
                <div className="lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-0 lg:gap-4 p-5 grid content-center">
                    <div>
                        <h4 className="lg:text-2xl sm:text-xl font-bold text-yellow-50">Lenguajes</h4>
                        <RevealBento icons={Lenguajes} setOpen={setOpen} setSelectedDescription={setSelectedDescription} />
                    </div>
                    <div>
                        <h4 className="lg:text-2xl sm:text-xl font-bold text-yellow-50">Frameworks</h4>
                        <RevealBento icons={Frameworks} setOpen={setOpen} setSelectedDescription={setSelectedDescription} />
                    </div>
                    <div>
                        <h4 className="lg:text-2xl sm:text-xl font-bold text-yellow-50">Herramientas y Tecnologías</h4>
                        <RevealBento icons={Herramientas} setOpen={setOpen} setSelectedDescription={setSelectedDescription} />
                    </div>
                </div>
            </div>
            <ModalUP open={open} setOpen={setOpen} children={<>{selectedDescription}</>} />
            <div className="h-24 bg-gray-800">
                <p className="text-center text-white p-5">© 2024 Danny Simba. Todos los derechos reservados.</p>
            </div>
            
            
        </>
    );
}

export default Inicio;