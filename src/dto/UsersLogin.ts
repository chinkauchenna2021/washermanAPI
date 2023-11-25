export interface IUsersLogin{
    id: string;
    email: string;
    password: string;
    fistname: string;
    lastname: string;
    address: string;
    pics: string;
    balance?: number
}


export interface IUserLoginModel{
    email:string 
    password:string
}