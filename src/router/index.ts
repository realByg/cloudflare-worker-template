import { Router } from '@cfworker/web'

const router = new Router()
router.get('/', ({ res }) => {
	//@ts-ignore
	res.body = TEST_VAR.split(' ')?.[1] ?? 'ok'
})

export default router
