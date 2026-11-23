import { useState } from "react";

function RegistrationForms() {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormdata((previousData) => ({
            ...previousData,
            [name]: value
        }));

        setErrors((previousError) => ({
            ...previousError,
            [name]: ""
        }));

        setSubmitted(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {};
        const name = formdata.name.trim();
        const email = formdata.email.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            newErrors.name = "Name is required.";
        }

        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!emailPattern.test(email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (formdata.password.length < 8) {
            newErrors.password =
                "Password must contain at least 8 characters.";
        }

        setErrors(newErrors);
        setSubmitted(false);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);

            console.log({
                name,
                email
            });
        }
    }

    return (
        <div className="container">
            <div className="RegistrationFrom">
                <h2>9. Complete Example: Registration Form</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Full Name</label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formdata.name}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={
                                errors.name ? "name-error" : undefined
                            }
                        />

                        {errors.name && (
                            <p id="name-error">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formdata.email}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={
                                errors.email ? "email-error" : undefined
                            }
                        />

                        {errors.email && (
                            <p id="email-error">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formdata.password}
                            onChange={handleChange}
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={
                                errors.password ? "password-error" : undefined
                            }
                        />

                        {errors.password && (
                            <p id="password-error">{errors.password}</p>
                        )}
                    </div>

                    <button type="submit">Register</button>

                    {submitted && (
                        <p role="status">
                            Registration form is valid!
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}




function RegistrationForm() {

    const [fordata, Setformdata] = useState([{
        name: "",
        email: "",
        password: ""
    }])

    function handleChange(event) {
        const [name, value] = event.target;

        Setformdata((previousData) => ({
            ...previousData,
            [name]: value
        }));
    }

    return (
        <div className="container">
            <div className="RegistrationFrom">
                <h2>Handling Multiple Form Fields</h2>

                <form>
                    <imput
                        name="name"
                        value={fordata.name}
                        onChange={handleChange}
                        placeholder="Full name"
                    />
                    <input
                        email="email"
                        value={fordata.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <input
                        password="password"
                        value={fordata.password}
                        onChange={handleChange}
                        placeholder="Passwords"
                    />
                </form>
            </div>
            <RegistrationForms/>
        </div>
    )
}

function NameForm() {
    const [name, Setname] = useState("");
    return (
        <div className="container">
            <div className="NameFrom-I">
                <h2>What Is a Controlled Input?</h2>
                <label htmlFor="name">Name:- </label>
                <input
                    id="name"
                    value={name}
                    onChange={(event) => Setname(event.target.value)}
                />
                <p>Your name:- {name}</p>
            </div>
            <RegistrationForm />
        </div>
    )
}

function ContactFrom() {

    function handleSubmit(event) {
        event.preventDefault();
        alert("Form submitted!")
    }

    return (
        <div className="container">
            <h1 className="title-h1">Day 4.1: Forms, Controlled Inputs and Validation in React</h1>
            <div className="contact-T">
                <h1>Creating a Basic Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:-
                        <input type="text" name="Name" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <NameForm />
        </div>
    )
}
export default ContactFrom;