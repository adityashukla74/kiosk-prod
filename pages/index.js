import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

export default function Home() {
  const images = [
    { url: "https://picsum.photos/seed/a/1600/900" },
    { url: "https://picsum.photos/seed/b/1920/1080" },
    { url: "https://picsum.photos/seed/c/1366/768" },
  ];

  async function pickUpCodeSms1() {
    console.log('For in-store pickup, you can scan the QR code - https://i.postimg.cc/V687pb39/QR-CODE-FOR-scan.png OR use this pickup code 77865');
    const res = await fetch("/api/sendsms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: '+919675875285', body: 'For in-store pickup, you can scan the QR code - https://i.postimg.cc/V687pb39/QR-CODE-FOR-scan.png OR use this pickup code 77865' }),
    });

    const data = await res.json();
    if (data.success) {
      console.log('sms is success');
    } else {
      console.log('unable to send sms');
    }
  }

  async function pickUpCodeSms2() {
    console.log('Hi Julie, your order will be ready for pickup in-store on 19 July 2022 at 11AM. Locate store: https://goo.gl/maps/KuU6rzfAFbjvUws79');
    const res = await fetch("/api/sendsms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: '+919675875285', body: 'Hi Julie, your order will be ready for pickup in-store on 19 July 2022 at 11AM. Locate store: https://goo.gl/maps/KuU6rzfAFbjvUws79' }),
    });

    const data = await res.json();
    if (data.success) {
      console.log('sms is success');
    } else {
      console.log('unable to send sms');
    }
  }

  return (
    <div>
      <Head>
        <title>Sur La Table</title>
        <meta name="description" content="Sur La Table" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <div
        style={{
          width: '1792px',
          height: '504px',
          paddingTop: '64px',
          marginLeft: '64px',
          marginRight: '64px'
        }}
      >
        {/* <Image
          alt="Image Alt"
          src="/kiosk-banner.png"
          width={1792}
          height={504}
        /> */}
        <Slider imageList={images} width={1792} height={504} />
      </div>
      <div style={{ textAlign: "center", marginTop: '96px' }}>
        <span
          style={{
            fontWeight: "300",
            fontSize: "61px",
            lineHeight: "73.2px",
            textAlign: "center",
          }}
        >
          ARE YOU HERE FOR THE PICKUP?
        </span>
      </div>
      <Link href="/scanqrcode" passHref>
        <div style={{ textAlign: "center", marginTop: "56px", width: '600px', height: '200px', marginInline: 'auto' }}>
          <Image
            // onClick={()=>{pickUpCodeSms1()}}
            onClick={()=>{pickUpCodeSms1();pickUpCodeSms2();}}
            alt="Touch Here"
            src="/tap_here.svg"
            width={600}
            height={200}
          />
        </div>
      </Link>
      </div>
    </div>
  );
}
