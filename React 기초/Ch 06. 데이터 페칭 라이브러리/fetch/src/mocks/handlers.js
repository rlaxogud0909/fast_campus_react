import { rest } from "msw";

const todos = [
    {
        id: `1`,
        title: `jimmy 1`,
    },
    {
        id: `2`,
        title: `jimmy 2`,
    },
    {
        id: `3`,
        title: `jimmy 3`,
    },
    {
        id: `4`,
        title: `jimmy 4`,
    },
    {
        id: `5`,
        title: `jimmy 5`,
    },
];

export const handlers = [
    rest.post("http://localhost:3000/api/todos", async (req, res, ctx) => {
        const { todo } = req.body;
        console.log(JSON.stringify(todo));
        todos.push(todo);
        return res(ctx.json(true));
        // return res(ctx.status(400));
    }),
    rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
        return res(ctx.json(todos));
        // return res(ctx.status(400));
    }),
    rest.get("http://localhost:3000/api/users", async (req, res, ctx) => {
        const pageIndex = req.url.searchParams.get("page");
        return res(
            ctx.json([
                {
                    id: `1 ${pageIndex}`,
                    name: `jimmy 1-(${pageIndex})`,
                },
                {
                    id: `2 ${pageIndex}`,
                    name: `jimmy 2-(${pageIndex})`,
                },
                {
                    id: `3 ${pageIndex}`,
                    name: `jimmy 3-(${pageIndex})`,
                },
                {
                    id: `4 ${pageIndex}`,
                    name: `jimmy 4-(${pageIndex})`,
                },
                {
                    id: `5 ${pageIndex}`,
                    name: `jimmy 5-(${pageIndex})`,
                },
            ])
        );
        // return res(ctx.status(400));
    }),
    rest.get(
        "http://localhost:3000/api/user/:userId",
        async (req, res, ctx) => {
            const { userId } = req.params;
            return res(
                ctx.json({
                    name: `jimmy (${userId})`,
                })
            );
            // return res(ctx.status(400));
        }
    ),
];
