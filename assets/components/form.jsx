import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      experiences: [],      // récupéré de l'API
      genres: [],           // récupéré de l'API
      images: [],

      keywordCountry: "",    // saisie du input
      searchCountry: [],    // liste des pays suggérés suite à la saisie du input

      keywordGenre: "",    // saisie du input
      searchGenre: [],     // liste des genres suggérés suite à la saisie du input

      keywordVille: "",    // saisie du input
      searchVille: [],     // liste des villes suggérées suite à la saisie du input

      searchResults: [],    // liste des expériences qui matchent avec pays / ville / genre saisi

      selectedExperiences: null,
      startDate: new Date(),
      endDate: new Date()
    }
  }
  componentDidMount() {

    // Déclenche une requête HTTP (AJAX) pour récupérer les données de la base SQL
    window.fetch('/backoffice/api').then((response) => {

      // Récupération de la réponse HTTP, désérialisation du JSON
      return response.json(); // équivalent à JSON.parse()

    }).then((result) => {

      console.log(result);

      this.setState({ experiences: result.experiences, genres: result.genres });

      // Demande l'affichage des résultats de base
      this.filterResults();
    });


  }

  /*
  * Recup des saisies de l'utilisateur dans les champs de recherche
  */
  filterResults() {

    let experiences = this.state.experiences.filter((experience) => {
      if (experience.paysDestination.toLowerCase().includes(this.state.keywordCountry.toLowerCase()) == true) {
        return true;
      }

      return false;
    });

    experiences = experiences.filter((experience) => {
      if (experience.genreCine.toLowerCase().includes(this.state.keywordGenre.toLowerCase()) == true) {
        return true;
      }

      return false;
    });

    experiences = experiences.filter((experience) => {
      if (experience.villeDestination.toLowerCase().includes(this.state.keywordVille.toLowerCase()) == true) {
        return true;
      }

      return false;
    });

    const searchResults = experiences.map((experience, index) => {
      let urlId = "experience/" + experience.id;
      // let urlPhoto = "../img/imgExperience/" + experience.imageExp;

      return <div className="col-4 mb-4 mt-5">
        <div className="cardcatalogue card mb-4 ombrage" key={index}>
          <a href={urlId} className="card-link"><img className="card-img-top" src={experience.imageExp} alt="Card image" /></a>
          <div className="card-body">
            <a href={urlId} className="card-link"><h5 className="card-title">{experience.titreExperience}</h5></a>
            <p className="card-text ">{experience.descriptionExperience.slice(0, 100)} <a href={urlId} className="card-link">En savoir plus...</a></p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> {experience.villeDestination}, {experience.paysDestination}</li>
            <li className="list-group-item">{experience.genreCine}</li>
          </ul>
        </div>
      </div>

    });

    // Mise à jour de l'affichage des résultats.
    this.setState({ searchResults: searchResults });
  }



  // Appelé lorsque l'utilisateur a validé une suggestion de pays
  validateCountrySuggestion(country) {
    // Mise à jour de la gestion de la saisie du pays.
    this.setState({
      keywordCountry: country,  // Sélection de ce pays
      searchCountry: []         // On repart à zéro (disparition des suggestions de pays)
    }, () => {
      // Mise à jour de l'affichage des résultats d'expériences correspondantes.
      this.filterResults();
    });
  }

  // Gestionnaire d'évènement de la saisie du pays
  onChangeCountry = (event) => {

    // Récupération de la saisie de l'utilisateur dans le input.
    const keywordCountryValue = event.currentTarget.value;

    if (keywordCountryValue.trim().length == 0) {
      this.setState({ keywordCountry: '', searchCountry: [] })
      this.componentDidMount()
      return
    }


    /*
     * Au début il n'y a pas de suggestions de pays.
     *
     * C'est un ensemble (classe Set) : cela signifie qu'il n'y aura pas de doublons de pays, etc
     * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set
     */
    let countries = new Set();

    // Recherche l'extrait de pays saisi par l'utilisateur (par exemple 'ap' dans 'Japon')
    for (let experience of this.state.experiences) {
      // Est ce que le pays de l'expérience contient la saisie de l'utilisateur ?
      if (experience.paysDestination.toLowerCase().includes(keywordCountryValue.toLowerCase()) == true) {
        // Oui, ajout du pays à l'ensemble (le Set).
        countries.add(experience.paysDestination);
      }
    }

    /*
     * 1- Conversion de l'ensemble (le Set) en un tableau avec Array.from
     * 2- Tri des valeurs du tableau (les noms des pays donc) avec .sort
     * 3- Pour chaque pays création d'un JSX <li> pour la liste des suggestions de pays
     */
    const searchCountryValue = Array.from(countries).sort().map((country, index) => {
      // Quand on clique sur le <li> il est temps de valider la suggestion.
      return <li key={index} onClick={() => { this.validateCountrySuggestion(country) }}>{country}</li>
    })

    // Mise à jour de la gestion de la saisie du pays.
    this.setState({
      keywordCountry: keywordCountryValue,
      searchCountry: searchCountryValue
    }, () => {
      // Mise à jour de l'affichage des résultats d'expériences correspondantes.
      this.filterResults();
    });
  }





  // Appelé lorsque l'utilisateur a validé une suggestion de ville
  validateVilleSuggestion(ville) {
    // Mise à jour de la gestion de la saisie de la ville.
    this.setState({
      keywordVille: ville,    // Sélection de cette ville
      searchVille: []         // On repart à zéro (disparition des suggestions de villes)
    }, () => {
      // Mise à jour de l'affichage des résultats d'expériences correspondantes.
      this.filterResults();
    });
  }

  // Gestionnaire d'évènement de la saisie de la ville
  onChangeVille = (event) => {

    // Récupération de la saisie de l'utilisateur dans le input.
    const keywordVilleValue = event.currentTarget.value;

    if (keywordVilleValue.trim().length == 0) {
      this.setState({ keywordVille: '', searchVille: [] }),
        this.componentDidMount()
      return
    }
    /*
    * Au début il n'y a pas de suggestions de ville.
    *
    * C'est un ensemble (classe Set) : cela signifie qu'il n'y aura pas de doublons de ville
    * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set
    */
    let villes = new Set();

    // Recherche l'extrait de ville saisi par l'utilisateur (par exemple 'ap' dans 'Japon')
    for (let experience of this.state.experiences) {
      // Est ce que la ville de l'expérience contient la saisie de l'utilisateur ?
      if (experience.villeDestination.toLowerCase().includes(keywordVilleValue.toLowerCase()) == true) {
        // Oui, ajout de la ville à l'ensemble (le Set).
        villes.add(experience.villeDestination);
      }
    }

    /*
    * 1- Conversion de l'ensemble (le Set) en un tableau avec Array.from
    * 2- Tri des valeurs du tableau (les noms des villes donc) avec .sort
    * 3- Pour chaque ville création d'un JSX <li> pour la liste des suggestions de villes
    */
    const searchVilleValue = Array.from(villes).sort().map((ville, index) => {
      // Quand on clique sur le <li> il est temps de valider la suggestion.
      return <li key={index} onClick={() => { this.validateVilleSuggestion(ville) }}>{ville}</li>
    })

    // Mise à jour de la gestion de la saisie de la ville.
    this.setState({
      keywordVille: keywordVilleValue,
      searchVille: searchVilleValue
    }, () => {
      // Mise à jour de l'affichage des résultats d'expériences correspondantes.
      this.filterResults();
    });
  }


  // Appelé lorsque l'utilisateur a validé une suggestion de genre
  validateGenreSuggestion(genre) {
    // Mise à jour de la gestion de la saisie du genre.
    this.setState({
      keywordGenre: genre,    // Sélection de ce genre
      searchGenre: []         // On repart à zéro (disparition des suggestions de genres)
    }, () => {
      // Mise à jour de l'affichage des résultats d'expériences correspondantes.
      this.filterResults();
    });
  }

  // Gestionnaire d'évènement de la saisie du genre
  onChangeGenre = (event) => {

    // Récupération de la saisie de l'utilisateur dans le input.
    const keywordGenreValue = event.currentTarget.value;

    if (keywordGenreValue.trim().length == 0) {
      this.setState({ keywordGenre: '', searchGenre: [] })
      this.componentDidMount()
      return
    }
    /*
     * Au début il n'y a pas de suggestions de genre.
     *
     * C'est un ensemble (classe Set) : cela signifie qu'il n'y aura pas de doublons de genre
     * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set
     */
    let genres = new Set();

    // Recherche l'extrait de genre saisi par l'utilisateur (par exemple 'ap' dans 'Japon')
    for (let experience of this.state.experiences) {
      // Est ce que le genre de l'expérience contient la saisie de l'utilisateur ?
      if (experience.genreCine.toLowerCase().includes(keywordGenreValue.toLowerCase()) == true) {
        // Oui, ajout du genre à l'ensemble (le Set).
        genres.add(experience.genreCine);
      }
    }

    /*
     * 1- Conversion de l'ensemble (le Set) en un tableau avec Array.from
     * 2- Tri des valeurs du tableau (les noms des genre donc) avec .sort
     * 3- Pour chaque genre création d'un JSX <li> pour la liste des suggestions de genres
     */
    const searchGenreValue = Array.from(genres).sort().map((genre, index) => {
      // Quand on clique sur le <li> il est temps de valider la suggestion.
      return <li key={index} onClick={() => { this.validateGenreSuggestion(genre) }}>{genre}</li>
    })

    // Mise à jour de la gestion de la saisie du genre.
    this.setState({
      keywordGenre: keywordGenreValue,
      searchGenre: searchGenreValue
    }, () => {
      // Mise à jour de l'affichage des résultats d'expériences correspondantes.
      this.filterResults();
    });
  }

  render() {

    // Est-ce qu'il n'y a pas d'expérience à afficher ?

    //NON (erreur de saisie)
    if (this.state.searchResults.length == 0) {
      this.state.searchResults = <div className="mx-auto error-msg my-5"> <i class="fas fa-sad-tear"></i> Aucun résultat trouvé ne correspond à votre recherche. </div>
    }

    return (
      <section className="container">
        <h1 id="titreCatalogue">Découvrez nos expériences cinéphiles:</h1>
        <div className="row mt-3 justify-content-center">
          <div>
            <label>Du:</label>
            <input className="searchbar mr-1"
              type="date"
              value={this.state.startDate}
              onChange={(e) => {
                this.setState({ startDate: e.currentTarget.value })
              }}
            />
          </div>
          <div>
            <label>Au:</label>
            <input type="date"
              className="searchbar mr-1"
              value={this.state.endDate}
              onChange={(e) => {
                this.setState({ endDate: e.currentTarget.value })
              }}
            />
          </div>
          <div>
            <input className="searchbar mr-1" type="text" placeholder="Pays" value={this.state.keywordCountry} onChange={this.onChangeCountry} />
            <ul className="xxxxxx">{this.state.searchCountry}</ul>
          </div>
          <div>
            <input className="searchbar mr-1" type="text" placeholder="Ville" value={this.state.keywordVille} onChange={this.onChangeVille} />
            <ul className="xxxxxx">{this.state.searchVille}</ul>
          </div>
          <div>
            <input className="searchbar mr-1" type="text" placeholder="Genre cinématograhique" value={this.state.keywordGenre} onChange={this.onChangeGenre} />
            <ul className="xxxxxx">{this.state.searchGenre}</ul>
          </div>
          <div>
            <select className="searchbar">
              <option defaultValue disabled>Nb de pers:</option>
              <option value="1">1 adulte</option>
              <option value="2">2 adultes</option>
              <option value="3">3 adultes</option>
            </select>
          </div>
        </div>


        {/* Liste des résultats trouvés en temps réel en fonction de la saisie */}
        <div className="row">
          {this.state.searchResults}
        </div>
      </section>
    )
  }
}

export default Form 