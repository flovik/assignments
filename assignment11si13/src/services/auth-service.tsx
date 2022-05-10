
interface LoginData {
  email: string;
  password: string;
}

export interface DoctorRegisterData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    city: string;
    idnp: string;
    hospitalName: string;
    rank: string;
    specialization: string;
}

export interface PatientRegisterData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    city: string;
    idnp: string;
}


class AuthService {
  // async login(userData: LoginData) {
  //   return await Users.login(userData).then((response) => {
  //     console.log(response);
  //     if (response.accessToken) {
  //       localStorage.setItem("user", JSON.stringify(response));
  //     }
  //   });
  // }

  // logout() {
  //   localStorage.removeItem("user");
  // }

  // async doctorRegister(userData: DoctorRegisterData) {
  //   return await Users.doctorRegister(userData).then((response) => {console.log(response);});
  // }

  // async patientRegister(userData: PatientRegisterData) {
  //   return await Users.patientRegister(userData);
  // }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user")!)
  }

  // getCurrentUserName() {
  //   let user = this.getCurrentUser();
  //   return user['accessToken']['result']['lastName'];
  // }

  // getCurrentToken(){
  //   let user = this.getCurrentUser();
  //   return user['accessToken']['result']['token'];
  // }

  getRole() {
    let user = this.getCurrentUser();
    return user['accessToken']['result']['roles'];
  }
}

export default new AuthService();
