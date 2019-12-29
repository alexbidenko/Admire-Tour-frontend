import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {MatDialog} from '@angular/material';
import {ResultComponent} from '../../dialogs/result/result.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  name: string;
  phone: string;

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  sendBackMessage() {
    if (this.name && this.phone) {
      this.apiService.sendBackMessage(`Постетитель сайта ${this.name} (+7${this.phone}) желает заказать тур.`)
        .subscribe(response => {
          if (response.result === 'good') {
            this.dialog.open(ResultComponent, {
              data: {title: `${this.name}, Ваша заявка успешно отправлена, Вам перезвонят в ближайшее время.`}
            });
          } else {
            console.error(response);
          }
        });
    }
  }
}
