import {ButtonEfect} from "@/components/buttonEfect";
import { MoveCard } from "@/components/moveCard";
import { FaFilePdf,FaList } from "react-icons/fa";
import { motion } from "motion/react";
import img1 from '@/assets/images/img1.png';
import useScrollAndMobile from "@/hooks/useScrollAndMovile";
import HV from '@/assets/docs/HV.pdf';
function CardInit() {
    const { isScrolled, isMobile } = useScrollAndMobile();

    const handleScrollToSkills = () => {
    const section = document.getElementById("skills");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};
    return (
        <>
        {isMobile? (
            <>
                
                <div className="row-span-2 items-center justify-center flex flex-col">
                    <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className=""
                    >
                        <h1 className="text-2xl font-bold text-center mb-2 text-yellow-50">Danny Simba</h1>
                        <h1 className="text-xl font-bold text-center mb-2 text-yellow-50">Programador Full Stack</h1>
                        <MoveCard image={img1}></MoveCard>
                        
                    </motion.div>
                </div>
                <div className="flex justify-center space-x-5">
                    <ButtonEfect text="Skills" icon={<FaList />} className="text-blue-600"  onClick={handleScrollToSkills}/>
                    <ButtonEfect text="CV" icon={<FaFilePdf />} className="text-red-600" onClick={() => window.open(HV, "_blank")} />
                    
                </div>
                <br></br>
            </>
        ):(
            <>
                <div className="flex justify-center space-x-5">
                    <ButtonEfect text="Skills" icon={<FaList />} className="text-blue-600" onClick={handleScrollToSkills}/>
                    <ButtonEfect text="CV" icon={<FaFilePdf />} className="text-red-600" onClick={() => window.open(HV, "_blank")}/>
                </div>
                
                <div className="row-span-2 items-center justify-center flex flex-col">
                    <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className=""
                    >
                        <MoveCard image={img1}></MoveCard>
                        <h1 className="text-2xl font-bold text-center mb-2 text-yellow-50">Danny Simba</h1>
                        <h1 className="text-xl font-bold text-center mb-2 text-yellow-50">Programador Full Stack</h1>
                    </motion.div>
                </div>
            </>
        )}
            
        </>
    );
}
export { CardInit };