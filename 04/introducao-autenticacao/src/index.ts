import app from "./app"
import UserController from "./endpoint/UserController"

const userController = new UserController()

app.get("/user/profile", userController.getUserProfile)
app.post("/user/signup", userController.createUser)
app.post('/user/login', userController.login)