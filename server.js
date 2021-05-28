const express = require('express');

const app = express();

app.use("/google", express.static(__dirname + "/google"));
app.use("/common", express.static(__dirname + "/common"));

app.get("/*", (req, res) => {
	res.sendFile(__dirname + "/google/high-dpi/index.html");
});

app.listen(6969, () => {
	console.log("server go vroom");
});