export const BASE_ROUTE = '/iam';
export const BASE_AUTH_ROUTE = '/auth';
export const BASE_READY_ROUTE = '/ready';

/** Provider type created in user model gets automatically updated when AUTH_PROVIDERS is updated */
export const AUTH_PROVIDERS = ['basic', 'google'] as const;
export const DEFAULT_USER_APP_NAME = 'rm-iam-system';
export const USER_ROLES = ['U', 'A', 'O'] as const; //User | Admin | Owner
