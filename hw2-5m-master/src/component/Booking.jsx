import pic from '../img/pic.png'
import logo from '../img/logo.svg'
import frame from '../img/frame.png'
// export default function Booking() {
//   return (
//     <div className="booking-container">
//       <div className="booking-content">
//         <h1 className='book-h1'>Simple скетчбук</h1>  
//         <p className='book-p'>80 листов, твердая обложка, бумага Fabriano 200 г/м². Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!</p>
//         <button className="booking-button">Купить</button>
//       </div>
//       <img src={pic} alt="sketchbook" className="booking-image" />
//       <img src={logo} alt="item" />
//       <img src={frame} alt="item" />
//     </div>
//   )
// }


export default function Booking() {
  return (
   
    <div className="page-wrapper">
      <div className="booking-container">
        <div className="booking-content">
          <h1 className="book-h1">Simple скетчбук</h1>  
          <p className="book-p">80 листов, твердая обложка, бумага Fabriano 200 г/м². Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!</p>
          <button className="booking-button">Купить</button>
        </div>
        <img src={pic} alt="sketchbook" className="booking-image" />
      </div>
      
      <footer className="footer">
        <img src={logo} alt="Simple logo" className="footer-logo" />
        <img src={frame} alt="Social media icons" className="footer-icons" />
      </footer>
    </div>
  )
}