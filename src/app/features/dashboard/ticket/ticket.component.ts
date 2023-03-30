import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  item2: Ticket[] = [];
  constructor(
    private service: TicketService
  ) { }
 
  ngOnInit() {
  
    this.GetTicket();
  }
  
  GetTicket() {
    this.service.getTopTickets().subscribe((allData) => {
      this.item2 = allData;
      console.log(this.item2);
 
    });
  }


}
