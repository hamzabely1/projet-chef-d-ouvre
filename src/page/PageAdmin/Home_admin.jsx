import Crud_admin from '../PageAdmin/Crud_admin'
import Commande from './Commande';
import Create_admin from "./Create_admin";
import HeaderAdmin from "./HeaderAdmin";

const Home_admin =() => {


   





    return (
        <div>
         <HeaderAdmin/>




         <div>
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Articles</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Ajouter un artcile</button>
    </li>
    <li className="nav-item" role="presentation">
      <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Commande</button>
    </li>
    
  </ul>
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
    
  <Crud_admin/>
    
    </div>
    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>  
    <Create_admin/>
    
    
    </div>
    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
<Commande/>


    </div>
  </div>
</div>












       </div>
  

    )
}

export default Home_admin