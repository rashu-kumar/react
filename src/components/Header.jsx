import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import { DLT } from '../Redux/actions/Action';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mui/material';

const Header = () => {

  const[price,setprice]=useState(0)
  console.log(price)

  const getdata=useSelector((state)=>state.cartreducer.carts);
  console.log(getdata);

  const dispatch=useDispatch();


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt=(id)=>{
    dispatch(DLT(id))
  }

  const total=()=>{
    let price=0;
    getdata.map((ele,k)=>{
      price=ele.price+price
    })
    setprice(price)
  }

  useEffect(()=>{
    total();
  },[total])

  return (
    <Section>
      <div className="container-fluid">
        <div className='list'>
          <ul>
            <StyledLink to="/cart">Add To Cart</StyledLink>
            <StyledLink to="/">Home</StyledLink>
          </ul>

          <Badge
            badgeContent={getdata.length}
            color="primary"
            style={{
              marginRight: '50px',
              marginTop: '10px'
            }}
            id="basic-badge"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon style={{ fontSize: '44px' ,cursor:'pointer'}} />
          </Badge>
        </div>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-badge',
          }}
        >

        {
getdata.length?
<div className='card_details' style={{width:'20rem', padding:'10'}}>
<Table>
<thead>

<tr>

<th>Photo</th>
<th>Product</th>
</tr>

</thead>

<tbody>

{
  getdata.map((e)=>{
    return(
      <>
      
      <tr>
      <td>
      <Link to={`/cart/${e.id}`}  onClick={handleClose}><img src={e.image} style={{width:'5rem', height:'5rem'}}></img></Link>
      
      </td>

      <td>
      <p>{e.title}</p>
      <p>{e.price}</p>
      </td>

      <td className='mt-5' style={{color:'red',fontSize:'20px',cursor:'pointer'}}>
      
      <DeleteIcon onClick={()=>dlt(e.id)}></DeleteIcon>
      </td>
      
      </tr>
      
      
      </>
    )
  })
}
<p className='text-center'>Total:{price}</p>

</tbody>

</Table>

</div>:

<div className='card_details d-flex justify-content-center align-items-center'>
<CloseSharpIcon style={{marginLeft:'90px',top:'-4', position:'absolute'}}></CloseSharpIcon>
<p>Your Cart Is Empty</p>

</div>

        }
       
          
        </Menu>
      </div>
    </Section>
  );
}

const Section = styled.div`


  background-color: burlywood;
  margin-top: 10px;

  .list {
    display: flex;
    justify-content: space-between;
  }

  .list ul {
    display: flex;
    gap: 50px;
    padding-bottom: 10px;
    padding-top: 10px;
  }

`;

// StyledLink component with styles
const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 22px;


`;

export default Header;
