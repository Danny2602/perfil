import { StarRating } from "@/components/starRating";
import { FaTools, FaNetworkWired } from 'react-icons/fa';
import { PiMicrosoftExcelLogoDuotone } from 'react-icons/pi';
import { SiGithub,SiPostman,SiScrumalliance,SiGitlab } from "react-icons/si";
const ExcelDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Excel
                    </h2>
                    <PiMicrosoftExcelLogoDuotone className="text-6xl justify-self-end text-[#217346]" />
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
const GitHubDescription = () => {
  return (
    <>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
            <div className="grid grid-cols-2">
                <h2 className="text-4xl font-bold text-neutral-200">
                    GitHub
                </h2>
                <SiGithub className="text-6xl justify-self-end text-[#181717]" />
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
}

const GitLabDescription = () => {
  return (
    <>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
            <div className="grid grid-cols-2">
                <h2 className="text-4xl font-bold text-neutral-200">
                    GitLab
                </h2>
                <SiGitlab className="text-6xl justify-self-end text-[#FC6D26]" />

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
}

const PostmanDescription = () => {
  return (
    <>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
            <div className="grid grid-cols-2">
                <h2 className="text-4xl font-bold text-neutral-200">
                    Postman
                </h2>
                <SiPostman className="text-6xl justify-self-end text-[#FF6C37]" />
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
}

const MantenimientoDescription = () => {
  return (
    <>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
            <div className="grid grid-cols-2">
                <h2 className="text-4xl font-bold text-neutral-200">
                    Mantenimiento
                </h2>
                <FaTools className="text-6xl justify-self-end text-[#5A5A5A]" />
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
}
    const InfraestructuraDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Infraestructura
                    </h2>
                    <FaNetworkWired className="text-6xl justify-self-end text-[#0078D7]" />
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
    }

const MetodologiaDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Metodología
                    </h2>
                    <FaTools className="text-6xl justify-self-end text-[#5A5A5A]" />
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
}

export { ExcelDescription, GitHubDescription, GitLabDescription, PostmanDescription, MantenimientoDescription, InfraestructuraDescription, MetodologiaDescription };