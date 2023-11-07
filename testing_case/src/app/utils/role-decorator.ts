import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const ROLES = (roles: string) => {
  const rolesArr = roles.split(',');
  return SetMetadata(ROLES_KEY, rolesArr);
};
