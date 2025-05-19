import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {    
    res.send({title: 'Get All Users'});
});


userRouter.get("/:userId", (req, res) => {
    res.send({title: 'Get A Particular User'});
});

export default userRouter;
