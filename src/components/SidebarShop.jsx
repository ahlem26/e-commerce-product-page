import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

export function SidebarShop({ handleCategoryFilter, handleBrandChange, category, selectedBrands }) {

    return (
        <aside className="w-full lg:w-1/4 space-y-8">
            <div>
                <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Product Categories</h2>
                <ul className="space-y-2 text-gray-600">
                    <li onClick={() => handleCategoryFilter("mens-shoes")} className={`flex justify-between items-center hover:text-orange-500 cursor-pointer ${category === "mens-shoes" && "text-orange-600 font-semibold"}`}>
                        <span>Men's Shoes</span>
                        <HiOutlineChevronRight />
                    </li>
                    <li onClick={() => handleCategoryFilter("womens-shoes")} className={`flex justify-between items-center hover:text-orange-500 cursor-pointer ${category === "womens-shoes" && "text-orange-600 font-semibold"}`}>
                        <span>Women's Shoes</span>
                        <HiOutlineChevronRight />
                    </li>
                    <li onClick={() => handleCategoryFilter("all")} className={`flex justify-between items-center hover:text-orange-500 cursor-pointer ${category === "all" && "text-orange-600 font-semibold"}`}>
                        <span>All</span>
                        <HiOutlineChevronRight />
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">Brands</h2>
                <ul className="space-y-1 text-gray-600">
                    {['Nike', 'Adidas', 'Jordan'].map((brand) => (
                        <li key={brand} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                className="accent-orange-500 w-4 h-4"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => handleBrandChange(brand)}
                            />
                            <span>{brand}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
