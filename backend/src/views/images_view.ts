import Image from "../models/Image"

export default {
    render(image: Image) {
        const {id, path} = image
        return {
            id,
            url: `http://localhost:3333/uploads/${image.path}`,
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    }
};