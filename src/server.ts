import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes/routes";

const app = express();

app.use(express.json());
app.use(routes);


app.use(function(req:Request, res:Response, next: NextFunction) {
  if (userMatch){
// if user is not logged-in redirect back to login page //
      res.redirect('/menu');
  }   else{
      // next()
      res.redirect('/');
  }
});

//Exibindo erros de exceções middleware
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);
app.listen(3000, () => console.log("listening to port 3000"));
