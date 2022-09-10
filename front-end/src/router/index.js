import Main from "../pages/Main";
import Map from "../pages/Map";
import Lost from "../pages/Lost";
import AccountIdPage from "../pages/AccountIdPage";
import PostIdPage from "../pages/PostIdPage";

export const routes = [
    {path: '/posts_find', element: <Main/>},
    {path: '/map', element: <Map/>},
    {path: '/posts_lost', element: <Lost/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/account/:id', element: <AccountIdPage/>}
]
