const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hello")
    }, 1000)
    // resolve("hello")
})
console.log("p1", p1)
p1.then(data => console.log("===>", data))
    .catch(err => console.log("error", err))


    //Example of Chatgpt
    // function fetchUser(callback) {
    //     setTimeout(() => {
    //         console.log("User fetched");
    //         callback({ userId: 1 });
    //     }, 1000);
    // }
    
    // function fetchOrders(userId, callback) {
    //     setTimeout(() => {
    //         console.log("Orders fetched for user:", userId);
    //         callback([{ orderId: 101 }, { orderId: 102 }]);
    //     }, 1000);
    // }
    
    // function fetchPaymentStatus(orderId, callback) {
    //     setTimeout(() => {
    //         console.log("Payment status fetched for order:", orderId);
    //         callback("Paid");
    //     }, 1000);
    // }
    
    // // Callback Hell
    // fetchUser((user) => {
    //     fetchOrders(user.userId, (orders) => {
    //         fetchPaymentStatus(orders[0].orderId, (status) => {
    //             console.log("Payment Status:", status);
    //         });
    //     });
    // });
    

    //Promise Code
    //function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User fetched");
//             resolve({ userId: 1 });
//         }, 1000);
//     });
// }

// function fetchOrders(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Orders fetched for user:", userId);
//             resolve([{ orderId: 101 }, { orderId: 102 }]);
//         }, 1000);
//     });
// }

// function fetchPaymentStatus(orderId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Payment status fetched for order:", orderId);
//             resolve("Paid");
//         }, 1000);
//     });
// }

// // Promise Chaining
// fetchUser()
//     .then((user) => fetchOrders(user.userId))
//     .then((orders) => fetchPaymentStatus(orders[0].orderId))
//     .then((status) => console.log("Payment Status:", status))
//     .catch((error) => console.error(error));


//Async Await 
// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User fetched");
//             resolve({ userId: 1 });
//         }, 1000);
//     });
// }

// function fetchOrders(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Orders fetched for user:", userId);
//             resolve([{ orderId: 101 }, { orderId: 102 }]);
//         }, 1000);
//     });
// }

// function fetchPaymentStatus(orderId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Payment status fetched for order:", orderId);
//             resolve("Paid");
//         }, 1000);
//     });
// }

// // Using Async/Await
// async function processPayment() {
//     try {
//         const user = await fetchUser(); // Fetch user
//         const orders = await fetchOrders(user.userId); // Fetch orders for the user
//         const status = await fetchPaymentStatus(orders[0].orderId); // Fetch payment status for the first order
//         console.log("Payment Status:", status);
//     } catch (error) {
//         console.error("Error occurred:", error);
//     }
// }

// processPayment();
