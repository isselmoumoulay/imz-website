import React from 'react';

interface TestimonialCardProps {
    image: string;
    rating: number;
    comment: string;
    name: string;
    position: string;
}

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, rating, comment, name, position }) => (
    <div className="bg-white select-none border-2 rounded-[100px] py-10 p-6 flex flex-col items-center max-w-sm mx-auto">
        <img src={image} alt={name} className="w-20 h-20 rounded-full mb-4" />
        <div className="flex mb-2">
            {[...Array(rating)].map((_, i) => (
                <StarIcon key={i} />
            ))}
        </div>
        <p className="text-center text-gray-600 mb-4">{comment}</p>
        <h3 className="font-bold text-navy-600">{name}</h3>
        <p className="text-sm text-gray-500">{position}</p>
    </div>
);

export default TestimonialCard;