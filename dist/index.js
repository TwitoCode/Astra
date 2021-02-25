"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initBot = void 0;
const chalk_1 = __importDefault(require("chalk"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const bot_1 = require("./bot");
const DiceController_1 = require("./controllers/DiceController");
const RandomMessageController_1 = require("./controllers/RandomMessageController");
const RandomNumberController_1 = require("./controllers/RandomNumberController");
const RockPaperScissorsController_1 = require("./controllers/RockPaperScissorsController");
const SpamControlController_1 = require("./controllers/SpamControlController");
const SpamController_1 = require("./controllers/SpamController");
const settings_1 = require("./models/settings");
const server_1 = require("./server");
async function initDatabase() {
    try {
        mongoose_1.default.connect(process.env.DATABASE_ACCESS, { useNewUrlParser: true, useUnifiedTopology: true });
    }
    catch (err) {
        console.log(chalk_1.default.redBright.bold(err.message));
    }
}
async function initBot() {
    mongoose_1.default.set("useCreateIndex", true);
    initDatabase();
    const settings = await settings_1.SettingsModel.findOne();
    const bot = new bot_1.Bot([
        new DiceController_1.DiceController(),
        new RandomNumberController_1.RandomNumberController(),
        new RandomMessageController_1.RandomMessageController(),
        new SpamController_1.SpamController(settings),
        new RockPaperScissorsController_1.RockPaperScissorsController(),
        new SpamControlController_1.SpamControlController(settings),
    ]);
}
exports.initBot = initBot;
initBot();
server_1.initServer();
