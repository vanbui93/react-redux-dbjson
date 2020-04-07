import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  
  onSave = () => {
    console.log(this.textInput.current.value)
  }
  render() {

    var products = [
      {
        id: 1,
        name: 'Iphone 6 plus',
        price: 2000000,
        image: 'https://www.xtmobile.vn/vnt_upload/news/08_2019/iPhone-11-pro-ra-mat-xtmobile.jpg',
        status: true
      },
      {
        id: 2,
        name: 'Samsung galaxy s10',
        price: 15000000,
        image: 'https://cdn.fptshop.com.vn/uploads/images/tin-tuc/80466/Originals/galaxy-s10-6.jpg',
        status: true
      },
      {
        id: 3,
        name: 'Vsmart',
        price: 5000000,
        image: 'https://cdn.fptshop.com.vn/uploads/images/tin-tuc/106841/Originals/top-10-smartphone-tam-trung-02.jpg',
        status: true
      },
      {
        id: 4,
        name: 'oppo f11',
        price: 7200000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSes-k7z_p_3OXjCSW0Z-5ty-DNwJVURGTuSsAbXopUdHaU47Y&usqp=CAU',
        status: true
      }
    ]
  
    let elements = products.map((product,key) => {
      let result ='';
      if(product.status){
        result = <Product key={key}
                name={ product.name }
                price={ product.price }
                image={ product.image }
                status={ product.status }
              />
        }
      return result;
  
    })
  
  
    
    return (
    <div className="App">
     <h1 className="text-center">App Component</h1>
     <Header/>
     <div className="container">
       <div className="row mt-5">
         <div className="col-md-12">
          <div className="card border-danger">
            <h5 className="card-header">Thêm sản phẩm</h5>
            <div className="card-body text-danger">
              <h5 className="card-title">Tên sản phẩm</h5>
              <p><input type="text" className="form-control" placeholder="" ref={this.textInput} /></p>
              <button type="button" className="btn btn-primary" onClick={() => this.onSave()}>Lưu</button>
            </div>
          </div>
         </div>
        </div>
       <div className="row mt-5">
          {elements}
       </div>
     </div>
    </div>
  );
}
} 

export default App;
