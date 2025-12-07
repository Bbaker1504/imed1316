class Header extends HTMLElement {
    constructor() {
      super();
    }
  


    connectedCallback() {

import { SproutingTitle } from './components/SproutingTitle';
import { Daisy } from './components/Daisy';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-b from-sky-100 to-green-50 overflow-hidden">
      <div className="relative">
        {/* Background daisies */}
        <Daisy delay={0.3} size={80} x="-150px" y="-100px" />
        <Daisy delay={0.5} size={70} x="600px" y="-80px" />
        <Daisy delay={0.7} size={90} x="-180px" y="150px" />
        <Daisy delay={0.9} size={75} x="650px" y="180px" />
        
        {/* Daisies around the text */}
        <Daisy delay={1.1} size={50} x="-100px" y="20px" />
        <Daisy delay={1.3} size={55} x="550px" y="30px" />
        <Daisy delay={1.5} size={45} x="-80px" y="100px" />
        <Daisy delay={1.7} size={60} x="580px" y="110px" />
        
        {/* Small daisies scattered */}
        <Daisy delay={1.9} size={40} x="200px" y="-120px" />
        <Daisy delay={2.1} size={35} x="350px" y="-100px" />
        <Daisy delay={2.3} size={38} x="100px" y="200px" />
        <Daisy delay={2.5} size={42} x="420px" y="220px" />
        
        <SproutingTitle text="Brandy's Kindness Corner" />
      </div>
    </div>
  );
}


        fetch('components/header.html')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text(); // or response.json() if it's a JSON file
        })
        .then(data => {
          console.log('Document content:', data);
          // Further processing of the document content
        
          var globalData = data;
          this.innerHTML = globalData;
        
        })
        .catch(error => {
          console.error('There was a problem fetching the document:', error);
        });


      
    }
  }
  
  customElements.define('header-component', Header);