export interface Admin {
  id: string;
  username: string;
  password: string;
  nama: string;
  role: string;
  status: string;
  createdAt: Date;
}

export interface AdminResponse {
  id: string;
  nama: string;
  username: string;
  role: string;
}
