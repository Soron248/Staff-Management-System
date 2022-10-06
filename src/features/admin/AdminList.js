import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AdminList() {
  const lists = useSelector((state) => state.adminReducer.list);
  return (
    <div
      style={{
        width: "1200px",
        margin: "0 auto",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            width: "180px",
            borderRadius: "20px",
            borderBottom: "solid 5px blue",
            margin: "20px 0",
            padding: "10px",
          }}
        >
          Admin Panel
        </h3>
      </div>
      <div>
        <Link to={"/addAdmin"}>
          <Button variant="primary" style={{ margin: "10px" }}>
            Ceate Admin
          </Button>
        </Link>
      </div>

      <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>EMAIL</th>
            <th>CELL NO.</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {lists &&
            lists.map((list) => {
              const { id, name, email, cell, img } = list;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{name} </td>
                  <td>{email} </td>
                  <td>{cell}</td>
                  <td>
                    <Button style={{ margin: "10px" }} variant="success">
                      EDIT
                    </Button>{" "}
                    <Button style={{ margin: "10px" }} variant="info">
                      VIEW
                    </Button>
                    <Button style={{ margin: "10px" }} variant="danger">
                      DELETE
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminList;
