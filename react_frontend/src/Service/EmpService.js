
import axios from 'axios';


const BASE_API_URL = "http://localhost:8082/api/v1";
class EmpService {

    saveEmp(formData) {
        return axios.post(BASE_API_URL+"/save",formData);
    }

    getAllEmp()
    {
        return axios.get(BASE_API_URL+"/");
    }

    getEmpById(id)
    {
        return axios.get(BASE_API_URL+"/"+id);
    }

    deleteEmp(id){
        return axios.get(BASE_API_URL+"/delete/"+id);
    }

    updateEmp(id,formData)
    {
        return axios.post(BASE_API_URL+"/update/"+id,formData)
    }

}

export default new  EmpService();