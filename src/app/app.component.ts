import { Imagens } from './interfaces/Imagens';
import { Observable } from 'rxjs';
import { ImagensService } from './services/imagens.service';
import { Component, ViewChild } from '@angular/core';
import { PoNotificationService, PoSlideItem } from '@po-ui/ng-components';

import {
  PoDialogService,
  PoMenuItem,
  PoModalComponent,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  slideItems: Array<PoSlideItem> = [];

  @ViewChild('modalVisualizarImagem', { static: true })
  modalVisualizarImagem!: PoModalComponent;

  public imagens: any[] = [];
  slideItem!: PoSlideItem;

  constructor(
    private poAlert: PoDialogService,
    private ImagensService: ImagensService,
    private notificationService: PoNotificationService,
  ) {}

  ngOnInit() {
    this.ImagensService.obterImagens().subscribe({
      next: (imagens: any) => {
        console.log(
          imagens.map((imagem: any) => {
            console.log(imagem.urls.full);
          })
        );
        this.imagens = imagens;


        // const item: PoSlideItem = Object.assign({}, this.slideItem);
        // item.action = item.action = this.showAction.bind(this, 'click') ;

        this.imagens.map((imagem) => {
          this.slideItems = [...this.slideItems, { image: imagem.urls.full, action: this.showAction.bind(this) }];
        });
      },
    });
  }

  imagemSelecionada: any;





  private showAction(evento: any) {
    console.log(evento.image)
    this.imagemSelecionada = evento.image;
  }


  public abrirModalVisualizarImagem(imagem: any) {
    this.imagemSelecionada = imagem.urls.full;
    this.modalVisualizarImagem.open();
    console.log(this.slideItems)
  }

  confirmarExcluirImagem(recno: number, descricao: string) {
    this.poAlert.confirm({
      title: `Tem certeza de que deseja exluir o arquivo ${descricao}?`,
      message: `Tem certeza de que deseja exluir o arquivo ${descricao}?`,
      confirm: () => console.log('excluido'),
      cancel: () => {},
      literals: {
        confirm: 'Confirmar',
        cancel: 'Cancelar',
      },
    });
  }
}
