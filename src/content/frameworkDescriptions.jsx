import { StarRating } from "@/components/starRating";
import { SiDjango, SiCodeigniter,SiFlutter } from "react-icons/si";
import { FaReact,FaWordpress} from 'react-icons/fa';

const DjangoDescription = () =>{
    return(
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Django
                    </h2>
                    <SiDjango className="text-6xl justify-self-end text-[#092E20]"/>
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
const ReactDescription = () =>{
    return(
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
                    Laudantium corrupti neque rerum labore tempore sapiente. Quos, nobis
                    dolores. Esse fuga, cupiditate rerum soluta magni numquam nemo
                    aliquid voluptate similique deserunt!
                </p>
                <p>
                    Rerum inventore provident laboriosam quo facilis nisi voluptatem
                    quam maxime pariatur. Velit reiciendis quasi sit magni numquam quos
                    itaque ratione, fugit adipisci atque est, tenetur officiis explicabo
                    id molestiae aperiam? Expedita quidem inventore magni? Doloremque
                    architecto mollitia, dicta, fugit minima velit explicabo sapiente
                    beatae fugiat accusamus voluptatum, error voluptatem ab asperiores
                    quo modi possimus.
                </p>

            </div>
        </>
    );
}
const CodeIgniterDescription = () =>{
    return(
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        CodeIgniter
                    </h2>
                    <SiCodeigniter className="text-6xl justify-self-end text-[#FC6D26]" />
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

const FlutterDescription = () =>{
    return(
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Flutter
                    </h2>
                    <SiFlutter className="text-6xl justify-self-end text-[#02569B]" />
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

const WordPressDescription = () =>{
    return(
        <>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <div className="grid grid-cols-2">
                    <h2 className="text-4xl font-bold text-neutral-200">
                        Flutter
                    </h2>
                    <FaWordpress className="text-6xl justify-self-end text-[#02569B]" />
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

export { DjangoDescription, ReactDescription, CodeIgniterDescription, FlutterDescription,WordPressDescription };