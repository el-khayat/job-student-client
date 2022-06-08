import React from 'react'
// import './EditeProfile.css'

const EditeProfile = () => {
                                              


  return (
    <>
              <article 
              id='edite-form'
              className="  br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up1" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Modifie Profile</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="nom">
                    Nom
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="nom"
                    id="nom"
                  />
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="Prenom">
                    Prenom 
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="Prenom"
                    id="Prenom"
                  />
                </div>
                
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="ville">
                    Ville 
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="ville"
                    id="ville"
                  />
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="niveau">
                    niveau d'étude 
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="niveau"
                    id="niveau"
                  />
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="adresse">
                    Adresse 
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="adresse"
                    id="adresse"
                  />
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="telephone">
                  telephone 
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="telephone"
                    id="telephone"
                  />
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="email">
                  Email 
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Mot de pass 
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>


              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="modifie"
                />
              </div>

            </div>
          </main>
        </article>
    </>
  )
}

export default EditeProfile