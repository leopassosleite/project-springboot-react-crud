import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/employees";
class EmployeeService {

    findAllEmployees() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    findEmployeeId(employeeId) {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId)
    }
}

export default new EmployeeService()