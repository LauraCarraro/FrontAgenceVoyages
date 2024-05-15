export type voyageProps = {
    id: string;
    nom: string;
    description: string;
    prix: string;
    date_debut: string;
    date_fin: string;
    categorie: {
        id: string;
        nom: string;
    }
    pays: {
        id: string;
        nom: string;
    }
    image_url: string;
}

export type VoyageDetailProps = {
    id: string;
    nom: string;
    description: string;
    prix: string;
    date_debut: string;
    date_fin: string;
    categorie: {
        id: string;
        nom: string;
    }
    pays: {
        id: string;
        nom: string;
    }
    image_url: string;
}