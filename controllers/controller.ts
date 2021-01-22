import Todo from "../config/database.ts";

export default {
  async index(ctx: any) {
    try {
      //NOTE Get all the documents
      const todos = await Todo.all()
      ctx.response.body = todos
      ctx.response.status = 201;
    } catch (error) {
      ctx.response.body = 'Some Error occurs'
      ctx.response.status = 401;
    }
  },
  async delete({ params, response }: { params: any, response: any }) {
    try {
      // NOTE using params

      const id = params.id;
      await Todo.where({ id: id }).delete()
      response.status = 200
      response.body = 'Entry deleted'

    } catch (error) {
      response.status = 400
      response.body = { error: error }
    }
  }
  ,
  async update({ params, request, response }: { params: any, request: any, response: any }) {
    try {
      const id = params.id;
      const body = request.body({ type: "json" })
      const todo = await body.value;
      // NOTE Updating Collection
      await Todo.where({ id: id }).update({ item: todo.item, description: todo.description })
      response.status = 200
      response.body = 'Entery Updated'

    } catch (error) {
      response.status = 400
      response.body = { error: error }
    }
  },
  async findById({ params, response }: { params: any, response: any }) {
    try {
      const id = params.id;
      //NOTE Get a single entry
      const todos = await Todo.where("id", id).all()
      response.status = 200
      response.body = todos

    } catch (error) {
      response.status = 400
      response.body = { error: error }
    }

  },
  async newTodo({ request, response }: { request: any, response: any }) {
    try {
      //NOTE Getting the body of the request
      const body = request.body({ type: "json" })
      const todo = await body.value;
      await Todo.create({ item: todo.item, description: todo.description }).then((model) => {
        response.status = 201
        response.body = model
      }).catch((error) => {
        console.log('caught errors while saving');

        response.body = { error: console.error };
        response.status = 401
      })
    } catch (error) {
      console.log(error);
    }
  },
  async about(ctx: any) {
    try {
      ctx.response.status = 201;
      ctx.response.body = 'About Page'
        ;
    } catch (error) {
      ctx.response.body = 'Some Error occurs'; ctx.response.status = 401;
    }
  }
}
