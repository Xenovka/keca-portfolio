function NavBar() {
    return (
        <nav className="mt-9">
            <ul className="navbar grid grid-cols-12 mx-[60px] gap-5">
                <li className="nav-item col-span-2">Keisha Fidelia</li>
                <li className="nav-item col-start-11 col-span-1 text-right">
                    <a href="#">Works.</a>
                </li>
                <li className="nav-item col-start-12 col-span-1 text-right">
                    <a href="#">About.</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
