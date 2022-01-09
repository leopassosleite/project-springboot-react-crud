import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/employees";
class EmployeeService {

    findAllEmployees() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }
}

export default new EmployeeService()