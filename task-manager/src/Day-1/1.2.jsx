// import { jsx } from "react/jsx-runtime";
import image from "../assets/react.svg";

// Task 1 — Personal introduction card
function JSX() {
    const name = "Kais";
    const course = "Reactjs Developer";
    const currentTopic = "Conditional Rendering";
    const completedModules = 5;

    return (
        <div className="Profile-Card-one">
            <div className="profile">
                <img src={image} alt="React-logo" />
                <h1>My Introduction</h1>
                <h2 className="title-name">{name}</h2>
            </div>
            <p className="text-name">Course:- {course}</p>
            <p className="text-name">Current Topics:- {currentTopic}</p>
            <p className="text-name">{completedModules}</p>
            {completedModules >= 1 && (
                <p className="text-test">You have completed modules</p>
            )}

            <Bill />
        </div>
    );
}
export default JSX;

//Task 2 — Shopping bill calculator
function Bill() {
    const product = "Keyboard";
    const price = 750;
    const quantity = 2;
    const discount = 100;

    const subtotal = price * quantity;
    const finalTotal = subtotal - discount;

    return (
        <div className="Bill-Card-Two">
            <h1>Shopping Bill</h1>
            <p>Product:- {product}</p>
            <p>Price:- ₹{price}</p>
            <p>Quantiy:- {quantity}</p>
            <p>Discount:- {discount}</p>

            <hr />
            <p>Subtotal: ₹{subtotal}</p>
            <p>Discount: ₹{discount}</p>

            <h2 className="title-total">Final Total:<br /> ₹{finalTotal}</h2>

            <Result />
        </div>
    )
}


// or

// function Bill() {
//   const bills = [
//     { product: "Keyboard", price: 7500, quantity: 2 },
//     { product: "Mouse", price: 2500, quantity: 1 },
//     { product: "subCard", price: 1300, quantity: 3 },
//   ];


//   return (
//     <div className="Bill-Card-Two">
//       <h1 className="title">Shopping bill calculator</h1>
//       <article>
//         <ul className="cards">
//           {bills.map((bill, index) => (
//             <li key={index}>
//               <h2>{bill.product}</h2>
//               <p>Price: ₹{bill.price}</p>
//               <p>Quantity: {bill.quantity}</p>
//             </li>
//           ))}
//         </ul>
//       </article>
//     </div>
//   );
// }



// Task 3 — Student result card

function Result() {
    const studentName = "Kais";
    const subject = "Math";
    const marks = 80;

    let resultStatus;

    if (marks >= 40) {
        resultStatus = "Passed"
    } else (
        resultStatus = "Failed"
    )

    return (
        <>
            <div className="Result-Card-Three">
                <h1>Student Result</h1>

                <h2>{studentName}</h2>
                <p>Subject:- {subject}</p>
                <p>Marks:- {marks}</p>
                <p>Result:- {resultStatus}</p>

                {/* Conditional Rendering */}
                {marks >= 80 && (
                    <p className="text-test">Congratulations! You got Distinction!</p>
                )}
            </div>
            <Course />
        </>

    )
}

// ----------- or -------------//
// Task 3 — Student result card
// function Result(){
//     const marks = 80;
//     let Subject;

//     if(marks >= 40){
//         Subject= "Math";
//     }else if (marks >= 35){
//         Subject = "English"
//     }else if(marks >= 25){
//         Subject="Gujarat"
//     }else(
//         Subject="Science"
//     )
//     return <h3>{Subject}</h3>
// }


//Task 4 — Course list
// function JSX() {
//     const Course = [
//         { id: 1, Title: "Frontend", Duration: 2, Level: "Basic" },
//         { id: 2, Title: "Backend", Duration: 1, Level: "start" },
//         { id: 3, Title: "Fullstack", Duration: 4, Level: "Adavance" },
//         { id: 4, Title: "React JS", Duration: 3, Level: "Intermediate" },
//         { id: 5, Title: "Node JS", Duration: 2, Level: "Advanced" }
//     ];

//     return (
//         <div className="Cards">
//             <ul>
//                 {Course.map((list) => (
//                     <li key={list.id}>
//                         <h1>{list.Title}</h1>
//                         <p>Duration: {list.Duration} months</p>
//                         <span>Level: {list.Level}</span>
//                     </li>
//                 ))}
//             </ul>
//             {Course >= 0 && (
//                 <p>Done</p>
//             )}
//         </div>
//     );
// }

// -------- or ---------- //

function Course() {
    const Course = [
        { id: 1, Title: "Frontend", Duration: 2, Level: "Basic" },
        { id: 2, Title: "Backend", Duration: 1, Level: "start" },
        { id: 3, Title: "Fullstack", Duration: 4, Level: "Adavance" },
        { id: 4, Title: "React JS", Duration: 3, Level: "Intermediate" },
        { id: 5, Title: "Node JS", Duration: 2, Level: "Advanced" }
    ];

    return (
        <main>
            <div className="Cards-Four">
                <h1>My Courses</h1>

                {Course.length === 0 ? (
                    <p>No courses available.</p>
                ) : (
                    <div className="Course-Card-Four">
                        {Course.map((list) => (
                            <div className="course-card" key={list.id}>
                                <h1>{list.Title}</h1>
                                <p>Duration: {list.Duration} months</p>
                                <span className="level-list">Level: {list.Level}</span>
                            </div>
                        ))}
                    </div>
                )}

            </div>
            <Products />
        </main>
    );
}


// Task 5 — Product availability

function Products() {
    const Product = [
        { id: 1, Name: "Keyword", Price: 1000, Availability: true },
        { id: 2, Name: "Mouse", Price: 750, Availability: true },
        { id: 3, Name: "Laptop", Price: 50000, Availability: true },
        { id: 4, Name: "Monitor", Price: 10000, Availability: false }
    ]

    return (
        <>
            <div className="Products-Card-Five">
                <h1>My Products</h1>

                {Product.map((products) => (
                    <div>
                        <div className="group-content">
                            <h2>{products.Name}</h2>
                            <p>{products.Price}</p>
                        </div>

                        <p className={products.Availability ? "available" : "Out-of-Stock" }>
                            {products.Availability ? "Available" : "Out of Stock"}
                        </p>

                        {/* /* //---slove-problem--//  */}
                        
                        {/* {Products.Availability ? (
                            <span className="available">
                                Available
                            </span>
                        ) : (
                            <span className="Out-of-Stock">
                                Unavailable
                            </span>
                        )} */}
                    </div>
                ))}

            </div>
            <Mini />
        </>
    )
}


//Task 6 — Mini dashboard

function Mini() {
    const courses = [
        { id: 1, name: "HTML", completed: true },
        { id: 2, name: "CSS", completed: true },
        { id: 3, name: "JavaScript", completed: false },
        { id: 4, name: "React", completed: true },
        { id: 5, name: "TypeScript", completed: false },
    ];

    const totalCourse = courses.length;
    const completedCourse = courses.filter(
        (course) => course.completed === true
    ).length;
    const pendingCourse = courses.filter(
        (course) => course.completed === false
    ).length;

    return (
        <>
            <div className="Mini-cards-six">
                <h1>Course Dashboard</h1>
                <div className="num-cards">
                    <p>Total Courses: {totalCourse}</p>
                    <p>Completed: {completedCourse}</p>
                    <p>Pending: {pendingCourse}</p>
                </div>

                {courses.length === 0 ? (
                    <p>No courses available. Start learning!</p>
                ) : (
                    courses.map((course) => (
                        <div className="cards-six" key={course.id}>
                            <h3>{course.name}</h3>

                            {course.completed ? (
                                <p className="completed">Completed</p>
                            ) : (
                                <p className="Pending">Pending</p>
                            )}
                        </div>
                    ))
                )}
            </div>
            <ProductsSix />
        </>
    )
}



// 10. Group Activities

// Group Task 1 — E-commerce product listing
function ProductsSix() {
    const products = [
        {
            id: 1,
            name: "Wireless Keyboard",
            price: 750,
            category: "Electronics",
            available: true,
        },
        {
            id: 2,
            name: "Wireless Mouse",
            price: 450,
            category: "Electronics",
            available: false,
        },
    ];

    return (
        <>
            <div className="ProductsSix-Task-one">
                <h1>E-commerce product listing</h1>
                <article className="cards-post">
                    {products.map((product) => (
                        <div key={product.id} className="card-one">
                            <h1>{product.name}</h1>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                        </div>
                    ))}

                    {products.available ? (
                        <p className="available">Available</p>
                    ) : (
                        <p className="unavailable">Unavailable</p>
                    )}

                </article>
            </div>
            <Student />
        </>
    )
}

// 2 — Student directory
function Student() {
    const students = [
        {
            id: 1,
            name: "Rahul Patel",
            role: "Frontend Developer",
            skills: ["HTML", "CSS", "JavaScript", "React"],
            completedTasks: 12,
        },
        {
            id: 2,
            name: "Priya Shah",
            role: "UI Designer",
            skills: ["HTML", "CSS", "Figma"],
            completedTasks: 8,
        },
    ];

    return (
        <>
            <div className="Profile-Task-one">
                {students.map((student) => (
                    <div key={student.id}>
                        <h2>{student.name}</h2>
                        <p>{student.role}</p>
                        <p>Completed tasks: {student.completedTasks}</p>

                        <div className="skills">
                            {student.skills.map((skill, index) => (
                                <span key={index}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Dashboard />
        </>
    );
}

// Group Task 3 — Result dashboard

// function getGrade(marks) {
//     if (marks >= 80) return "Distinction";
//     if (marks >= 40) return "Pass";
//     return "Fail";
// }

function Dashboard() {
    const students = [
        { id: 1, name: "Raiyan", marks: 92 },
        { id: 2, name: "Ammar", marks: 78 },
        { id: 3, name: "Harish", marks: 45 },
        { id: 4, name: "Kais", marks: 32 },
        { id: 5, name: "Arsil", marks: 85 },
    ];

    return (
        <div className="Dashboard-Cards-seven">
            {students.map((student) => (
                <div className="student-seven" key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Marks: {student.marks}</p>
                    <p>{(student.marks)}</p>

                    {student.marks >= 80 ? (
                        <p className="distinction">Congratulations! Distinction!</p>
                    ) : student.marks >= 40 ? (
                        <p className="pass">Pass</p>
                    ) : (
                        <p className="fail">Fail</p>
                    )}
                </div>
            ))}
        </div>
    );
}
