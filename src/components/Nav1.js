function Nav()
{
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
        fontSize: '50px',
        margin: 'auto'
      };
    return(
        <nav class="navbar bg bg-warning">
            <img src="https://static.vecteezy.com/system/resources/previews/006/470/722/original/pet-shop-logo-design-template-modern-animal-icon-label-for-store-veterinary-clinic-hospital-shelter-business-services-flat-illustration-background-with-dog-cat-and-horse-free-vector.jpg" style={topRight} alt="324" />
            <p style={petsHubText}>Pets Reunite Hub</p>
        </nav>
    );
}

export default Nav;