import React, { useState, useEffect } from "react"; // <- note the added import of useState
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function PatientDetail(props) {
  const [patient, set_patient] = useState([]);
  const [prescriptions, set_prescriptions] = useState([]);

  const location = useParams();
  const url = `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/`;

  console.log("location:", location);

  const getPatient = async () => {
    const patientDetails = `${url}/${location.id}`;
    const response = await axios.get(patientDetails);
    console.log("Data", response.data);
    set_patient(response.data);
  };

  useEffect(() => {
    getPatient();
  }, []);

  useEffect(() => {
    set_prescriptions(patient.prescriptions);
  }, [patient]);

  console.log("prescriptions", patient.prescriptions);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card styled-shadow ml-4 col-11">
            <div className="card-body">
              <h4 className="card-title">
                {patient.firstName} {patient.firstName}
              </h4>
              <p className="card-text">ID: {patient.id}</p>
              <p className="card-text">Date of birth: {patient.dateOfBirth}</p>
              <p className="card-text">Gender: {patient.gender}</p>
              <p className="card-text">Prescriptions:</p>
              {patient.prescriptions}
              {/* <ul>
                {patient.prescriptions.forEach((prescription) => {
                  return <li className="card styled-shadow">{prescription}</li>;
                })}
              </ul> */}

              <br></br>
              <br></br>
              <blockquote className="card-blockquote">
                <p>
                  <strong>Contact information</strong>
                </p>
                <p>Phone: {patient.phoneNumber}</p>
                <p>Email: {patient.email}</p>
                <br></br>
                <footer>Doctor ID: {patient.doctorId}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
