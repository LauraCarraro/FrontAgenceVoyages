"use client";

import { useEffect, useState } from "react";
import { getVoyageByNom } from "@/src/services/voyage";
import Navbar from "@/src/components/navbar/Navbar";
import FormReservation from "@/src/components/formReservation/formReservation";

export default function VoyageDetail(props) {
  const [voyageDetails, setVoyageDetails] = useState([]);
  
  useEffect(() => {
    getVoyageByNom(props.params.nom).then((res) => {
      setVoyageDetails(res);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex justify-center items-stretch">
        {voyageDetails && (
          <div className="flex">
            <div className="bg-gray-50 mr-4 flex-1">
              <div className="mx-auto max-w-7xl px- sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-3 sm:py-6 lg:max-w-none lg:py-12">
                  <div className="group relative bg-white rounded-lg shadow-lg p-4 mb-6">
                    <h3 className="text-2xl text-sky-500 text-center font-semibold m-4">
                      <a href="" className="">
                        {voyageDetails.nom}
                      </a>
                    </h3>
                    <img src={voyageDetails.image_url} className="w-full h-64 object-cover" />
                    <br />
                    <p>{voyageDetails.description}</p>
                    <br />
                    <p>Prix : {voyageDetails.prix}</p>
                    <br />
                    <div>
                  <p>Date de départ : {voyageDetails.date_debut}</p>
                  <p>Date de retour : {voyageDetails.date_fin}</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FormReservation />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
