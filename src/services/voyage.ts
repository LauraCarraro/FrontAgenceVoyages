import axios from "axios";

async function getAllVoyages() {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}api/voyages`;
  return axios.get(url, axiosConfig).then((res) => {
    return res;
  });
}

async function getVoyageByNom(nom: any) {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}api/voyage/${nom}`;

  return axios.get(url, axiosConfig).then((res) => {
    return res.data;
  });
}

export { getAllVoyages, getVoyageByNom };
