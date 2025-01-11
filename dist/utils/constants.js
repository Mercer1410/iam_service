"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ROLES = exports.DEFAULT_USER_APP_NAME = exports.AUTH_PROVIDERS = exports.BASE_READY_ROUTE = exports.BASE_AUTH_ROUTE = exports.BASE_ROUTE = void 0;
exports.BASE_ROUTE = '/iam';
exports.BASE_AUTH_ROUTE = '/auth';
exports.BASE_READY_ROUTE = '/ready';
/** Provider type created in user model gets automatically updated when AUTH_PROVIDERS is updated */
exports.AUTH_PROVIDERS = ['basic', 'google'];
exports.DEFAULT_USER_APP_NAME = 'rm-iam-system';
exports.USER_ROLES = ['U', 'A', 'O']; //User | Admin | Owner
//# sourceMappingURL=constants.js.map