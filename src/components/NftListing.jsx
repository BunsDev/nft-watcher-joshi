import React from 'react'
import { useSelector } from 'react-redux'
import { getAllNfts } from '../features/nfts/nftSlice'
import NftCard from './NftCard'

function NftListing() {
  const Nfts = useSelector(getAllNfts);
  let renderNfts = "";

  renderNfts = Nfts.total > 0 ? (
    Nfts.result.map((nft,index)=>
      <NftCard nft={nft} key={index}> </NftCard>
    )
  ):(
    <div className="">ERROR</div>
  );
  
  return (
    <div className="justify-center flex flex-wrap">
      {renderNfts}
    </div>
  )
}

export default NftListing