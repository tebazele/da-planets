import { dbContext } from "../db/DbContext.js";

class PlanetsService {
    async getAll() {
        const planets = await dbContext.Planets.find().populate('galaxy', 'name')
        return planets
    }
    async create(planetData) {
        const newPlanet = await dbContext.Planets.create(planetData)
        return newPlanet
    }

}

export const planetsService = new PlanetsService()