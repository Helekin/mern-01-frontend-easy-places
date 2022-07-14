import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://www.nicepng.com/png/full/72-725048_yugioh-drawing-toon-toon-world.png",
    address: "Leonidas Pl. Gutierrez 3-01, Ambato 180202, Ecuador",
    location: {
      lat: -1.2611318,
      lng: -78.6271708,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building 2",
    description: "One of the most famous sky scrapers in the world 2!",
    imageUrl:
      "https://www.nicepng.com/png/full/72-725048_yugioh-drawing-toon-toon-world.png",
    address: "Leonidas Pl. Gutierrez 3-01, Ambato 180202, Ecuador",
    location: {
      lat: -1.2611318,
      lng: -78.6271708,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
