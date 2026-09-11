import { Card } from "./component/Card";
import { ExpenseForm } from "./component/ExpenseForm";
import { Navbar } from "./component/Navbar";



function App(){


  return <div className="h-screen w-screen bg-amber-50">
      { <Navbar></Navbar> }
      <div className="flex justify-between items-center p-8">
        { <Card type={"Income"} balance={2000}></Card> }
        <ExpenseForm></ExpenseForm>
      </div>
  </div>
}


export default App;