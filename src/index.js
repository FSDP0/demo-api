const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

const defaultRouter = new Router();

const apiRouter = new Router({
	prefix: "/api",
});

const PORT = 3000;

defaultRouter.get("/version", (ctx) => {
	ctx.body = "===== version 1.0";
});

apiRouter.get("/api", (ctx) => {
	ctx.body = "Hello World!";
});

apiRouter.get("/api/v1/simple", (ctx) => {
	let DUMMY_DATA = [];

	for (let i = 0; i < 10; i++) {
		DUMMY_DATA.push({
			num: i + 1,
			title: `test-${i}`,
			content: `contents-${i}`,
		});
	}

	ctx.body = DUMMY_DATA;
});

app
	.use(defaultRouter.routes())
	.use(apiRouter.routes())
	.use(defaultRouter.allowedMethods())
	.use(apiRouter.allowedMethods());

app.listen(PORT, () => {
	console.log(`Server Running at ${PORT}`);
});
