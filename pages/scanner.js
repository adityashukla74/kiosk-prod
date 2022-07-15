import React, { useState , useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import Link from "next/link";
import Image from "next/image";


export default function scanner() {
    const [data, setData] = useState('No result');
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
                    type="button"
                    style={{ width: "40px", height: '30px', backgroundColor: '#7D7D7D', float: 'right', border: 'none' }}
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