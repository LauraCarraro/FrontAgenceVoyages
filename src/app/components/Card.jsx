import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ image, nom, description, id }) => {
  const { push } = useRouter();
  return (
    <div
      className="w-full md:w-1/2 xl:w-1/3 px-4"
      onClick={() => push(`/voyages/${nom}`)}
    >
      <div>
        <div className="bg-white rounded-lg overflow-hidden mb-10">
          <img src={image} alt={nom} className="w-full h-64 object-cover" />
          <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h3>
              <a
                href="javascript:void(0)"
                className="
                            font-semibold
                            text-dark text-xl
                            sm:text-[22px]
                            md:text-xl
                            lg:text-[22px]
                            xl:text-xl
                            2xl:text-[22px]
                            mb-4
                            block
                            hover:text-primary
                            "
              >
                {nom}
              </a>
            </h3>
            <p className="text-base text-body-color leading-relaxed mb-7">
              {description}
            </p>
            <a
              href="/voyages/nom"
              className="
                         inline-block
                         py-2
                         px-7
                         border border-[#E5E7EB]
                         rounded-full
                         text-base text-body-color
                         font-medium
                         hover:border-primary hover:bg-primary hover:text-white
                         transition
                         "
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
