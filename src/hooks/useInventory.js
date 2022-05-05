import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://polar-inlet-04132.herokuapp.com/inventories")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return inventories;
};
export default useInventory;
