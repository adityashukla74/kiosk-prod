import Link from "next/link";
import Image from "next/image";

export default function confirmation() {
  return (
    <>
      <div style={{ width: '1920px', height: '1080px' }}>
        <div
          style={{
            display: 'inline-block',
            width: '1680px',
            height: '840px',
            backgroundColor: '#fafafa',
            marginTop: '120px',
            marginBottom: '120px',
            marginLeft: '120px',
            marginRight: '120px'
          }}>
          <div
            style={{
              width: '598px',
              height: '611px',
              marginTop: '114px',
              marginBottom: '115px',
              marginLeft: '121px',
              textAlign: 'center',
              float: 'left'
            }}
          >
            <div className="row">
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "39px",
                  lineHeight: "46.8px",
                  color: '#000000',
                  marginInline: 'auto'
                }}
              >
                Hi Julie!
              </span>
            </div>
            <div className="row" style={{ marginTop: '24px', width: '604px' }}>
              <div>
                <span style={{
                  fontWeight: "400",
                  fontSize: "25px",
                  lineHeight: "40px",
                  color: '#000000'
                }}>
                  Thanks for confirming.
                </span> <br />
                <span style={{
                  fontWeight: '700 !important',
                  fontSize: "25px",
                  lineHeight: "40px",
                  color: '#000000'
                }}>Martha</span>
                <span style={{
                  fontWeight: "400",
                  fontSize: "25px",
                  lineHeight: "40px",
                  color: '#000000'
                }}>, your personal shopper will be with you shortly.</span>
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: '23px',
                justifyContent: 'center',
              }}>
              <div
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: 'auto',
                  paddingLeft: '0px',
                  paddingRight: '0px',
                }}
              >
                <Image
                  alt="Julie"
                  src="/julie.png"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <div
              style={{
                marginTop: '17px',
                width: '541px',
                textAlign: 'center',
                marginInline: 'auto'
              }}>
              <span
                style={{
                  fontWeight: '400',
                  fontSize: '25px',
                  lineHeight: '40px',
                  color: '#000000'
                }}
              >
                We will keep you informed on real-time status on your mobile.
              </span>
            </div>
            <div
              style={{
                border: "1px dashed #545454",
                width: "438px",
                height: "120px",
                marginLeft: '83px',
                marginRight: '241px',
                marginTop: '64px'
              }}
            >
              <div
                style={{
                  marginLeft: '40px',
                  marginTop: '39px',
                  float: 'left'
                }}>
                <Image
                  alt="gift"
                  src="/gift.svg"
                  width={35}
                  height={35}
                />
              </div>
              <div
                style={{
                  float: 'left',
                  height: '60px',
                  width: '271px',
                  marginLeft: '38px',
                  marginTop: '34px',
                  marginRight: '41px',
                  marginBottom: '26px'
                }}>
                <span style={{
                  fontWeight: '400',
                  fontSize: '25px',
                  lineHeight: '30px',
                  textTransform: 'uppercase',
                  color: '#000000'
                }}>
                  Check your mobile for a <span style={{ fontWeight: '700' }}>surprise!</span>
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '760px',
              height: '760px',
              float: 'left',
              marginLeft: '158px',
              marginTop: '30px',
              marginBottom: '58px',
              marginRight: '40px'
            }}>
            <div
              style={{
                backgroundImage: `url('/confirm-kiosk-bg.svg')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                textAlign: 'center'
              }}
            >
              <div className="block"
                style={{
                  paddingLeft: '131px',
                  paddingTop: '200px',
                  paddingRight: '131px',
                }}
              >
                <span
                  style={{
                    width: '459px',
                    fontFamily: 'Lato !important',
                    fontWeight: '900',
                    fontSize: '48px',
                    lineHeight: '57.6px',
                    letterSpacing: '0.05em'
                  }}
                >
                  YOU ARE SPECIAL!
                </span>
              </div>
              <div 
                style={{
                  width: '498px',
                  margin: '24px auto',
                  textAlign: 'center'
                }}
              >
                <span
                  style={{
                    fontWeight: '400',
                    fontSize: '20px',
                    lineHeight: '24px'
                  }}
                >
                  Because you have opted for in-store pickup, we want to say thanks with a special offer.
                </span>
              </div>
              <div className="zoom-in-out-box"
                style={{
                  margin: '0 auto',
                  paddingTop: '10px'
                }}
              >
                <span 
                  style={{
                    width: '80px',
                    height: '40px',
                    textAlign: 'center',
                    fontSize: '36px',
                    fontWeight:'900',
                    
                  }}
                >
                  10% off
                </span>
              </div>
              <div 
                style={{
                  width: '430px',
                  height: '120px',
                  marginInline: 'auto',
                  paddingTop: '24px'
                }}>
                <span 
                  style={{
                    fontWeight: '400',
                    fontSize: '20px',
                    lineHeight: '24px',
                    textAlign: 'center'
                  }}>
                  Please use the code sent on your mobile for any purchase you make in-store today.
                  <br/>
                  <br/>
                  Martha will be excited to explain about our loyalty program.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}