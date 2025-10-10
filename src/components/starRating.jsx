import { FaStar } from "react-icons/fa";

const StarRating = ({ rating = 3, totalStars = 5 }) => {
    return (
        <div className="flex items-center space-x-1">
            {[...Array(totalStars)].map((_, i) => {
                const isFilled = i < rating;
                let color = "text-gray-400"; // gris por defecto
                if (isFilled && rating <= 2) color = "text-red-500"; // bajo
                if (isFilled && rating === 3) color = "text-yellow-400"; // medio
                if (isFilled && rating >= 4) color = "text-green-500"; // alto

                return <FaStar key={i} className={`text-xl ${color}`} />;
            })}
        </div>
    );
};
export { StarRating };