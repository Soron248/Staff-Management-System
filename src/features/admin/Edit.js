import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateData } from "../AdminSlice";

function Edit() {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(location.state.name);
  const [email, setEmail] = useState(location.state.email);
  const [cell, setCell] = useState(location.state.cell);
  const [img, setImg] = useState(location.state.img);

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
    dispatch(updateData({ id, name, email, cell, img }));
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cell No.</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter cell no."
            value={cell}
            onChange={(e) => setCell(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Update Image</Form.Label>
          <Form.Control type="file" onChange={handleImage} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
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

export default Edit;
