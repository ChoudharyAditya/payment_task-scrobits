import "./styles.css";
import galaxyS22 from "./galaxyS22.jpg";
import galaxyS22Plus from "./galaxyS22Plus.jpg";
import galaxyS22Ultra from "./galaxyS22Ultra.jpg";
import iphone11 from "./iphone11.png";
import iPhone12 from "./iPhone12.png";
import iphone13 from "./iphone13.jpg";
export default function Home() {
    return (<div>
      <div>
      <h1 id="samsung">Samsung</h1>
      <div className="product1">
      <img src={galaxyS22} id="S22" />
      <h2>Samsung Galaxy S22</h2>
      <p>₹72,999.00 for 8GB/128GB model</p>
      <a href="https://test.instamojo.com/@adityaenterprises2410/l7542591ae24646cea71973645c3f881f/">
      <button id="pay1">Pay</button></a>
      </div>
      <div className="product2">
      <img src={galaxyS22Plus} id="S22P" />
      <h2>Samsung Galaxy S22+</h2>
      <p>₹84,999.00 for 8GB/128GB model</p>
      <a href="https://test.instamojo.com/@adityaenterprises2410/lf630a19560564b3b9c731e011148f9f6/">
      <button id="pay2">Pay</button></a>
      </div>
      <div className="product3">
      <img src={galaxyS22Ultra} id="S22U" />
      <h2>Samsung Galaxy S22 Ultra</h2>
      <p> ₹1,09,999.00 for 12GB/256GB model</p>
      <a href="https://test.instamojo.com/@adityaenterprises2410/l21e81577659b4411badf535910d1d676/">
      <button id="pay3">Pay</button></a>
      </div>
      </div>
      <br></br>
      <div>
      <div>
      <h1 id="apple">Apple</h1>
      </div>
      <div className="product4">
      <img src={iphone13} id="i13" />
      <h2>Apple Iphone-13</h2>
      <p>₹80,990.00 for 256GB model</p>
      <a href="https://test.instamojo.com/@adityaenterprises2410/l9952f4624fc540a48b3c42252f09ed89/">
      <button id="pay4">Pay</button></a>
      </div>
      <div className="product5">
      <img src={iPhone12} id="i12" />
      <h2>Apple Iphone-12</h2>
      <p>₹60,990.00 for 128GB model</p>
      <a href="https://test.instamojo.com/@adityaenterprises2410/ld75df28eb6964a60a482003a497444fd/">
      <button id="pay5">Pay</button></a>
      </div>
      <div className="product6">
      <img src={iphone11} id="i11" />
      <h2>Apple Iphone-11</h2>
      <p> ₹46,990.00 for 64GB model</p>
      <a href="https://test.instamojo.com/@adityaenterprises2410/l3e49a650f7374059827d123446e69623/">
      <button id="pay6">Pay</button></a>
      </div>
      </div>
  
      </div>
      
    );
  }
  
