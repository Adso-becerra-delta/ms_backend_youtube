import server from "./src/server.js";

const main = async() => {
    try {
        await server.listen(server.get('port'));
        console.log(`http://localhost:${server.get('port')}`);
    } catch (error) {
        const er = "error al concetarse al puerto"
        console.log(er,error);
    }
}

main();