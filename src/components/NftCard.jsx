import React from 'react'

const NftCard = (props) => {
    const Ipfs_to_Http=(url)=>{
        return url.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
    const beautifyContent=(string,length)=>{
        if(string===null)return"";
        return string.substring(0,length).replace('"',"").replace('\\n',"");
    }
    const metadata = JSON.parse(props.nft.metadata);
  return (
    <div className="nftCard drop-shadow-md w-5/12 sm:w-6/12 md:w-3/12 m-4">
        <div className="border-[8px] rounded-[12px] border-white">
            <img src={Ipfs_to_Http(metadata.image)} className="rounded-t-[4px]"/>
            <h2 className="p-2">{beautifyContent(props.nft.metadata_name,100)}</h2>
            <h2 className="p-2">{beautifyContent(props.nft.metadata_description,100)}</h2>
        </div>
    </div>
  )
}

export default NftCard