import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  authToken:string = '';
  inspirationRecords:any = [];

  constructor(public alertController: AlertController, public toastController: ToastController, private router: Router) {
    this.inspirationRecords = [
      {
        title:'From working as helper to winning Cricket match for his IPL team',
        description:'Rinku Singh is an Indian cricketer who primarily plays as a left-handed batsman. He was born on October 12, 1997, in Aligarh, Uttar Pradesh, India. Rinku made his debut in domestic cricket representing Uttar Pradesh in the 2016-17 season.',
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBlLAaC14DqMG0UhyvPrwWzw18sXRa4BGlrdACh4jPTDo_5aMQ',
        id: '1'
      },
      {
        title:'William Shakespeare: The Iconic Playwright and Literary Legend',
        description:'William Shakespeare, often regarded as the greatest playwright in English literature, was born in Stratford-upon-Avon, England, around April 26, 1564, and died on April 23, 1616. His works have had a profound and enduring impact on literature, theater, and the English language.',
        image: 'data:image/jpeg;base64,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',
        id: '2'
      },
      {
        title:'Shah Rukh Khan: The King of Bollywood and Charismatic Icon',
        description:'Shah Rukh Khan, often referred to as the "King of Bollywood," is one of the most prominent and influential actors in the Indian film industry. Born on November 2, 1965, in New Delhi, India, Shah Rukh Khan has achieved immense fame and success throughout his career.',
        image: 'https://images.news18.com/ibnlive/uploads/2017/11/Shah-Rukh-Khan-at-the-Millennium-Dome-London.jpg?impolicy=website&width=0&height=0',
        id: '3'
      },
      {
        title:'Araniko: The Renowned Nepalese Artist, Architect, and Engineer',
        description:'Araniko, also known as Arniko or Aniko, was a renowned architect, artist, and sculptor who lived during the 13th and 14th centuries. He was born in the year 1245 in the Kathmandu Valley, which is present-day Nepal. Araniko is considered one of the most influential figures in Nepalese and Tibetan art and architecture.',
        image: 'data:image/jpeg;base64,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',
        id: '4'
      }
    ]
   }

  presentAlertConfirm(message: string) {
    return new Promise(async (resolve, reject) => {
      const alert = await this.alertController.create({
        header: "Please confirm",
        message: message,
        buttons: [
          {
            text: "No",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              reject("Cancel");
            },
          },
          {
            text: "Yes",
            handler: async () => {
              resolve("Yes");
            },
          },
        ],
      });
      await alert.present();
    });
  }

  async showToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      cssClass: "toast",
      duration: 2000,
    });
    toast.present();
  }

}
