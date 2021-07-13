import {connect} from './mongodb/connect'
import {runsServer} from "./runsServer";

connect()
    .then(async (connection) => {
        const db = await connection.db('ch12-2')
        return db
    })
    .then(runsServer)
    .catch((e: Error) => console.log(e.message))