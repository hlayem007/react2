import './App.css';
import bahil from './bahil.jpg';
import './style.css';

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">ahmed hlayem</h1>
          <br />
         
          <img src={bahil} alt='imgsrc' />
          <br />
          
          <img src="real.png" alt='imgpublic' />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
