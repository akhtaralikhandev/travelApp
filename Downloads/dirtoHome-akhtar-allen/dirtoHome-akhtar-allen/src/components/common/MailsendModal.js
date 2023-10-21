import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "react-datepicker/dist/react-datepicker.css";

// .toLocalTimeString();
export default function MailsendModal() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const resetState = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    // submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        const submitInfo = {};
        try {
            setLoading(false);
            resetState();
            handleClose();
        } catch (ex) {
            setLoading(false);
            if (ex.response) {
                const errorscopy = { ...errors };
                const path = ex.response.data.split('"')[1];
                errorscopy[path] = ex.response.data;
                setErrors(errorscopy);
                console.log(errors);
            }
        }
    };

    return (
        <>
            <Button className="btn btn-primary w-100" onClick={handleShow}>
                Send mail to clinic
            </Button>

            {show && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Send mail to clinic</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Jon"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="example@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </Form.Group>

                            <Modal.Footer>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={loading}
                                >
                                    Send
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
}
