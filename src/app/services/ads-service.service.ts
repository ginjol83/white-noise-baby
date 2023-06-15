import { Injectable } from '@angular/core';
import { AdMob, AdOptions, BannerAdOptions, BannerAdSize, BannerAdPosition, AdLoadInfo, BannerAdPluginEvents, AdMobBannerSize, InterstitialAdPluginEvents } from '@capacitor-community/admob';


@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {

  constructor() { }

  initialize(){
    AdMob.initialize({})
  }
  

  interstitial(){
    AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // Subscribe prepared interstitial
    });
  
    const options: AdOptions = {
      adId: 'ca-app-pub-9669223673392187/7675824744',
      // isTesting: true
      // npa: true
    };
    AdMob.prepareInterstitial(options);
    AdMob.showInterstitial();
  }
  
  banner() {
    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      // Subscribe Banner Event Listener
    });
  
    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size: AdMobBannerSize) => {
      // Subscribe Change Banner Size
    });
  
    const options: BannerAdOptions = {
      adId: 'ca-app-pub-9669223673392187/7607304300',
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      // isTesting: true
      // npa: true
    };
    AdMob.showBanner(options);
  }
  

}
