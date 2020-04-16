import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products : [
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
      ],
      isActive : true
    }
  }
  
  onSave = () => {
    console.log(this.textInput.current.value)
  }

  changeBtn = () => {
    // if(this.state.isActive=== true){
    //   this.setState({
    //     isActive:false
    //   })
    // } else {
    //   this.setState({
    //     isActive:true
    //   })
    // }
      this.setState({
        isActive: !this.state.isActive
      })
  }
  render() {

    
  
    let elements = this.state.products.map((product,key) => {
      let result ='';
      if(product.status){
        result = <tr key={key}>
                  <td>{key}</td>
                  <td>{product.name}</td>
                  <td><span className="btn btn-primary">{product.price}</span></td>
                </tr>
        }
      return result;
  
    })
  
    
    return (
    <div className="App">
     <h1 className="text-center">App Component</h1>
     <Header/>
     <div className="container mt-5">
       <div className="row">
         <table className="table">
           <thead className="table-info">
             <tr>
               <th>STT</th>
               <th>Tên sản phẩm</th>
               <th>Giá</th>
             </tr>
           </thead>
           <tbody>
             {elements}
           </tbody>
         </table>
         <button type="button" className="btn btn-success" onClick={this.changeBtn}>Active: {this.state.isActive === true ? 'true' : 'false'}</button>
       </div>
     </div>
    </div>
  );
}
} 

export default App;
