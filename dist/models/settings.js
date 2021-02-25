"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsModel = exports.SettingsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SettingsSchema = new mongoose_1.Schema({
    spamming: Boolean,
});
exports.SettingsModel = mongoose_1.model("astra-bot-setting", exports.SettingsSchema);
