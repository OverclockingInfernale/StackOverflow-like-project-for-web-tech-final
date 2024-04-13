import Posts from "../Components/Posts";
import About from "../Components/About";
import PostIdPage from "../Components/PostIdPage";
import HomePage from "../Components/HomePage";
import BlogPage from "../Components/BlogPage";
import loginPage from "../Components/Login";

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '', component: HomePage, exact: true},
    {path: '/blog', component: BlogPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: loginPage, exact: true},
]