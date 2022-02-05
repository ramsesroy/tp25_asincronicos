module.exports = {
    home: (req, res) => {
        res.render('home')
    },
    favorites: (req, res) => {
        res.render('favoritas')
    },
    form: (req, res) => {
        res.render('formulario')
    }
}