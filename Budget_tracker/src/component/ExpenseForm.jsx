

export function ExpenseForm(){


    return <div className="h-96 w-3xl bg-white rounded-xl p-8 ">
        <div className="flex">
            <div className="w-full bg-[#D4553E] mr-2 text-center text-md font-semibold p-3 rounded-xl ">Expense</div>
            <div className="w-full bg-[#3D6B8C] ml-2 p-3 text-center text-md font-semibold rounded-xl">Income</div>
            

        </div>
        <div className="flex">
            <input label={"Amount"} placeholder={(0.00)}></input>
            <input label={"Category"} placeholder={"food"}></input>
        </div>
        <div className="">
            <input label="Note(optional)" placeholder={"write something"}></input>
        </div>

    </div>
}