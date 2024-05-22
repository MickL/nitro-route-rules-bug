export default defineEventHandler((event) => {
    return {hello: `routes folder GET /products/:id with id: '${event.context.params.id}'`}
});
