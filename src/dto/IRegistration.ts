import { IUsersLogin } from "./UsersLogin"



declare global{
    namespace Express{
      interface Request{
        user: IUsersLogin
      }
    }
}


interface IRegistration{

}