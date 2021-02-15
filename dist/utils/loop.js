"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loop = void 0;
function loop(amount, fn) {
    for (let i = 0; i < amount; i++) {
        fn();
    }
}
exports.loop = loop;
