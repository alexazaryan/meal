import { useEffect, useState } from "react";
import { getRandomProduct } from "../../../api";
import RandomList from "../../components/RandomList/RandomList";

// style.css
import "./Random.css";

export default function Random() {
  const [random, setRandom] = useState({});

  useEffect(() => {
    getRandomProduct().then((data) => {
      setRandom(data.meals[0]);
    });
  }, []);

  return <div>{<RandomList random={random} />}</div>;
}
