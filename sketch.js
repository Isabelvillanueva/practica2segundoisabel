
function setup(){
  var canvas = createCanvas(1000,800);
  database=firebase.database();
  producto=new Producto();
  //form=new form()
  //form.display()
  cliente=new Cliente();
  form2 = new Form2();
  form2.display();
}

function draw (){
background("Pink")

}