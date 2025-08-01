
import React from 'react';

const ProcessArea = () => {
  return (
    <>
      {/* <div className="process-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-3 justify-content-center">
            <div className="col-12 col-lg-6">
              <div className="section-heading text-center">
                <h2 className="mb-0">Our<br />Services</h2>
              </div>
            </div>
          </div>

          <div className="divider-sm"></div>

          <div className="divider-sm"></div>

          <div className="row g-4">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="process-card-two">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <g clipPath="url(#clip0_1_751)">
                    <path d="M35.3906 0H6.44531C2.89137 0 0 2.89137 0 6.44531V9.375H35.3906V0Z" fill="#ECC80B" />
                    <path d="M50.625 6.44531C50.625 2.89137 47.7336 0 44.1797 0H38.9062V9.375H50.625V6.44531Z"
                      fill="#ECC80B" />
                    <path d="M14.0629 22.0996C12.5671 22.6301 11.3801 23.8171 10.8496 25.3129H14.0629V22.0996Z"
                      fill="#ECC80B" />
                    <path
                      d="M15.8207 32.3441C18.7285 32.3441 21.0941 29.9785 21.0941 27.0707C21.0941 24.7791 19.6245 22.8252 17.5785 22.0996V27.0707C17.5785 28.0415 16.7915 28.8285 15.8207 28.8285H10.8496C11.5752 30.8745 13.5291 32.3441 15.8207 32.3441Z"
                      fill="#ECC80B" />
                    <path
                      d="M55.8984 54.1406H40.6641C38.3988 54.1406 36.5625 55.977 36.5625 58.2422C36.5625 59.213 37.3495 60 38.3203 60H58.2422C59.213 60 60 59.213 60 58.2422C60 55.977 58.1637 54.1406 55.8984 54.1406Z"
                      fill="#ECC80B" />
                    <path
                      d="M41.8359 30.1172C41.8359 31.4116 42.8852 32.4609 44.1797 32.4609H52.3828C53.6773 32.4609 54.7266 31.4116 54.7266 30.1172C54.7266 28.8227 53.6773 27.7734 52.3828 27.7734H44.1797C42.8852 27.7734 41.8359 28.8227 41.8359 30.1172Z"
                      fill="#ECC80B" />
                    <path
                      d="M44.7653 35.9766V36.9011C44.7653 39.3547 44.039 41.7534 42.678 43.7951C41.3095 45.8478 40.4569 48.1905 40.1787 50.625H56.383C56.1048 48.1905 55.2523 45.8478 53.8838 43.7951C52.5229 41.7536 51.7966 39.3547 51.7966 36.9011V35.9766H44.7653Z"
                      fill="#ECC80B" />
                    <path
                      d="M39.753 41.8451C40.7324 40.376 41.25 38.6666 41.25 36.9011V35.9766C41.25 35.7217 41.2778 35.4734 41.3293 35.2339C39.536 34.2309 38.3203 32.3139 38.3203 30.1172C38.3203 27.792 39.6819 25.7789 41.6495 24.833C41.3869 24.0863 41.25 23.297 41.25 22.5C41.25 18.623 44.4042 15.4688 48.2812 15.4688C49.1029 15.4688 49.8914 15.6117 50.625 15.8719V12.8906H0V47.6953C0 51.255 2.88563 54.1406 6.44531 54.1406H34.2496C34.8471 53.2104 35.6412 52.4179 36.5727 51.8221C36.6769 48.2588 37.7696 44.8202 39.753 41.8451ZM15.8203 18.2812C20.6666 18.2812 24.6094 22.224 24.6094 27.0703C24.6094 31.9166 20.6666 35.8594 15.8203 35.8594C10.974 35.8594 7.03125 31.9166 7.03125 27.0703C7.03125 22.224 10.974 18.2812 15.8203 18.2812ZM33.3984 46.9922C33.3984 47.963 32.6114 48.75 31.6406 48.75H8.78906C7.81828 48.75 7.03125 47.963 7.03125 46.9922C7.03125 46.0214 7.81828 45.2344 8.78906 45.2344H15.8203V42.3047C15.8203 41.3339 16.6073 40.5469 17.5781 40.5469C18.5489 40.5469 19.3359 41.3339 19.3359 42.3047V45.2344H22.8516V38.7891C22.8516 37.8183 23.6386 37.0312 24.6094 37.0312C25.5802 37.0312 26.3672 37.8183 26.3672 38.7891V45.2344H29.8828V35.2734C29.8828 34.3027 30.6698 33.5156 31.6406 33.5156C32.6114 33.5156 33.3984 34.3027 33.3984 35.2734V46.9922Z"
                      fill="#ECC80B" />
                    <path
                      d="M44.7656 22.5C44.7656 23.1405 44.9378 23.7405 45.2371 24.2578H51.3253C51.6246 23.7405 51.7968 23.1405 51.7968 22.5C51.7968 20.5583 50.2228 18.9844 48.2811 18.9844C46.3395 18.9844 44.7656 20.5583 44.7656 22.5Z"
                      fill="#ECC80B" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_751">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h4>Personal Immigration</h4>
                <p className="mb-0 text-justify">We provide tailored legal support across the full range of UK personal immigration matters. We assist with visa applications including Spouse, Partner, Child, Parent, and Adult Dependent Visas, as well as UK Visitor Visas, Indefinite Leave to Remain (ILR), and British Citizenship applications.We specialise in complex cases involving visa refusals, human rights claims, deportation challenges, judicial reviews, and administrative reviews. Whether reuniting families or safeguarding individual rights, we help clients across the UK navigate the immigration process with clarity and care.</p>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="process-card-two">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M48.2985 29.3475L38.5714 22.6133V30.5428L35.1367 36.8985C39.2829 35.9611 43.2514 33.9296 46.6458 30.9135L48.2985 29.3475Z"
                    fill="#ECC80B" />
                  <path
                    d="M59.0771 36.8084L50.0977 30.5918L48.0939 32.4901C43.926 36.1963 38.9694 38.5302 33.8275 39.3198L32.8438 41.1401C32.328 42.1749 31.2262 42.8561 29.9999 42.8561C28.7737 42.8561 27.6719 42.1749 27.1247 41.0784L26.5067 39.935C21.7688 40.6602 17.1949 42.8154 13.3541 46.2282L11.7012 47.7943L28.7799 59.6181C29.1472 59.8723 29.573 59.9989 29.9999 59.9989C30.4268 59.9989 30.8527 59.8723 31.22 59.6181L59.0771 40.3324C59.6547 39.9316 59.9999 39.2735 59.9999 38.5704C59.9999 37.8672 59.6547 37.2091 59.0771 36.8084Z"
                    fill="#ECC80B" />
                  <path
                    d="M11.906 44.6516C15.8715 41.1254 20.5493 38.827 25.4226 37.9308L21.4286 30.542V22.6133L0.922852 36.8096C0.345284 37.2103 0 37.8685 0 38.5716C0 39.2747 0.345284 39.9328 0.922852 40.3336L9.90208 46.55L11.906 44.6516Z"
                    fill="#ECC80B" />
                  <path
                    d="M29.0415 40.122L23.5713 30H36.4284L30.9582 40.122C30.5633 40.9117 29.4364 40.9117 29.0415 40.122Z"
                    fill="#ECC80B" />
                  <path d="M23.5713 8.57227H28.9284V27.858H23.5713V8.57227Z" fill="#ECC80B" />
                  <path d="M31.0713 8.57227H36.4284V27.858H31.0713V8.57227Z" fill="#ECC80B" />
                  <path
                    d="M36.4284 6.42857H23.5713C23.5713 2.87817 26.4495 0 29.9999 0C33.5503 0 36.4284 2.87817 36.4284 6.42857Z"
                    fill="#ECC80B" />
                </svg>

                <h4>Business Immigration</h4>
                <p className="mb-0">We offer strategic immigration solutions for UK businesses, entrepreneurs, and overseas investors. We advise on Skilled Worker Visas, Health and Care Worker Visas, Global Business Mobility routes, and the Innovator Founder Visa for those bringing new ventures to the UK.We also support UK employers in obtaining and maintaining Sponsor Licences, ensuring full compliance with Home Office regulations. Whether you are scaling your company or relocating key personnel, we help you secure the right visas and stay ahead of evolving immigration rules</p>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="process-card-two">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M59.2669 28.2325L49.9645 18.93C49.967 18.8675 49.9995 18.8125 49.9995 18.75V11.25C49.9995 9.87 48.882 8.75 47.4995 8.75H22.4998V2.5C22.4998 1.12 21.3823 0 19.9998 0H2.49997C1.11749 0 0 1.12 0 2.5V20C0 21.38 1.11749 22.5 2.49997 22.5H19.9998C21.3823 22.5 22.4998 21.38 22.4998 20V13.75H44.9995V18.75C44.9995 18.8125 45.032 18.8675 45.0345 18.93L35.7321 28.2325C34.7546 29.21 34.7546 30.79 35.7321 31.7675L45.0345 41.07C45.032 41.1325 44.9995 41.1875 44.9995 41.25V46.25H22.1973C21.0548 41.25 16.5923 37.5 11.2499 37.5C5.04745 37.5 0 42.5475 0 48.75C0 54.9525 5.04745 60 11.2499 60C16.5923 60 21.0548 56.25 22.1973 51.25H47.4995C48.882 51.25 49.9995 50.13 49.9995 48.75V41.25C49.9995 41.1875 49.967 41.1325 49.9645 41.07L59.2669 31.7675C60.2444 30.79 60.2444 29.21 59.2669 28.2325ZM17.4998 17.5H4.99995V5H17.4998V17.5ZM11.2499 55C7.80242 55 4.99995 52.195 4.99995 48.75C4.99995 45.305 7.80242 42.5 11.2499 42.5C14.6973 42.5 17.4998 45.305 17.4998 48.75C17.4998 52.195 14.6973 55 11.2499 55Z"
                    fill="#ECC80B" />
                </svg>

                <h4>Will Writing (Including Islamic Wills)</h4>
                <p className="mb-0">We offer expert will writing services that reflect your wishes, values, and faith. Our solicitors draft clear, legally sound wills tailored to your personal and family needs including Shariah-compliant Islamic Wills. With a focus on simplicity and legal precision, we help you protect your legacy and provide peace of mind for your loved ones. Fixed-fee pricing and confidential consultations ensure accessible, professional planning you can trust.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div> */}
    </>
  );
};

export default ProcessArea;