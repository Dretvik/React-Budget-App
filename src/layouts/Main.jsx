// React Router Dom imports
import { Outlet, useLoaderData } from "react-router-dom"; //2.6k (gzipped: 1.1k)

// Assets
import wave from "../assets/wave.svg";

// Helper functions
import { fetchData } from "../helpers"

// Components
import Nav from "../components/Nav";

// Loader
export function mainLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Main = () => {
    const { userName } = useLoaderData()
  return (
    <div className="layout">
        <Nav userName={ userName }/>
        <main>
          <Outlet />
        </main>
        <img src={ wave } alt="" />
    </div>
  )
}

export default Main

