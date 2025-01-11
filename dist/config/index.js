"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GOOGLE_OAUTH_CLIENT_SECRET = exports.GOOGLE_OAUTH_CLIENT_ID = exports.RSA_SECRET = exports.MONGODB_URL = exports.IAM_SERVICE_PORT = void 0;
const dotenv_1 = require("dotenv");
const fs = require("node:fs");
if (process.env.NODE_ENV !== 'production') {
    (0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || 'dev'}` });
    const keysData = fs.readFileSync(fs.realpathSync('./src/config/rm-iam-keys.json', 'utf-8'), 'utf-8');
    const keys = JSON.parse(keysData);
    console.log('keys => ', keys);
    // console.log(gKeys.web);
}
else {
    (0, dotenv_1.config)();
}
_a = process.env, exports.IAM_SERVICE_PORT = _a.IAM_SERVICE_PORT, exports.MONGODB_URL = _a.MONGODB_URL, exports.RSA_SECRET = _a.RSA_SECRET, exports.GOOGLE_OAUTH_CLIENT_ID = _a.GOOGLE_OAUTH_CLIENT_ID, exports.GOOGLE_OAUTH_CLIENT_SECRET = _a.GOOGLE_OAUTH_CLIENT_SECRET;
//# sourceMappingURL=index.js.map