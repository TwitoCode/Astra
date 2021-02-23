"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
const chalk_1 = __importDefault(require("chalk"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get("/", (_, res) => res.send("Astra Bot Server"));
function initServer() {
    app.listen(process.env.PORT, () => console.log(chalk_1.default.blueBright.bold("Astra Server is Running!")));
}
exports.initServer = initServer;
