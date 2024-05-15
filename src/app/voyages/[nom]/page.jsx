"use client";

import { useEffect, useState } from "react";
import { getVoyageByNom } from "@/src/services/voyage";
import Navbar from "@/src/components/navbar/Navbar";
export default function VoyageDetail(props) {
  const [VoyageDetails, setVoyagelDetails] = useState([]);
  console.log(props);

  useEffect(() => {
    getVoyageByNom(props.params.nom).then((res) => {
      setVoyagelDetails(res);
      console.log(res);
    });
  }, []);

  return (
    <div>
    <Navbar />
  
    <main className="min-h-screen">
      {VoyageDetails && (
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <div className="group relative bg-white rounded-lg shadow-lg p-4 mb-6">
                <h3 className="text-2xl text-sky-500 text-center font-semibold m-4">
                  <a href="" className="">
                    {VoyageDetails.nom}
                  </a>
                </h3>
                <img src={VoyageDetails.image_url} className="w-full h-64 object-cover" />
                <br />
                <p>{VoyageDetails.description}</p>
                <br />
                <p>{VoyageDetails.prix}</p>
                <br />
                <p>{VoyageDetails.date_debut}</p>
                <p>{VoyageDetails.date_fin}</p>
              </div>
              </div>
            </div>
          </div>
      )}
    </main>
    </div>
  );
} 
