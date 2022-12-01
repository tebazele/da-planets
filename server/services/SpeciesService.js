import { dbContext } from "../db/DbContext.js"

class SpeciesService {
    async getAll() {
        const species = await dbContext.Species.find()
        return species
    }
    async create(speciesData) {
        const newSpecies = await dbContext.Species.create(speciesData)
        return newSpecies
    }

}

export const speciesService = new SpeciesService()