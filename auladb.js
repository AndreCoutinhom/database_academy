// Javascript queries for MongoDB

// This is a command for creating a new collection

db("database_name").createCollection("collection_name");

// This is a command for inserting new data into a colletion

db("db_2ma").collection("Clientes").insertMany(
  // json formated database is pasted here
)

// Whenever you want to visualize data from a collection you can use this:
db("db_2ma").collection("Endereco_Clientes").find();

// Whenever you want to find a specific row
db("db_2ma").collection("Endereco_Clientes").find(
    {codigo : 375}
);

// Whenever you want them to be projected in a specific way

db("db_2ma").collection("Endereco_Clientes").find(
    {codigo : 376},
    {projection: {Nome : 1, Cidade : 1}}
);
