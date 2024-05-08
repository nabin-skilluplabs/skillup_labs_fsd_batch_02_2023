import PropTypes from 'prop-types';

export default function ProductRow({name, price, stocked}) {
    return (
        <tr>
            <td className={!stocked ? "text-red-500": "" }>{name}</td>
            <td>{price}</td>
       </tr>
    );
}

ProductRow.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool
}