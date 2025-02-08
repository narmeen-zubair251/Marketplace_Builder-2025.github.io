import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"mz07uwv1",
  dataset:"production",
  apiVersion:"2025-01-18",
  token:"skMG4LOioT7zAEFYRU0LcN24vwqCLrpzbllWej6cLywmgmOhMyVVc1rnoLysoB1uKTHxkc3mgV7yhQdZ9Hi1tNt6WiTx09Zdb1y1759OBtpv4sjXLKPtDi86xKYqwRWJQDbIZxFRg8G4yZRhPKZ2p5alEO45V9aHJphGpu4LtkfzXdSFel7a",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
