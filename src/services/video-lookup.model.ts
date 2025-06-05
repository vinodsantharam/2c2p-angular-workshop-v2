type VideoLookupResult = {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    status: string
    runtime: number
    averageRuntime: number
    premiered: string
    ended: any
    officialSite: string
    schedule: Schedule
    rating: Rating
    weight: number
    network: Network
    webChannel: any
    dvdCountry: any
    externals: Externals
    image: Image
    summary: string
    updated: number
    _links: Links
  }
  
  type Schedule = {
    time: string
    days: string[]
  }
  
  type Rating = {
    average: number
  }
  
  type Network = {
    id: number
    name: string
    country: Country
    officialSite: string
  }
  
  type Country = {
    name: string
    code: string
    timezone: string
  }
  
  type Externals = {
    tvrage: any
    thetvdb: number
    imdb: string
  }
  
  type Image = {
    medium: string
    original: string
  }
  
  type Links = {
    self: Self
    previousepisode: Previousepisode
  }
  
  type Self = {
    href: string
  }
  
  type Previousepisode = {
    href: string
    name: string
  }

  export type { VideoLookupResult };