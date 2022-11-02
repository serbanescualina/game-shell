import {Header} from '../components/common/header';
import {Footer} from '../components/common/footer'
export const  Layout =({children})=> {
    return(<>
        <header>
            <Header></Header>
        </header>
        
        <main>{children}</main>
        
        <footer>
            <Footer></Footer>
        </footer>
    </>)
}