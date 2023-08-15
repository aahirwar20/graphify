import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./routes/Layout"
import Home from "./routes/Home"
import Simple from "./routes/Simple"
import Graph from "./routes/Graph"
import Scientific from "./routes/Scientific"
import Tempreture from "./routes/Temprature"
import Unit from "./routes/Unit"
import Programming from "./routes/Programming"
import NoPage from "./routes/NoPage"

export default function Structure(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="Graph" element={<Graph />} />
                        <Route path="Simple" element={<Simple />} />
                        <Route path="Scientific" element={<Scientific />} />
                        <Route path="Tempreture" element={<Tempreture />} />
                        <Route path="Unit" element={<Unit />} />
                        <Route path="Programming" element={<Programming />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        
        </>
    )
}