const Parented =()=>{
    return(
        <div className="parented">
            <Navbar/>
            <Slider/>
            <br/>
            <h1>Books</h1>
            <br/>
            <Card/>
            <br/><br/>
            <Footer/>
        </div>
    );

};

const Navbar = ()=>{
    return(
        <div className="navbar">
            <a href="#">Home</a>
        </div>
    );

};


const Slider=()=>{
    return(
            <div class="jumbotron">
  <h1 class="display-4">The Bookshop Book</h1>
  <p class="lead">A good bookshop is not just about selling books,but reaching out into the world and making a difference</p>
  <hr class="my-4"/>
  <p>You cant buy happiness but you can buy books</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Order here</a>
  </p>
</div>
    );

};


const Card=()=>{
    return (
        <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="img/1.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Book 1</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="img/2.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Book 1</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="img/3.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Book 1</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="img/1.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Book 1</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="img/2.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Book 1</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="img/3.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Book 1</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="img/1.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Book 1</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="img/2.jpg" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Book 1</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
</div>

    );
};

const Footer=()=>{
    return (
        <div className="footer">
            <footer class="page-footer font-small blue">
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="#">  www.bookshop.com</a>
            </div>
            </footer>
        </div>
    );
};

ReactDOM.render(<Parented/>,document.getElementById("root"))