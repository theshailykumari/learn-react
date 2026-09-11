export function input({label, placeholder}){
    return <div className="m-2">
        <div className ="text-lg font-semibold">{label} </div>
        <input className="border border-yellow-300 p-2 rounded-md" placeholder={placeholder}></input>

    </div>

}