import React, { Component } from 'react';
import './App.css';
import Tuile from './components/Tuile'
import Header from './components/Header'
import { CrownOutlined, CoffeeOutlined, EuroCircleOutlined } from '@ant-design/icons'

class App extends Component {

  newOrder() {
    console.log('click');
    this.props.history.push(`/nouvelle-commande`)
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <Header />

          <section id="actions">
            <Tuile link={() => this.newOrder()}>
              <div className="tuile-logo">
                <CrownOutlined />
              </div>
              <div className="tuile-descriptions">
                <h2>Nouvelle commande</h2>
                <p>Créer et enregistrer une nouvelle commande</p>
              </div>
            </Tuile>

            <Tuile className="tuile-elts" id="commande-encours">
              <div className="tuile-logo">
                <CoffeeOutlined />
              </div>
              <div className="tuile-descriptions">
                <h2>Commandes en cours</h2>
                <p>Voir le détail des commandes en cours</p>
              </div>
            </Tuile>

            <Tuile className="tuile-elts" id="paiement">
              <div className="tuile-logo">
                <EuroCircleOutlined />
              </div>
              <div className="tuile-descriptions">
                <h2>Paiement commandes</h2>
                <p>Encaisser une commande</p>
              </div>
            </Tuile>
          </section>
        
        </div>
      </div>
    );
  }

}

export default App;
