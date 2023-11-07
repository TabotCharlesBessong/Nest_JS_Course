"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'roles';
const ROLES = (roles) => {
    const rolesArr = roles.split(',');
    return (0, common_1.SetMetadata)(exports.ROLES_KEY, rolesArr);
};
exports.ROLES = ROLES;
//# sourceMappingURL=role-decorator.js.map