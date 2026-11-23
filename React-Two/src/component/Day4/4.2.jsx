import { useState } from "react";

function RegistrationFrom() {
    const [ForDatas, SetForData] = useState({
        name: "",
        email: "",
        numbers: "",
        course: "",
        password: ""
    });

    // const numbersLength = ForDatas.numbers.length;

    const [Errors, SetErrors] = useState({});
    const [Submited, SetSubmited] = useState(false);

    function handleChanges(event) {
        const { name, value } = event.target;
        SetForData((previousData) => ({
            ...previousData,
            [name]: value
        }));

        SetErrors((previousErrors) => ({
            ...previousErrors,
            [name]: ""
        }))

        SetSubmited(false);
    };

    function handleSubmits(event) {
        event.preventDefault();
        const newError = {};
        const name = ForDatas.name.trim();
        const email = ForDatas.email.trim();
        const numbers = ForDatas.numbers.trim();
        const course = ForDatas.course.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobilePattern = /^\d{10}$/;

        if (!name) {
            newError.name = <p className="text-name">Name is required.</p>
        };

        if (!email) {
            newError.email = <p className="text-name">Email is required.</p> 
        } else if (!emailPattern.test(email)) {
            newError.email = <p className="text-name">Enter a valid email address.</p>
        };

        if (!numbers) {
            newError.numbers = <p className="text-name">Number is required.</p>
        } else if (!mobilePattern.test(numbers)) {
            newError.numbers = <p className="text-name">Mobile must contain exactly 10 digits</p>
        }

        if (!course) {
            newError.course = <p className="text-name">Course is required</p>
        };

        if (!password) {
            newError.password = <p className="text-name">Password is required.</p> 
        } else if (ForDatas.password.length < 8) {
            newError.password = <p className="text-name">Password must contain at least 8 characters.</p>;
        };

        SetErrors(newError);
        SetSubmited(false);

        if (Object.keys(newError).length === 0) {
            SetSubmited(true)
            console.log({
                name,
                email,
                numbers,
                course
            })
            SetForData({
                name: "",
                email: "",
                numbers: "",
                course: "",
                password: ""
            })
        };

    };

    return (
        <div className="container">
            <h1 className="title-h1">Section D — Practical Challenges</h1>
            <div className="Registration-Gs">
                <h1>Build a Student Registration Form</h1>
                <form onSubmit={handleSubmits}>
                    <div className="input-name">
                        <label htmlFor="name">Name:-</label>
                        <br />
                        <input
                            id="name"
                            name="name"
                            value={ForDatas.name}
                            type="text"
                            onChange={handleChanges}
                            placeholder="Name"
                            aria-invalid={Boolean(Errors.name)}
                            aria-description={
                                Errors.name ? "Errors.name" : undefined
                            }
                        />
                        {Errors.name && (
                            <p id="Errors-name">{Errors.name}</p>
                        )}
                    </div>
                    <div className="input-name">
                        <label htmlFor="email">Email:-</label>
                        <br />
                        <input
                            id="email"
                            name="email"
                            value={ForDatas.email}
                            type="email"
                            onChange={handleChanges}
                            placeholder="Email"
                            aria-invalid={Boolean(Errors.email)}
                            aria-description={
                                Errors.email ? "Errors.name" : undefined
                            }
                        />
                        {Errors.email && (
                            <p id="Errors-email">{Errors.email}</p>
                        )}
                    </div>
                    <div className="input-name">
                        <label htmlFor="numbers">Numbers:-</label>
                        <br />
                        <input
                            id="numbers"
                            name="numbers"
                            value={ForDatas.numbers}
                            type="tel"
                            onChange={handleChanges}
                            placeholder="Number"
                            maxLength={10}
                            aria-invalid={Boolean(Errors.numbers)}
                            aria-description={
                                Errors.numbers ? "Errors.numbers" : undefined
                            }
                        />

                        {Errors.numbers && (
                            <p id="Errors-numbers">{Errors.numbers}</p>
                        )}

                        {/* {numbersLength >= 10 && (
                            <p>Warning: You have reached 8 characters!</p>
                        )} */}
                    </div>
                    <div className="input-name">
                        <label htmlFor="course">Choose a course:- </label>
                        <br />
                        <select
                            id="course"
                            name="course"
                            value={ForDatas.course}
                            onChange={handleChanges}
                            required
                        >
                            <option value="">--Select a Course--</option>
                            <option value="html-basics">HTML & CSS Fundamentals</option>
                            <option value="js-intro">Introduction to JavaScript</option>
                            <option value="python-data">Python for Data Science</option>
                            <option value="ui-ux">UI/UX Design Essentials</option>
                        </select>
                        {Errors.course && (
                            <p id="Errors-course">{Errors.course}</p>
                        )}
                    </div>
                    <div className="input-name">
                        <label htmlFor="password">Password:-</label>
                        <br />
                        <input
                            id="password"
                            name="password"
                            value={ForDatas.password}
                            type="password"
                            onChange={handleChanges}
                            placeholder="password"
                            aria-invalid={Boolean(Errors.password)}
                            aria-description={
                                Errors.password ? "Errors.password" : undefined
                            }
                        />
                        {Errors.password && (
                            <p id="Errors-password">{Errors.password}</p>
                        )}
                    </div>

                    <button type="submit">Registration</button>

                    {Submited && (
                        <p className="text-green" role="status">Registration form is valid!</p>
                    )}
                </form>
            </div>
        </div>
    )
}


function Counter() {
    const [text, Setext] = useState("");


    const Characterscount = text.length;
    const remaining = 100 - text.length;

    return (
        <div className="container">
            <div className="count-T">
                <h1>Exercise 3: Live Character Counter</h1>
                <div className="count-textarea">
                    <p>Write your message</p>
                    <textarea
                        value={text}
                        onChange={(event) => Setext(event.target.value)}
                        placeholder="Type your message here..."
                        maxLength={100}
                    >
                    </textarea>
                    <p>Characters:- {text.length}  / 100</p>
                    {Characterscount >= 80 && (
                        <p className="text-name">Warning: You have reached 80 characters!</p>
                    )}
                    <p>Remaining: {remaining}</p>
                </div>
            </div>
            <RegistrationFrom />
        </div>
    )
}

function Registration() {
    const [Fordata, Setfordata] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const [errors, seterrors] = useState({});
    const [submited, Sesubmit] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target
        Setfordata((previousData) => ({
            ...previousData,
            [name]: value
        }));

        Sesubmit(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {};
        const name = Fordata.name.trim();
        const email = Fordata.email.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            newErrors.name = <p className="text-name">Name is required</p>
        }
        if (!email) {
            newErrors.email = <p className="text-name">Email is required.</p>
        } else if (!emailPattern.test(email)) {
            newErrors.email = <p className="text-name">Enter a valid email address.</p>
        }

        if (Fordata.password.length < 8) {
            newErrors.password = <p className="text-name">Password must contain at least 8 characters.</p>
        }

        if (!Fordata.passwordConfirm) {
            newErrors.passwordConfirm = <p className="text-name">Confirm password is required.</p>
        } else if (Fordata.password !== Fordata.passwordConfirm) {
            newErrors.passwordConfirm = <p className="text-name">Passwords do not match.</p>
        }

        seterrors(newErrors);
        Sesubmit(false);

        if (Object.keys(newErrors).length === 0) {
            Sesubmit(true);

            console.log({
                name,
                email
            });
        }

    }

    return (
        <div className="container">
            <div className="Registration-G">
                <h1>Exercise 2: Registration Form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="FullName">Full Name:- </label>
                        <input
                            name="name"
                            value={Fordata.name}
                            type="text"
                            onChange={handleChange}
                            placeholder="Enter full name"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={
                                errors.name ? "errors.name" : undefined
                            }
                        />

                        {errors.name && (
                            <p id="errors-name">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="Email">Email:- </label>
                        <input
                            name="email"
                            value={Fordata.email}
                            type="email"
                            onChange={handleChange}
                            placeholder="Enter email address"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={
                                errors.email ? "errors.email" : undefined
                            }
                        />
                        {errors.email && (
                            <p id="errors-email">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">Password:- </label>
                        <input
                            id="password"
                            name="password"
                            value={Fordata.password}
                            type="password"
                            onChange={handleChange}
                            placeholder="Enter password (minimum 8 characters)"
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={
                                errors.password ? "errors-password" : undefined
                            }
                        />
                        {errors.password && (
                            <p id="errors-password">{errors.password}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="passwordConfirm">Confirm Password:- </label>
                        <input
                            id="passwordConfirm"
                            name="passwordConfirm"
                            value={Fordata.passwordConfirm}
                            type="password"
                            onChange={handleChange}
                            placeholder="Re-enter password"
                            aria-invalid={Boolean(errors.passwordConfirm)}
                            aria-describedby={
                                errors.passwordConfirm ? "errors-passwordConfirm" : undefined
                            }
                        />
                        {errors.passwordConfirm && (
                            <p id="errors-passwordConfirm">{errors.passwordConfirm}</p>
                        )}
                    </div>

                    <button type="submit">Register</button>

                    {submited && (
                        <p className="text-green" role="status">
                            Registration form is valid!
                        </p>
                    )}
                </form>
            </div>
            <Counter />
        </div>
    )
}

function Contact() {
    const [Fordata, Setfordata] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChanges(event) {
        const { name, value } = event.target;

        Setfordata((previousData) => ({
            ...previousData,
            [name]: value
        }));
        Setsubmited(false);
    }

    const [Errors, Seterrors] = useState({});
    const [submited, Setsubmited] = useState(false);
    const [nameSubmited, SetnameSubmited] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newError = {};

        if (!Fordata.name.trim()) {
            newError.name = "Name is required";
        }

        if (!Fordata.email.trim()) {
            newError.email = "Email is required";
        }

        if (!Fordata.message.trim()) {
            newError.message = "Message is required"
        }
        Seterrors(newError);
        Setsubmited(false);


        if (Object.keys(newError).length === 0) {
            SetnameSubmited(Fordata.name.trim());
            Setsubmited(true);
        }

    }

    return (
        <div className="container">
            <h1 className="title-h1">Section C — Coding Exercises</h1>
            <div className="contact-G">
                <h1>Exercise 1: Contact Form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={Fordata.name}
                            onChange={handleChanges}
                            placeholder="Name"
                        />
                        {Errors.name && (
                            <p className="text-name">{Errors.name}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={Fordata.email}
                            onChange={handleChanges}
                            placeholder="Email"
                        />
                        {Errors.email && (
                            <p className="text-name">{Errors.email}</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            name="message"
                            value={Fordata.message}
                            onChange={handleChanges}
                            placeholder="Message"
                        />
                        {Errors.message && (
                            <p className="text-name">{Errors.message}</p>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                    {submited && (
                        <p  className="text-green">
                            Thank you, {nameSubmited}! Your message has been submitted successfully.
                        </p>
                    )}
                </form>
            </div>
            <Registration />
        </div>
    )
}

function Emails() {
    const [ForData, SetForData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [Errors, SetErrors] = useState({});
    const [Submited, SetSubmited] = useState(false);

    function handleChanges(event) {
        const { name, value } = event.target;

        SetForData((previousData) => ({
            ...previousData,
            [name]: value
        }));

        SetErrors((previousError) => ({
            ...previousError,
            [name]: ""
        }));

        SetSubmited(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {};
        const name = ForData.name.trim();
        const email = ForData.email.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            newErrors.name = "Name is required.";
        }
        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!emailPattern.test(email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (ForData.password.length < 8) {
            newErrors.password = "Password must contain at least 8 characters.";
        }

        SetErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            SetSubmited(true);

            console.log({
                name,
                email
            });
        }
    }


    return (
        <div className="container">
            <div className="Email-S">
                <h1>Why should validation be performed on both the frontend and backend?</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:-</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={ForData.name}
                            onChange={handleChanges}
                            aria-invalid={Boolean(Errors.name)}
                            aria-describedby={Errors.name ? "Error-name" : undefined}
                        />

                        {Errors.name && (
                            <p id="Error-name">{Errors.name}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="emails">Email:-</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={ForData.email}
                            onChange={handleChanges}
                            aria-invalid={Boolean(Errors.email)}
                            aria-describedby={Errors.email ? "Error-email" : undefined}
                        />
                        {Errors.email && (
                            <p id="Error-email">{Errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password">Password:-</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={ForData.password}
                            onChange={handleChanges}
                            aria-invalid={Boolean(Errors.password)}
                            aria-describedby={Errors.password ? "Error-password" : undefined}
                        />
                        {Errors.password && (
                            <p id="Error-password">{Errors.password}</p>
                        )}
                    </div>
                    <button type="submit">Register</button>

                    {Submited && (
                        <p role="status">
                            Registration form is valid!
                        </p>
                    )}
                </form>
            </div>
            <Contact />
        </div>
    )
}

function Multiple() {

    const [FormData, SetformData] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChanges(event) {
        const { name, value } = event.target;

        SetformData((previousData) => ({
            ...previousData,
            [name]: value
        }))
    }

    return (
        <div className="container">
            <div className="Multiple-O">
                <h1>How can multiple fields be managed using one state object?</h1>

                <form>
                    <div>
                        <input name="name" value={FormData.name} onChange={handleChanges} placeholder="Full name" />
                    </div>
                    <div>
                        <input name="email" type="email" value={FormData.email} onChange={handleChanges} placeholder="Email" />
                    </div>
                    <div>
                        <input name="password" type="password" value={FormData.password} onChange={handleChanges} placeholder="Password" />
                    </div>
                </form>

            </div>
            <Emails />
        </div>
    )
}

function EventS() {

    function handleSubmit(event) {
        event.preventDefault();
        console.log("I am kais");
    }

    return (
        <div className="container">
            <div className="Event-T">
                <h1>3-Why is event.preventDefault() useful in form submission?</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Multiple />
        </div>
    )
}


function DefaultValue() {
    const [name, Setname] = useState("Kais");
    return (
        <div className="container">
            <div className="default-I">
                <h1>2-What is the difference between value and defaultValue?</h1>
                <label htmlFor="name">Name:-</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => Setname(event.target.value)}
                />
            </div>
            <EventS />
        </div>
    )
}


function Control() {
    const [name, Setname] = useState("");
    return (
        <div className="container">
            <h1 className="title-h1">Section B — Short Answer Questions</h1>
            <div className="control-G">
                <h1>1-Explain controlled inputs with an example.</h1>
                <div>
                    <label htmlFor="name">Name:- </label>
                    <input
                        type="text" name="name"
                        value={name}
                        onChange={(event) => Setname(event.target.value)}
                        placeholder="Enter your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:- </label>
                    <input
                        type="username" name="username"
                        value={name.usernames}
                        onChange={(event) => Setname(event.target.value)}
                        placeholder="username"
                    />
                </div>
            </div>
            <DefaultValue />
        </div>
    )
}

export default Control;