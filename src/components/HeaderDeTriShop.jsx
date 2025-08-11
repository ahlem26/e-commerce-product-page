import React from 'react'
import { AiOutlineBars } from "react-icons/ai";
import { TiThLargeOutline } from "react-icons/ti";

export function HeaderDeTriShop({
    products,
    search,
    setSearch,
    sortBy,
    setSortBy,
    itemsPerPage,
    setItemsPerPage
}) {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-600 border border-gray-300 rounded-full px-4 py-3">
            
            {/* Vue + Info produits */}
            <div className="flex items-center gap-4">
                {/* Boutons affichage grille/liste */}
                <div className="flex items-center">
                    <button className="w-9 h-9 flex items-center justify-center">
                        <TiThLargeOutline className="text-xl text-orange-500" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center">
                        <AiOutlineBars className="text-xl" />
                    </button>
                </div>

                {/* Nombre d'items affichés */}
                <p className="text-gray-500">
                    Showing <span className="font-medium text-black">{products.length > itemsPerPage ? itemsPerPage : products.length}</span> 
                    of <span className="font-medium text-black">{products.length}</span> item(s)
                </p>
            </div>

            {/* Recherche + Tri + Affichage */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
                
                {/* Barre de recherche */}
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray-100 rounded-full px-3 py-1 outline-none"
                />

                {/* Tri */}
                <div className="flex items-center gap-2">
                    <span>Sort by:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-gray-100 rounded-full px-2 py-1 outline-none"
                    >
                        <option value="default">Default</option>
                        <option value="low">Price (Low to High)</option>
                        <option value="high">Price (High to Low)</option>
                    </select>
                </div>

                {/* Nombre d'items par page */}
                <div className="flex items-center gap-2">
                    <span>Show:</span>
                    <select
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                        className="bg-gray-100 rounded-full px-2 py-1 outline-none"
                    >
                        <option value={10}>10</option>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
