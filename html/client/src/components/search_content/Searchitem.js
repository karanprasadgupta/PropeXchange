import React from 'react'
function Searchitem(props) {
    return (
        <div>
            <div className='maa'>
            <div className='ll ll1'>
                <h3>{props.type}</h3>
                <p>{props.address}</p>
            </div>
            <div className='ll ll2'>
                <p>Rent:{props.rent}</p>
                <p>Deposit Amount:{props.deposit}</p>
            </div>
            <div className='ll3'>
                <div>
                    <img src="" alt="there are images" />
                    </div>
                    <div className='ll'>
                        <div className='ll ll4'>
                            <div>
                                <p>Fully Furnished</p>
                                <p>{props.bhk}</p>
                            </div>
                            <div>
                                <p>Attached bathroom</p>
                                <p>{props.availability}</p>
                            </div>
                        </div>
                        <div className='ll5'>
                        <a href="/default-page">For more details</a>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Searchitem;
