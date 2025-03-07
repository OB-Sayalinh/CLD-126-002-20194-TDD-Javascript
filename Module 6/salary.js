
export function paySalary() {

    var employeeName = document.getElementById("name").value;

    var employeeHours = document.getElementById("hours").value;

    if (employeeHours <= 40) {

      var regtime = 10.00 * employeeHours;

      var overtime = 0.00;

      var salary = regtime;

    } else if (employeeHours > 40) {

       var regtime = (10.00 * 40);

       var overtime = ((10.00 * 1.5) * (employeeHours - 40));

       var salary = (regtime + overtime);

    }

    document.getElementById("name").innerHTML = "Employee Name: " + employeeName;

    document.getElementById("pay").innerHTML = "Employee Gross Pay: " + salary;

}