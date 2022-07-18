import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import Link from "next/link";
import Image from "next/image";


export default function Scanner() {
    const [data, setData] = useState('No result');

    async function smsToAssociate() {
        console.log('Hi Martha, Julie has arrived and waiting at Counter 07. Kindly Acccept - [ www.surlatable.com/julie/accept/ ] or Decline - [ www.surlatable.com/julie/decline ] ' );
        const res = await fetch("/api/sendsmsToAssociate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ to: '+919675875285', body: 'Hi Martha, Julie has arrived and waiting at Counter 07. Kindly Acccept - www.surlatable.com/julie/accept/ or Decline - www.surlatable.com/julie/decline' }),
        });
    
        const data = await res.json();
        if (data.success) {
          console.log('sms is success');
        } else {
          console.log('unable to send sms');
        }
      }

    return (
        <>
            <div
                style={{
                    backgroundImage: `url('/pickup-background.png')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "1920px",
                    height: "1020px",
                }}
            >
                <div id="container1">
                    <div id="content">
                        {/* <h1 style={{ color: 'red' }}>SCANNER {result}</h1> */}
                        <QrReader
                            onResult={(result, error) => {
                                if (!!result) {
                                    setData(result?.text);
                                }

                                if (!!error) {
                                    console.info(error);
                                }
                            }}
                            style={{ width: '100%' }}
                        />
                        <Link href="/kioskConfirmation" passHref>
                            <button
                                onClick={()=>{smsToAssociate()}}
                                type="button"
                                style={{ width: "200px", height: '60px', backgroundColor: '#7D7D7D', float: 'right', border: 'none' }}
                            >
                                <span
                                    style={{
                                        fontWeight: '800',
                                        fontSize: '16px',
                                        lineHeight: '19.2px',
                                        color: '#7D7D7D'
                                    }}
                                >
                                    SUBMIT
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}