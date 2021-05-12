import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core"
import { CardGiftcard, Event, Pets } from "@material-ui/icons"
import { Link, useHistory } from "react-router-dom"



export function Welcome(){

  const history = useHistory();

  let events = <Grid key={"Events"} item>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component = "img"
                        alt="something"
                        height="140"
                        image="/lion.jpg"
                        title="you are lion"
                      />
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          Events
                        </Typography>
                        <Event/>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>

    let giftShop = <Grid key={"GiftShop"} item>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component = "img"
                        alt="something"
                        height="140"
                        image="/lion.jpg"
                        title="you are lion"
                      />
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          GiftShop
                        </Typography>
                        <CardGiftcard/>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>

    let animals = <Grid key={"Animals"} item>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component = "img"
                        alt="something"
                        height="140"
                        image="/lion.jpg"
                        title="you are lion"
                      />
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          Animals 
                            <Pets/>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions> 
                      <Button component={Link} to="/animals">
                        Let's see
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>


    return (<Grid container justify="center" spacing={10} style={{flexGrow:1}}>
        {events}
        {giftShop}
        {animals}
    </Grid>)
}