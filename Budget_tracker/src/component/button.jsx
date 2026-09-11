export function button({label, onClick}){
    return <div className="m-2">
        <button onClick={onClick} className="bg-[#D4553E] text-white p-2 rounded-md hover:cursor-pointer hover:bg-[#B23A2F]">{label}</button>
    </div>
}
