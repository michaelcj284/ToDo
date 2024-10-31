const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World")
        console.log("New Connections...");
        res.end()
    }

    if (req.url === "/api/courses") {
        res.write(
            JSON.stringify({
                status: "200",
                data: [
                    {
                        id: 1,
                        user: "Daniels",
                    },
                    {
                        id: 2,
                        user: "Ebenezer",
                    },
                    {
                        id: 3,
                        user: "Mike",
                    },
                ],
            })
        );
        res.end()
    }
})


server.listen(3000, () => {
    console.log("Listening on port 3000");
})