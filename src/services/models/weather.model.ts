type WeatherResponse = {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    current_units: CurrentUnits
    current: Current
}

type CurrentUnits = {
    time: string
    interval: string
    temperature_2m: string
}

type Current = {
    time: string
    interval: number
    temperature_2m: number
}

export type { WeatherResponse, CurrentUnits, Current };