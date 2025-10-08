import { motion } from "motion/react";
import img1 from '@/assets/images/img1.png';
import { LetterMove } from "@/components/letterMove";
import { MoveCard } from "@/components/moveCard";
import { SlideTabs } from "@/components/slideTabs";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
const redes = [
    { name: "GitHub", url: "https://github.com",icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin /> },
    { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
    { name: "Facebook", url: "https://facebook.com", icon: <FaFacebook /> },
    { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> },
    { name: "WhatsApp", url: "https://whatsapp.com", icon: <FaWhatsapp /> },
];

function Inicio() {
    return (
        <>
            <div className="h-screen gap-4 grid lg:grid-cols-3 grid-cols-1">
                <div className="bg-gray-950 p-4 flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <MoveCard image={img1}></MoveCard>
                        <h1 className="text-2xl font-bold text-center mb-2 text-yellow-50">Danny Simba</h1>
                        <h1 className="text-xl font-bold text-center mb-2 text-yellow-50">Programador Full Stack</h1>
                    </motion.div>
                
                </div>
                <div className="col-span-2 p-5 content-center ">
                    <LetterMove letter="Sobre Mi" fontSize={18}></LetterMove>

                    <p className="text-2xl">Programador Full Stack con experiencia en desarrollo web y móvil. Apasionado por crear soluciones innovadoras y eficientes.</p>
                    <br></br>
                    <SlideTabs redes={redes}></SlideTabs>
                </div>
            </div>
          
            
        </>
    );
}

export default Inicio;