import { VALIDER_COMMANDE } from "../actions/types";

const initialState = {
    commande: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case VALIDER_COMMANDE:

            const marguerita = { ...state.sousCommandeMarguerita }
            const pepperoni = { ...state.sousCommandePepperoni }
            const reine = { ...state.sousCommandeReine }
            const _4Fromages = { ...state.sousCommande4Fromages }

            let qteMarguerita = state.quantiteMarguerita
            let qtePepperoni = state.quantitePepperoni
            let qteReine = state.quantiteReine
            let qte4Fromages = state.quantite4Fromages

            let total = this.afficherPrixTotal()
            const commande = [...state.commande]

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

            return {
                commande
            }

        default:
            return state;
    }
}