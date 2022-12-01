import { dbContext } from "../db/DbContext.js";

class ColoniesService {
    async getAll() {
        const colonies = await dbContext.Colonies.find().populate('planet species', 'name')
        return colonies
    }
    async create(colonyData) {
        const newColony = await dbContext.Colonies.create(colonyData)
        return newColony
    }

}
export const coloniesService = new ColoniesService()