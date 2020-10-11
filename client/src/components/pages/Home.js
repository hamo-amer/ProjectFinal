  
import React,{useState,useEffect} from "react";
import axios from 'axios'
import { Jumbotron, Container ,Button,InputGroup,InputGroupAddon,Input} from "reactstrap";
import ListProducts from "./ListProducts";
import About from './About'


const Home = () => {
const [products, setProducts] = useState([{}]);
const [name, setName] = useState("")

useEffect(() => {
    const fetchData=async()=>{
        const res= await axios.get('/api/product/all');
        setProducts(res.data);
    } 
    fetchData()  ;
    }, []);
  
// function search
const handleSearch=(input)=>{  
setProducts(products.filter(product=>product.name.toLowerCase().includes(input.toLowerCase().trim())));
};
  
  return (
    <div className="home">
      <Jumbotron fluid style={{paddingTop:20}}>
        <Container fluid className="p-3" >
          <h1 className="display-3">Welcome To CoinElectro App</h1>
         
          <InputGroup style={{ width:500}}>
        <InputGroupAddon addonType="prepend"><Button onClick={()=>handleSearch(name)}>Search</Button></InputGroupAddon>
        <Input type="text" placeholder="search" onChange={(e)=>setName(e.target.value)}/>
      </InputGroup>
      <ListProducts products={products}  />
        </Container>
      </Jumbotron>
      <About />
    </div>
  );
};
export default Home;
