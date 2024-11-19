import express from 'express'

export default function () {
    let router = express.Router()
    require('./router/userRouter').default(router);

    return router;
}