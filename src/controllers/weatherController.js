
import { fetchWeatherData } from "../models/weatherModels.js";

export async function fetchWeather(req, res){
    const {chosenLat, chosenLon} = req.body;

    const fetchedWeatherData = await fetchWeatherData(chosenLat, chosenLon);

    const details = fetchedWeatherData?.data?.instant?.details ?? {};
    const next1hDetails = fetchedWeatherData?.data?.next_1_hours?.details ?? {};
    const next1hSummary = fetchedWeatherData?.data?.next_1_hours?.summary ?? {};
    const vaerInfo = {
        hour: fetchedWeatherData.time ?? null,
        temperature: details.air_temperature ?? null,
        windSpeed: details.wind_speed ?? null,
        precipitationAmountNext1h: next1hDetails.precipitation_amount ?? 0,
        next1hSymbol: next1hSummary.symbol_code ?? null,
    };

    if (fetchWeatherData){
        return res.json({vaerInfo});
    }else{
        return res.json({sucess: false});
    }
}