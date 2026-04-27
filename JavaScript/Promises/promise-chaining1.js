const p1 = () => {
  return new Promise((reply, reject) => {
    reply(10);
  });
};

p1()
  .then((data) => {
    console.log("Data: ", data);
    const result = data * 10;
    return result;
  })
  .then((data) => {
    const result = data - 9;
    return result;
  })
  .then((data) => {
    const result = data + 5;
    throw new Error("Crashing promise");
    return result;
  })
  .catch((err) => {
    console.log("Error in 3rd: ", err);
  })
  .then((data) => {
    console.log("LN26: ", data);
    const result = data / 2;
    console.log("FInal output: ", result);
    return result;
  })
  .catch((err) => {
    console.log("Error: ", err);
  });