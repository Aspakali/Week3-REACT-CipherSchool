// import React, { useEffect, useState } from "react";
// import { tasks } from "../apis/testApi";

// const TaskScreen = () => {
//     return tasks.map((task, index) => (
//         <div key={index}>
//             <h1>
//                 {task.taskNumber} {task.taskName}
//             </h1>
//             <p>{task.taskDescription}</p>
//         </div>
//     ));
// };
// export default TaskScreen;
// ______________________________________________________________

// import React from "react";
// import { tasks } from "../apis/testApi";

// const TaskScreen = () => {

//     useEffect(() => {
//         console.log("TaskScreen Mounted");
//     });
    
//     return tasks.map((task, index) => (
//         <div key={index}>
//             <h1>
//                 {task.taskNumber} {task.taskName}
//             </h1>
//             <p>{task.taskDescription}</p>
//         </div>
//     ));
// };
// export default TaskScreen;
// ________________________________________________________________

// //useEffect
// // 1. It takes 2 arguments
// // A. The first arguments is a function that will be called after the arguments is required
// // B. The second arguments is an array of values that will be watched for change (optional)
// // B.a. No array passed: useEffect will run on initial render and every state update
// //B.b. Empty Array passed: useEffect will run only on initial render
// //B.c. Array of value passed: useEffect wil run only on initial render and every time
// // when the value of any variable in the array changes

// _________________________________________________________________________________________

// import React from "react";
// import { tasks } from "../apis/testApi";

// const TaskScreen = () => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("TaskScreen Mounted");
//     });
    
//     return tasks.map((task, index) => (
//         <div key={index}>
//             <h1>
//                 {task.taskNumber} {task.taskName}
//             </h1>
//             <p>{task.taskDescription}</p>
//         </div>
//     ));
// };
// export default TaskScreen;

// _________________________________________________________________________________________

// // useRender is a function that takes 2 arguments.
// // 1. A reducer function
// // 2. An initialvalue of state

// // useRender returns an array of 2 values.
// // 1. The current state
// // 2. A dispatch function

// // A reducer function controls how the state will be changed given a certain action

// // An action is an object1
// // It has 2 key value pairs
// // 1. type: a string that defines what action is being performed
// // 2. payload: an object/value that contain the data that will be used to update the state (option)
// // const [name. setName] = useState("")
// // {type: "updateName", payload: "Rahul"}