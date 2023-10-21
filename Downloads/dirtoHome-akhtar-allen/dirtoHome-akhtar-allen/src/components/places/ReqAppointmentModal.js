import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getPatients } from "../../services/patient";
import { saveRequestAppointment } from "../../services/requestappointment";

// .toLocalTimeString();
export default function RequestForAppointmentModal({ clinicNo }) {
    const [patients, setPatients] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [preferStartTime, setPreferStartTime] = useState(new Date());
    const [preferEndTime, setPreferEndTime] = useState(
        new Date(new Date().getTime() + 15 * 60000)
    );
    const [date, setDate] = useState(new Date());
    const [doctorNo, setDoctorNo] = useState("");
    const [patientNo, setPatientNo] = useState("");
    const [color, setColor] = useState("");
    const [appointmentType, setAppointmentType] = useState("");
    const [complaint, setComplaint] = useState("");
    const [mobile, setMobile] = useState("");    
    const [note, setNote] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const resetState = () => {
        setFirstName("");
        setLastName("");
        setPreferStartTime(new Date());
        setPreferEndTime(new Date(new Date().getTime() + 15 * 60000));
        setComplaint("");
        setMobile("");        
        setNote("");
        setDate(new Date());
    };

    const appointmentTypeOptions = [
        { value: "clinic", label: "At Clinic" },
        { value: "home", label: "At home" },
        { value: "phone", label: "Telephone" },
        { value: "video", label: "Video" },
    ];

    const appointmentTypes = () => {
        return appointmentTypeOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
        ));
    };

    useEffect(() => {
        // const populatePatients = async () => {
        //     const { data } = await getPatients();
        //     setPatients(data);
        // };
        // populatePatients();
    }, []);

    // submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        const submitInfo = {
            clinicNo,
            firstName,
            lastName,
            preferStartTime,
            preferEndTime,
            date,
            complaint,
            mobile,
            note,
        };
        try {
            await saveRequestAppointment(submitInfo);
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
            <Button className="btn btn-info d-block w-100" onClick={handleShow}>
                Request for appointment
            </Button>

            {show && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Request for appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <InputGroup className="justify-content-between">
                                    <div>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
                                            value={firstName}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last name"
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Form.Label>Mobile</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Mobile"
                                            value={mobile}
                                            onChange={(e) =>
                                                setMobile(e.target.value)
                                            }
                                        />
                                    </div>                                                
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <InputGroup className="justify-content-between">
                                    <div>
                                        <Form.Label>Prefer Start Time</Form.Label>
                                        <div className="w-100">
                                            <DatePicker
                                                id={preferStartTime}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat={"h:mm:aa"}
                                                selected={preferStartTime}
                                                className="form-control"
                                                onChange={(newDate) => {
                                                    setPreferStartTime(newDate);
                                                    setPreferEndTime(
                                                        new Date(
                                                            new Date(
                                                                newDate
                                                            ).getTime() +
                                                                15 * 60000
                                                        )
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Form.Label>Prefer End Time</Form.Label>
                                        <div className="w-100">
                                            <DatePicker
                                                id={preferStartTime}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat={"h:mm:aa"}
                                                selected={preferEndTime}
                                                className="form-control"
                                                onChange={(newDate) => {
                                                    if (
                                                        preferStartTime <
                                                        newDate
                                                    )
                                                        setPreferEndTime(
                                                            newDate
                                                        );
                                                }}
                                            />
                                        </div>
                                    </div>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Date</Form.Label>
                                <DatePicker
                                    id={date}
                                    value={date}
                                    selected={date}
                                    inputProps={{ placeholder: "Datepicker" }}
                                    className="form-control"
                                    onChange={(newDate) => {
                                        setDate(newDate);
                                    }}
                                />
                            </Form.Group>

                            {/* <Form.Group className="mb-3">
                            <Form.Label>Patient</Form.Label>
                            <select
                                name="patientNo"
                                id="patientNo"
                                className="form-control"
                                value={patientNo}
                                onChange={(e) => setPatientNo(e.target.value)}
                            >
                                <option value="">Select Patient</option>
                                {patients.map((patient) => (
                                    <option
                                        key={patient._id}
                                        value={patient._id}
                                    >
                                        {patient.patients?.username}
                                    </option>
                                ))}
                            </select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>AppointmentType</Form.Label>
                            <div className="w-100">
                                <select
                                    name="appointmentType"
                                    id="appointmentType"
                                    className="form-control"
                                    value={appointmentType}
                                        onChange={(e) => setAppointmentType(e.target.value)}
                                >
                                    <option value="">
                                        Select appointment type
                                    </option>
                                    {appointmentTypes()}
                                </select>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" placeholder="Color" 
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                            />
                        </Form.Group> */}

                            <Form.Group className="mb-3">
                                <Form.Label>Complaint</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Complain"
                                    value={complaint}
                                    onChange={(e) =>
                                        setComplaint(e.target.value)
                                    }
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Note</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Note"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />
                            </Form.Group>
                            <Modal.Footer>
                                <Button
                                    type="submit"
                                    variant="info"
                                    disabled={loading}
                                >
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
}
