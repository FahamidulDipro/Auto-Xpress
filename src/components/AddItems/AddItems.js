import React from "react";
import { useForm } from "react-hook-form";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/inventories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div
      style={{ marginTop: "100px" }}
      className="d-flex justify-content-center   container p-3"
    >
      <section className="w-75">
        <h1 className="bg-dark  text-light mb-0 p-3">Add Items</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-100 border border-dark border-3 p-3"
        >
          <input
            {...register("name")}
            placeholder="Item Name"
            className="form-control  p-2"
            style={{ fontSize: "20px", background: "lightgrey" }}
          />
          <input
            {...register("img")}
            placeholder="Photo URL"
            className="form-control  p-2 mt-3"
            style={{ fontSize: "20px", background: "lightgrey" }}
          />
          <input
            type="number"
            {...register("price")}
            placeholder="Price"
            className="form-control  p-2 mt-3"
            style={{ fontSize: "20px", background: "lightgrey" }}
          />
          <input
            type="number"
            {...register("quantity")}
            placeholder="Quantity"
            className="form-control  p-2 mt-3"
            style={{ fontSize: "20px", background: "lightgrey" }}
          />
          <input
            {...register("supplierName")}
            placeholder="Supplier Name"
            className="form-control  p-2 mt-3"
            style={{ fontSize: "20px", background: "lightgrey" }}
          />
          <textarea
            {...register("shortDescription")}
            placeholder="Short Description"
            className="form-control  p-2 mt-3"
            style={{ fontSize: "20px", background: "lightgrey" }}
          />
          <br />
          <input
            type="submit"
            className="w-100 p-2 bg-danger text-light border-0"
            style={{ fontSize: "20px" }}
          />
        </form>
      </section>
    </div>
  );
};

export default AddItems;
