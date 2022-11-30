import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
    async create(galaxyData) {
        const newGalaxy = await dbContext.Galaxies.create(galaxyData)
        return newGalaxy
    }
    async getAll() {
        const galaxies = await dbContext.Galaxies.find()
        return galaxies
    }

}

export const galaxiesService = new GalaxiesService()