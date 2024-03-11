function verificarEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    return console.log(emailRegex.test(email))
}
verificarEmail('leticiabezerracontato@gmail.com')