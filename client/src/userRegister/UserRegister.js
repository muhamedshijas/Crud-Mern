import React ,{useState} from 'react'
import './UserRegister.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
function UserRegister() {
  const [name, setName] = useState("");
  const [proffession, setProffession] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage]=useState(null)

  const dispatch = useDispatch()


  function validationErr() {
    if (
      email.replaceAll(" ", "") === "" ||
      password.replaceAll(" ", "") === "" ||
      proffession.replaceAll(" ", "") === "" ||
      name.replaceAll(" ", "") === ""
    ) {
      return true;
    }
    return false;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validationErr()) {
      let {data}=await axios.post("/register", {
        name, email, password,  proffession
      });
      console.log(data)
      if(!data.error){
        dispatch({type:"refresh"})
      }else{
        setErrMessage(data.message)
      }
    }
  }

  return (
    <div>
    <section class="login">
		<div class="login_box">
			<div class="left">
				<div class="top_link"><Link to='/login'><img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt=""/>Login Here</Link></div>
				<div class="contact">
					<form onSubmit={handleSubmit}>
						<h3>SIGN UP</h3>
						<input type="text" placeholder="USERNAME" onChange={(e)=>setName(e.target.value)} value={name} />
						<input type="text" placeholder="PROFESSION" onChange={(e)=>setProffession(e.target.value)} value={proffession} />
						<input type="email" placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
						<input type="password" placeholder="PASSWORD" onChange={(e)=>setPassword(e.target.value)} value={password} />
						<button class="submit" type='submit'>LET'S GO</button>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="right-text">
				</div>
				<div class="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt=""/></div>
			</div>
		</div>
	</section>
    </div> 
  )
}

export default UserRegister


