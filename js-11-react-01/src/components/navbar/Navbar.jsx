

export const Navbar = () => {

    const cohorte = 50;

    const navbarJsx = (
    <nav>
        {/* Se imprime el número de cohorte*/}
        <h2>Cohorte {cohorte}</h2>
        <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
    </nav>
    );

    return navbarJsx;
}

// export { Navbar };