import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const initialProducts = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Electronics", price: "$100", stocked: true, name: "iPhone" }
  ];

function FilterableProductTable() {
    const [products, setProducts] = useState(initialProducts);

    function toggleStocked(event) {
        const isChecked = event.target.checked;
        let filteredProducts = initialProducts;
        if(isChecked) {
            filteredProducts =  products.filter(product => product.stocked);
        }
        setProducts(filteredProducts);
    }

    return (
        <div className="flex justify-center p-4">
            <div className="bg-slate-300 w-3/12	 p-4"> 
                <SearchBar toggleStocked={toggleStocked} />
                <ProductTable  products={products}/>
            </div>
        </div>
    );
}
export default FilterableProductTable;
