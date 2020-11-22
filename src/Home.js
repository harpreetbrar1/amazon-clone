import React from "react";
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />
            <div className="home__row">
                <Product
                    id={1232153}
                    title={"PlayStation 4 Console - 1TB Slim Edition"}
                    price={369.99}
                    rating={4.5}
                    image="https://images-na.ssl-images-amazon.com/images/I/715RBdgZtHL._SL1500_.jpg" />
                <Product
                    id={12321341}
                    title={"DualShock 4 Wireless Controller for PlayStation 4 - Jet Black"}
                    price={59.99}
                    rating={4.5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61IG46p-yHL._SL1500_.jpg" />
            </div>
            <div className="home__row">
                <Product
                    id={12321351}
                    title={"WD 4TB My Passport Ultra Silver Portable External Hard Drive, USB-C - WDBFTM0040BSL-WESN"}
                    price={99.35}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91O7i%2BhuG-L._AC_SL1500_.jpg" />
                <Product
                    id={12321352}
                    title={"ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM, 128GB SSD, Backlit Keyboard, Fingerprint, Windows 10 Home in S Mode, Slate Gray, F512JA-AS34"}
                    price={390.65}
                    rating={4.5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg" />

                <Product
                    id={12321341}
                    title={"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"}
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg" />
            </div>
            <div className="home__row">
            <Product
                    id={12321341}
                    title={"TCL 55S425 55 inch 4K Smart LED Roku TV (2019)"}
                    price={399.99}
                    rating={4.5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71tN5cFBvFL._AC_SL1500_.jpg" />
                <Product
                    id={12321351}
                    title={"7inch Laptop Backpack,Large Luggage Backpack with USB Charging Port for Women Men,TSA Friendly Business Travel Laptop Backpack,Anti-Theft Computer Backpacks Big College School Bookbag, Grey"}
                    price={42.49}
                    rating={4.5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81TTfzKrdQL._AC_SL1494_.jpg" />
     
            </div>
            
        </div>
    )
}

export default Home
