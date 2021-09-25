function SideNav() {
  return (
    <footer className="footer pt-3  ">
      <div className="container-fluid">
        <img
          src="./assets/img/gascanbanner.png"
          className="img-fluid"
          alt="Responsive image"
        />
        <div className="row align-items-center justify-content-lg-between">
          <div className="container-fluid">
            <div className="copyright text-center font-weight-bolder text-sm text-light">
              © Gas Station Crypto, 2021. Ether Rewards on Every Blockchain.
              USDC Stable Coin Bridge, NFTs, and more! Made with{' '}
              <i className="fa fa-heart"></i> By OPPanda & Captnocap.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SideNav;
