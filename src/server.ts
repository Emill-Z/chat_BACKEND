import Koa from 'koa';
import router from './routes/routes';
import chalk from 'chalk';
import middleware from './middleware/middleware';

const app = new Koa();

app.use(middleware());

app.on('error', (err: Error, ctx: Koa.Context) => {
    console.log(chalk.blue('status code: '), chalk.yellow(ctx.status.toString()));
    console.log(chalk.red('error message:'), chalk.red(err.message));
});

app.use(async (ctx: Koa.Context, next: Koa.Next) => {
    console.log('URL: ', ctx.url);
    await next();
});

app.use(router.routes());

app.listen(3000, () => console.log(chalk.blue('Server running on port'), chalk.white('http://localhost:3000')));