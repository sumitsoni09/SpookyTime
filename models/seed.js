let seedPlaces = [
  {
    name: "The Largest Ghost Town in America",
    location: "Jerome, Arizona",
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLRYvDwZkDUzND3iqb4Jg6etI59x--mgyMtG4vEmSoM8bhhm4Ew",
    boos: 4,
    description: "A very scary underground hotel in the heart of Arizona. With a population of 400, this place is a ghost town."
  },
  {
    name: "Miss Mollys Hotel",
    location: "Fort Worth, Texas",
    image: "https://i.pinimg.com/originals/71/62/fd/7162fdc56153d0b5c3f5d3fdf8d4124e.png",
    boos: 4,
    description: "A paranormal hotel built in 1910, above a restaurant that features iron beds, antiques, and spir "
  },
  {
    name: "Eastern State Penitentiary",
    location: "Philadelphia, Pennsylvania",
    image: "https://i.ytimg.com/vi/xxOzQZdbcPc/maxresdefault.jpg",
    boos: 7,
    description: "With its looming, gloomy high stone walls, crumbling corridors, and stark cells that once housed thousands of hard-core criminals, Eastern State Penitentiary certainly looks haunted. Its 142-year history is full of suicide, madness, disease, murder and torture, making it easy to imagine the spirits of troubled souls left behind to roam its abandoned halls!"
  },
  {
    name: "Screaming Tunnel",
    location: "Niagara Falls, Ontario, Canada",
    image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2015/01/m_Screaming-Tunnel-Niagara-Falls-Ontario.jpg",
    boos: 5,
    description: "Walk through this tunnel on a pitch black night with a wooden match; you will know why this is called the ‘screaming tunnel’! Hundreds of years back, a young girl hid in this tunnel to escape the wrath of her drunken father. It is said that the soul of the girl still resides inside the tunnel and screams her heart out as someone makes their way into the tunnel with a wooden match."
  },
  {
    name: "Craco Village",
    location: "Craco, Italy",
    image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2015/01/m_Craco-1.jpg",
    boos: 5,
    description: "The last humanly activities reported in this village were in 1963, when the locales were transferred to some other vicinity. Since then no one has decided to turn up to this hamlet as it is considered to be cursed with evil souls and paranormal activities!"
  },
  {
    name: "Winchester Mystery House",
    location: "San Jose, California",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Winchester_House_910px.jpg/250px-Winchester_House_910px.jpg",
    boos: 6,
    description: "This house is said to be filled with ghosts and there was just one catch: construction on the house could never stop. If you continue building, you will live,” one medium warned the owner. Stop and you will die."
  },
  {
    name: "Miyake-jima",
    location: "Miyake-jima, Japan",
    image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2015/01/m_Miyake-jima-1.jpg",
    boos: 7,
    description: "How hard and scary it will be to spend the entire life wearing a gas-mask? If you want to find an answer to this, visit the Miyake-jima, where people spent most of their lives wearing a gas mask in order to withstand the poisonous gases evolving from the active volcanoes."
  },
  {
    name: "Abandoned Military Hospital",
    location: "Beelitz, Germany",
    image: "http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2015/01/m_Military-Hospital-Beelitz-1.jpg",
    boos: 5,
    description: "On a visit to this abandoned hospital, no one can believe that the great Nazi leader Adolf Hitler was treated here! A 60-building treatment facility centre, this hospital was shut down with the downfall of East Germany. All that is left today are the spooky corridors, cranky beds, rusty equipments and the fading colours."
  },
  {
    name: "Willard Asylum",
    location: "Willard, New York",
    image:"http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2015/01/m_Willard-Asylum-Willard-1.jpg",
    boos: 5,
    description: "This chronic asylum came into existence in 1869 and had a capacity of around 4,000 patients at a time. In the course, the asylum witnessed around 50,000 deaths, out of which only a few were natural. Well, this makes the asylum and its morgue, one of the creepiest as well as scariest places."
  },
  {
    name: "Monte Cristo Homestead",
    location: "New South Wales, Australia",
    image:"http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2015/01/m_Monte-Cristo-New-South-Wales.jpg",
    boos: 6,
    description: "What haunts in this Australian cottage is a series of unnatural deaths! Young child falling from the stairs, caretakers killed brutally within the cottage premises, stable boy burnt till death and many such horrific events! Do you still want to visit the Monte Cristo Homestead?"
  },
  {
    name: "Helltown",
    location: "Summit County, Ohio",
    image:"http://d3u4hzlr7ozpoo.cloudfront.net/blog/wp-content/uploads/2015/01/m_Monte-Cristo-New-South-Wales.jpg",
    boos: 4,
    description: "The steep Stanford Road drop off, immediately followed by a dead end, is aptly named The End of the World. If you get stuck at this dead end for too long, according to ghost story enthusiasts, you may meet your end at the hands of many members of the endless parade of freaks patrolling the woods."
  },
  {
    name: "Helltown",
    location: "Summit County, Ohio",
    image:"https://photos.clevescene.com/wp-content/uploads/2016/09/helltown-ohio-and-3.jpg",
    boos: 4,
    description: "The steep Stanford Road drop off, immediately followed by a dead end, is aptly named The End of the World. If you get stuck at this dead end for too long, according to ghost story enthusiasts, you may meet your end at the hands of many members of the endless parade of freaks patrolling the woods."
  },
  {
    name: "The Island of Dolls",
    location: "Mexico",
    image: "https://lastminutegroup-view.thron.com/api/xcontents/resources/delivery/getThumbnail/lastminutegroup/960x0/8d3a7fda-6ad9-4e66-a1ff-c2d855c36551?",
    boos:4,
    description:  "Hanging from the trees of one of the floating islands you\'ll see the blank eyes of hundreds of decaying dolls staring soullessly back at you, many with severed limbs. According to local legend, the Isla de las Munecas (Island of the Dolls) was created by its caretaker. He discovered the body of a young girl who had drowned, and hung her washed-up doll on a tree to pay his respects. He spent the next fifty years adding to the number of dolls."
  }





]
module.exports = seedPlaces;
