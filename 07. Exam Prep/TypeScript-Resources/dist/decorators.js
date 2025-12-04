"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyOnSuccess = NotifyOnSuccess;
function NotifyOnSuccess(notificationType) {
    return function (target, methodName, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const result = originalMethod.apply(this, args);
            if (typeof result === "string" && !result.startsWith("ERROR")) {
                console.log(`[NOTIFY] Sending ${notificationType} notification for successful action "${methodName}".`);
            }
            return result;
        };
        return descriptor;
    };
}
