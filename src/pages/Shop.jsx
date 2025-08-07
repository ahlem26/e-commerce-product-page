import React from "react";
import {useProducts} from "../hook/useProducts";
import { ProductItem} from "../components/products/ProductItem";
import { EnTete } from "../components/EnTete";
import {SidebarShop} from "../components/SidebarShop";
import {HeaderDeTriShop} from "../components/HeaderDeTriShop";

export default function Shop() {
    const {products,setProducts} = useProducts();

    return (
        <div>
            {/* En-tête */}
            <EnTete image={'/images/bg-about.jpg'} texte1={"SHOP"} texte2={"Home / Shop"}/>

            {/* Contenu principal */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 px-4 py-12">
                {/* Sidebar */}
                <SidebarShop products={products} setProducts={setProducts}/>

                {/* Main content */}
                <main className="w-full lg:w-3/4 space-y-6">
                    {/* Header de tri */}
                    <HeaderDeTriShop products={products}/>

                    {/* Grille de produits */}
                    <ProductItem />
                </main>
            </div>
        </div>
    );
}