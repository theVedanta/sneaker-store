import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import { Nav, SubNav } from "../components/Navs";

const Index = () => {
    return (
        <main className="relative">
            <Nav />
            <SubNav />
            <Header />
        </main>
    );
};

const Header = () => {
    const [side, setSide] = useState(false);

    return (
        <>
            <div
                className={`the w-1/6 z-30 shadow-2xl h-screen transition-all duration-300 ease-in-out fixed top-0 ${
                    side ? "right-0" : "-right-full"
                } bg-bg`}
            ></div>
            <section className="header cont relative w-screen h-screen flex">
                <div className="header-left w-1/2 h-full">
                    <div style={{ height: "40%" }}></div>
                    <h3 className="text-5xl font-bold tracking-wider">
                        THE UNIVERSITY BLUE.
                    </h3>
                    <p className="text-xl font-light leading-relaxed my-14 pr-20">
                        Familiar colours, applied with a classic colour-blocking
                        scheme, characterise this Air Jordan 1.A black Wings
                        logo with University Blue branding on the tongue helps
                        finish off the model&apos;s clean and classic detailing.
                    </p>
                    <Link href="/products">
                        <a className="btn">Know More</a>
                    </Link>
                </div>
                <div className="header-right z-20 w-1/2 h-full flex flex-col items-center justify-center">
                    <Image
                        alt="shoe"
                        src="/shoe.png"
                        width="1000"
                        height="1000"
                    />
                </div>

                <div className="bottom-part cont bg-bg h-1/5 w-screen absolute bottom-0 left-0 flex items-center justify-end">
                    {side ? (
                        <FaTimesCircle
                            className="text-4xl z-40 cursor-pointer"
                            onClick={() => setSide(!side)}
                        />
                    ) : (
                        <FaShoppingCart
                            className="text-4xl z-40 cursor-pointer"
                            onClick={() => setSide(!side)}
                        />
                    )}
                </div>
            </section>
        </>
    );
};

export default Index;
