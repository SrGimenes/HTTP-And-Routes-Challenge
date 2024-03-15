import { app } from "./app";

app.get("/hello", () => {
  return "Hello World";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
