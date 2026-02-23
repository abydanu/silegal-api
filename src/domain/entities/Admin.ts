export interface Admin {
  id_admin: number;
  username: string;
  password: string;
  nama_admin: string;
  role: string;
  status_akun: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminResponse {
  id_admin: number;
  nama_admin: string;
  username: string;
  role: string;
}
