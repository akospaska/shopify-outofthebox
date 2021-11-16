const FirstTest = (req, res) => {
  console.log(req);

  if (req.method == "POST") {
    res.send("askala");
  }
  if (req.method == "GET") {
    res.send("askala");
  }
};

export default FirstTest;
