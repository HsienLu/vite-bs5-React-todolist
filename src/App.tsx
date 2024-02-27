import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./App.css";

function App() {
  const [loginData, setLoginData] = useState({
    email: null,
    password: null,
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({...loginData, [e.target.name]: e.target.value});
  };
  useEffect(() => {
    console.log(loginData);
  }, [loginData]);
  return (
    <>
      <div className="container">
        <div className="row align-items-center" style={{height: "100vh"}}>
          <div className="col-4 offset-1">
            <img
              src="/public/HeroSection.png"
              style={{maxWidth: "100%", height: "auto"}}
              alt=""
            />
          </div>
          <div className="col-4 offset-1 ">
            <h4 className="fw-bold">最實用的線上待辦事項服務</h4>
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
            <div className="row justify-content-center ">
              <button
                className="btn btn-dark col-auto"
                style={{width: "128px"}}
              >
                登入
              </button>
              <Link to="/Register" className="mt-4 text-center text-dark ">
                註冊帳號
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
