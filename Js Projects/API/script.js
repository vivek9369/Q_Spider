
const users = [
    {
        id: 1,
        name: "Vivek Maurya",
        email: "vivek@gmail.com",
        age: 22,
        city: "Delhi"
    },
    {
        id: 2,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        age: 21,
        city: "Mumbai"
    },
    {
        id: 3,
        name: "Aman Verma",
        email: "aman@gmail.com",
        age: 23,
        city: "Lucknow"
    },
    {
        id: 4,
        name: "Rohit Singh",
        email: "rohit@gmail.com",
        age: 22,
        city: "Jaipur"
    }
];

const userContainer = document.getElementById("users");

users.forEach(user =>{
    userContainer.innerHTML +=`
    <div class="card">
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Age: ${user.age}</p>
    <p>City: ${user.city}</p>
    </div>
     `;
})