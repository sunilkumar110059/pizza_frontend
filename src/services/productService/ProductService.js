
let PRODUCT_BASE_URL = "http://localhost:8000/product"

class ProductService {
    async getProduct() {
        let getData = await fetch(PRODUCT_BASE_URL)
        let response = await getData.json()
        return response
    }

    // createEmployee(employee){
    //     return axios.post(EMPLOYEE_API_BASE_URL, employee);
    // }

    // getEmployeeById(employeeId){
    //     return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }

    // updateEmployee(employee, employeeId){
    //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }

}



export default new ProductService();