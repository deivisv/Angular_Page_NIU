import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'app-store-page',
	templateUrl: './store-page.component.html',
	styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements AfterViewInit {
	@ViewChild("asText") public asText!: ElementRef;
	@ViewChild("miBoton") public asBoton!: ElementRef;
	@ViewChild("asImg") public asImg!: ElementRef;
	@ViewChild("miBotonDos") public asBotonDos!: ElementRef;
	@ViewChild('asTextPrueba') asTextPrueba!:ElementRef;
	@ViewChild("miBotonTres") public asBotonTres!: ElementRef;

	constructor(private renderer: Renderer2) { }

	ngAfterViewInit(): void {
		
		const urlImg = 'https://pepeganga.vtexassets.com/arquivos/ids/469085/10205658202-1.jpg?v=637275082303400000'
		const letra = 'palabra constante'
		
		setTimeout(() => {
			this.asText.nativeElement.innerText = "Hola se va a cambiar el mensaje";
		}, 3000);

		setTimeout(() => {
			this.renderer.createText(this.asText.nativeElement.innerHTML = "Hello Angular")
		}, 4000);

		this.asBoton.nativeElement.addEventListener('click', ()=>{
			alert("Se hizo click");
			this.renderer.createText(this.asText.nativeElement.innerHTML = "Texto con renderer2 y boton")
			this.renderer.setAttribute(this.asText.nativeElement, 'style', 'color:red' );
		}, false)

		this.asBotonDos.nativeElement.addEventListener('click', ()=>{
			alert("Se hizo click en el div");
			this.renderer.setAttribute(this.asImg.nativeElement, 'src', urlImg)
			/* this.asText.nativeElement.innerText = "Texto con boton"; */
		}, false)

		this.asBotonTres.nativeElement.addEventListener('click', ()=>{
			
		}, false)
	}

	



}

/* this.asBoton.nativeElement.addEventListener('click', ()=>{
	alert("Se hizo click");
	this.asText.nativeElement.innerText = "Texto con boton";
}, false) */