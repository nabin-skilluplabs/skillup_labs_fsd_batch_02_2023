export default function SearchBar({toggleStocked}) {
    return (
        <div className="flex flex-col gap-4">
            <input className="p-2" type="search" placeholder="Search..." />
            <label><input onClick={toggleStocked}  type="checkbox" /> Only show products in stock.</label>
        </div>
    );
}

