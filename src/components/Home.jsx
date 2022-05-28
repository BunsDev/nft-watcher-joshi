import React,{useEffect,useState} from 'react'
import NftListing from './NftListing';
import api from '../api/api';
import { useDispatch } from 'react-redux';
import { addNfts } from '../features/nfts/nftSlice';

const Home = () => {
  const search = "bored";
  const dispatch = useDispatch();
  const [isLoading,setLoading] = useState(true);

  const fetchNfts = async(searchTerm) =>{
    let response = await api.get(`/nft/search?chain=eth&format=decimal&q=${searchTerm}&filter=name&limit=25`,{
      headers:{
        'Content-Type': 'application/json',
        'X-API-Key': process.env.REACT_APP_MORALIS_X_API_KEY
      }
    }).catch((err)=>{
      console.log(err)
    })
    dispatch(addNfts(response.data));
    setLoading(false);
  }

  useEffect(()=>{
   fetchNfts(search);
  }, []);

  return (
    <div>
      { (!isLoading)
        ? <NftListing></NftListing>
        : ''
      }
    </div>
  )
}

export default Home