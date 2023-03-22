import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link}  from 'react-router-dom'
import axios from 'axios'
import './UserHome.css'
import EditProfileModal from '../modals/EditProfilePicture'


function UserHome() {
    const dispatch = useDispatch()
    const user= useSelector((state) => {
        return state.user;
      });
      console.log(user)

      async function logout() {
        if(window.confirm("Are you sure logout ")){
            await axios.get('/logout')
            dispatch({type:"refresh"})
        }
    }
    const [open, setOpen]=useState(false)
    const baseImgUrl="http://localhost:5000/uploads/"

    return (
        <div>
        <section class="login">
            <div class="login_box">
                <div class="left">
                    <div class="top_link"> <Link onClick={logout}> <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt=""/>LogOut</Link></div>
                    <div class="contact">
                    <img src={baseImgUrl+user.details.profile} width="100" className="rounded-circle" />
                    <h3>{user.details.name}</h3>
            <h5>{user.details.proffession}</h5>
            <button  onClick={()=>setOpen(true)}>Edit Profile Picture</button>
                    </div>
                </div>
                <div class="right">
                    <div class="right-text">
            <h1>WELCOME HOME</h1>
                    </div>
                    <div class="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt=""/></div>
                </div>
            </div>
            <EditProfileModal open={open} id={user.details._id} setOpen={setOpen}/>
        </section>
        </div>

    )
}

export default UserHome