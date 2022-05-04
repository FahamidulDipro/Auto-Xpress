import React, { useEffect, useState } from "react";
import { Button, Col, Figure, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const MyItems = () => {
  const [user] = useAuthState(auth);
  const [selectedItems, setSelectedItems] = useState([]);
  const email = user?.email;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/selectedItems?email=${email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("AccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSelectedItems(data))
      .catch((e) => {
        if (e.response.status === 401 || e.response.status === 403) {
          signOut(auth);
          navigate("/login");
          console.log(e);
        }
      });
  }, [user, email]);
  //Canceling items
  const cancelHandler = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to remove?");

    if (confirmDelete) {
      fetch(`http://localhost:5000/deleteItem/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          const remainingItems = selectedItems?.filter(
            (item) => item._id !== id
          );
          setSelectedItems(remainingItems);
          console.log(result);
        });
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Row>
        {selectedItems?.map((selectedItem) => {
          if (selectedItem.email === user?.email) {
            return (
              <Col
                lg={6}
                key={selectedItem._id}
                className="d-flex justify-content-center"
              >
                <Figure className="d-flex justify-content-between shadow-lg p-3 w-75 position-relative">
                  <div className="d-flex  ">
                    <Figure.Image
                      width={300}
                      height={280}
                      alt="171x180"
                      src={selectedItem.img}
                    />

                    <Figure.Caption className="ms-3 text-start">
                      <h2>{selectedItem.name}</h2>
                      <p>
                        <b>Short Description: </b>
                        {selectedItem.shortDescription}
                      </p>
                      <p>
                        <b>Price: </b>${selectedItem.price}
                      </p>
                      <p>
                        <b>Quantity: </b>
                        {selectedItem.quantity}
                      </p>
                    </Figure.Caption>
                  </div>
                  <div>
                    <Button
                      className="float-end position-absolute bottom-0 end-0 m-3 bg-secondary"
                      onClick={() => cancelHandler(selectedItem._id)}
                    >
                      Cancel
                    </Button>
                  </div>
                </Figure>
              </Col>
            );
          }
        })}
      </Row>
    </div>
  );
};

export default MyItems;
