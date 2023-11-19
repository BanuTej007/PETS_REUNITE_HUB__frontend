import {Link} from 'react-router-dom';

function Nav(){
    var container={
    position:'relative',
};
var topRight={
    position:'absolute',
    bottom: '15px',
    left: '45px',
    fontSize :'18px',
    width: '70px',
};
var petsHubText = {
    color: 'black', 
    fontFamily: 'Pacifico',
    fontSize: '40px',
    padding: '0px 110px',
  };
    return(
        <nav class="navbar" style={{ background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 50%, #FFFF00 100%)', container }}>
        <Link to="/homepage" class="navbar-brand mx-3">
        <img src="https://static.vecteezy.com/system/resources/previews/006/470/722/original/pet-shop-logo-design-template-modern-animal-icon-label-for-store-veterinary-clinic-hospital-shelter-business-services-flat-illustration-background-with-dog-cat-and-horse-free-vector.jpg" style={topRight} alt="324" />
        <span style={petsHubText}>Pets Reunite Hub</span>
        </Link>
        <div class="nav">
          <Link to="/about" class="nav-link">About Us</Link>
          <Link to="/contact" class="nav-link">Contact Us</Link>
          <Link to="/" class="nav-link">Logout</Link>
        </div>
      </nav>
    )
}

export default Nav;