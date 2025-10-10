import React, { useRef } from "react";
import { ModalUP } from "@/components/modalUp";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useInView 
} from "framer-motion";
import { twMerge } from "tailwind-merge";


const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const MoveCard = ({image}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
        
      >
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        />
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          HOVER ME
        </p> */}
      </div>
    </motion.div>
  );
};








const RevealBento = ({ icons, setOpen, setSelectedDescription }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" }); // margin para activar antes de estar completamente visible

  return (
    <div ref={ref} className=" px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-1xl grid-flow-dense grid-cols-6 gap-4"
         
      >
        <SocialsBlock icons={icons} setOpen={setOpen} setSelectedDescription={setSelectedDescription} />
      </motion.div>
    </div>
  );
};
const Block = ({ className,onClick, ...rest }) => {
  return (
    <motion.div
      onClick={onClick}
      style={{ cursor: "pointer" }}
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4  rounded-lg border border-zinc-700 bg-zinc-800 p-9",
        className
      )
      }
      {...rest}
    />
  );
};



const SocialsBlock = ({ icons, setOpen, setSelectedDescription }) => (
    <>
        {icons.map((icon, index) => {
            const alternar = index % 2 === 0;
            return(
                <>
                <Block
                    
                    whileHover={{
                        rotate: alternar ? "2.5deg" : "-2.5deg",
                        scale: 1.1,
                    }}
                    className={`col-span-3 md:col-span-3 ${icon.color}`}
                    key={index}
                    onClick={() => {
                        setOpen(true);
                        setSelectedDescription(icon.description);
                    }}
                >
                    <a
                        
                        key={index}
                        
                        className="flex flex-col items-center justify-center h-full text-3xl text-white text-center"
                    >
                        <div>{icon.icon}</div> 
                        <div>{icon.Text && <span className="text-sm ml-2">{icon.Text}</span>}</div>
                    </a>
                </Block>
                
                </>
            )
            }
        )}
    </>
);



// const ButtonVariants = () => {
//      const [open, setOpen] = useState(false);
//     return (
//         <>
//             <button
//             onClick={() => setOpen(true)}
//             className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
//             >
//             Open drawer
//             </button>
//             <ModalUP open={open} setOpen={setOpen} children={<>{texts()}</>} />
//         </>
//     )
// };

export { MoveCard, RevealBento };