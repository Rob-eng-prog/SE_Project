import Head from 'next/head';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { Grid,Typography } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const demoTeam = [
  {
    name:"Kervens Jasmin",
    image:"https://picsum.photos/200/300",
    profession:"Student",
    facebookUrl:"https://picsum.photos/200/300",
    instaUrl:"",
    twitterUrl:"https://picsum.photos/200/300",
    bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name:"Kirubel Zergaw",
    image:"https://picsum.photos/200/300",
    profession:"Student",
    facebookUrl:"https://picsum.photos/200/300",
    instaUrl:"https://picsum.photos/200/300",
    twitterUrl:"https://picsum.photos/200/300",
    bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  },
  {
    name:"Levy Sanon",
    image:"https://picsum.photos/200/300",
    profession:"Student",
    facebookUrl:"https://picsum.photos/200/300",
    instaUrl:"https://picsum.photos/200/300",
    twitterUrl:"https://picsum.photos/200/300",
    bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  },
  {
    name:"Robel Hagos",
    image:"https://picsum.photos/200/300",
    profession:"Student",
    facebookUrl:"https://picsum.photos/200/300",
    instaUrl:"https://picsum.photos/200/300",
    twitterUrl:"https://picsum.photos/200/300",
    bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  }
]
function initialize(){
  return demoTeam
}
 const About = () => {
    const [team, setTeam] = useState(initialize());
  console.log("team",team)
  return(<div className="p-2">
    <div className="mb-8">
      <Typography variant={"h4"} className="text-center fw-bold text-3xl" style={{marginBottom:"5px"}}>Why We Exist ?</Typography>
      <Typography  variant={"body2"} className="text-center">We are offering another view of the forum aspect, more focused on the SUNY Plattsburgh Community. The Web-app will be more driven towards helping the students and peers to interact on another level, allowing them to have answers to their questions from peers, faster at the tip of their fingers.</Typography>
    </div>
    <div className="mb-8">
      <Typography variant={"h4"} className="text-center fw-bold text-3xl" style={{marginBottom:"5px"}}>THIS IS OUR TEAM</Typography>
      <div className="container-fluid ">
        <Grid container> 
          {team.map((item,index)=>{
            return <Grid item lg={3} md={3} sm={6} xs={12}  className="text-center p-3" key={index}>
            <img className="img-fluid" src={item.image} style={{width:"150px",height:"150px",borderRadius:"50%",margin:"auto"}}></img>
            <Typography variant={"h6"} className="fw-bold text-2xl">{item.name}</Typography>
            <Typography variant={"body1"} style={{marginBottom:"15px"}}>{item.profession}</Typography>
            <Typography variant={"body2"}className="text-center" style={{color:"gray"}}>{item.bio}</Typography>
            <div className="d-flex mt-8">
              {item.twitterUrl.length !== 0 && <TwitterIcon style={{color:"gray",margin:"5px"}} onClick={()=>{
                window.location(item.twitterUrl)
              }}/>}
              {item.facebookUrl.length !== 0 && <FacebookIcon style={{color:"gray",margin:"5px"}} onClick={()=>{
                window.location(item.facebookUrl)
              }}/>}
              {item.instaUrl.length !== 0 && <InstagramIcon style={{color:"gray",margin:"5px"}}onClick={()=>{
                window.location(item.instaUrl)
              }}/>}
            </div>
          </Grid>
          })}
        </Grid>
      </div>
    </div>
    </div>
  )
}

export default About;