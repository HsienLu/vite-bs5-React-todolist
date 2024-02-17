import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row align-items-center" style={{height: "100vh"}}>
          <div className="col-4 offset-1">
            <img
              src="/public/HeroSection.png"
              style={{width: "386px", height: "448px"}}
              alt=""
            />
          </div>
          <div className="col-4 offset-1 ">
            <h4>最實用的線上待辦事項服務</h4>
            <div className="email mt-4">
              <h6>Email</h6>
              <input
                className="form-control"
                type="text"
                placeholder="請輸入Email"
              />
              <p>此欄位不可為空</p>
            </div>

            <div className="password mt-4">
              <h6>密碼</h6>
              <input
                className="form-control"
                type="text"
                placeholder="請輸入Email"
              />
              <p>此欄位不可為空</p>
            </div>
            <div className="row justify-content-center">
              <button className="btn-primary col-auto" style={{width: "128px"}}>
                登入
              </button>
              <a href="" className="mt-4 text-center">
                註冊帳號
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
