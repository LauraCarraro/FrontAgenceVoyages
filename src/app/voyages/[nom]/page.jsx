"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getVoyageByNom } from '@/app/Services/voyage';

const Page = () => {
   
  const { push } = useRouter()
  const [VoyageDetails, setVoyagelDetails] = useState([]);

  useEffect(() => {
      getVoyageByNom(params.nom).then((res) => {
          setVoyagelDetails(res)
          console.log(res)
      })
  }, [])

  return (
    <main className="min-h-screen">
      <Header></Header>
      {voyageData && (
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <div className="group relative bg-white rounded-lg shadow-lg p-4 mb-6">
                <h3 className="text-2xl text-sky-500 text-center font-semibold m-4">{voyageData.destination.nom}</h3>
                <h3 className="text-2xl text-sky-500 text-center font-semibold m-4">
                  <a href="" className="">{voyageData.nom}</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
);
};