import React from "react";

import { Link } from "react-router-dom";
import homecss from "../css/home.css";
import Footer from "../component/Footer";
import Carousele from "../component/Carousele";
import Produits from "./Produits";
import Pourquoi_nous from "./Pourquoi_nous";
import Equipe from "./Equipe";
import Create_admin from "./PageAdmin/Create_admin";
import Home_admin from "./PageAdmin/Crud_admin";
import Heder from "../component/Heder";

const Home = () => {
  
  const role = localStorage.getItem("role");

  
   

  return (
    <div>
      <Heder/>
      <div>
        <div className="container-sm">
          <br></br>
          <Carousele />
          <br></br>
          <div>
            <div>
              <div className="d-flex justify-content-center">
                <div>
                  <div className="conatiner d-flex justify-content-center  ">
                    <Link to="/fruits" className="noHover">
                      <div className="card_category">Fruits🍎</div>{" "}
                    </Link>
                    <Link className="noHover" to="/legumes">
                      <div className="card_category">Légumes🍋</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col collona">
              <div className="d-flex justify-center">
                <p className="fs-1 border-bottom border-warning w-50">
                  En évidence
                </p>
              </div>
              <Produits />
            </div>
          </div>
          <br></br>
          <Pourquoi_nous />
          <br></br>
          <Equipe />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
