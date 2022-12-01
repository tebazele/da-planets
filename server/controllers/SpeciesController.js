import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";

export class SpeciesController extends BaseController {
    constructor() {
        super('api/species')
        this.router
            .get('', this.getAll)
            .post('', this.create)
    }

    async getAll(req, res, next) {
        try {
            const species = await speciesService.getAll()
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const newSpecies = await speciesService.create(req.body)
            return res.send(newSpecies)
        } catch (error) {
            next(error)
        }
    }
}