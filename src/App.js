import React, { Component } from 'react';

class App extends Component {
constructor(){
  super()
  this.state={
salaryInfo:[],
salaryTypeName:'',
fixedSalary:'',
incentive:'',
minOrder:'',
employeeInfo:[],
employeeName:'',
employeeOrderDone:'',
employeeSalaryType:''


  }
}

submitEmployeeForm(e){
  e.preventDefault()
const {employeeName,employeeOrderDone,employeeSalaryType,employeeInfo,salaryInfo}=this.state
let fixedSalary 
let incentive
let minOrder
for(var data of salaryInfo){
  if(data.salaryTypeName==employeeSalaryType){
    fixedSalary=data.fixedSalary 
    incentive=data.incentive
    minOrder=data.minOrder
    break

  }
}
fixedSalary=parseInt(fixedSalary)
}







submitForm(e){
e.preventDefault()
const {salaryTypeName,fixedSalary,incentive,minOrder,salaryInfo}=this.state

// create obj
const salaryInfoObj={
  salaryTypeName ,
  fixedSalary,
  incentive,
  minOrder

}
// adding  the obj array
salaryInfo.push(salaryInfoObj)
this.setState({
  salaryInfo
})
console.log(salaryInfo);
e. target.reset()
}

textChange(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}

renderTable(){
  const salaryInfo=this.state.salaryInfo;
  const data=salaryInfo.map((d,i)=>{
    return(
      <tr Key={i}>
      <td>{i+1}</td>
      <td> {d.salaryTypeName}</td>
      <td> {d.fixedSalary}</td>
      <td> {d.incentive}</td>
      <td> {d.minOrder}</td>
      </tr>
    )
  })
  return data;
}





renderSalaryType(){
  const salaryInfo=this.state.salaryInfo;
  const data=salaryInfo.map((d,i)=>{
    return(
      <option Key={i}>
      {d.salaryTypeName}
      </option>
      
    )
  })
  return data;
}





  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-sm-6">
      <h2> SalaryInfo</h2>
      <form onSubmit={this.submitForm.bind(this)}>
     <MyInput name="salaryTypeName" value={this.state.salaryTypeName}title="Salary Type Name" Change={this.textChange.bind(this)}/>

     <MyInput name="fixedSalary" value={this.state.fixedSalary}title="Fixed Salary" Change={this.textChange.bind(this)}/>

     <MyInput name="incentive" value={this.state.incentive}title="Incentive" Change={this.textChange.bind(this)}/>

     <MyInput name="minOrder" value={this.state.minOrder}title="Min Order" Change={this.textChange.bind(this)}/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

<table class="table table-striped">
    <thead>
<tr>
  <th> S.No</th>
  <th> salaryTypeName</th>
  <th>fixedSalary </th>
  <th>incentive</th>
  <th> minOrder</th>
</tr>
 </thead>
    <tbody>
     {this.renderTable()}
    </tbody>
    </table>
      </div>

      <div className="col-sm-6">
      <h2> Employee Info</h2>
      <form onSubmit={this.submitEmployeeForm.bind(this)}>
     <MyInput name="employeeName" value={this.state.employeeName}title="Employee Name" Change={this.textChange.bind(this)}/>

     <MyInput name="employeeOrderDone" value={this.state.employeeOrderDone}title="Employee Order Done" Change={this.textChange.bind(this)}/>

     <select className="form-control" value={this.state.salaryType} onChange={this.textChange.bind(this)}>
        {this.salaryType}
     </select>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<table class="table table-striped">
    <thead>
<tr>
  <th> S.No</th>
  <th> Employee Name</th>
  <th> Salary Type Name</th>
  <th>Fixed Salary </th>
  <th> Order Done</th>
  <th>Incentive</th>
  <th>Total</th>


</tr>
 </thead>
    <tbody>
     {this.renderTable()}
    </tbody>
    </table>

      </div>
      </div>
      </div>
    );
  }
}


const MyInput=(props) =>{
  return(
   
    <div className="form-group">
    <label htmlFor for={props.name}>{props.title} </label>
    <input  required type="text" className="form-control" id={props.name} name={props.name}  value={props.theValue} onChange={props.Change} />
    </div>
  )
}


export default App;
