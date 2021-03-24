import React from "react";
//import picture from "src/public/profile.png";

const styles = {
  heading: {
    background: "#FFFAFA",
  },
};

function Home() {
  return (
    <div style={styles.heading}>
      <h1>Welcome to my portfolio.</h1>

      {/* <div>
        <img src={picture} alt="" />
      </div> */}
      <p>
        My name is Maria Ortega. <br />
        Currently, I am learning at the coding boot camp at UNC Charlotte.{" "}
        <br />
        My e-mail is mariaortegapb@gmail.com and my phone number is
        (336)244-2641.
      </p>
    </div>
  );
}

export default Home;
