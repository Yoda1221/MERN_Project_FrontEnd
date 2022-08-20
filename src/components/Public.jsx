import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Black B. Electric Repair!</span></h1>
            </header>
            <main className="main">
                <p>Located in Beautiful Downtown Foo City, Dan D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="addr">
                    Black B Electric<br />
                    Foo Street 21.<br />
                    Dujv. City, HU 2400<br />
                    <a href="tel:+36 70 416 5272">06 70 416 5272</a>
                </address>
                <br />
                <p>Owner: Black B</p>
            </main>
            <footer className='login'>
                <Link to="/login">Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public
