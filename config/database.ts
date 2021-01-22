import { Model, Database, SQLite3Connector, DataTypes } from "../deps.ts";

const connector = new SQLite3Connector({
    filepath: './database.sqlite',
});

const db = new Database(connector)

// NOTE Models 
class Todo extends Model {
    static table = 'todos';
    static fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        item: {
            type: DataTypes.STRING,
        }
        ,
        description: {
            type: DataTypes.STRING,
        }
    };
}
// NOTE Linking Model with DB
db.link([Todo])
await db.sync()

 export default Todo;