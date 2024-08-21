import CartWidget from "./CartWidget";

function NavBar() {

    return (
        <div className="bg-dark text-white p-3" style={{"height": "100vh", "width": 250}}>
            <div className="mb-4 d-flex align-items-center justify-content-between">
                <strong className="fs-4">CompuStar</strong>
                <CartWidget />
            </div>
            <button className="btn btn-light w-100 mb-2">Computers</button>
            <button className="btn btn-light w-100 mb-2">Phones</button>
            <button className="btn btn-light w-100 mb-2">Audios</button>
            <button className="btn btn-light w-100">Videogames</button>      
        </div>
    )
}

export default NavBar;