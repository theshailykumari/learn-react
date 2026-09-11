

export function Card({type, balance}){

    
    return <div className="h-24 w-48 bg-white border border-1 border-gray-300 rounded-md">
        <div className="p-3">
            <div className="text-sm font-semibold">{type}</div>
            <div className="text-xl pt-2">₹{balance}</div>
        </div>
    </div>
}