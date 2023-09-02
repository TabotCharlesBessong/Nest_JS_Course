import { Test } from "@nestjs/testing"
import { AuthService } from "./auth.service"
import { UsersService } from "./users.service"
import { User } from "./user.entity"

it('can create an instance of auth service', async () => {

  // create a fake copy of users service

  const fakeUserService : Partial<UsersService> = {
    find: () => Promise.resolve([]),
    create:(email:string,password:string) => Promise.resolve({id:1,email,password} as User)
  }
  const module = await Test.createTestingModule({
    providers:[AuthService,{
      provide:UsersService,
      useValue:fakeUserService
    }]
  }).compile()

  const service = module.get(AuthService)

  expect(service).toBeDefined()
})