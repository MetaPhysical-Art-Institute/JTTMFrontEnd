import React from 'react'
import "./viewall.css" 
import kyn from "./kynPP.svg"
import art from "./ArtistPP.svg"
import gyasi from "./gyasiPP.svg"
import Milt from "./MiltPP.svg"
import trav from "./TravPP.svg"
import Alana from "./AlanaPP.svg"
import Haru from "./HaruPP.svg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Viewall = () => {

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
     <div>
 
         <div className="container">


         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
         
            <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
            Thanks for being here! 
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

               To view more from this artist, select them from the drop down menu above.

            </Typography>

            </Box>
          </Modal>
         


          <div className="item">
          <div>
          <img alt='Gyasi' src={gyasi}></img>
          <Button onClick={handleOpen}>Gyasi</Button>

         

          </div>
          </div>
         

          


          <div className="item">
          <div>
          <img alt='Milton Madison' src={Milt}></img>
          <Button onClick={handleOpen}>Milton Madison</Button>

          

          </div>
          </div>

          <div className="item">
          <div>
          <img alt='Alana Enfinity' src={Alana}></img>
          <Button onClick={handleOpen}>Alana Enfinity</Button>

          

          </div>
          </div>
          <div className="item">
          <div>
          <img alt='Haru SaySo' src={Haru}></img>
          <Button onClick={handleOpen}>Haru Sayso</Button>

          

          </div>
          </div>


          <div className="item">
          <div>
          <img alt='KynAdams.eth' src={kyn}></img>
          <Button onClick={handleOpen}>KynAdams.eth</Button>

          

          </div>
          </div>
          <div className="item">
          <div>
          <img alt='Travis Rice' src={trav}></img>
          <Button onClick={handleOpen}>Travis "Big TRAV" Rice</Button>

          

          </div>
          </div>
          <div className="item">
          <div>
          <img alt='coming soon' src={art}></img>
          <Button onClick={handleOpen}>coming soon</Button>

          

          </div>
          </div>
          <div className="item">
          <div>
          <img alt='coming soon' src={art}></img>
          <Button onClick={handleOpen}>coming soon</Button>

          

          </div>
          </div>
          <div className="item">
          <div>
          <img alt='coming soon' src={art}></img>
          <Button onClick={handleOpen}>coming soon</Button>

          

          </div>
          </div>

          

          
          
          
          
          
         </div>
   
 
 
 
     </div>
   )
 }
 
 export default Viewall




















