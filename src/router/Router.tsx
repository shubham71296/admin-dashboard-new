import { useRoutes } from "react-router-dom"
import type { RouteObject } from "react-router-dom"


interface RouterProps {
    allRoutes: RouteObject[];
}

const Router = ({ allRoutes }: RouterProps) => {
    console.log("all routes",allRoutes)
    const routes = useRoutes([...allRoutes])
    return routes;
}

export default Router;