const industria = [ {
  name : "mineria / petroleo",
  population : 4000
 },
 {
   name : "petroleo / gas",
   population : 2000
  },
  {
   name : "agroindustria",
   population : 1000
  },
  {
    name : "agricola",
    population : 1500
   },
   {
     name : "agropecuaria",
     population : 1000
   },
   {
     name : "metalurgia",
     population : 200
   },
   {
     name : "hidroelectrica",
     population : 1200                       
   },
   {
      name : "textil",
      population : 800
   },
   {
     name : "conservas",
     population : 500
   },
   {
     name : "cementera",
     population : 500
   }]

const conocimientos = [ {
     name : "mineria de datos",
     population : 400
    },
    {
      name : "excel basico",
      population : 1000
     },
     {
      name : "excel intermedio",
      population : 7000
     },
     {
       name : "excel avanzado",
       population : 500
      },
      {
        name : "autocad",
        population : 1200
      },
      {
        name : "javascript",
        population : 200
      },
      {
        name : "java",
        population : 1200                       },
      {
         name :  "mysql",
         population : 800
      },
      {
        name : "altos conocimientos en diversos lenguajes de progamacion",
        population : 500
      },
      {
        name : "relaciones interpersonales",
        population : 500
      },
      {
        name : "capacidad de liderazgo",
        population : 500
      },
      {
        name :  "bases de datos relacionales",
        population : 2500
      }
      ,
      {
        name : "mongo db",
        population : 900
      }]                      

const grado = [ 
      {
        name : "Bachillerato",
        population : 50
      },
      {
        name :  "Título Profesional",
        population : 800
      },
      {
        name :   "Maestría",
        population : 1000
      },
      {
          name :  "Doctorado",
          population : 500
      },
      {
          name :  "Post-doctorado",
          population : 400
      },
      {
          name : "Secundaria - Completa",
          population : 3000
      },
      {
          name :  "Universitario - Estudiando",
          population : 1200                       
      }
        ]   
const puesto = [ {
 name : "Analista UX",
 population : 50
},
{
 name :  "Diseñador UI",
 population : 100
 },
 {
 name :  "Desarollador Fullstack",
 population : 1000
 },
 {
   name : "CEO - Director Ejecutivo",
   population : 100
 },
 {
   name : "Director de Operaciones",
   population : 1200
 },
 {
   name : "Director de Marketing",
   population : 200
 },
 {
   name :  "Director de Recursos Humanos",
   population : 1200                       
 },
 {
     name :   "Director Comercial",
     population : 800
 },
 {
   name : "Director Financiero",
   population : 500
 },
 {
   name :  "Recepcionista - Atencion al cliente",
   population : 500
 },
 {
   name : "ASESOR COMERCIAL EDUCATIVO",
   population : 500
 },
 {
   name :  "Cajero",
   population : 2500
 },
 {
   name : "Software Developer",
   population : 13000
 },
  {
  name : "Software Architect",
  population : 600
  },
  {
    name :"Solution Architect",
    population : 300
  }
 ]       

const universidad = [ {
   name : "Universidad Nacional de Ingenieria",
   population : 50
 },
 {
   name :   "Universidad Nacional Mayor de San Marcos",
   population : 100
   },
   {
   name :  "Pontificia Universidad Catolica del Peru",
   population : 1000
   },
   {
     name :   "Universidad de Lima",
     population : 100
   },
   {
     name :  "Universidad Nacional de Trujillo",
     population : 1200
   },
   {
     name :  "UTEC",
     population : 200
   },
   {
     name :   "ESAN",
     population : 1200                       
   },
   {
     name :  "UCV",
     population : 200
   },
   {
     name :    "TECSUP",
     population : 1200                       
   }
   ]

const features = [
{
property : "Industria",
labels : industria
},
{
property : "Conocimientos",
labels : conocimientos
},
{
property : "Puesto",
labels : puesto
},
{
property : "Grado",
labels : grado
},
{
property : "Universidad",
labels : universidad  
}
]
module.exports = {
  features
}