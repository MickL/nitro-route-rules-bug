export default defineEventHandler((event) => {
    return {hello: `routes folder PATCH /items/:id with id: '${event.context.params.id}'`}
});
