import {useState, useEffect} from "react";
import {userData} from "../type/Aliases";
import axios from "axios";
export default function Register() {
  const [registerData, setRegisterData] = useState<userData>({
    email: "",
    password: "",
  });
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData, [e.target.name]: e.target.value});
  };
  const handleRegister = () => {
    const body: userData = {...registerData};
    delete body.rePassword;
    console.log(body);
    axios
      .post("https://todolist-api.hexschool.io/users/sign_up", body)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    console.log(registerData);
  }, [registerData]);
  return (
    <>
      <div className="container" style={{marginTop: "81px"}}>
        <div className="row align-items-top" style={{height: "100vh"}}>
          <div className="col-4 offset-1">
            <img
              src="/public/HeroSection.png"
              style={{maxWidth: "100%", height: "auto"}}
              alt=""
            />
          </div>
          <div className="col-4 offset-1 ">
            <h4 className="fw-bold">註冊帳號</h4>
            <div className="email mt-4">
              <h6 className="fw-bolder">Email</h6>
              <input
                className="form-control"
                name="email"
                type="text"
                placeholder="請輸入Email"
                onChange={handleForm}
              />
              <p>此欄位不可為空</p>
            </div>

            <div className="password mt-4">
              <h6 className="fw-bolder">您的暱稱</h6>
              <input
                className="form-control"
                name="nickname"
                type="text"
                placeholder="請輸入password"
                onChange={handleForm}
              />
              <p>此欄位不可為空</p>
            </div>

            <div className="password mt-4">
              <h6 className="fw-bolder">密碼</h6>
              <input
                className="form-control"
                name="password"
                type="text"
                placeholder="請輸入password"
                onChange={handleForm}
              />
              <p>此欄位不可為空</p>
            </div>

            <div className="password mt-4">
              <h6 className="fw-bolder">再次輸入密碼</h6>
              <input
                className="form-control"
                name="rePassword"
                type="text"
                placeholder="請輸入password"
                onChange={handleForm}
              />
              <p>此欄位不可為空</p>
            </div>

            <div className="row justify-content-center ">
              <button
                className="btn btn-dark col-auto"
                style={{width: "128px"}}
                onClick={handleRegister}
              >
                註冊帳號
              </button>
              <a
                href=""
                className="mt-4 text-center text-dark text-decoration-none"
              >
                登入
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
