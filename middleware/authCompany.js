const jwt = require('jsonwebtoken')


const authCompany = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication."})


        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, company) => {
            if(err) return res.status(400).json({msg: "Invalid Authentication."})

            req.company = company
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authCompany