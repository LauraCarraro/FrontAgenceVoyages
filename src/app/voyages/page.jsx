"use client";

import "./page.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/navbar/Navbar";
import { getAllVoyages } from "@/src/services/voyage";
import Card from "@/src/components/Card";

export default function Voyages() {
  const [voyagesList, setVoyagesList] = useState([]);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  const { push } = useRouter();

  useEffect(() => {
    getAllVoyages().then((res) => {
      setVoyagesList(res.data);
      setIsReloadNeeded(false);
    });
  }, [isReloadNeeded]);

  {
    /* <p className="text-center py-1">{voyage.description}</p> */
  }
  {
    /* <p className="text-center py-1">{voyage.prix}</p>
                    <p className="text-center py-1">{voyage.date_debut}</p>
                    <p className="text-center py-1">{voyage.date_fin}</p>
                    <div className="w-4/6 mx-auto flex items-center justify-between "></div> */
  }
  console.log(voyagesList);
  //   </div>
  // </div>
  // );
  return (
    <div>
      <Navbar />
      <main className="min-h-screen   p-2 bg-white">
        <h1 className="my-4 text-2xl font-bold">Tous nos voyages</h1>
        <div>
          <link
            rel="stylesheet"
            href="https://cdn.tailgrids.com/tailgrids-fallback.css"
          />

          <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <div className="container">
              <div className="flex flex-wrap -mx-4">
                {" "}
                {voyagesList &&
                  voyagesList.map((voyage) => {
                    return (
                      <Card
                        image={voyage.image_url}
                        nom={voyage.nom}
                        description={voyage.description}
                        id={voyage.id}
                      />
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
