import react from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
        <Outlet />
        <h1>The Dashboard goes here.</h1>
        </>
    )
}