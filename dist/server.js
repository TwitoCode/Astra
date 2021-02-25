"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
const chalk_1 = __importDefault(require("chalk"));
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const app = express_1.default();
app.get("/", (_, res) => res.send("Astra Bot Server"));
function initServer() {
    app.listen(process.env.PORT, () => console.log(chalk_1.default.red("Astra Server is Running!")));
    ping();
}
exports.initServer = initServer;
function ping() {
    const tenMinutes = 600000;
    setInterval(() => {
        const hour = new Date().getHours();
        const canPing = !(hour >= 0 && hour < 6);
        if (canPing) {
            console.log("I have fetched");
            node_fetch_1.default(process.env.SERVER_URL);
            return;
        }
        console.log("The bot is down");
    }, tenMinutes);
}
