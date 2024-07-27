import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/clientForm.css";

function ClientForm() {
  return (
    <Form className="p-4 border rounded shadow-sm client-form">
      <Form.Group className="mb-3" controlId="cliente">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="numero">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="tel" placeholder="Telefone" />
      </Form.Group>
      <div className="btn-container">
        <Button variant="primary" type="submit" className="w-100 mt-3">
          Enviar
        </Button>
      </div>
    </Form>
  );
}

export default ClientForm;
