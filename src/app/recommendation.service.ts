import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RecommendationService {

  private allPreferences: Map<String, String> = new Map()

  constructor(private http: HttpModule) {}

  public setPreference(name: String, value: String ) {
    this.allPreferences.set(name, value)
  }

  public getAllPreferences(): Map<String, String> {
    return this.allPreferences
  }

  public getMoodImage(): Promise<String> {
    let boostString = `&edismax&bq=`
    const comfortLevel = this.allPreferences.get('comfort')
    const activity = this.allPreferences.get('activity')
    if( comfortLevel ) {
      boostString += `price:[${comfortLevel}]^1.5`
    }
    return 
  }

}
