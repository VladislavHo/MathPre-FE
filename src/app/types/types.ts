export interface IAvatars {
  id: number
  title: string
  dataImage: Buffer

}

export interface IUser {
  email: string
  password: string
  avatarId: number
}

export interface ILessons {
  id: number;
  dataImage: Buffer;
  description: string;
  answer: string;
  totalPoints: number | null;
  complexity: number | null;
  background: string | null;
}

export interface IProfile {
  id: number
  fullName: string
  email: string
  poins: number
  image: string | null
}