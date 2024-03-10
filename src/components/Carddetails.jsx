import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const[inputvalue,setinputvalue]=useState(1)
  const[price,setprice]=useState(0)
  console.log(price)

  const { id } = useParams();
  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const total=()=>{
    let price=0;
    getdata.map((ele,k)=>{
      price=ele.price*inputvalue+price
    })
    setprice(price)
  }

  useEffect(()=>{
    total();
  },[total])

  const plus=()=>{
    setinputvalue(inputvalue+1)
    
          }
    
          const minus=()=>{
    
            if (inputvalue!=1){
                setinputvalue(inputvalue-1)
            }
    
          }

  return (
    <div>
      <div className="container mt-2">
        <h2 className='text-center'>Items Details Page</h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
            {data.length > 0 &&
              data.map((ele) => (
                <>
                  <div className="items_img">
                    <img src={ele.image} alt="" style={{width:'300px', height:'300px'}} />
                  </div>

                  <div className="details">
                    <table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {ele.name}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹{ele.price}
                          </p>
                          <p>
                            <strong>Total</strong> : ₹{price}
                          </p>

                          <p>
                            <strong>Description</strong> : {ele.description}
                          </p>

                          <p>
                            
                            <span className="arrow plus" onClick={plus}><KeyboardArrowUpIcon></KeyboardArrowUpIcon></span>
                            <strong>Quantity</strong> : {inputvalue}
<span className="arrow minus" onClick={minus}><KeyboardArrowDownIcon></KeyboardArrowDownIcon></span>
                          </p>

                          <p>
                            <strong>Remove</strong> : <DeleteIcon></DeleteIcon>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsDetails;
