import { PiFileCSharpBold } from 'react-icons/pi';
import { FaPython,FaJava,FaPhp,FaJs,FaReact,FaWordpress,FaTools, FaNetworkWired } from 'react-icons/fa';
import { PiMicrosoftExcelLogoDuotone } from 'react-icons/pi';
import { SiGithub,SiGitlab,SiPostman,SiScrumalliance, } from "react-icons/si";
import { StarRating } from "@/components/starRating";

const PythonDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Python
                    </h2>
                    <FaPython className="text-6xl justify-self-end text-[#3776AB]" />
                </div>
                <span>
                    <StarRating rating={5} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
            </div>
        </>
    );
};

const JavaDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Java
                    </h2>
                    <FaJava className="text-6xl justify-self-end text-[#EA2D2E]" />
                </div>
                <span>
                    <StarRating rating={4} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
            </div>
        </>
    );
};

const PhpDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        PHP
                    </h2>
                    <FaPhp className="text-6xl justify-self-end text-[#777BB4]" />
                </div>
                <span>
                    <StarRating rating={3} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
            </div>
        </>
    );
};

const JavaScriptDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        JavaScript
                    </h2>
                    <FaJs className="text-6xl justify-self-end text-[#F7DF1E]" />
                </div>
                <span>
                    <StarRating rating={5} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
            </div>
        </>
    );
};

const CSharpDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        C#
                    </h2>
                    <PiFileCSharpBold className="text-6xl justify-self-end text-[#512BD4]" />
                </div>
                <span>
                    <StarRating rating={4} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
            </div>
        </>
    );
};


export {CSharpDescription, JavaScriptDescription, PhpDescription, JavaDescription, PythonDescription };