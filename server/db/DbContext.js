import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy.js';
import { PlanetSchema } from '../models/Planet.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema);

  Planets = mongoose.model('Planet', PlanetSchema);
  // Colonies = mongoose.model('Colony',)
  // Species = mongoose.model('Species',)
}

export const dbContext = new DbContext()
