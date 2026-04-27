const p1 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "P1 Success" });
    }, 10000);
  });
};

const p2 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "P2 Success" });
    }, 1000);
  });
};

const p3 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "P3 Success" });
    }, 4000);
  });
};

const p4 = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reject({ message: "P4 Error" });
    }, 5000);
  });
};

// Measure time for successful case
console.time("Promise.all success");

Promise.all([p1(), p2(), p3()])
  .then((data) => {
    console.log("Data: ", data);
    console.timeEnd("Promise.all success");
  })
  .catch((err) => {
    console.log("Error: ", err);
    console.timeEnd("Promise.all success");
  });

// Measure time for failure case
console.time("Promise.all with error");

Promise.all([p1(), p2(), p3(), p4()])
  .then((data) => {
    console.log("Data: ", data);
    console.timeEnd("Promise.all with error");
  })
  .catch((err) => {
    console.log("Error: ", err);
    console.timeEnd("Promise.all with error");
  });