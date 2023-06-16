import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {sanityProjectID, sanityDataset, studioTitle} from './environment';

console.log(sanityProjectID, sanityDataset);

export default defineConfig({
  name: 'default',
  title: studioTitle,

  projectId: sanityProjectID,
  dataset: sanityDataset || 'production',

  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
