import { useState } from "react"
import "./formStyle.css"
import Test from "./Test"
function LoanForm() {
  const [loanInputs, setLoanInputs] = useState({name: "",
phoneNumber: "",
age: "",
isEmployee: false,
salaryRange: ""
}); 
function handleChekboxChanged(event) {
  setLoanInputs({...loanInputs, isEmployee: event.target.checked})
}
 function handleFormSubmit(event){
  event.preventDefault()
  alert("salem")
 } 
  const btnIsDisabled =  (loanInputs.name =="") || 
  (loanInputs.phoneNumber == "") || (loanInputs.age == "")



  return (
    <div className="flex" style={{ flexDirection: "column"}}>
     <form id="loan-form" className="flex" style={{flexDirection: "column"}} >
      <h1> Requesting a Loan</h1>
      <hr/>
      <label>Name:</label>
     <input value = {loanInputs.name} onChange={(event)=> setLoanInputs({...loanInputs, name: event.target.value})}  /> 
     <label>Phone Number:</label>
     <input value = {loanInputs.phoneNumber} onChange = {(event)=> setLoanInputs({...loanInputs, phoneNumber: event.target.value})}   /> 
     <label>Age:</label>
     <input value = {loanInputs.age} onChange = {(event) => setLoanInputs({...loanInputs, age:event.target.value})}  /> 
     <label style={{marginTop: "30px"}}> Are you an employee:</label>
     <input type="checkbox" 
     checked={loanInputs.isEmployee} 
     onChange ={handleChekboxChanged}/>
     <label>Salary</label>
     <select value = {loanInputs.salaryRange} 
     onChange ={(event) => 
     setLoanInputs({...loanInputs, salaryRange:event.target.value})}>
        <option>Less than 500 $</option>
        <option> Between 500$ and 2000$</option>
        <option>Above 2000 $</option>
     </select>
     <button id="submit-loan-btn"
      className={btnIsDisabled ? "disabled" : ""}
      disabled={btnIsDisabled}
       onClick={handleFormSubmit}> Submit </button>


     </form>

     {/* <Test /> */}
    </div>
  )
}

export default LoanForm

