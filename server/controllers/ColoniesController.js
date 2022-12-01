import { coloniesService } from "../services/ColoniesService.js";
import BaseController from "../utils/BaseController.js";

export class ColoniesController extends BaseController {
    constructor() {
        super('api/colonies')
        this.router
            .get('', this.getAll)
            .post('', this.create)
    }

    async getAll(req, res, next) {
        try {
            const colonies = await coloniesService.getAll()
            return res.send(colonies)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const newColony = await coloniesService.create(req.body)
            return res.send(newColony)
        } catch (error) {
            next(error)
        }
    }
}