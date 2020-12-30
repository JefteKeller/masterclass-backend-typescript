"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email de assunto " + message.subject + ", enviado para " + to.name + ". \n Conteudo: " + message.body);
    };
    return EmailService;
}());
exports.default = EmailService;
