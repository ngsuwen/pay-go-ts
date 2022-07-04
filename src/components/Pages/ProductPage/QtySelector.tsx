import React from 'react';

export default function QtySelector({qtyRef}: {qtyRef:React.LegacyRef<HTMLInputElement> | undefined}){

    return(
        <input style={{width:'50px', height:'30px', marginLeft:10, marginRight:10}} type='number' placeholder='1' min='1' ref={qtyRef}/>
    )
}