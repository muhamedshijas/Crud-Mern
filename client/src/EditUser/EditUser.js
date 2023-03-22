import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const [name, setName] = useState("");
  const [proffession, setProffession] = useState("");
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage]=useState(null)
  const navigate= useNavigate()
  const {id}=useParams()
  function validationErr() {
    if (
      email.replaceAll(" ", "") === "" ||
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
      let {data}=await axios.post("/admin/edit-user", {
        name, email,  proffession,id
      });
      if(!data.error){
          return navigate("/admin/")
      }else{
        setErrMessage(data.message)
      }
    }
  }
  useEffect(()=>{
    (async function(){
        console.log(id)
        let {data}=await axios.get("/admin/user/"+id);
        setName(data.name)
        setEmail(data.email)
        setProffession(data.proffession)
    })()

  },[])
  return (
    <div>
    <section class="login">
		<div class="login_box">
			<div class="left">
				<div class="contact">
					<form onSubmit={handleSubmit}>
						<h3>Edit  User</h3>
						<input type="text" placeholder="USERNAME" onChange={(e)=>setName(e.target.value)} value={name} />
						<input type="text" placeholder="PROFESSION" onChange={(e)=>setProffession(e.target.value)} value={proffession} />
						<input type="email" placeholder="EMAIL" onChange={(e)=>setEmail(e.target.value)}  value={email}/>
						
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
  );
}

export default EditUser;