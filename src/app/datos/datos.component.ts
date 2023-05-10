import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  imgEstancias: any[] = [
    "url('../../assets/img/fondos/estancias/hall.jpg')",
    "url('../../assets/img/fondos/estancias/hab_uno.jpg')",
    "url('../../assets/img/fondos/estancias/hab_dos.jpg')",
    "url('../../assets/img/fondos/estancias/hab_tres.jpg')",
    "url('../../assets/img/fondos/estancias/hab_cuatro.jpg')",
    "url('../../assets/img/fondos/estancias/hab_cinco.jpg')",
    "url('../../assets/img/fondos/estancias/hab_seis.jpg')"
  ];

  imgPersonaje: any[] = [
    "../../assets/img/personajes/Noah_Rios/noah.png",
    "../../assets/img/personajes/Doctor_X/doctor.png",
    "../../assets/img/personajes/Emily_Yang/emily.png",
    "../../assets/img/personajes/Isa_Cortés/isa.png",
    "../../assets/img/personajes/Mei_Chen/mei.png",
    "../../assets/img/personajes/Vicky_Peña/vicky.png"
  ];

  imgObjetos: any[] = [
    "../../assets/img/objetos/objetos/5.png",
    "../../assets/img/objetos/objetos/10.png",
    "../../assets/img/objetos/objetos/6.png",
    "../../assets/img/objetos/objetos/8.png",
    "../../assets/img/objetos/objetos/1.png",
    "../../assets/img/objetos/objetos/2.png",
  ];

  rolEstanciaYObjeto: any[] = [
    "Inocente",
    "Inocente",
    "Inocente",
    "Culpable",
    "Inocente",
    "Inocente",
  ]

  nombreEstacnias: any[] = [
    "Sala de realidad virtual",
    "Centro de innovación y desarrollo",
    "Laboratorio de investigación tecnológica",
    "Área de descanso",
    "Estudio de diseño de IA",
    "Sala de entrenamiento con RA"
  ]

  descEstanciasInocente: any[] = [
    "Espacio diseñado para sumergir al usuario en un ambiente virtual, mediante el uso de tecnología avanzada como gafas VR y sensores de movimiento.",
    "Espacio dedicado a la investigación, experimentación y creación de nuevas soluciones y tecnologías",
    "Espacio donde se realizan investigaciones y experimentos en el ámbito de la tecnología. ",
    "Espacio diseñado para que los empleados o usuarios puedan relajarse y descansar en un ambiente cómodo y tranquilo.",
    "Espacio dedicado al diseño y desarrollo de soluciones basadas en inteligencia artificial.",
    "Espacio diseñado para que los usuarios puedan practicar y entrenar habilidades en un entorno de realidad aumentada. "
  ]

  descEstanciasCulpbale: any[] = [
    "Esta sala puede ser utilizada para crear o manipular información o experiencias de realidad virtual maliciosas para engañar o perjudicar a personas.",
    "Este centro puede ser utilizado para desarrollar tecnologías con fines ilegales o malintencionados, como la creación de herramientas de espionaje o ataques cibernéticos.",
    "Este laboratorio puede ser utilizado para desarrollar tecnologías peligrosas o perjudiciales para la sociedad, como armas autónomas o sistemas de vigilancia masiva.",
    "Esta área puede ser utilizada para llevar a cabo actividades ilegales o sospechosas, como reuniones clandestinas o intercambio de información ilegal.",
    "Este estudio puede ser utilizado para diseñar sistemas de IA con fines maliciosos, como la manipulación de información o la toma de decisiones perjudiciales.",
    "Esta sala puede ser utilizada para entrenar a personas en la realización de actividades ilegales o peligrosas, como la conducción de vehículos de manera imprudente o el uso de armas."
  ]

  rolPersonajes: any[] = [
    "Sincero",
    "Mentiroso",
    "Culpable",
    "Rico",
    "Pobre",
    "Cotilla"
  ]

  respuestaCoartadaInocente: any[] = [
    "Estaba en el departamento de contabilidad esa noche, trabajando en el presupuesto para el próximo trimestre.",
    "Estaba en el almacén haciendo inventario esa noche, no sé nada de lo que pasó después.",
    "Estaba en la sala de descanso viendo la televisión esa noche, no me enteré de nada.",
    "Estaba en mi escritorio trabajando en un informe para el jefe esa noche, no vi nada fuera de lo común.",
    "No puedo recordar exactamente dónde estaba esa noche, pero sé que no fui yo quien hizo eso.",
    "Estaba en mi casa esa noche, trabajando en un proyecto personal. No sé nada sobre lo que pasó.",
    "Estaba en el baño cuando sucedió todo, así que no puedo decir con certeza lo que pasó.",
    "No recuerdo exactamente dónde estaba esa noche, pero no tengo nada que ver con esto.",
  ]

  respuestaCoartadaCulpable: any[] = [
    "Estaba trabajando en mi escritorio esa noche, pero nadie me vio. Sé que parece que fui yo, pero de verdad no lo hice.",
    "No puedo decir dónde estaba esa noche, pero no fui yo quien hizo eso. Por favor, confía en mí.",
    "Lo siento, no tengo coartada. Pero de verdad no soy capaz de hacer algo así."
  ]


  respuestaAcusacionSincero: any[] = [
    "Creo que el culpable es alguien que ha estado actuando de manera sospechosa últimamente, y ese alguien es {NOMBRE}.",
    "He estado observando de cerca los movimientos de mis compañeros y creo que {NOMBRE} es alguien que ha estado evitando dar respuestas claras",
    "{NOMBRE} es alguien que ha estado intentando esconderse detrás de una fachada de inocencia, pero no ha sido muy convincente"
  ]

  respuestaAcusacionMentiroso: any[] = [
    "Estoy seguro de que {NOMBRE} es el culpable. Lo vi salir de la oficina esa noche con algo bajo el brazo",
    "{NOMBRE} es el principal sospechoso en mi opinión. Siempre anda metiéndose en cosas que no le importan",
    "En mi opinión, {NOMBRE} es el verdadero culpable. Tiene más que perder en este incidente"
  ]

  respuestaAcusacionCulpable: any[] = [
    "No puedo acusar a nadie. No quiero perder mi trabajo",
    "Honestamente, no tengo idea de lo que sucedió. No estuve presente en el momento del incidente",
    "Creo que deberíamos dejar el asunto. No quiero involucrarme más de lo necesario"
  ]

  respuestaAcusacionRico: any[] = [
    "Creo que el culpable es {NOMBRE}. Tiene mucho que ganar al obtener algo de valor de la empresa",
    "Sé que {NOMBRE} no lo hizo. Es una persona demasiada tonta para haber planeado algo así",
    "Creo que deberíamos enfocarnos en la búsqueda de pruebas para poder descubrir al verdadero culpable"
  ]

  respuestaAcusacionPobre: any[] = [
    "No tengo idea de quién podría haberlo hecho. Yo estaba trabajando en mi puesto en el momento del incidente",
    "No quiero señalar con el dedo, pero he notado que {NOMBRE} ha estado actuando de manera extraña últimamente",
    "Sé que {NOMBRE} no es una persona confiable. Creo que él haya tenido algo que ver con el incidente"
  ]

  respuestaAcusacionCotilla: any[] = [
    "He escuchado algunos rumores pero no se quién podría estar involucrado en el incidente. Todos han estado actuando de manera extraña ultimamente",
    "No quiero acusar a nadie, pero he notado que todos han estado evitando responder mis preguntas",
    "No sé quién pudo hacerlo. He estado observando los movimientos de todos y no confio en nadie"
  ]

  respuestaNombre: any[] = [
    "¡Saludos! Me llamo {NOMBRE}. ¿En qué puedo ayudarte?",
    "Hola, soy {NOMBRE}. ¿Necesitas algo de mí?",
    "¡Un placer de conocerte! Soy {NOMBRE}. ¿En qué puedo ayudar?",
    "Buen día, soy {NOMBRE}. ¿En qué puedo colaborar contigo?",
    "Hola, ¿cómo estás? Mi nombre es {NOMBRE}. ¿En qué puedo ayudarte hoy?",
    "Soy {NOMBRE}. ¿Qué puedo hacer por ti?",
    "¡Hola! {NOMBRE} a tu servicio. ¿En qué puedo ayudarte hoy?",
    "Me presento, soy {NOMBRE}. ¿En qué puedo ayudarte?",
    "Soy {NOMBRE}. ¿Qué puedo hacer para que tu día sea un poco más fácil?",
    "Un gusto conocerte, soy {NOMBRE}. ¿En qué puedo ayudarte?"
  ]

  descripcionObjetoCulpable: any[] = [
    "A simple vista, parece un objeto común y corriente, pero puede usarse para cometer un delito",
    "Este objeto tiene marcas de haberse golpeado muy fuerte...Interesante",
    "Es un objeto bastante peligroso, alguien puede usarlo para hacer daño",
    "A pesar de su apariencia inofensiva, su peso puede hacerlo un arma",
    "Este objeto puede ser utilizado para dañar a alguien, veo restos de...¿sangre?",
    "Si bien parece un objeto inofensivo, puede ser utilizado en actividades sospechosas. ¿Eso es sangre?"
  ]

  descripcionObjetoInocente: any[] = [
    "Este objeto es inofensivo y su uso es muy común en la vida cotidiana.",
    "Aunque no parece mucho, este objeto puede ser de gran utilidad en ciertas situaciones.",
    "Es un objeto bastante común y su uso es seguro y legal en todo momento.",
    "Si bien no tiene un gran valor monetario, este objeto puede ser muy valioso en términos de su uso práctico.",
    "Es un objeto inofensivo que se ha utilizado de manera segura y responsable en muchas situaciones.",
    "A pesar de su simplicidad, este objeto puede ser muy útil en diversas tareas y situaciones."
  ]
}

export class Estancia {
  nombre: string = "";
  imagen: string = "";
  descripcion: string = "";
  personaje: Personaje = new Personaje;
  objeto: Objeto = new Objeto;
  rol: string = "";
}

export class Personaje {
  id: string = "";
  nombre: string = "";
  imagen: string = "";
  rol: string = "";
  respNombre: string = this.nombre;
  respAcusar: string = "";
  respCoartada: string = "";
}

export class Objeto {
  nombre: string = "";
  imagen: string = "";
  descripcion: string = "";
  rol: string = "";
}
