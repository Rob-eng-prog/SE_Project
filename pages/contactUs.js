import { useState } from 'react';
import { FormControl, Grid, Typography,OutlinedInput } from '@material-ui/core';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
 const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



  return(<div className="rounded">
    <Grid container>
        <Grid item lg={4} md={4} sm={12} xs={12} >
            <div className="text-center" style={{padding:"10%",background:"#f87171", minHeight:"340px",color:"#d6d3d3"}}>
                <Typography variant="h5" className="mt-2 mb-2">Contact Us</Typography>
                <div >
                    <CallRoundedIcon/>
                    <Typography variant="h5" className="mt-2 mb-2">+1(123)456-7890</Typography>
                </div>
                <div className="mt-4">
                    <MailOutlineRoundedIcon/>
                    <Typography variant="h5" className="mt-2">abcd@gmail.com</Typography>
                </div>
            </div>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
            <div  className="text-center" style={{ padding:"3% 10%", borderTopRightRadius: "5px", borderBottomRightRadius: "5px",minHeight:"340px" ,color:"#d6d3d3"}}>
                <div>
                    <FormControl style={{width:"100%",marginTop:"10px",marginBottom:"10px"}}>
                        <OutlinedInput
                            id="name"
                            type="text"
                            placeholder="Name"
                            required={false}
                            value={name}
                            onChange={(event) =>{
                                setName(event.target.value)
                            }}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl style={{width:"100%",marginTop:"10px",marginBottom:"10px"}}>
                        <OutlinedInput
                            id="email"
                            type="text"
                            placeholder="Email"
                            required={false}
                            value={email}
                            onChange={(event) =>{
                                setEmail(event.target.value)
                            }}
                            
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl style={{width:"100%",marginTop:"10px",marginBottom:"10px"}}>
                        <OutlinedInput
                            multiline
                            rowsMax={3}
                            rows={3}
                            placeholder="Message"
                            className="w-100 mt-2 pl-2 pt-2"
                            name="message"
                            id="message"
                            value={message}
                            onChange={(event)=>{
                                setMessage(event.target.value)
                            }}
                        />
                    </FormControl>
                </div>
                <div className="text-center">
                    <button className="hover:bg-red-800 rounded-lg px-4 py-1 bg-red-600"  onClick={()=>{
                    }}>Submit</button>
                </div>
            </div>
        </Grid>
    </Grid>
</div>
  )
}

export default Contact;