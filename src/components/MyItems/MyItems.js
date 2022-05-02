import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/selectedItems")
      .then((res) => res.json())
      .then((data) => setSelectedItems(data));
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      {selectedItems.map((selectedItem) => {
        if (selectedItem.email === user?.email) {
          return (
            <div key={selectedItem._id}>
              <h2>{selectedItem.name}</h2>

              <p>
                <b>Quantity: </b>
                {selectedItem.quantity}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MyItems;
