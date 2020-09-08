import React, { Component } from 'react'
import './NewOrder.css'
import Header from './Header'
import OrderInterface from './OrderInterface'
import pizzas from './pizzas'
import Commande from './Commande'

// redux
import { connect } from 'react-redux'
import { validerCommande } from './../actions'

class NewOrder extends Component {

    state = {
        /* 
        pizzaItems: [],
        montantTotal: 0 */
        numeroCommande: `CMD-15742${10001}`,
        pizzas,
        sousCommandeMarguerita: {},
        sousCommandePepperoni: {},
        sousCommandeReine: {},
        sousCommande4Fromages: {},
        quantiteMarguerita: 0,
        quantitePepperoni: 0,
        quantiteReine: 0,
        quantite4Fromages: 0,
        commande: []
    }

    ajouterPizza(objetPizza) {
        
        /* let newObjetPizza = {nom: objetPizza.nom, prix: objetPizza.prix, quantite: 1, sousTotal = quantite * objetPizza.prix}

        if () {
            const tabItems = [...this.state.pizzaItems, newObjetPizza]
            console.log(tabItems);
        }
       
        this.setState({
            pizzaItems: tabItems
        }) */
        

        let copieSousCommandeMarguerita = { ...this.state.sousCommandeMarguerita }
        let copieSousCommandePepperoni = { ...this.state.sousCommandePepperoni }
        let copieSousCommandeReine = { ...this.state.sousCommandeReine }
        let copieSousCommande4Fromages = { ...this.state.sousCommande4Fromages }

        let copieNumeroCommande = this.state.numeroCommande

        let copieDeQuantiteMarguerita = this.state.quantiteMarguerita
        let copieDeQuantitePepperoni = this.state.quantitePepperoni
        let copieDeQuantiteReine = this.state.quantiteReine
        let copieDeQuantite4Fromages = this.state.quantite4Fromages

        if (objetPizza.nom === 'marguerita') {
            copieDeQuantiteMarguerita += 1
            copieSousCommandeMarguerita = new Commande(copieNumeroCommande, objetPizza.nom, objetPizza.prix, copieDeQuantiteMarguerita, objetPizza.prix * copieDeQuantiteMarguerita)
        } else if (objetPizza.nom === 'pepperoni') {
            copieDeQuantitePepperoni += 1
            copieSousCommandePepperoni = new Commande(copieNumeroCommande, objetPizza.nom, objetPizza.prix, copieDeQuantitePepperoni, objetPizza.prix * copieDeQuantitePepperoni)
        } else if (objetPizza.nom === 'reine') {
            copieDeQuantiteReine += 1
            copieSousCommandeReine = new Commande(copieNumeroCommande, objetPizza.nom, objetPizza.prix, copieDeQuantiteReine, objetPizza.prix * copieDeQuantiteReine)
        } else if (objetPizza.nom === '4 fromages') {
            copieDeQuantite4Fromages += 1
            copieSousCommande4Fromages = new Commande(copieNumeroCommande, objetPizza.nom, objetPizza.prix, copieDeQuantite4Fromages, objetPizza.prix * copieDeQuantite4Fromages)
        }

        this.setState({
            sousCommandeMarguerita: copieSousCommandeMarguerita,
            sousCommandePepperoni: copieSousCommandePepperoni,
            sousCommandeReine: copieSousCommandeReine,
            sousCommande4Fromages: copieSousCommande4Fromages,
            quantiteMarguerita: copieDeQuantiteMarguerita,
            quantitePepperoni: copieDeQuantitePepperoni,
            quantiteReine: copieDeQuantiteReine,
            quantite4Fromages: copieDeQuantite4Fromages
        })

    }

    afficherDetailsParPizza(quantite, sousCommande) {

        if (quantite > 0) {
            return (
                <div className="sous-total">
                    <div>
                        <div>
                            <p>{sousCommande.pizza}</p>
                            <p>{quantite} x {sousCommande.prix} €</p>
                        </div>
                    </div>
                    <p>{sousCommande.sousTotal} €</p>
                </div>
            )
        }
    }

    retournerSousTotalParPizza(sousCommande) {
        if (sousCommande.sousTotal > 0) {
            return sousCommande.sousTotal
        } else {
            return 0
        }
    }

    afficherPrixTotal() {
        let total = this.retournerSousTotalParPizza(this.state.sousCommandeMarguerita) + this.retournerSousTotalParPizza(this.state.sousCommandePepperoni) + this.retournerSousTotalParPizza(this.state.sousCommandeReine) + this.retournerSousTotalParPizza(this.state.sousCommande4Fromages)
        return total
    }


    validerCommande() {
        const marguerita = { ...this.state.sousCommandeMarguerita }
        const pepperoni = { ...this.state.sousCommandePepperoni }
        const reine = { ...this.state.sousCommandeReine }
        const _4Fromages = { ...this.state.sousCommande4Fromages }

        let qteMarguerita = this.state.quantiteMarguerita
        let qtePepperoni = this.state.quantitePepperoni
        let qteReine = this.state.quantiteReine
        let qte4Fromages = this.state.quantite4Fromages

        let total = this.afficherPrixTotal()
        const commande = [...this.state.commande]

        if (qteMarguerita !== 0) {
            commande.push(marguerita, total)
        }

        if (qtePepperoni !== 0) {
            commande.push(pepperoni, total)
        }

        if (qteReine !== 0) {
            commande.push(reine, total)
        }

        if (qte4Fromages !== 0) {
            commande.push(_4Fromages, total)
        }

        
        console.log(commande);

        // TO DO MAJ du state...

    }


    render() {

        let pizzas = this.state.pizzas.map((pizza, index) => {
            return (
                <OrderInterface
                    key={index}
                    image={pizza.image}
                    nom={pizza.nom}
                    prix={pizza.prix}
                    ajouterPizza={() => this.ajouterPizza(pizza)}
                />
            )
        })


        return (
            <div>
                <Header />
                <div className="order-container">
                    <div className="pizzas-container">
                        {pizzas}
                    </div>
                    <div className="order-details">
                        <p>Détail de la commande : {this.state.numeroCommande}</p>
                        {this.afficherDetailsParPizza(this.state.quantiteMarguerita, this.state.sousCommandeMarguerita)}
                        {this.afficherDetailsParPizza(this.state.quantitePepperoni, this.state.sousCommandePepperoni)}
                        {this.afficherDetailsParPizza(this.state.quantiteReine, this.state.sousCommandeReine)}
                        {this.afficherDetailsParPizza(this.state.quantite4Fromages, this.state.sousCommande4Fromages)}
                        <div className="total">
                            <p onClick={() => this.validerCommande()}>Soit un total de {this.afficherPrixTotal()} €</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        commande: state.commande,
        pizzas: state.pizzas
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        validerCommande: (sousCommandeMarguerita, sousCommandePepperoni, sousCommandeReine, sousCommande4Fromages, qteReine, qteMarguerita, qtePepperoni, qte4Fromages) => {
            dispatch(validerCommande(sousCommandeMarguerita, sousCommandePepperoni, sousCommandeReine, sousCommande4Fromages, qteReine, qteMarguerita, qtePepperoni, qte4Fromages))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)
