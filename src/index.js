const app =require('./app');

app.get("/", (req,res) => {
    res.send("Hello world");
});

app.listen(app.get('port'), () => {
    console.log("Servidor escuchando en el puerto", app.get("port"));
});