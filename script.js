function searchEmployee() {
    var input = document.getElementById("searchInput").value;
    var td = document.getElementsByTagName("td");
    var found = false;
    var employeeName = "";
    var employeeSalary = "";

    for (var i = 0; i < td.length; i++) {
        if (td[i].id === input) {
            found = true;
            employeeName = td[i].textContent;
            employeeSalary = td[i + 1].textContent;
            break;
        }
    }

    if (found) {
        alert("Employee found!\n\nName: " + employeeName + "\nSalary: " + employeeSalary);
    } else {
        alert("Employee not found!");
    }
}
