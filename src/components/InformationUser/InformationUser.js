import "./informationUser.css";
const InformationUser = ({ user }) => {
  return (
    <>
      <div className="contenairInf">
        <h4 className="rightbarTitle">User information</h4>
        <br />
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Ville:</span>
            <span className="rightbarInfoValue">
              {user?.ville ? user?.ville : "beni ahmed "}
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Adresse:</span>
            <span className="rightbarInfoValue">
              {" "}
              {user?.Adresse ? user?.Adresse : "beni ahmed chefchaouen"}{" "}
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Niveau Etudiant:</span>
            <span className="rightbarInfoValue">{user?.NiveauEtudiant}</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Telephone : </span>
            <span className="rightbarInfoValue">{user.Telephone}</span>
          </div>

        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default InformationUser;
