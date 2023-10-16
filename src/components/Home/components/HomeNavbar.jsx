import './homeComponents.scss'

function HomeNavbar() {
  return ( 
    <>
      <div className="home-navbar">
        <div className="container-xxl">
          <div className="home-navbar-inner">
            <h1 className="home-navbar-title tx-white">InfoProg</h1>
            <div className="home-navbar-right">
              <button className="home-navbar-button tx-white">Kirish</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeNavbar;