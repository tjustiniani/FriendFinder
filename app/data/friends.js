// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [

{
  name:"Tiffany",
  photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
},

{
  name:"Lola",
  photo:"http://www.kimballstock.com/pix/RAB/01/RAB-01-GR0330-01P.JPG",
  scores:[
      "5",
      "1",
      "3",
      "4",
      "3",
      "1",
      "2",
      "2",
      "4",
      "3"
    ]
},

{
  name:"Gizmo",
  photo:"https://s-media-cache-ak0.pinimg.com/736x/fc/22/5e/fc225e8a6af59b57a08c9ef434112425--shih-tzu-mix-poodle-mix.jpg",
  scores:[
      "5",
      "2",
      "4",
      "4",
      "5",
      "5",
      "2",
      "2",
      "1",
      "1"
    ]
},
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;