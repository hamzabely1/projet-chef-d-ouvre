import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Heder from "../component/Heder";
import css from "../css/panier.css";


const Panier = () => {
  let navigation = useNavigate();
  const [article, setArticle] = useState([]);
  const [total, setTotal] = useState([]);
  let user_id = localStorage.getItem('user_id')

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/total").then((resp) => {
      const all = resp.data;
      setTotal(all);
    });
  }, [total]);

  useEffect(() => {
    const apiUrl = "http://127.0.0.1:8000/api/show/panier";
    axios.get(apiUrl).then((resp) => {
      const all = resp.data;
      setArticle(all);
    });
  }, []);

  const delete_Articles = (id) => {
    axios.delete("http://127.0.0.1:8000/api/delete/" + id).then((res) => {});
  };

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [numero, setNumero] = useState("");
  const [adresse, setAdresse] = useState("");
  const [code_postal, setCode_postal] = useState("");
  const [totale, setTotale] = useState("");

  const [articles, SetArtciles] = useState(article);

  const confirm = () => {
    axios
      .post(`http://127.0.0.1:8000/api/add/commande/${user_id}`, {
        nom: nom,
        prenom: prenom,
        numero: numero,
        adresse: adresse,
        code_postal: code_postal,
        articles: JSON.stringify(article),
        
      })
      .then((res) => {
        console.log(res);
        console.log(article)
      });
  };

  return (
    <div className="container">
      <Heder />
      <div className="d-flex justify-content-center">
        <p className="fs-1 border-bottom border-warning w-50">Panier</p>
      </div>
      <div className="d-flex justify-center">
        <div className="panier">
          <div className="responsive">
            <div className="col justify-content-center">
              {article
                .filter((articless) => articless.id)
                .map((article) => {
                  return (
                    <div className="produit d-flex mt-2  ">
                      <p className="mt-1">{article.name}</p>

                      <img
                        src={`${process.env.REACT_APP_IMAGE}${article.image}`}
                        className="w-25 mt-1 mr-5 ml-1"
                      ></img>
                      <div className="">
                        <div className="d-flex mt-1 ">
                          <p>{article.quantite}Kg</p>
                        </div>
                        <p> prix:€{article.prix}0</p>
                      </div>

                      <button
                        onClick={() => {
                          delete_Articles(article.id);
                        }}
                        className="btn btn-danger mt-2 ml-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="container d-flex justify-center">
              <div className="row">
                <div className=" col-md-offset-4">
                  <div>
                    <p className="fs-1">Total:</p>
                    <div className="form-row">
                      <div className="col-xs-12 form-group">
                        <label className="control-label">Nom</label>
                        <input
                          onChange={(e) => setNom(e.target.value)}
                          className="form-control"
                          size="4"
                          type="text"
                          name="nom"
                        />
                      </div>
                      <div className="col-xs-12 form-group">
                        <label className="control-label">Prenom</label>
                        <input
                          onChange={(e) => setPrenom(e.target.value)}
                          className="form-control"
                          size="4"
                          type="text"
                          name="prenom"
                        />
                      </div>
                      <div className="col-xs-12 form-group">
                        <label className="control-label">
                          Numéro de téléphone
                        </label>
                        <input
                          onChange={(e) => setNumero(e.target.value)}
                          className="form-control"
                          size="4"
                          type="tel"
                          name="numero"
                        />
                      </div>
                      <div className="col-xs-12 form-group">
                        <label className="control-label">Adresse</label>
                        <input
                          onChange={(e) => setAdresse(e.target.value)}
                          className="form-control"
                          size="4"
                          type="text"
                          name="adresse"
                        />
                      </div>
                      <div className="col-xs-12 form-group">
                        <label className="control-label">code postal</label>
                        <input
                          onChange={(e) => setCode_postal(e.target.value)}
                          className="form-control"
                          size="4"
                          type="text"
                          name="code_postale"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="d-flex justify-content-around mt-2">
                        <img
                          className="w-15 h-10"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png"
                        ></img>
                        <img
                          className="w-15 h-10"
                          src="https://upload.wikimedia.org/wikipedia/fr/7/72/Logo_GIE-CB.jpg"
                        ></img>
                        <img
                          className="w-15 h-10"
                          src="https://www.mes-finances.be/wp-content/uploads/2020/07/MasterCard.png"
                        ></img>
                      </div>
                      <div className="col-xs-12 form-group ">
                        <label className="control-label">Numéro de carte</label>
                        <input
                          autoComplete="off"
                          className="form-control card-number"
                          size="20"
                          type="text"
                          name="card_no"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-xs-4 form-group cvc">
                        <label className="control-label">CVC</label>
                        <input
                          autoComplete="off"
                          className="form-control card-cvc"
                          placeholder="ex. 311"
                          size="4"
                          type="text"
                          name="cvc"
                        />
                      </div>
                      <div className="col-xs-4 form-group expiration">
                        <label className="control-label">Expiration</label>
                        <input
                          className="form-control card-expiry-month"
                          placeholder="MM"
                          size="2"
                          type="text"
                          name="expiration_month"
                        />
                      </div>
                      <div className="col-xs-4 form-group expiration">
                        <label className="control-label"> </label>
                        <input
                          className="form-control card-expiry-year"
                          placeholder="AAAA"
                          size="4"
                          type="text"
                          name="expiration_year"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col-xs-12 form-group">
                        <label className="control-label"></label>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col-md-12 form-group">
                        <button className="buttons" onClick={confirm}>
                          Payer »
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
