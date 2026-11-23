import {useState} from "react";

export default function Registration(){

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [repPassword, setRepPassword] = useState("");

const [buyer, setBuyer] = useState(false);
const [seller, setSeller] = useState(false);
const [tos, setTos] = useState(false);


const getPasswordStrength = (value) => {
  if (value.length === 0) return "Empty";

  if (value.length < 8) return "Weak";

  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecial = /[^A-Za-z0-9]/.test(value);

  if (
    value.length >= 12 &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecial
  ) {
    return "Strong";
  }

  return "Medium";
};



    
    const validateForm = () => {
    if (!name.trim() || !email.trim() ||
        !password || !repPassword) {
        alert("Please fill in all text fields.");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Invalid e-mail address.");
        return false;
    }

    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return false;
    }

    if (password !== repPassword) {
        alert("Passwords do not match. Please retry.");
        return false;
    }

    if (!buyer && !seller) {
        alert("Please select at least one role: buyer or seller.");
        return false;
    }

    if (!tos) {
        alert("Please agree to the Terms and Privacy Policy.");
        return false;
    }

    return true;
    };

    const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    alert("Form submitted");
    };

    
    return (
        <form className="registration" onSubmit={handleSubmit} noValidate>
            <label className="labelText">Name: </label>
            <input
            type="text"
            className="inputText"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="off"
            /><br/><br/>

            <label className="labelText">Email:</label>
            <input
            type="email"
            className="inputText"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="off"
            />
            <br/><br/>

            <label className="labelText">Password:</label>
            <input
            type="password"
            className="inputText"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={8}
            />
            <p aria-live="polite">
            Password strength: {getPasswordStrength(password)}
            </p>
            <br/><br/>

            <label className="labelText">Re-type password:</label>
            <input
            type="password"
            className="inputText"
            name="repPassword"
            value={repPassword}
            onChange={(event) => setRepPassword(event.target.value)}
            required
            />
            <br/><br/>

            <input
            type="checkbox"
            name="buyer"
            checked={buyer}
            onChange={(event) => setBuyer(event.target.checked)}
            />
            <label>I want to buy produce directly from allotment owners.</label>
            <br/>

            <input
            type="checkbox"
            name="seller"
            checked={seller}
            onChange={(event) => setSeller(event.target.checked)}
            />
            <label>I want to sell produce from my allotment.</label>
            <br/><br/>

            <input
            type="checkbox"
            name="tos"
            checked={tos}
            onChange={(event) => setTos(event.target.checked)}
            required
            />
            <label>I agree to the Terms of Use and Privacy Policy.</label>
            <br/><br/>

            <button type="submit">Submit</button>
        </form>
    )
}
