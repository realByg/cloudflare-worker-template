import { Application } from '@cfworker/web'
import router from './router'

new Application().use(router.middleware).listen()
