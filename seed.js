var models        = require("./models"),
    User          = models.users,
    Product       = models.producs;
    // Reviews           = models.reviews;

var users = [
  {
  username: "sara",
  name: "Ana",
  about: "Time Traveller",
  email: "ana@ana.com"
  location: "NYC",
  website: "www.ana.com",
  user_picture: "http://slodive.com/wp-content/uploads/2012/08/keira-knightley-short-hair/cute-hair.jpg",
  skin_tone: "5",
  skin_type: "dry",
  hair_type: "3c",
  hair_color: "black"
  },
  {
  username: "teste",
  name: "Ana",
  about: "Time Traveller",
  email: "ann@ann.com",
  location: "NYC",
  website: "www.ana.com",
  user_picture: "http://slodive.com/wp-content/uploads/2012/08/keira-knightley-short-hair/cute-hair.jpg",
  skin_tone: "5",
  skin_type: "dry",
  hair_type: "3c",
  hair_color: "black"
  },
  {
  username: "cris",
  name: "Ana",
  about: "Time Traveller",
  email: "ann@ann.com",
  location: "NYC",
  website: "www.ana.com",
  user_picture: "http://slodive.com/wp-content/uploads/2012/08/keira-knightley-short-hair/cute-hair.jpg",
  skin_tone: "5",
  skin_type: "dry",
  hair_type: "3c",
  hair_color: "black"
  },
  {
  username: "teste2",
  name: "Ana",
  about: "Time Traveller",
  email: "ann@ann.com",
  location: "NYC",
  website: "www.ana.com",
  user_picture: "http://slodive.com/wp-content/uploads/2012/08/keira-knightley-short-hair/cute-hair.jpg",
  skin_tone: "5",
  skin_type: "dry",
  hair_type: "3c",
  hair_color: "black"
  }
]
    
var products = [
  {
  product: "Cheek Pop",
  brand: "Clinique",
  description: "Discover pure, natural cheek color that looks virtually powderless. Its unique, patented technology transforms pure liquid pigment into a smooth, silky powder through a process of slow baking, leaving true color—from compact to cheeks.This silky smooth, stay-true formula creates a vibrant, healthy-looking glow without a trace of powder residue. ",
  picture: "http://img2.timeinc.net/health/images/slideshows/coral-cream-blush-400x400.jpg",
  website: "http://www.clinique.com",
  rating: 10,
  review: "The best blush ever",
  user_id: 1,
  },
  {
  product: "Cheek Pop",
  brand: "Clinique",
  description: "Discover pure, natural cheek color that looks virtually powderless. Its unique, patented technology transforms pure liquid pigment into a smooth, silky powder through a process of slow baking, leaving true color—from compact to cheeks.This silky smooth, stay-true formula creates a vibrant, healthy-looking glow without a trace of powder residue. ",
  picture: "http://img2.timeinc.net/health/images/slideshows/coral-cream-blush-400x400.jpg",
  website: "http://www.clinique.com",
  rating: 10,
  review: "The best blush ever",
  user_id: 2,
  },
  {
  product: "Cheek Pop",
  brand: "Clinique",
  description: "Discover pure, natural cheek color that looks virtually powderless. Its unique, patented technology transforms pure liquid pigment into a smooth, silky powder through a process of slow baking, leaving true color—from compact to cheeks.This silky smooth, stay-true formula creates a vibrant, healthy-looking glow without a trace of powder residue. ",
  picture: "http://img2.timeinc.net/health/images/slideshows/coral-cream-blush-400x400.jpg",
  website: "http://www.clinique.com",
  user_id: 3,
  },
  {
  product: "Cheek Pop",
  brand: "Clinique",
  description: "Discover pure, natural cheek color that looks virtually powderless. Its unique, patented technology transforms pure liquid pigment into a smooth, silky powder through a process of slow baking, leaving true color—from compact to cheeks.This silky smooth, stay-true formula creates a vibrant, healthy-looking glow without a trace of powder residue. ",
  picture: "http://img2.timeinc.net/health/images/slideshows/coral-cream-blush-400x400.jpg",
  website: "http://www.clinique.com",
  rating: 10,
  review: "The best blush ever",
  user_id: 4,
  }
]

var seedDatabase = function () {
    users.forEach( function (user) {
        User
            .create({
          username: user.username,
          name: user.name,
          email: user.email,
          about: user.about,
          location: user.location,
          website: user.website,
          user_picture: user.user_picture,
          skin_tone: user.skin_tone,
          skin_type: user.skin_type,
          hair_type: user.hair_type,
          hair_color: user.hair_color
            });
    });
    products.forEach( function (product) {
        Product
            .create({
          product: product.product,
          brand: product.brand,
          description: product.description,
          picture: product.picture,
          website: product.website,
          rating: product.rating,
          review: product.review,
          user_id: product.user_id
            });
    });
};

seedDatabase();