import React from "react";
import ReactDOM from 'react-dom';
import image1 from './images/IMAGE1.jpg';
import image2 from './images/IMAGE2.jpg';
import image3 from './images/IMAGE3.jpg';
import image4 from './images/IMAGE4.jpg';
import image5 from './images/IMAGE5.jpg';
import image6 from './images/IMAGE6.jpg';
import image7 from './images/IMAGE7.jpg';
import image8 from './images/IMAGE8.jpg';

const Home =()=>{
    return(
        <div className ="">
            <div  style={{ position: 'relative', backgroundColor: '#9AD0C2', height:'250px', textAlign:'center', alignContent:"center", margin:'2px 2px 50px'}}>
                <h1  style={{  color: '#265073'}}>Brillez, Madame, avec des Talons Magnifiques! </h1>
                <h4 style={{  color: '#265073'}}>Commencez vos achats sans hésiter</h4>
            </div>

            <div style={{  margin:'0px 60px 40px 60px'}}>
            <div class="row row-cols-1 row-cols-md-4 g-1">
  <div class="col" >
    <div class="card" style={{  margin:'0 20px ', color:'#265073'}}>
    <img src={image1} class="card-img-top" alt="..." />
      <div class="card-body" style={{textAlign:'center'}}>
        <h5 class="card-title">Escarpins Daily Cuir Noir</h5>
        <p class="card-text">$80.00</p>
        <button type="button" class="btn btn-outline-dark">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{  margin:'0 20px ', color:'#265073'}}>
    <img src={image2} class="card-img-top" alt="..." />
      <div class="card-body" style={{textAlign:'center'}}>
        <h5 class="card-title">Escarpins Taissa</h5>
        <p class="card-text"> <del>$80.00</del>  $60.00</p>
        <button type="button" class="btn btn-outline-dark">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{  margin:'0 20px ' , color:'#265073'}}>
    <img src={image3} class="card-img-top" alt="..." />
      <div class="card-body" style={{textAlign:'center'}}>
        <h5 class="card-title">Escarpins Astoria Black</h5>
        <p class="card-text"> <del>$100.00</del>  $85.00</p>
        <button type="button" class="btn btn-outline-dark">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{  margin:'0 20px ', color:'#265073'}} >
    <img src={image4} class="card-img-top" alt="..." />
      <div class="card-body" style={{textAlign:'center'}}>
        <h5 class="card-title">Escarpins Bicolores </h5>
        <p class="card-text">$70.00</p>
        <button type="button" class="btn btn-outline-dark">Ajouter au panier</button>
      </div>
    </div>
  </div>
</div>
            </div>
            <div style={{  margin:'0px 60px 40px 60px'}}>
            <div class="row row-cols-1 row-cols-md-4 g-1">
  <div class="col" >
    <div class="card" style={{  margin:'0 20px ', color:'#265073'}}>
    <img src={image5} class="card-img-top" alt="..." />
      <div class="card-body" style={{textAlign:'center'}}>
        <h5 class="card-title">Escarpins 55MM Klein</h5>
        <p class="card-text">$90.00</p>
        <button type="button" class="btn btn-outline-dark">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{  margin:'0 20px ', color:'#265073'}}>
    <img src={image6} class="card-img-top" alt="..." />
      <div class="card-body" style={{textAlign:'center'}}>
        <h5 class="card-title">Escarpins Taissa</h5>
        <p class="card-text"> <del>$70.00</del>  $65.00</p>
        <button type="button" class="btn btn-outline-dark">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{  margin:'0 20px ' , color:'#265073'}}>
    <img src={image7} class="card-img-top" alt="..." />
      <div class="card-body" style={{textAlign:'center'}}>
        <h5 class="card-title">Escarpins en daim Love</h5>
        <p class="card-text"> <del>$200.00</del>  $150.00</p>
        <button type="button" class="btn btn-outline-dark">Ajouter au panier</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{  margin:'0 20px ', color:'#265073'}} >
    <img src={image8} class="card-img-top" alt="..." />
      <div class="card-body" style={{textAlign:'center'}}>
        <h5 class="card-title">Escarpins Bicolores</h5>
        <p class="card-text">$60.00</p>
        <button type="button" class="btn btn-outline-dark">Ajouter au panier</button>
      </div>
    </div>
  </div>
</div>
            </div>
            <div  style={{  backgroundColor: '#9AD0C2', height:'70px', textAlign:'center', alignContent:"center"}}>
                
                <p style={{ color:'#265073'}}> Copyright Your Website 2022</p>
            </div>
        </div>
    )
}

export default Home;