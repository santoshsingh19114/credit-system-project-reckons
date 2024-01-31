import { Component, OnInit } from '@angular/core';



interface FAQ {
  question: string;
  answer: string;
  active: boolean;
}


interface Testimonial {
  name: string;
  message: string;
}






@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  
faqList: FAQ[] = [
  { question: 'Question 1', answer: 'Answer 1', active: false },
  { question: 'Question 2', answer: 'Answer 2', active: false },
  { question: 'Question 2', answer: 'Answer 2', active: false },
  { question: 'Question 2', answer: 'Answer 2', active: false },
  // Add more FAQ items as needed
];
slidesStore: any;
  
  currLng:any;
  currLat:any;

togglePanel(faq: FAQ): void {
  faq.active = !faq.active;
}





// customOptions: OwlOptions = {
//   loop: true,
//   mouseDrag: false,
//   touchDrag: false,
//   pullDrag: false,
//   dots: false,
//   navSpeed: 700,
//   navText: ['', ''],
//   responsive: {
//     0: {
//       items: 1
//     },
//     400: {
//       items: 2
//     },
//     740: {
//       items: 3
//     },
//     940: {
//       items: 4
//     }
//   },
//   nav: true
// }


testimonials: Testimonial[] = [
  { name: 'John Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { name: 'Jane Doe', message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  // Add more testimonials as needed
];

currentTestimonialIndex = 0;

ngOnInit() {
  this.startSlider();
  this.getUserLocation();
}


getUserLocation() {
//   if (navigator.geolocation) {
//    navigator.geolocation.getCurrentPosition(position => {
//        this.lat = position.coords.latitude;
//        this.lng = position.coords.longitude;
//        console.log("user allowed")
//      });
// }else {
//   console.log("User not allow")

// }

// navigator.geolocation.getCurrentPosition(function(){
//   alert('Location accessed')
  
// },function(){
//  alert('User not allowed')
// },{timeout:10000})




if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {

    this.currLat = position.coords.latitude;
    this.currLng = position.coords.longitude;
    console.log(`Latitude: ${this.currLat}, Longitude: ${this.currLng}`);
  });
}
else {
  alert("Geolocation is not supported by this browser.");
}


}

startSlider() {
  setInterval(() => {
    this.showNextTestimonial();
  }, 2000); // Change this value based on how long you want each testimonial to be displayed
}


showNextTestimonial() {
  this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
}
  

}
