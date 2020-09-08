import { VALIDER_COMMANDE } from './types'

export const validerCommande = (sousCommandeMarguerita, sousCommandePepperoni, sousCommandeReine, sousCommande4Fromages, qteMarguerita, qtePepperoni, qteReine, qte4Fromages) => {
    return ({
        type: VALIDER_COMMANDE,
        payload: {
            sousCommandeMarguerita,
            sousCommandePepperoni,
            sousCommandeReine,
            sousCommande4Fromages,
            qteMarguerita,
            qtePepperoni,
            qteReine,
            qte4Fromages
        }
    })
}