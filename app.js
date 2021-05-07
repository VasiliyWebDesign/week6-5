export default (express, bodyParser, createReadStream, crypto, http, CORS, writeFileSync, User, UserController, LOGIN, puppeteer) => {
    const app = express();
    const path = import.meta.url.substring(8);
