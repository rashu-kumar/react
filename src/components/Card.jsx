import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/actions/Action";


const Card = () => {
    const [data, setData] = useState([]);
    const dispatch=useDispatch();

    const send=(e)=>{
        //console.log(e)
        dispatch(ADD(e));
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Section>
            <div className="container-fluid">
          
                <div className="row">
                <h2 className="heading" style={{textAlign:'center'}}>ADD TO Cart</h2>
                    {
                        data.map((item, index) => (
                            <div key={index} className="col-md-4">
                                <Product className="try">
                                    <div className="image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="price">
                                    <p>{item.title}</p>
                                    <p>${item.price}</p>
                                    <Button variant="contained" onClick={()=>send(item)}>Add To cart</Button>
                                    </div>
                                </Product>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Section>
    );
}

export default Card;

const Section = styled.div`
  /* Add any additional styling you need */
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
  margin-top: 50px;
  cursor: pointer;

  img {
    height: 200px;
    width: 200px;
    padding-top: 20px;
  }

  .price{
   // background-color: yellow;//
    display: flex;
    gap: 40px;
  }
`;
