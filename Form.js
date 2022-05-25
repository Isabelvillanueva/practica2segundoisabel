class Form{
    constructor(){
         this.title=createElement("h1");
         this.nombredelproducto=createElement("h4");
         this.departamento=createElement("h4")
         this.precioproducto=createElement("h4")
         this.descripcion=createElement("h4")
         this.stock=createElement("h4")
 
         this.inputN = createInput();
         this.inputD= createInput();
         this.inputP = createInput();
         this.inputDes = createInput();
         this.inputS = createInput();
         this.button = createButton("Registrar producto");
     }
     display(){
         this.title.html("Registro producto");
         this.title.position(230,0);
         this.nombredelproducto.html("Nombre del producto");
         this.nombredelproducto.position(120,100)
         this.departemento.html("departamento");
         this.departamento.position(120,100);
         this.preciodelproducto.html("preciodelproducto");
         this.preciodelproducto.position(120,100);
         this.descripcion.html("descripcion");
         this.descripcion.position(150,230);
         this.stock.html("stock");
         this.stock.position(230,100);
 
 
 
         this.inputN.position(200,200);
         this.inputD.position(190,200);
         this.inputP.position(180,200);
         this.inputDes.position(170,200);
         this.inputS.position(160,200);
         this.button.position(150,200);
 
         this.button.mousePressed(()=>{
             producto.nombreproducto=this.imputN.value();
             producto.departamento=this.inputD.value();
             producto.preciodelproducto=this.inputP.value();
             producto.descripcion=this.inputDes.value();
             producto.stock=this.inputS.value();
             producto.update();
         })
     }
 }