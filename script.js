function createTable() {
    //Write your code here
	// const table=document.getElementById("myTable");
	// var tblBody = document.createElement("tbody");
	let row=window.prompt("Input number of rows",);
	let col=window.prompt("Input number of columns",);
	
	for (let i = 0; i < row; i++) {
		let tr=document.getElementById("myTable").insertRow(i);
		for (let j = 0; j < col; j++) {
		
			let td=tr.insertCell(j);
			td.innerHTML="Row-"+i+" Column-"+j;
		}
		// tblBody.appendChild(tr);
	}
	// table.appendChild(tblBody);
  
}