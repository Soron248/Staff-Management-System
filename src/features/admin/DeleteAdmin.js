import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteData } from "../AdminSlice";

function DeleteAdmin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const lists = useSelector((state) => state.adminReducer.list);

  const dispatch = useDispatch();

  const handleDelete = (Uid) => {
    dispatch(deleteData(Uid));
    handleClose();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Admin User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {lists &&
            lists.map((list) => {
              if (list.id === id) {
                return (
                  <p key={list.id}>
                    Are you sure to DELETE{" "}
                    <span style={{ fontWeight: "bold" }}>{list.name}</span>'s
                    Information ?
                  </p>
                );
              }
            })}
        </Modal.Body>
        <Modal.Footer>
          <Link to={"/"}>
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{ margin: "10px" }}
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteAdmin;
