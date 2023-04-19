import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import "../styles.css";

function Template() {
  const [formValues, setFormValues] = useState({
    firstName: {
      value: "Rishabh",
      error: false,
      errorMessage: "You must enter a first name"
    },
    lastName: {
      value: "Singhal",
      error: false,
      errorMessage: "You must enter a last name"
    },
    jobTitle: {
      value: "Software Developer",
      error: false,
      errorMessage: "You must enter a job Title"
    },
    address: {
      value: "Kishan colony, Bansur",
      error: false,
      errorMessage: "You must enter a job Title"
    },

    city: {
      value: "Alwar",
      error: false,
      errorMessage: "You must enter a job Title"
    },
    state: {
      value: "Rajasthan",
      error: false,
      errorMessage: "You must enter a job Title"
    },
    pincode: {
      value: "301402",
      error: false,
      errorMessage: "You must enter a job Title"
    },
    phone: {
      value: "756845121",
      error: false,
      errorMessage: "You must enter a job Title"
    },
    email: {
      value: "rishabhsinghal@gmail.com",
      error: false,
      errorMessage: "You must enter a job Title"
    },
    profile: {
      value:
        "Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
      error: false,
      errorMessage: "You must enter atleast 50 words"
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === "") {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true
          }
        };
      }
    }

    setFormValues(newFormValues);
  };

  return (
    <div className="container">
      <div className="template">
        <div className="header">
          {/* <img
            className="Image"
            src={
              "data:image/jpeg;base64,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"
            }
            alt="Profile"
          /> */}
          <div className="headerright">
            <span className="name">
              {formValues.firstName.value} {formValues.lastName.value}
            </span>
            <br></br>
            <span className="jobTitle"> {formValues.jobTitle.value}</span>
          </div>
          <div className="headerleft">
            <span className="address">
              {formValues.address.value}
              <br></br>
              {formValues.city.value},{formValues.state.value},
              {formValues.pincode.value}
              <br></br>
              {formValues.phone.value}
              <br></br>
              {formValues.email.value}
            </span>
          </div>
        </div>
        <hr className="line"></hr>

        <div className="profile"> {formValues.profile.value} </div>
        <hr className="line"></hr>

        <h2 className="titles">Education</h2>

        <div className="education">
          <div className="educationLeft">
            <span>Degree in </span>
            <span>field of study</span>
            <br></br>
            <span> location</span>
            <br></br>
            <span> from date to date</span>
          </div>
          <div className="educationRight">Description</div>
        </div>
        <hr className="line"></hr>
        <h2 className="titles">Work Experience</h2>
        <div className="experience">
          <div className="experienceLeft">
            <span>Psoition </span>
            <span>Company</span>
            <br></br>
            <span> from date to date</span>
          </div>
          <div className="experienceRight">Description</div>
        </div>
        <hr className="line"></hr>
        <h2 className="titles">Key Skills</h2>
        <div>
          <ul>
            <li>knowledge</li>
          </ul>
        </div>
      </div>
      <div className="Form">
        <form noValidate onSubmit={handleSubmit}>
          <Typography variant="h3">Contact Inforation</Typography>

          <TextField
            placeholder="Enter your Firstname"
            label="Firstname"
            name="firstName"
            variant="standard"
            fullWidth
            required
            className="field"
            value={formValues.firstName.value}
            onChange={handleChange}
            error={formValues.firstName.error}
            helperText={
              formValues.firstName.error && formValues.firstName.errorMessage
            }
          />
          <TextField
            placeholder="Enter your Lastname"
            label="Lastname"
            name="lastName"
            variant="standard"
            fullWidth
            required
            className="field"
            value={formValues.lastName.value}
            onChange={handleChange}
            error={formValues.lastName.error}
            helperText={
              formValues.lastName.error && formValues.lastName.errorMessage
            }
          />
          <TextField
            placeholder="Enter your Job Title"
            label="Job Title"
            name="jobTitle"
            variant="standard"
            fullWidth
            required
            className="field"
            value={formValues.jobTitle.value}
            onChange={handleChange}
            error={formValues.jobTitle.error}
            helperText={
              formValues.jobTitle.error && formValues.jobTitle.errorMessage
            }
          />
          <TextField
            placeholder="Enter your pincode"
            label="Pincode"
            name="pincode"
            variant="standard"
            type="number"
            fullWidth
            required
            className="field"
            value={formValues.pincode.value}
            onChange={handleChange}
            error={formValues.pincode.error}
            helperText={
              formValues.pincode.error && formValues.pincode.errorMessage
            }
          />
          <TextField
            placeholder="Enter your Address"
            label="Address"
            name="address"
            variant="standard"
            fullWidth
            required
            className="field1"
            value={formValues.address.value}
            onChange={handleChange}
            error={formValues.address.error}
            helperText={
              formValues.address.error && formValues.address.errorMessage
            }
          />
          <TextField
            placeholder="Enter your city"
            label="City"
            name="city"
            variant="standard"
            fullWidth
            required
            className="field"
            value={formValues.city.value}
            onChange={handleChange}
            error={formValues.city.error}
            helperText={formValues.city.error && formValues.city.errorMessage}
          />
          <TextField
            placeholder="Enter your state"
            label="State"
            name="state"
            variant="standard"
            fullWidth
            required
            className="field"
            value={formValues.state.value}
            onChange={handleChange}
            error={formValues.state.error}
            helperText={formValues.state.error && formValues.state.errorMessage}
          />

          <TextField
            placeholder="Enter your phone"
            label="Phone"
            name="phone"
            variant="standard"
            type="number"
            fullWidth
            required
            className="field"
            value={formValues.phone.value}
            onChange={handleChange}
            error={formValues.phone.error}
            helperText={formValues.phone.error && formValues.phone.errorMessage}
          />
          <TextField
            placeholder="Enter your email"
            label="Email"
            name="email"
            variant="standard"
            type="email"
            fullWidth
            required
            className="field"
            value={formValues.email.value}
            onChange={handleChange}
            error={formValues.email.error}
            helperText={formValues.email.error && formValues.email.errorMessage}
          />
          {/* <FormControl className="field">
            <FormLabel>Job title</FormLabel>
            <RadioGroup
              name="jobTitle"
              value={formValues.jobTitle.value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="full-stack"
                control={<Radio />}
                label="Full stack"
              />
              <FormControlLabel
                value="backend"
                control={<Radio />}
                label="Backend"
              />
              <FormControlLabel
                value="frontend"
                control={<Radio />}
                label="Frontend"
              />
            </RadioGroup>
          </FormControl> */}

          <Button
            type="submit"
            variant="standard"
            color="secondary"
            endIcon={<KeyboardArrowRight />}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Template;
