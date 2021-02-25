"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRole = void 0;
function hasRole(member, role) {
    return member?.roles.cache.find((r) => r.id === role);
}
exports.hasRole = hasRole;
