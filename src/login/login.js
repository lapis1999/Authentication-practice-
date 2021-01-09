function Login() {
  return (

    <div className="container-fluid">
      <div className="row justify-content-center  "  >
        <div className="col-sm col-md-2" id="title">
          <div className="row h-100 justify-content-center align-items-center" >
            ANTI SPAM
          </div>
        </div>
        <div className="col col-md-5 col-lg-5 col-xl-4 " >
          <div className="row align-items-center">
            <div className="card">
              <div className="card-body">
                <div>
                  <label >Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div>
                  <label >Password</label>
                  <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  );
}

export default Login;
