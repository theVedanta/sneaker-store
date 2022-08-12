import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Nav, SubNav } from "../components/Navs";
import Tilt from "react-tilt";

const Products = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        setShoes([
            {
                img: "/shoes/1.png",
                name: "Jorand",
                link: "/products",
            },
            {
                img: "/shoes/2.png",
                name: "Jorand",
                link: "/products",
            },
            {
                img: "/shoes/3.png",
                name: "Jorand",
                link: "/products",
            },
            {
                img: "/shoes/4.png",
                name: "Jorand",
                link: "/products",
            },
        ]);
    }, []);

    return (
        <main className="relative h-screen">
            <Nav />
            <SubNav setShoes={setShoes} />

            <div style={{ height: "36%" }}></div>
            <Cards shoes={shoes} />
        </main>
    );
};

const Cards = ({ shoes }) => {
    return (
        <div className="cards cont flex flex-wrap justify-between items-center">
            {shoes.map((shoe, i) => (
                <Link href={shoe.link} key={i}>
                    <Tilt className="card p-10 rounded-xl shadow-lg mx-1 mb-10 flex flex-col items-center transition-all hover:bg-white">
                        <Image
                            src={shoe.img}
                            alt="shoe"
                            width="500"
                            height="480"
                            objectFit="contain"
                        />
                        <span className="uppercase font-bold text-6xl text-gray-600 opacity-40 -translate-y-6 tracking-widest">
                            {shoe.name}
                        </span>
                    </Tilt>
                </Link>
            ))}
        </div>
    );
};

export default Products;
