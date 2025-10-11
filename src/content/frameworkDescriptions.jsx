import { StarRating } from "@/components/starRating";
import { SiDjango, SiCodeigniter, SiFlutter } from "react-icons/si";
import { FaReact, FaWordpress } from 'react-icons/fa';

const DjangoDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Django
                    </h2>
                    <SiDjango className="text-6xl justify-self-end text-[#092E20]" />
                </div>
                <span>
                    <StarRating rating={4} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
                <p>
                    Tengo experiencia media-alta en Django, ya que desarrollé aplicaciones backend completas 
                    para mi tesis y varios trabajos escolares.  
                    He creado APIs y gestionado bases de datos, lo que me permitió comprender la estructura 
                    y potencia del framework.
                </p>
                <p>
                    Me siento bastante cómodo con Django y considero que mi dominio es sólido para proyectos de mediana escala.  
                    Siempre estoy buscando aprender más sobre sus funcionalidades avanzadas y optimización de proyectos.
                </p>
            </div>
        </>
    );
}

const ReactDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        React
                    </h2>
                    <FaReact className="text-6xl justify-self-end text-blue-400"/>
                </div>
                <span>
                    <StarRating rating={4} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
                <p>
                    Tengo un manejo medio de React. He construido interfaces interactivas y componentes reutilizables.  
                    Sigo aprendiendo patrones avanzados como hooks personalizados, context API y optimización de renderizados.
                </p>
                <p>
                    Mi experiencia me permite crear aplicaciones web funcionales, pero continúo explorando mejores prácticas y librerías complementarias.
                </p>
            </div>
        </>
    );
}

const CodeIgniterDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        CodeIgniter
                    </h2>
                    <SiCodeigniter className="text-6xl justify-self-end text-[#FC6D26]" />
                </div>
                <span>
                    <StarRating rating={3} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
                <p>
                    Manejo medio de CodeIgniter, principalmente en proyectos escolares y pequeñas aplicaciones backend.  
                    Conozco su estructura MVC y he implementado módulos con CRUD funcionales.
                </p>
                <p>
                    Mi dominio es suficiente para proyectos de nivel medio, pero sigo practicando para mejorar en seguridad y optimización.
                </p>
            </div>
        </>
    );
}

const FlutterDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Flutter
                    </h2>
                    <SiFlutter className="text-6xl justify-self-end text-[#02569B]" />
                </div>
                <span>
                    <StarRating rating={3} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
                <p>
                    Tengo un conocimiento medio de Flutter. He desarrollado aplicaciones móviles sencillas y componentes interactivos.  
                    Sigo aprendiendo sobre la gestión de estados, navegación avanzada y optimización para distintos dispositivos.
                </p>
                <p>
                    Me gusta experimentar con nuevas funcionalidades y crear interfaces fluidas, pero aún estoy ampliando mi dominio.
                </p>
            </div>
        </>
    );
}

const WordPressDescription = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        WordPress
                    </h2>
                    <FaWordpress className="text-6xl justify-self-end text-[#21759B]" />
                </div>
                <span>
                    <StarRating rating={3} totalStars={5} />
                </span>
                <p>
                    Usado
                </p>
                <p>
                    Experiencia media en WordPress. He creado y personalizado temas, plugins y sitios web funcionales.  
                    Conozco bien el panel administrativo y algunas técnicas de optimización de rendimiento.
                </p>
                <p>
                    Sigo aprendiendo sobre desarrollo avanzado de plugins y temas, así como seguridad y buenas prácticas en WordPress.
                </p>
            </div>
        </>
    );
}

export { DjangoDescription, ReactDescription, CodeIgniterDescription, FlutterDescription, WordPressDescription };
