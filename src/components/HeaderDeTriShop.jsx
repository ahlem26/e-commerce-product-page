import React from 'react'
import { AiOutlineBars } from "react-icons/ai";
import { TiThLargeOutline } from "react-icons/ti";

export function HeaderDeTriShop({products}) {
    return (
        <div className="flex justify-between items-center text-sm text-gray-600 border border-gray-300 rounded-full pb-3 py-3 pl-3 pr-3">
            <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                    <button className="w-9 h-9 flex items-center justify-center">
                        <TiThLargeOutline className="text-xl text-orange-500" />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center">
                        <AiOutlineBars className="text-xl" />
                    </button>
                </div>
                <p className="text-sm text-gray-500">Showing <span className="font-medium text-black">1–{products.length}</span> of <span className="font-medium text-black">{products.length}</span> item(s)</p>
            </div>

            <div className="flex items-center gap-4">
                <span>Sort by:</span>
                <select className="bg-gray-100 rounded-full px-2 py-1">
                    <option>Default</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                </select>
                <span>Show:</span>
                <select className="bg-gray-100 rounded-full px-2 py-1">
                    <option>10</option>
                    <option>12</option>
                    <option>24</option>
                </select>
            </div>
        </div>
    )
}
