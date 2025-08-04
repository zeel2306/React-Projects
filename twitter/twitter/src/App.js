
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-box">
         <img src="/logo.jpg" alt="logo" className="logo"/>
         <h2>Sign in to Twitter</h2>
         <button>
          <img src="/google.jpg" alt="logo" className="google-logo"/>
          Sign in With Google ID
         </button>
        
         <button>
          <img src="/apple.jpg" alt="logo" className="apple-logo"/>
          Sign in With  Apple ID
         </button>
         <br />
         
         <span>or</span>
         <form>
          <input type="text" placeholder='phone ,email or username' />
          <button>next</button>
         </form>
         <button>forget password</button>
         <p>Don't Have an account for Sign up</p>
        
        </div>

      </div>
  );
}

export default App;
