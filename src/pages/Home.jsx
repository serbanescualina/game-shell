import { Link } from "react-router-dom"
import { Button } from "../components/common/ui/Button"
import { Layout } from "../layouts/Layout"

export const Home =()=> {
    return (
    <Layout>
        <div className="container mx-auto px-4">
            <h1>HOMEPAGE</h1>
            <Link to="/play" title="Play a game">
                <Button element="span">Play</Button>
            </Link>
        </div>
    </Layout>)
}