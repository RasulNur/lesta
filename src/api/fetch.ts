import { IShip } from "@/types/api.types";

const API_URL = process.env.API;

const query = `
   query Vehicles($languageCode: String = "ru") {
  vehicles(lang: $languageCode) {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
      title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}
  `;

export const fetchShips = async () => {
    return await fetch(`${API_URL}`, {
        next: { tags: ["Ships"] },
        cache: "no-cache",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: "http://localhost",
        },
        body: JSON.stringify({ query }),
    })
        .then((response) => {
            return response.json();
        })
        .then((data: { data: { vehicles: IShip[] } }) => {
            return data.data.vehicles;
        })
        .catch((err) => {
            throw err;
        });
};
