/* Charlie Urdaz */

const customers = [];

const form = document.getElementById("customerForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const customer = {
        id: Date.now(),
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        phone: document.getElementById("phone").value,
        goal: document.getElementById("goal").value,
        membership: document.getElementById("membership").value,
        comments: document.getElementById("comments").value
    };

    customers.push(customer);

    console.clear();
    console.log(customers);

    form.reset();
});