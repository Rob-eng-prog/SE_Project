import Head from 'next/head';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';


 const About = () => {
  import team1 from "SE_Project/public/goku.jpg";
  import team2 from "SE_Project/public/goku.jpg";
  import team3 from "SE_Project/public/goku.jpg";
  import team4 from "SE_Project/public/goku.jpg";
    
  const useStyles = makeStyles(styles);
  
  export default function TeamSection() {
      const classes = useStyles();
      const imageClasses = classNames(
          classes.imgRaised,
          classes.imgRoundedCircle,
          classes.imgFluid
      );
      return (
          <div className={classes.section}>
              <h2 className={classes.title}>HERE IS THE TEAM BEHIND THE PROJECT</h2>
              <div>
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={4}>
                          <Card plain>
                              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                  <img src={team1} alt="..." className={imageClasses} />
                              </GridItem>
                              <h4 className={classes.cardTitle}>
                                  Robel H.
                                  <br />
                                  <small className={classes.smallTitle}>Model</small>
                              </h4>
                              <CardBody>
                                  <p className={classes.description}>
                                      You can write here details about one of your team members. You
                                      can give more details about what they do. Feel free to add
                                      some <a href="">links</a> for people to be able to
                                      follow them outside the site.
                                  </p>
                              </CardBody>
                              <CardFooter className={classes.justifyCenter}>
                                  <Button
                                      justIcon
                                      color="transparent"
                                      className={classes.margin5}
                                  >
                                      <i className={classes.socials + " fab fa-linkedin"} />
                                  </Button>
                                  <Button
                                      justIcon
                                      color="transparent"
                                      className={classes.margin5}
                                  >
                                      <i className={classes.socials + " fab fa-facebook"} />
                                  </Button>
                              </CardFooter>
                          </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                          <Card plain>
                              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                  <img src={team2} alt="..." className={imageClasses} />
                              </GridItem>
                              <h4 className={classes.cardTitle}>
                                  Kervens J.
                                  <br />
                                  <small className={classes.smallTitle}>Programmer</small>
                              </h4>
                              <CardBody>
                                  <p className={classes.description}>
                                      You can write here details about one of your team members. You
                                      can give more details about what they do. Feel free to add
                                      some <a href="#">links</a> for people to be able to
                                      follow them outside the site.
                                  </p>
                              </CardBody>
                              <CardFooter className={classes.justifyCenter}>
                                  <Button
                                      justIcon
                                      color="transparent"
                                      className={classes.margin5}
                                  >
                                      <i className={classes.socials + " fab fa-linkedin"} />
                                  </Button>
                              </CardFooter>
                          </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                          <Card plain>
                              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                  <img src={team3} alt="..." className={imageClasses} />
                              </GridItem>
                              <h4 className={classes.cardTitle}>
                                  Kirubel Z.
                                  <br />
                                  <small className={classes.smallTitle}>Model</small>
                              </h4>
                              <CardBody>
                                  <p className={classes.description}>
                                      You can write here details about one of your team members. You
                                      can give more details about what they do. Feel free to add
                                      some <a href="#">links</a> for people to be able to
                                      follow them outside the site.
                                  </p>
                              </CardBody>
                              <CardFooter className={classes.justifyCenter}>
                                  <Button
                                      justIcon
                                      color="transparent"
                                      className={classes.margin5}
                                  >
                                      <i className={classes.socials + " fab fa-linkedin"} />
                                  </Button>
                              </CardFooter>
                          </Card>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                          <Card plain>
                              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                  <img src={team4} alt="..." className={imageClasses} />
                              </GridItem>
                              <h4 className={classes.cardTitle}>
                                  Levy S
                                  <br />
                                  <small className={classes.smallTitle}>Model</small>
                              </h4>
                              <CardBody>
                                  <p className={classes.description}>
                                      You can write here details about one of your team members. You
                                      can give more details about what they do. Feel free to add
                                      some <a href="#">links</a> for people to be able to
                                      follow them outside the site.
                                  </p>
                              </CardBody>
                              <CardFooter className={classes.justifyCenter}>
                                  <Button
                                      justIcon
                                      color="transparent"
                                      className={classes.margin5}
                                  >
                                      <i className={classes.socials + " fab fa-linkedin"} />
                                  </Button>
                              </CardFooter>
                          </Card>
                      </GridItem>
                  </GridContainer>
              </div>
          </div>
      );
  }    




  return(
    <h1>About page</h1>
  )
}

export default About;