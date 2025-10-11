import { PiFileCSharpBold } from 'react-icons/pi';
import { FaPython, FaJava, FaPhp, FaJs } from 'react-icons/fa';
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
                <p>
                    Tengo experiencia media-alta en Python, especialmente trabajando con Django y otras librerías.  
                    He desarrollado aplicaciones completas, implementado encriptación de contraseñas y gestionado datos con eficacia.  
                    Me siento cómodo usando Python para backend y tareas complejas de desarrollo.
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
                    <StarRating rating={4} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
                <p>
                    Manejo medio-alto de JavaScript. He trabajado creando aplicaciones web interactivas,  
                    desarrollando componentes reutilizables y manejando librerías modernas.  
                    Continúo aprendiendo patrones avanzados y buenas prácticas para proyectos más complejos.
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
                    <StarRating rating={3} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
                <p>
                    Conocimiento medio en Java. He trabajado en proyectos escolares y aplicaciones sencillas.  
                    Sigo aprendiendo conceptos avanzados como patrones de diseño, manejo de excepciones y optimización de código.
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
                    <StarRating rating={3} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
                <p>
                    Manejo medio de C#. He trabajado con proyectos básicos y continúo aprendiendo a desarrollar aplicaciones más complejas.  
                    Mi dominio es suficiente para proyectos sencillos y me esfuerzo en mejorar continuamente.
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
                    <StarRating rating={2} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
                <p>
                    Experiencia media-baja en PHP. He trabajado en algunos proyectos escolares y pequeños desarrollos web.  
                    No es mi lenguaje más dominante, pero entiendo su estructura y sigo practicando para mejorar.
                </p>
            </div>
        </>
    );
};

export { CSharpDescription, JavaScriptDescription, PhpDescription, JavaDescription, PythonDescription };
