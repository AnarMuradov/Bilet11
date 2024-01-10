import { Carousel } from 'react-carousel-minimal';
import './style.scss'
function App() {
 const data = [
    {
      caption: "<div className='conas'><h1>We help to grow your business</h1><div className='conas1'>Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate</div></div>"
      
    },
    {
      caption: "Scotland"
    },
    {
      caption: "Darjeeling"
    }
  ];
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
       
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            width="750px"
            height="500px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

