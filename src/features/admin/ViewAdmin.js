import React, { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function ViewAdmin() {
  const location = useLocation();
  const { id } = useParams();
  const [name, setName] = useState(location.state.name);
  const [email, setEmail] = useState(location.state.email);
  const [cell, setCell] = useState(location.state.cell);
  const [img, setImg] = useState(location.state.img);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1 style={{ margin: "50px", borderBottom: "2px solid blue" }}>
        User Information
      </h1>

      <div
        style={{
          width: "600px",
          height: "350px",
          backgroundColor: "#191970",
          borderRadius: "30px",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              // backgroundColor: "yellow",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              objectFit: "cover",
            }}
            src={img}
            alt=""
          />
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#F9F6EE",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              margin: "15px",
            }}
          >
            {id}
          </div>
          <h2>{name}</h2>
          <p style={{ margin: "20px 0" }}>{email}</p>
          <p>{cell}</p>
          <Link to={"/"}>
            <Button style={{ marginTop: "30px" }} variant="light" type="button">
              Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewAdmin;
