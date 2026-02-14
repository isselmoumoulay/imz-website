"use client";
import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    image: "/images/user.png",
    rating: 4,
    comment:
      "IMZ a réalisé notre site web avec une qualité exceptionnelle. Leur équipe a été professionnelle et réactive à nos besoins. Nous sommes ravis du résultat final !",
    name: "Khalil Ktiri",
    position: "CEO of Microsoft",
    starts: 4,
  },
  {
    image: "/images/user.png",
    rating: 4,
    comment:
      "IMZ a réalisé notre site web avec une qualité exceptionnelle. Leur équipe a été professionnelle et réactive à nos besoins. Nous sommes ravis du résultat final !",
    name: "Khalil Ktiri",
    position: "CEO of Microsoft",
  },
  {
    image: "/images/user.png",
    rating: 4,
    comment:
      "IMZ a réalisé notre site web avec une qualité exceptionnelle. Leur équipe a été professionnelle et réactive à nos besoins. Nous sommes ravis du résultat final !",
    name: "Khalil Ktiri",
    position: "CEO of Microsoft",
  },
  {
    image: "/images/user.png",
    rating: 4,
    comment:
      "IMZ a réalisé notre site web avec une qualité exceptionnelle. Leur équipe a été professionnelle et réactive à nos besoins. Nous sommes ravis du résultat final !",
    name: "Khalil Ktiri",
    position: "CEO of Microsoft",
  },
  {
    image: "/images/user.png",
    rating: 4,
    comment:
      "IMZ a réalisé notre site web avec une qualité exceptionnelle. Leur équipe a été professionnelle et réactive à nos besoins. Nous sommes ravis du résultat final !",
    name: "Khalil Ktiri",
    position: "CEO of Microsoft",
  },
  {
    image: "/images/user.png",
    rating: 4,
    comment:
      "IMZ a réalisé notre site web avec une qualité exceptionnelle. Leur équipe a été professionnelle et réactive à nos besoins. Nous sommes ravis du résultat final !",
    name: "Khalil Ktiri",
    position: "CEO of Microsoft",
  },
];

const Testimonials: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    setApi(api);
  }, []);

  const handlePrevClick = () => {
    api?.scrollPrev();
  };

  const handleNextClick = () => {
    api?.scrollNext();
  };

  return (
    <>
      <Carousel
        ref={ref}
        opts={{
          align: "start",
          dragFree: true,
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/5 w-full"
            >
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="holder flex justify-between w-full px-32 mt-10">
          <button className="carousel-prev" onClick={handlePrevClick}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 80 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="80.1079"
                width="80"
                height="80"
                rx="40"
                transform="rotate(-90 0 80.1079)"
                fill="#071952"
              />
              <path
                d="M18.054 38.5483C17.4481 38.8513 17.4481 39.8358 18.054 40.1387C22.7493 42.7135 27.5203 45.0611 32.6699 46.4243C33.4272 46.5758 34.1845 45.7427 33.7302 45.0611C32.6699 43.5465 31.3825 42.2591 29.8679 41.1232C40.4702 41.4261 51.451 42.865 61.9018 40.3659C62.6591 40.2144 62.5077 38.9271 61.7502 39.0028C50.9208 40.3659 40.1671 39.3056 29.3377 39.1543C30.4736 37.8669 31.6096 36.5795 32.7455 35.3678C33.2757 34.8377 32.9727 33.7016 32.064 33.7773C27.0659 34.3833 22.3706 36.0494 18.054 38.5483ZM27.0659 39.3814C26.3843 39.8358 26.5358 41.1232 27.596 41.1232C27.6717 41.1232 27.7475 41.1232 27.7475 41.1232C28.6562 42.0319 29.565 42.865 30.4738 43.8495C26.9902 42.6378 23.7338 41.1232 20.4774 39.3815C23.4308 37.8669 26.4601 36.7309 29.7165 36.1251C28.9592 36.9581 28.2019 37.8669 27.3688 38.7C27.0659 38.8513 26.9902 39.1543 27.0659 39.3814Z"
                fill="white"
              />
              <path
                d="M19.5996 38.9079L31.1996 35.3079L27.9996 39.7079C29.4663 41.4413 32.1596 44.9879 31.1996 45.3079C30.2396 45.6279 23.0663 41.1746 19.5996 38.9079Z"
                fill="white"
              />
            </svg>
          </button>

          <button className="carousel-next" onClick={handleNextClick}>
            <svg
              width="50"
              height="51"
              viewBox="0 0 80 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="80"
                y="0.10791"
                width="80"
                height="80"
                rx="40"
                transform="rotate(90 80 0.10791)"
                fill="#071952"
              />
              <path
                d="M61.9455 41.6675C62.5514 41.3646 62.5514 40.3801 61.9455 40.0771C57.2502 37.5023 52.4792 35.1547 47.3296 33.7915C46.5723 33.6401 45.815 34.4731 46.2694 35.1547C47.3296 36.6693 48.617 37.9567 50.1316 39.0927C39.5294 38.7897 28.5485 37.3509 18.0977 39.85C17.3404 40.0014 17.4918 41.2887 18.2493 41.213C29.0787 39.85 39.8324 40.9102 50.6618 41.0615C49.5259 42.3489 48.3899 43.6363 47.254 44.848C46.7239 45.3781 47.0268 46.5142 47.9355 46.4385C52.9336 45.8325 57.6289 44.1665 61.9455 41.6675ZM52.9336 40.8344C53.6152 40.3801 53.4637 39.0927 52.4035 39.0927C52.3278 39.0927 52.252 39.0927 52.252 39.0927C51.3433 38.1839 50.4345 37.3509 49.5258 36.3664C53.0093 37.578 56.2657 39.0927 59.5222 40.8343C56.5687 42.3489 53.5395 43.4849 50.2831 44.0907C51.0404 43.2577 51.7977 42.3489 52.6307 41.5158C52.9336 41.3646 53.0093 41.0615 52.9336 40.8344Z"
                fill="white"
              />
              <path
                d="M60.3999 41.3079L48.7999 44.9079L51.9999 40.5079C50.5332 38.7746 47.8399 35.2279 48.7999 34.9079C49.7599 34.5879 56.9332 39.0412 60.3999 41.3079Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </Carousel>
    </>
  );
};

export default Testimonials;
