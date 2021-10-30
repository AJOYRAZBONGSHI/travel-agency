import React, { useRef } from "react";
import "./AddPlace.css";

const AddPlace = () => {
  const nameRef = useRef();
  const durationRef = useRef();
  const imgUrlRef = useRef();
  const descriptionRef = useRef();

  const handleDataPost = (e) => {
      const name = nameRef.current.value;
      const img = imgUrlRef.current.value;
    const duration= durationRef.current.value;
    const description = descriptionRef.current.value;
    const price = '2500$';

    const newPlace = {name,img,duration,description,price};

    fetch("https://fast-sands-85552.herokuapp.com/places", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPlace),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(" new place added,, checked home page");
          e.target.reset();
        }
      });
    
    e.preventDefault();
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="mb-3 text-success">Add a new Destination,,</h1>
      <form onSubmit={handleDataPost}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label fw-bold">
            Services Name :
          </label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="enter service name"
            required="required"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInput2"
            className="form-label fw-bold"
          >
            Duration :
          </label>
          <input
            ref={durationRef}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="enter days"
            required="required"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInput2"
            className="form-label fw-bold"
          >
            Image URL :
          </label>
          <input
            ref={imgUrlRef}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="online image url"
            required="required"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="formGroupExampleInput2"
            className="form-label fw-bold"
          >
            Description :
          </label>
          <textarea
            ref={descriptionRef}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="place description"
            required="required"
          />
        </div>
        <button className="btn btn-danger mb-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPlace;
