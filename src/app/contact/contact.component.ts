import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var email 	= require("./path/to/emailjs/email");
    var server 	= email.server.connect({
      user:    "frenditriarista@s4codingcenter.com", 
      password:"password1207",
      host:    "mail.s4codingcenter.com",
      ssl:     true
    });
  }

  sendEmail(form) {
    // send the message and get a callback with an error or details of the message that was sent
    server.send({
      text:    "i hope this works", 
      from:    "frendi1207@gmail.com.com", 
      to:      "frenditriarista@s4codingcenter.com",
      cc:      "xfrends@snapinn.id",
      subject: "testing emailjs"
    }, function(err, message) { console.log(err || message); });
  }
  
}
