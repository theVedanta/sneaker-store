import { Nav, SubNav } from "../components/Navs";

const Products = () => {
    return (
        <main className="relative min-h-screen">
            <Nav />
            <SubNav />

            <Cards />
        </main>
    );
};

const Cards = () => {
    return (
        <div className="cards">
            {[
                {
                    img: "/shoe.jpeg",
                    name: "Jorand",
                },
                {
                    img: "/shoe.jpeg",
                    name: "Jorand",
                },
                {
                    img: "/shoe.jpeg",
                    name: "Jorand",
                },
                {
                    img: "/shoe.jpeg",
                    name: "Jorand",
                },
            ].map((shoe, i) => (
                <div className="card" key={i}>
                    {shoe.name}
                </div>
            ))}
        </div>
    );
};

export default Products;
