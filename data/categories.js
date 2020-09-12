const categories = [
  {
    "label": "Food & Beverage",
    "value": "food-beverage"
  },
  {
    "label": "Bagel Shop",
    "value": "bagel-shop"
  },
  {
    "label": "Bakery",
    "value": "bakery"
  },
  {
    "label": "Wholesale Bakery",
    "value": "wholesale-bakery"
  },
  {
    "label": "Bar",
    "value": "bar"
  },
  {
    "label": "Beer Bar",
    "value": "beer-bar"
  },
  {
    "label": "Beer Garden",
    "value": "beer-garden"
  },
  {
    "label": "Champagne Bar",
    "value": "champagne-bar"
  },
  {
    "label": "Cocktail Bar",
    "value": "cocktail-bar"
  },
  {
    "label": "Dive Bar",
    "value": "dive-bar"
  },
  {
    "label": "Gay Bar",
    "value": "gay-bar"
  },
  {
    "label": "Hookah Lounge",
    "value": "hookah-lounge"
  },
  {
    "label": "Hotel Bar",
    "value": "hotel-bar"
  },
  {
    "label": "Irish Pub",
    "value": "irish-pub"
  },
  {
    "label": "Lounge",
    "value": "lounge"
  },
  {
    "label": "Pub",
    "value": "pub"
  },
  {
    "label": "Sake Bar",
    "value": "sake-bar"
  },
  {
    "label": "Speakeasy",
    "value": "speakeasy"
  },
  {
    "label": "Sports Bar",
    "value": "sports-bar"
  },
  {
    "label": "Tiki Bar",
    "value": "tiki-bar"
  },
  {
    "label": "Whisky Bar",
    "value": "whisky-bar"
  },
  {
    "label": "Wine Bar",
    "value": "wine-bar"
  },
  {
    "label": "Bottled Water Company",
    "value": "bottled-water-company"
  },
  {
    "label": "Brewery",
    "value": "brewery"
  },
  {
    "label": "Bubble Tea Shop",
    "value": "bubble-tea-shop"
  },
  {
    "label": "Butcher Shop",
    "value": "butcher"
  },
  {
    "label": "Cafe",
    "value": "cafe"
  },
  {
    "label": "Coffee Shop",
    "value": "coffee-shop"
  },
  {
    "label": "Pet Cafe",
    "value": "pet-cafe"
  },
  {
    "label": "Tea Room",
    "value": "tea-room"
  },
  {
    "label": "Cafeteria",
    "value": "cafeteria"
  },
  {
    "label": "Caterer",
    "value": "caterer"
  },
  {
    "label": "Cheese Shop",
    "value": "cheese-shop"
  },
  {
    "label": "Convenience Store",
    "value": "convenience-store"
  },
  {
    "label": "Deli",
    "value": "deli"
  },
  {
    "label": "Dessert Shop",
    "value": "dessert-restaurant"
  },
  {
    "label": "Candy Store",
    "value": "candy-store"
  },
  {
    "label": "Chocolate Shop",
    "value": "chocolate-shop"
  },
  {
    "label": "Cupcake Shop",
    "value": "cupcake-shop"
  },
  {
    "label": "Frozen Yogurt Shop",
    "value": "frozen-yogurt-shop"
  },
  {
    "label": "Gelato Shop",
    "value": "gelato-shop"
  },
  {
    "label": "Ice Cream Shop",
    "value": "ice-cream-parlor"
  },
  {
    "label": "Shaved Ice Shop",
    "value": "shaved-ice-shop"
  },
  {
    "label": "Distillery",
    "value": "distillery"
  },
  {
    "label": "Donut Shop",
    "value": "donut-shop"
  },
  {
    "label": "Farmers Market",
    "value": "farmers-market"
  },
  {
    "label": "Foodservice Distributor",
    "value": "food-beverage-service-distribution"
  },
  {
    "label": "Food Consultant",
    "value": "food-consultant"
  },
  {
    "label": "Food Delivery Service",
    "value": "food-delivery-service"
  },
  {
    "label": "Grocery Store",
    "value": "food-grocery"
  },
  {
    "label": "Ethnic Grocery Store",
    "value": "ethnic-grocery-store"
  },
  {
    "label": "Fish Market",
    "value": "fish-market"
  },
  {
    "label": "Fruit & Vegetable Store",
    "value": "fruit-vegetable-store"
  },
  {
    "label": "Health Food Store",
    "value": "health-food-store"
  },
  {
    "label": "Organic Grocery Store",
    "value": "organic-grocery-store"
  },
  {
    "label": "Specialty Grocery Store",
    "value": "specialty-grocery-store"
  },
  {
    "label": "Supermarket",
    "value": "supermarket"
  },
  {
    "label": "Wholesale Grocer",
    "value": "wholesale-grocer"
  },
  {
    "label": "Food Stand",
    "value": "food-stand"
  },
  {
    "label": "Food Truck",
    "value": "food-truck"
  },
  {
    "label": "Food Wholesaler",
    "value": "food-wholesaler"
  },
  {
    "label": "Meat Wholesaler",
    "value": "meat-wholesaler"
  },
  {
    "label": "Restaurant Wholesaler",
    "value": "restaurant-wholesale"
  },
  {
    "label": "Wine, Beer & Spirits Store",
    "value": "liquor-store"
  },
  {
    "label": "Homebrew Supply Store",
    "value": "homebrew-supply-store"
  },
  {
    "label": "Personal Chef",
    "value": "personal-chef"
  },
  {
    "label": "Restaurant",
    "value": "restaurant"
  },
  {
    "label": "Afghani Restaurant",
    "value": "afghani-restaurant"
  },
  {
    "label": "African Restaurant",
    "value": "african-restaurant"
  },
  {
    "label": "Ethiopian Restaurant",
    "value": "ethiopian-restaurant"
  },
  {
    "label": "Nigerian Restaurant",
    "value": "nigerian-restaurant"
  },
  {
    "label": "Senegalese Restaurant",
    "value": "senegalese-restaurant"
  },
  {
    "label": "South African Restaurant",
    "value": "south-african-restaurant"
  },
  {
    "label": "American Restaurant",
    "value": "american-restaurant"
  },
  {
    "label": "Arabian Restaurant",
    "value": "arabian-restaurant"
  },
  {
    "label": "Asian Restaurant",
    "value": "asian-restaurant"
  },
  {
    "label": "Asian Fusion Restaurant",
    "value": "asian-fusion-restaurant"
  },
  {
    "label": "Burmese Restaurant",
    "value": "burmese-restaurant"
  },
  {
    "label": "Cambodian Restaurant",
    "value": "cambodian-restaurant"
  },
  {
    "label": "Chinese Restaurant",
    "value": "chinese-restaurant"
  },
  {
    "label": "Anhui Restaurant",
    "value": "anhui-restaurant"
  },
  {
    "label": "Beijing Restaurant",
    "value": "beijing-restaurant"
  },
  {
    "label": "Cantonese Restaurant",
    "value": "cantonese-restaurant"
  },
  {
    "label": "Dim Sum Restaurant",
    "value": "dim-sum-restaurant"
  },
  {
    "label": "Dongbei Restaurant",
    "value": "dongbei-restaurant"
  },
  {
    "label": "Fujian Restaurant",
    "value": "fujian-restaurant"
  },
  {
    "label": "Guizhou Restaurant",
    "value": "guizhou-restaurant"
  },
  {
    "label": "Hainan Restaurant",
    "value": "hainan-restaurant"
  },
  {
    "label": "Henan Restaurant",
    "value": "henan-restaurant"
  },
  {
    "label": "Hong Kong Restaurant",
    "value": "hong-kong-restaurant"
  },
  {
    "label": "Hot Pot Restaurant",
    "value": "hot-pot-restaurant"
  },
  {
    "label": "Huaiyang Restaurant",
    "value": "huaiyang-restaurant"
  },
  {
    "label": "Hubei Restaurant",
    "value": "hubei-restaurant"
  },
  {
    "label": "Hunan Restaurant",
    "value": "hunan-restaurant"
  },
  {
    "label": "Imperial Restaurant",
    "value": "imperial-restaurant"
  },
  {
    "label": "Jiangsu Restaurant",
    "value": "jiangsu-restaurant"
  },
  {
    "label": "Jiangxi Restaurant",
    "value": "jiangxi-restaurant"
  },
  {
    "label": "Macanese Restaurant",
    "value": "macanese-restaurant"
  },
  {
    "label": "Manchu Restaurant",
    "value": "manchu-restaurant"
  },
  {
    "label": "Shaanxi Restaurant",
    "value": "shaanxi-restaurant"
  },
  {
    "label": "Shandong Restaurant",
    "value": "shandong-restaurant"
  },
  {
    "label": "Shanghainese Restaurant",
    "value": "shanghainese-restaurant"
  },
  {
    "label": "Shanxi Restaurant",
    "value": "shanxi-restaurant"
  },
  {
    "label": "Szechuan/Sichuan Restaurant",
    "value": "szechuan-sichuan-restaurant"
  },
  {
    "label": "Tianjin Restaurant",
    "value": "tianjin-restaurant"
  },
  {
    "label": "Xinjiang Restaurant",
    "value": "xinjiang-restaurant"
  },
  {
    "label": "Yunnan Restaurant",
    "value": "yunnan-restaurant"
  },
  {
    "label": "Zhejiang Restaurant",
    "value": "zhejiang-restaurant"
  },
  {
    "label": "Filipino Restaurant",
    "value": "filipino-restaurant"
  },
  {
    "label": "Indo Chinese Restaurant",
    "value": "indo-chinese-restaurant"
  },
  {
    "label": "Indonesian Restaurant",
    "value": "indonesian-restaurant"
  },
  {
    "label": "Acehnese Restaurant",
    "value": "acehnese-restaurant"
  },
  {
    "label": "Balinese Restaurant",
    "value": "balinese-restaurant"
  },
  {
    "label": "Betawinese Restaurant",
    "value": "betawinese-restaurant"
  },
  {
    "label": "Javanese Restaurant",
    "value": "javanese-restaurant"
  },
  {
    "label": "Manadonese Restaurant",
    "value": "manadonese-restaurant"
  },
  {
    "label": "Padangnese Restaurant",
    "value": "padangnese-restaurant"
  },
  {
    "label": "Sundanese Restaurant",
    "value": "sundanese-restaurant"
  },
  {
    "label": "Japanese Restaurant",
    "value": "japanese-restaurant"
  },
  {
    "label": "Donburi Restaurant",
    "value": "donburi-restaurant"
  },
  {
    "label": "Kaiseki Restaurant",
    "value": "kaiseki-restaurant"
  },
  {
    "label": "Kushikatsu Restaurant",
    "value": "kushikatsu-restaurant"
  },
  {
    "label": "Monjayaki Restaurant",
    "value": "monjayaki-restaurant"
  },
  {
    "label": "Nabe Restaurant",
    "value": "nabe-restaurant"
  },
  {
    "label": "Okonomiyaki Restaurant",
    "value": "okonomiyaki-restaurant"
  },
  {
    "label": "Ramen Restaurant",
    "value": "ramen-restaurant"
  },
  {
    "label": "Shabu Shabu Restaurant",
    "value": "shabu-shabu-restaurant"
  },
  {
    "label": "Soba Restaurant",
    "value": "soba-restaurant"
  },
  {
    "label": "Sukiyaki Restaurant",
    "value": "sukiyaki-restaurant"
  },
  {
    "label": "Sushi Restaurant",
    "value": "sushi-restaurant"
  },
  {
    "label": "Takoyaki Restaurant",
    "value": "takoyaki-restaurant"
  },
  {
    "label": "Tempura Restaurant",
    "value": "tempura-restaurant"
  },
  {
    "label": "Teppanyaki Restaurant",
    "value": "teppanyaki-restaurant"
  },
  {
    "label": "Tonkatsu Restaurant",
    "value": "tonkatsu-restaurant"
  },
  {
    "label": "Udon Restaurant",
    "value": "udon-restaurant"
  },
  {
    "label": "Unagi Restaurant",
    "value": "unagi-restaurant"
  },
  {
    "label": "Wagashi Restaurant",
    "value": "wagashi-restaurant"
  },
  {
    "label": "Yakiniku Restaurant",
    "value": "yakiniku-restaurant"
  },
  {
    "label": "Yakitori Restaurant",
    "value": "yakitori-restaurant"
  },
  {
    "label": "Yoshoku Restaurant",
    "value": "yoshoku-restaurant"
  },
  {
    "label": "Korean Restaurant",
    "value": "korean-restaurant"
  },
  {
    "label": "Bossam/Jokbal Restaurant",
    "value": "bossam-jokbal-restaurant"
  },
  {
    "label": "Bunsik Restaurant",
    "value": "bunsik-restaurant"
  },
  {
    "label": "Gukbap Restaurant",
    "value": "gukbap-restaurant"
  },
  {
    "label": "Janguh Restaurant",
    "value": "janguh-restaurant"
  },
  {
    "label": "Samgyetang Restaurant",
    "value": "samgyetang-restaurant"
  },
  {
    "label": "Malaysian Restaurant",
    "value": "malaysian-restaurant"
  },
  {
    "label": "Mongolian Restaurant",
    "value": "mongolian-restaurant"
  },
  {
    "label": "Noodle House",
    "value": "noodle-house"
  },
  {
    "label": "Singaporean Restaurant",
    "value": "singaporean-restaurant"
  },
  {
    "label": "Taiwanese Restaurant",
    "value": "taiwanese-restaurant"
  },
  {
    "label": "Thai Restaurant",
    "value": "thai-restaurant"
  },
  {
    "label": "Vietnamese Restaurant",
    "value": "vietnamese-restaurant"
  },
  {
    "label": "Pho Restaurant",
    "value": "pho-restaurant"
  },
  {
    "label": "Australian Restaurant",
    "value": "australian-restaurant"
  },
  {
    "label": "Austrian Restaurant",
    "value": "austrian-restaurant"
  },
  {
    "label": "Bar & Grill",
    "value": "bar-grill"
  },
  {
    "label": "Barbecue Restaurant",
    "value": "barbecue-restaurant"
  },
  {
    "label": "Basque Restaurant",
    "value": "basque-restaurant"
  },
  {
    "label": "Belgian Restaurant",
    "value": "belgian-restaurant"
  },
  {
    "label": "Breakfast & Brunch Restaurant",
    "value": "breakfast-brunch-restaurant"
  },
  {
    "label": "British Restaurant",
    "value": "british-restaurant"
  },
  {
    "label": "Buffet Restaurant",
    "value": "buffet-restaurant"
  },
  {
    "label": "Burger Restaurant",
    "value": "burger-restaurant"
  },
  {
    "label": "Cajun & Creole Restaurant",
    "value": "cajun-creole-restaurant"
  },
  {
    "label": "Canadian Restaurant",
    "value": "canadian-restaurant"
  },
  {
    "label": "Caribbean Restaurant",
    "value": "caribbean-restaurant"
  },
  {
    "label": "Dominican Restaurant",
    "value": "dominican-restaurant"
  },
  {
    "label": "Haitian Restaurant",
    "value": "haitian-restaurant"
  },
  {
    "label": "Jamaican Restaurant",
    "value": "jamaican-restaurant"
  },
  {
    "label": "Trinidadian Restaurant",
    "value": "trinidadian-restaurant"
  },
  {
    "label": "Catalan Restaurant",
    "value": "catalan-restaurant"
  },
  {
    "label": "Chicken Joint",
    "value": "chicken-restaurant"
  },
  {
    "label": "Comfort Food Restaurant",
    "value": "comfort-food-restaurant"
  },
  {
    "label": "Continental Restaurant",
    "value": "continental-restaurant"
  },
  {
    "label": "Crêperie",
    "value": "creperie"
  },
  {
    "label": "Czech Restaurant",
    "value": "czech-restaurant"
  },
  {
    "label": "Diner",
    "value": "diner"
  },
  {
    "label": "Drive In Restaurant",
    "value": "drive-in-restaurant"
  },
  {
    "label": "Eastern European Restaurant",
    "value": "eastern-european-restaurant"
  },
  {
    "label": "Belarusian Restaurant",
    "value": "belarusian-restaurant"
  },
  {
    "label": "Bulgarian Restaurant",
    "value": "bulgarian-restaurant"
  },
  {
    "label": "Romanian Restaurant",
    "value": "romanian-restaurant"
  },
  {
    "label": "Tatar Restaurant",
    "value": "tatar-restaurant"
  },
  {
    "label": "Egyptian Restaurant",
    "value": "egyptian-restaurant"
  },
  {
    "label": "European Restaurant",
    "value": "european-restaurant"
  },
  {
    "label": "Family Style Restaurant",
    "value": "family-style-restaurant"
  },
  {
    "label": "Fast Food Restaurant",
    "value": "fast-food-restaurant"
  },
  {
    "label": "Fish & Chips Restaurant",
    "value": "fish-chips-shop"
  },
  {
    "label": "Fondue Restaurant",
    "value": "fondue-restaurant"
  },
  {
    "label": "French Restaurant",
    "value": "french-restaurant"
  },
  {
    "label": "Gastropub",
    "value": "gastropub"
  },
  {
    "label": "German Restaurant",
    "value": "german-restaurant"
  },
  {
    "label": "Baden Restaurant",
    "value": "baden-restaurant"
  },
  {
    "label": "Bavarian Restaurant",
    "value": "bavarian-restaurant"
  },
  {
    "label": "Hessian Restaurant",
    "value": "hessian-restaurant"
  },
  {
    "label": "Palatine Restaurant",
    "value": "palatine-restaurant"
  },
  {
    "label": "Saxon Restaurant",
    "value": "saxon-restaurant"
  },
  {
    "label": "Swabian Restaurant",
    "value": "swabian-restaurant"
  },
  {
    "label": "Gluten-Free Restaurant",
    "value": "glutenfree-restaurant"
  },
  {
    "label": "Halal Restaurant",
    "value": "halal-restaurant"
  },
  {
    "label": "Hawaiian Restaurant",
    "value": "hawaiian-restaurant"
  },
  {
    "label": "Health Food Restaurant",
    "value": "health-food-restaurant"
  },
  {
    "label": "Himalayan Restaurant",
    "value": "himalayan-restaurant"
  },
  {
    "label": "Hot Dog Joint",
    "value": "hot-dog-joint"
  },
  {
    "label": "Hungarian Restaurant",
    "value": "hungarian-restaurant"
  },
  {
    "label": "Iberian Restaurant",
    "value": "iberian-restaurant"
  },
  {
    "label": "Indian Restaurant",
    "value": "indian-restaurant"
  },
  {
    "label": "Andhra Restaurant",
    "value": "andhra-restaurant"
  },
  {
    "label": "Awadhi Restaurant",
    "value": "awadhi-restaurant"
  },
  {
    "label": "Bengali/Bangladeshi Restaurant",
    "value": "bengali-bangladeshi-restaurant"
  },
  {
    "label": "Chaat Place",
    "value": "chaat-place"
  },
  {
    "label": "Chettinad Restaurant",
    "value": "chettinad-restaurant"
  },
  {
    "label": "Dhaba Restaurant",
    "value": "dhaba-restaurant"
  },
  {
    "label": "Dosa Restaurant",
    "value": "dosa-restaurant"
  },
  {
    "label": "Goan Restaurant",
    "value": "goan-restaurant"
  },
  {
    "label": "Gujarati Restaurant",
    "value": "gujarati-restaurant"
  },
  {
    "label": "Hyderabadi Restaurant",
    "value": "hyderabadi-restaurant"
  },
  {
    "label": "Indian Chinese Restaurant",
    "value": "indian-chinese-restaurant"
  },
  {
    "label": "Irani Restaurant",
    "value": "irani-restaurant"
  },
  {
    "label": "Jain Restaurant",
    "value": "jain-restaurant"
  },
  {
    "label": "Karnataka Restaurant",
    "value": "karnataka-restaurant"
  },
  {
    "label": "Kashmiri Restaurant",
    "value": "kashmiri-restaurant"
  },
  {
    "label": "Kerala Restaurant",
    "value": "kerala-restaurant"
  },
  {
    "label": "Maharashtrian Restaurant",
    "value": "maharashtrian-restaurant"
  },
  {
    "label": "Mughalai Restaurant",
    "value": "mughalai-restaurant"
  },
  {
    "label": "North Indian Restaurant",
    "value": "north-indian-restaurant"
  },
  {
    "label": "Parsi Restaurant",
    "value": "parsi-restaurant"
  },
  {
    "label": "Punjabi Restaurant",
    "value": "punjabi-restaurant"
  },
  {
    "label": "Rajasthani Restaurant",
    "value": "rajasthani-restaurant"
  },
  {
    "label": "South Indian Restaurant",
    "value": "south-indian-restaurant"
  },
  {
    "label": "Tamilian Restaurant",
    "value": "tamilian-restaurant"
  },
  {
    "label": "Udupi Restaurant",
    "value": "udupi-restaurant"
  },
  {
    "label": "Uttar Pradesh Restaurant",
    "value": "uttar-pradesh-restaurant"
  },
  {
    "label": "Irish Restaurant",
    "value": "irish-restaurant"
  },
  {
    "label": "Italian Restaurant",
    "value": "italian-restaurant"
  },
  {
    "label": "Abruzzo Restaurant",
    "value": "abruzzo-restaurant"
  },
  {
    "label": "Aosta Restaurant",
    "value": "aosta-restaurant"
  },
  {
    "label": "Basilicata Restaurant",
    "value": "basilicata-restaurant"
  },
  {
    "label": "Calabrian Restaurant",
    "value": "calabrian-restaurant"
  },
  {
    "label": "Emilia Romagna Restaurant",
    "value": "emilia-romagna-restaurant"
  },
  {
    "label": "Friuli Venezia Giulia Restaurant",
    "value": "friuli-venezia-giulia-restaurant"
  },
  {
    "label": "Ligurian Restaurant",
    "value": "ligurian-restaurant"
  },
  {
    "label": "Lombard Restaurant",
    "value": "lombard-restaurant"
  },
  {
    "label": "Marche Restaurant",
    "value": "marche-restaurant"
  },
  {
    "label": "Molise Restaurant",
    "value": "molise-restaurant"
  },
  {
    "label": "Neapolitan Restaurant",
    "value": "neapolitan-restaurant"
  },
  {
    "label": "Piedmont Restaurant",
    "value": "piedmont-restaurant"
  },
  {
    "label": "Puglia Restaurant",
    "value": "puglia-restaurant"
  },
  {
    "label": "Roman Restaurant",
    "value": "roman-restaurant"
  },
  {
    "label": "Sardinian Restaurant",
    "value": "sardinian-restaurant"
  },
  {
    "label": "Sicilian Restaurant",
    "value": "sicilian-restaurant"
  },
  {
    "label": "South Tyrolean Restaurant",
    "value": "south-tyrolean-restaurant"
  },
  {
    "label": "Trentino Alto Adige Restaurant",
    "value": "trentino-alto-adige-restaurant"
  },
  {
    "label": "Tuscan Restaurant",
    "value": "tuscan-restaurant"
  },
  {
    "label": "Umbrian Restaurant",
    "value": "umbrian-restaurant"
  },
  {
    "label": "Venetian Restaurant",
    "value": "venetian-restaurant"
  },
  {
    "label": "Kosher Restaurant",
    "value": "kosher-restaurant"
  },
  {
    "label": "Latin American Restaurant",
    "value": "latin-american-restaurant"
  },
  {
    "label": "Argentinian Restaurant",
    "value": "argentine-restaurant"
  },
  {
    "label": "Belizean Restaurant",
    "value": "belizean-restaurant"
  },
  {
    "label": "Bolivian Restaurant",
    "value": "bolivian-restaurant"
  },
  {
    "label": "Brazilian Restaurant",
    "value": "brazilian-restaurant"
  },
  {
    "label": "Chilean Restaurant",
    "value": "chilean-restaurant"
  },
  {
    "label": "Colombian Restaurant",
    "value": "colombian-restaurant"
  },
  {
    "label": "Costa Rican Restaurant",
    "value": "costa-rican-restaurant"
  },
  {
    "label": "Cuban Restaurant",
    "value": "cuban-restaurant"
  },
  {
    "label": "Ecuadorian Restaurant",
    "value": "ecuadorian-restaurant"
  },
  {
    "label": "Guatemalan Restaurant",
    "value": "guatamalan-restaurant"
  },
  {
    "label": "Honduran Restaurant",
    "value": "honduran-restaurant"
  },
  {
    "label": "Mexican Restaurant",
    "value": "mexican-restaurant"
  },
  {
    "label": "Tex-Mex Restaurant",
    "value": "texmex-restaurant"
  },
  {
    "label": "Nicaraguan Restaurant",
    "value": "nicaraguan-restaurant"
  },
  {
    "label": "Panamanian Restaurant",
    "value": "panamanian-restaurant"
  },
  {
    "label": "Paraguayan Restaurant",
    "value": "paraguayan-restaurant"
  },
  {
    "label": "Peruvian Restaurant",
    "value": "peruvian-restaurant"
  },
  {
    "label": "Puerto Rican Restaurant",
    "value": "puerto-rican-restaurant"
  },
  {
    "label": "Salvadoran Restaurant",
    "value": "salvadoran-restaurant"
  },
  {
    "label": "Uruguayan Restaurant",
    "value": "uruguayan-restaurant"
  },
  {
    "label": "Venezuelan Restaurant",
    "value": "venezuelan-restaurant"
  },
  {
    "label": "Live & Raw Food Restaurant",
    "value": "live-raw-food-restaurant"
  },
  {
    "label": "Mediterranean Restaurant",
    "value": "mediterranean-restaurant"
  },
  {
    "label": "Greek Restaurant",
    "value": "greek-restaurant"
  },
  {
    "label": "Middle Eastern Restaurant",
    "value": "middle-eastern-restaurant"
  },
  {
    "label": "Armenian Restaurant",
    "value": "armenian-restaurant"
  },
  {
    "label": "Azerbaijani Restaurant",
    "value": "azerbaijani-restaurant"
  },
  {
    "label": "Georgian Restaurant",
    "value": "georgian-restaurant"
  },
  {
    "label": "Israeli Restaurant",
    "value": "israeli-restaurant"
  },
  {
    "label": "Kurdish Restaurant",
    "value": "kurdish-restaurant"
  },
  {
    "label": "Lebanese Restaurant",
    "value": "lebanese-restaurant"
  },
  {
    "label": "Persian/Iranian Restaurant",
    "value": "persian-restaurant"
  },
  {
    "label": "Syrian Restaurant",
    "value": "syrian-restaurant"
  },
  {
    "label": "Turkish Restaurant",
    "value": "turkish-restaurant"
  },
  {
    "label": "Kebab Shop",
    "value": "kebab-shop"
  },
  {
    "label": "Modern European Restaurant",
    "value": "modern-european-restaurant"
  },
  {
    "label": "Molecular Gastronomy Restaurant",
    "value": "molecular-gastronomy-restaurant"
  },
  {
    "label": "Moroccan Restaurant",
    "value": "moroccan-restaurant"
  },
  {
    "label": "Nepalese Restaurant",
    "value": "nepalese-restaurant"
  },
  {
    "label": "New American Restaurant",
    "value": "new-american-restaurant"
  },
  {
    "label": "Pakistani Restaurant",
    "value": "pakistani-restaurant"
  },
  {
    "label": "Pizza Place",
    "value": "pizza-place"
  },
  {
    "label": "Polish Restaurant",
    "value": "polish-restaurant"
  },
  {
    "label": "Polynesian Restaurant",
    "value": "polynesian-restaurant"
  },
  {
    "label": "Portuguese Restaurant",
    "value": "portuguese-restaurant"
  },
  {
    "label": "Russian Restaurant",
    "value": "russian-restaurant"
  },
  {
    "label": "Salad Bar",
    "value": "salad-bar"
  },
  {
    "label": "Scandinavian Restaurant",
    "value": "scandinavian-restaurant"
  },
  {
    "label": "Scottish Restaurant",
    "value": "scottish-restaurant"
  },
  {
    "label": "Seafood Restaurant",
    "value": "seafood-restaurant"
  },
  {
    "label": "Slovakian Restaurant",
    "value": "slovakian-restaurant"
  },
  {
    "label": "Soul Food Restaurant",
    "value": "soul-food-restaurant"
  },
  {
    "label": "Soup Restaurant",
    "value": "soup-restaurant"
  },
  {
    "label": "Southern Restaurant",
    "value": "southern-restaurant"
  },
  {
    "label": "Southwestern Restaurant",
    "value": "southwestern-restaurant"
  },
  {
    "label": "Spanish Restaurant",
    "value": "spanish-restaurant"
  },
  {
    "label": "Sri Lankan Restaurant",
    "value": "sri-lankan-restaurant"
  },
  {
    "label": "Steakhouse",
    "value": "steakhouse"
  },
  {
    "label": "Swiss Restaurant",
    "value": "swiss-restaurant"
  },
  {
    "label": "Tapas Bar & Restaurant",
    "value": "tapas-bar-restaurant"
  },
  {
    "label": "Theme Restaurant",
    "value": "theme-restaurant"
  },
  {
    "label": "Ukrainian Restaurant",
    "value": "ukrainian-restaurant"
  },
  {
    "label": "Uzbek Restaurant",
    "value": "uzbek-restaurant"
  },
  {
    "label": "Vegetarian/Vegan Restaurant",
    "value": "vegetarian-vegan-restaurant"
  },
  {
    "label": "Sandwich Shop",
    "value": "sandwich-shop"
  },
  {
    "label": "Smoothie & Juice Bar",
    "value": "smoothie-juice-bar"
  },
  {
    "label": "Winery/Vineyard",
    "value": "winery-vineyard"
  }
];

export default categories;