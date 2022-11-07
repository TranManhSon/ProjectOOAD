const userRouter = require('./user');
const upload = require('./upload')
const company = require('./company')
const admin = require('./admin')

function route(app) {

    app.use('/users', userRouter);

    app.use('/profile', upload )

    app.use('/company', company)

    app.use('/admin', admin)

    // app.use('/', homeRouter);


    app.use((err, req, res, next) => {
        res.json({
            status: err.status || 500,
            message: err.message
        });
    });

}

module.exports = route;