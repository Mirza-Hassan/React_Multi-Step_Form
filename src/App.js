import React, { useState } from "react";

export default function App() {
  // State
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  // Mock data
  const questions = [
    { id: 1, type: "text", question: "What is your name" },
    {
      id: 2,
      type: "radio",
      question: "Select your color",
      options: ["red", "green"]
    },
    { id: 3, type: "textarea", question: "Tell us about yourself" }
  ];

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value ?? "" });
  };

  return (
    <div style={styles.container}>
      {step <= questions?.length ? (
        <div style={styles.formSection}>
          <p style={styles.question}>{questions[step - 1].question}</p>
          {questions[step - 1].type === "text" && (
            <input
              style={styles.input}
              placeholder="Enter name"
              name={`step${step}`}
              type="text"
              value={formData[`step${step}`] ?? ""}
              onChange={handleChange}
            />
          )}

          {questions[step - 1].type === "radio" && (
            <>
              {questions[step - 1].options.map((option, index) => (
                <label key={index} style={styles.radioLabel}>
                  <input
                    name={`step${step}`}
                    type="radio"
                    value={option}
                    checked={formData[`step${step}`] === option}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              ))}
            </>
          )}

          {questions[step - 1].type === "textarea" && (
            <textarea
              style={styles.textarea}
              placeholder="Enter something"
              name={`step${step}`}
              value={formData[`step${step}`] ?? ""}
              onChange={handleChange}
            />
          )}
          <button style={styles.button} onClick={() => setStep(step + 1)}>Next</button>
        </div>
      ) : (
        <div style={styles.formSection}>
          {/* To use the nullish coalescing operator (??) to provide default values for undefined or null values in your code, you can modify the code as follows: */}
          <p style={styles.result}>Name: {formData["step1"] ?? ""}</p>
          <p style={styles.result}>Color: {formData["step2"] ?? ""}</p>
          <p style={styles.result}>About Yourself: {formData["step3"] ?? ""}</p>
          <p style={styles.submitted}>Form submitted</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  formSection: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    width: "400px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
  },
  question: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  radioLabel: {
    display: "block",
    marginBottom: "5px",
  },
  textarea: {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  submitted: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
  },
};
