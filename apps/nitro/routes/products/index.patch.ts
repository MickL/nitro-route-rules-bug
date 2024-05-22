export default defineEventHandler((event) => {
    return {hello: `routes folder PATCH /products/:id with id: '${event.context.params.id}'`}
});
