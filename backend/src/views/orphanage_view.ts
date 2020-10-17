import Orphanage from "../models/Orphanage";
import images_view from "./images_view";
import ImagesView from "./images_view";

export default {
    render(orphanage: Orphanage) {
        const {id, name, latitude, longitude, about, instructions, opening_hours, open_on_weekends} = orphanage
        return {
            id,
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images: images_view.renderMany(orphanage.images)
        }
    },

    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage))
    }
};