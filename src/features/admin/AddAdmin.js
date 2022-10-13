import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../AdminSlice";

function AddAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [img, setImg] = useState("");

  const numberOfAdmin = useSelector((state) => state.adminReducer.list.length);
  const lists = useSelector((state) => state.adminReducer.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImage = (e) => {
    const selected = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let lastId;
    if (numberOfAdmin == 0) {
      lastId = 0;
    } else {
      lastId = lists[numberOfAdmin - 1].id;
    }

    const newList = { id: lastId + 1, name, email, cell, img };
    dispatch(addData(newList));
    navigate("/", { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Form
        style={{
          width: "400px",
          border: "solid 3px blue",
          borderRadius: "10px",
          padding: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cell No.</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter cell no."
            required
            value={cell}
            onChange={(e) => setCell(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" required onChange={handleImage} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to={"/"}>
          <Button style={{ marginLeft: "10px" }} variant="dark" type="button">
            Back
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default AddAdmin;
