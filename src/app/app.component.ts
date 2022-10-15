import { Imagens } from './interfaces/Imagens';
import { Observable } from 'rxjs';
import { ImagensService } from './services/imagens.service';
import { Component, ViewChild } from '@angular/core';
import { PoSlideItem } from '@po-ui/ng-components';

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
  @ViewChild('modalVisualizarImagem', { static: true })
  modalVisualizarImagem!: PoModalComponent;



  public imagens: any[] = [];

  constructor(
    private poAlert: PoDialogService,
    private ImagensService: ImagensService
  ) {}

  ngOnInit() {


    // this.imagens$ = this.ImagensService.obterImagens()

    // this.imagens$ = this.ImagensService.obterImagens()

    this.ImagensService.obterImagens().subscribe({
      next: (imagens: any) => {
        console.log(
          imagens.map((imagem: any) => {
            console.log(imagem.urls.full);
          })
        );
        this.imagens = imagens;

        console.log(this.imagens)


        // imagens.map((imagem: any) => {
        //   this.imagens$ =  imagem.urls.full;
        //   console.log(this.imagens$)
        // }

        // );
      },
    });
  }

  imagemSelecionada: any;

  public abrirModalVisualizarImagem(imagem: any) {

    console.log(imagem.urls.full)
    this.imagemSelecionada = imagem.urls.full
    this.modalVisualizarImagem.open();

    // this.imagemSelecionada = imagem.Z5_URL;
    // this.modalVisualizarImagem.open();
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
