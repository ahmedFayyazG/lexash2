
import Link from 'next/link';
import { title } from 'node:process';
import React from 'react';

const Breacrumb = ({title, subtitle}: any) => {
  return (
    <>
<div
  className="breadcrumb-wrapper"
  style={{
    backgroundColor: "#FBF0DF",
    height: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
>
  <div>
    <h2
      className="wow fadeInUp"
      data-wow-duration="1000ms"
      data-wow-delay="700ms"
      style={{
        color: "black",
        fontSize: "3rem",
        fontWeight: "400",
        fontFamily: "Poppins, sans-serif",
        letterSpacing: "0.001em",
        marginBottom: "1rem",
      }}
    >
      {title}
    </h2>

<div
  style={{
    backgroundColor: "#E4B77A",
    border: "1px solid #E4B77A",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    marginTop: "1rem",
    display: "inline-block",
  }}
>
  <ul
    className="list-unstyled wow fadeInUp"
    data-wow-duration="1000ms"
    data-wow-delay="1000ms"
    style={{
      padding: 0,
      margin: 0,
      listStyle: "none",
      fontFamily: "Poppins, sans-serif",
      fontSize: "1rem",
      color: "#000", // Set to black for contrast on the gold background
    }}
  >
    <li style={{ display: "inline", marginRight: "0.5rem" }}>
      <Link href="/" style={{ color: "#000", textDecoration: "none" , fontFamily: "Poppins, sans-serif"}}>Home</Link>
    </li>
    <li style={{ display: "inline", fontFamily: "Poppins, sans-serif" }}>
      / {subtitle}
    </li>
  </ul>
</div>


  </div>
</div>


    </>
  );
};

export default Breacrumb;