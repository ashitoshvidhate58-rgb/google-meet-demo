const a0 = () => {
  return new Promise((sahiHai, galatHai) => {
    sahiHai({ message: "Promise A0 success" });
  });
};

const a = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "Promise A success" });
    }, 3000);
  });
};

const b = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reject({ message: "Promise B success" });
    }, 1000);
  });
};

const c = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "Promise C success" });
    }, 1000);
  });
};

const d = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "Promise d failed" });
    }, 2000);
  });
};

const e = () => {
  return new Promise((reply, reject) => {
    setTimeout(() => {
      reply({ message: "Promise e success" });
    }, 1000);
  });
};

const runPromise = async () => {
  try {
    const a0Response = await a0();
    console.log("a0Response: ", a0Response);

    const aResponse = await a();
    console.log("aResponse: ", aResponse);

    const bResponse = await b();
    console.log("bResponse: ", bResponse);

    const cResponse = await c();
    console.log("cResponse: ", cResponse);

    const dResponse = await d();
    console.log("dResponse: ", dResponse);

    const eResponse = await e();
    console.log("eResponse: ", eResponse);

  } catch (err) {
    console.log("Error: ", err);
  }
};
runPromise();