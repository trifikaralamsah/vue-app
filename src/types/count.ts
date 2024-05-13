export interface TUser {
  id: string | number;
  firstName: string;
  age: number;
  email?: string;
}

export interface TCountState {
  count: number;
  name: string;
  users: TUser[];
}
