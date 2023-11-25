export * from './RegistrationRoute'
import express , {Express , Request , Response , NextFunction} from 'express'
import { UserAuth } from '../middleware/UserAuth';

const router = express.Router();

router.use(UserAuth);  // controller  middleware 

