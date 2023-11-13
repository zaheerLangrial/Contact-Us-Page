import './App.css'
import svgImg from "./assets/Services.svg";
import Nav from './components/Nav';
import Button from './components/Button';
import FormAbout from './components/FormAbout';

function App() {
  return (
    <div>
      <Nav />
      <div className=" max-w-6xl mx-auto mt-5">
        <h1 className="text-4xl">CONTACT US</h1>
        <p className="text-[#5A5959] text-base font-sans pt-2">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
        <div className="flex justify-center items-center space-x-3">
          <div className="w-1/2 px-5">
            <Button/>
            <FormAbout/>
          </div>

          <div className=" w-1/2">
            <img src={svgImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
