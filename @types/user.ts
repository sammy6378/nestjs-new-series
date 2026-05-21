export type Role = 'USER' | 'ADMIN' | 'SUPERADMIN';

export interface TUser {
  id: number;
  name: string;
  email: string;
  role: Role;
}
