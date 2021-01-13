import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = { message: 'Hello' };
});

router.get('/me', (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = {
        id: 1,
        name: 'Mock',
        rooms: [],
        avatar: null,
    };
});

router.get('/room/:id', (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = {
        id: 1,
        name: 'Mock',
        ownerId: 1,
        avatar: null,
        participants: []
    };
});

export default router;