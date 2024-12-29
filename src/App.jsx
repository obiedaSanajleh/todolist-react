
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './Root';
import Home from './pages/Home/Home';
import TaskList from './pages/TaskList/TaskList';

import Details from './pages/Details/Details';
function App() {

const router = createBrowserRouter([

{
path:'/',
element: <Root />,
children:[

{
  path:'/',
  element: <Home />,
},
{
  path:'/home',
  element: <Home />,
},
{
  path:'/details',
  element: <Details />,
},
{
  path:'/tasklist',
  element: <TaskList />,
},


],
},



]);

  return (
    <>

<RouterProvider router={router}/>
    </>
  )
}

export default App
