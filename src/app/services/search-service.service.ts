import { Injectable } from '@angular/core';
import { AppData } from '../app.details';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private dataService:DataService,private appData:AppData) { }

  search(searchString:string)
  {

    return this.dataService.getData(`https://api.tomtom.com/search/2/search/${searchString}.json?typeahead=true&limit=5&countrySet=IN&view=IN&key=${this.appData.appData.tomTomApiKey}`);


  }

  reverseGeocode(latlng:google.maps.LatLng)
  {
    return this.dataService.getData(`https://api.tomtom.com/search/2/reverseGeocode/${latlng.lat()}%2C${latlng.lng()}.json?key=${this.appData.appData.tomTomApiKey}`);
  }
}
