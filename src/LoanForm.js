import "./formStyle.css"
import Test from "./Test"
function LoanForm() {
  return (
    <div className="flex" style={{ flexDirection: "column"}}>
     <form id="loan-form" className="flex" style={{flexDirection: "column"}}>
      <h1> Requesting a Loan</h1>
      <hr/>
      <label>Name:</label>
     <input   /> 
     <label>Phone Number:</label>
     <input   /> 
     <label>Age:</label>
     <input   /> 
     <label style={{marginTop: "30px"}}> Are you an employee:</label>
     <input type="checkbox"/>
     <label>Salary</label>
     <select>
        <option>Less than 500 $</option>
        <option> Between 500$ and 2000$</option>
        <option>Above 2000 $</option>
     </select>
     <button id="submit-loan-btn">Submit</button>


     </form>

     <Test />
    </div>
  )
}

export default LoanForm

