import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({products}) {
      const categories = [];
      products.forEach(product => {
        if(categories.indexOf(product.category) === -1) {
            categories.push(product.category);
        }
      });
    return(
        <table className="w-full">
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {
                categories.map((category, index) => (
                    <>
                    <ProductCategoryRow key={index} category={category} />
                    {
                        products.filter(product => product.category === category).map((product, index) => (
                            <ProductRow key={`product_${index}`} name={product.name} price={product.price} stocked={product.stocked} />
                        ))
                    }
                    </>
                ))
            }
        </table>
    );
}

ProductTable.propTypes = {
    products: []
}
export default ProductTable;