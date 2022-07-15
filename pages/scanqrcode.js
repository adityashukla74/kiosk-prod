import Link from "next/link";
import Image from "next/image";
import { Input } from 'semantic-ui-react';

export default function scanQrCode() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/pickup-background1.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "1920px",
          height: "1020px",
        }}
      >
        <div
          className="center"
          style={{
            backgroundColor: "#ffffff",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "1680px",
            height: "840px",
            transform: "translate(-50%, -50%)",
            msTransform: "translate(-50%, -50%)",
            WebkitTransform: "translate(-50%, -50%)",
          }}
        >

          <div
            style={{
              width: '350px',
              height: '80px',
              marginLeft: '625px',
              marginRight: '705px',
              marginTop: '80px'
            }}>
            <Image
              alt="Image Alt"
              src="/brand-logo.svg"
              width={300}
              height={80}
            />
          </div>
          <div style={{
            width: '992px',
            height: '73px',
            marginLeft: '344px',
            marginRight: '344px',
            marginTop: '80px'
          }}>
            <span
              style={{
                fontWeight: '300',
                fontSize: '61px',
                lineHeight: '73.2px',
                textTransform: 'uppercase',
                color: '#000000'
              }}
            >
              Are you here FOR your Pickup?
            </span>
          </div>
          <div
            style={{
              marginTop: '125px'
            }}
          >
            <div
              style={{
                width: '323px',
                height: '237px',
                marginLeft: '259px',
                float: 'left'
              }}
            >
              <div>
                <span
                  style={{
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    fontSize: '31px',
                    lineHeight: '37.2px',
                    color: '#000000'
                  }}
                >
                  Scan your QR code
                </span>
              </div>
              <Link href="/scanner" passHref>
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '64px'
                }}
              >
                <Image
                  alt="Image Alt"
                  src="/qrcode.svg"
                  width={136}
                  height={136}
                />
              </div>
              </Link>
            </div>

            <div
              style={{
                width: '44px',
                height: '322px',
                marginLeft: '236px',
                float: 'left'
              }}
            >
                <Image
                  alt="Image Alt"
                  src="/or-division.svg"
                  width={44}
                  height={322}
                />
            </div>

            <div
              style={{
                float: 'left',
                width: '405px',
                height: '293px',
                marginLeft: '217px'
              }}
            >
              <div>
                <span
                  style={{
                    fontWeight: '700',
                    fontSize: '31px',
                    lineHeight: '37.2px',
                    textTransform: 'uppercase',
                    color: '#000000'
                  }}
                >
                  Enter your Pickup Code
                </span>
              </div>
              <div style={{
                marginTop: '64px'
              }}>
                <div
                  className="ui input"
                  style={{
                    width: '405px',
                    height: '80px'
                  }}>
                  <input
                    type="text"
                    placeholder="Unique Code" />
                </div>
              </div>
              <div
                style={{
                  marginTop: '47px'
                }}
              >
                <Link href="/kioskConfirmation" passHref>
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{ width: "405px", height: '64px' }}
                  >
                    <span
                      style={{
                        fontWeight: '800',
                        fontSize: '16px',
                        lineHeight: '19.2px'
                      }}
                    >
                      SUBMIT
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}