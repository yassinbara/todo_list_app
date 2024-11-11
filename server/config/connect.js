const { connect } = require("mongoose");
const connect_to_mongo_db = async () => {
 await connect(process.env.MONGO_URI)
    .then(() => console.log("connect good in mongo db -_-"))
    .catch((err) => console.log( `error connection to mongo db :=>  ${err}`));
};
connect_to_mongo_db();
