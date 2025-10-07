import { motion } from "motion/react";

function Inicio() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <motion.div
                initial={{ scale: 0, opacity: 0, y: -50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 10, duration: 0.8 }}
                className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
            >
                <motion.img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Foto de perfil"
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                />
                <h1 className="text-2xl font-bold text-center mb-2">Juan Pérez</h1>
                <p className="text-gray-600 text-center mb-4">
                    Desarrollador Frontend apasionado por crear experiencias web modernas y funcionales.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="mailto:juan.perez@email.com"
                        className="text-blue-500 hover:underline"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/juanperez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/juanperez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        LinkedIn
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default Inicio;