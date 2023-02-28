const jwt = require('jsonwebtoken');

const user = {
    id: "20",
    name: "Sofia",
    username: "sofia@gmail",
    password: "121212"
}

const secret = "Qualquer coisa";

function createToken() {
    const token = jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: 60 })

    console.log(token);
}


function testToken(token) {
    try {
        const validData = jwt.verify(token, secret)
        console.log(validData);

    } catch (error) {
        console.log(error)
    }
}
 testToken();






