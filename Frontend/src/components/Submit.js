import { useState,useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

export default function Form() {

    // States for registration
    const [Fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [Subname, setSubname] = useState('');
    const [Modeldes, setModeldes] = useState('');
    const [Paramdes, setParamdes] = useState('');
    const [Giturl, setGiturl] = useState('');
    const [Linkurl, setLinkurl] = useState('');
    const [Contact, setContact] = useState('');
    const [image, setImage] = useState("");
    const inputFile = useRef(null);

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleFullname = (e) => {
        setFullname(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handleSubname = (e) => {
        setSubname(e.target.value);
        setSubmitted(false);
    };

    const handleModeldes = (e) => {
        setModeldes(e.target.value);
        setSubmitted(false);
    };

    const handleParamdes = (e) => {
        setParamdes(e.target.value);
        setSubmitted(false);
    };

    const handleGiturl = (e) => {
        setGiturl(e.target.value);
        setSubmitted(false);
    };
    const handleLinkurl = (e) => {
        setLinkurl(e.target.value);
        setSubmitted(false);
    };
    const handleContact = (e) => {
        setContact(e.target.value);
        setSubmitted(false);
    };
    const handleFileUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
          const filename = files[0].name;
    
          var parts = filename.split(".");
          const fileType = parts[parts.length - 1];
          console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
    
          setImage(files[0]);
        }
      };
    const onButtonClick = () => {
        inputFile.current.click();
      };
      console.log("imageimage", image);

    // Handling the form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (Fullname === '' || email === '' || Modeldes === '' || Giturl === '' ||  Contact === '' || Subname === '' || Paramdes === '' ) {
            setError(true);
        } else {
            console.log("here");
            setSubmitted(true);
            setError(false);
            const response = await axios.post('http://localhost:5000/upload',{
                Fullname,Subname,Modeldes,Paramdes,email,Giturl,Contact,Linkurl
            });
            // console.log(response);
        }
    };

    // Showing success message
    const handleClose = () => {
        setFullname("");
        setEmail("");
        setModeldes("");
        setGiturl("");
        setLinkurl("");
        setContact("");
        setSubname("");
        setParamdes("");
        setImage("");
        setSubmitted(false);
    }
    // Showing success message
    const successMessage = () => {
        return (
            <Modal show={submitted} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank You!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your form has been submitted</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        );

    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <div className="form">
            <div>
                <h1>Tasks Submission</h1><br></br>
                <p1 >* means requried fields</p1>
                
                
            </div>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                {/* Labels and inputs for form data */}
                <br>

                </br>
                <label className="label"> Full Name *:&nbsp;</label>
                <input onChange={handleFullname} className="input"
                    value={Fullname} type="text" />
                <br></br>
                <br></br>
                <label className="label"> Submission Name *:&nbsp;</label>
                <input onChange={handleSubname} className="input"
                    value={Subname} type="text" />
                <br></br>
                <br></br>
                <label className="label"> Model Description *:&nbsp;</label>
                <input onChange={handleModeldes} className="input"
                    value={Modeldes} type="text" />
                <br></br>
                <br></br>
                <label className="label"> Parameter Description *:&nbsp;</label>
                <input onChange={handleParamdes} className="input"
                    value={Paramdes} type="text" />
                <br></br>
                <br></br>
                <label className="label">Email *:&nbsp;</label>
                <input onChange={handleEmail} className="input"
                    value={email} type="email" />
                <br></br>
                <br></br>
                <label className="label">Github-URL of Project *:&nbsp;</label>
                <input onChange={handleGiturl} className="input"
                    value={Giturl} type="text" />
                <br></br>
                <br></br>
                <label className="label">Contact Number *:&nbsp;</label>
                <input onChange={handleContact} className="input"
                    value={Contact} type="text" />
                <br></br>
                <br></br>
                <label className="label">LinkedIn URL:&nbsp;</label>
                <input onChange={handleLinkurl} className="input"
                    value={Linkurl} type="text" />
                <br></br>
                <br></br>
                <input
                    style={{ display: "none" }}
                    // accept=".zip,.rar"
                    ref={inputFile}
                    onChange={handleFileUpload}
                    type="file"
                />
                <br></br>
                <button onClick={handleSubmit} className="button" type="submit">
                    Submit
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </form>
        </div>
    );
}
