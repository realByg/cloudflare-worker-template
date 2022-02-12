import { Application } from '@cfworker/web'
import router from './middlewares/router'

new Application().use(router.middleware).listen()
