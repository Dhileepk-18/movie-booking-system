// ============================================
// MOVIE BOOKING SYSTEM - CORE STATE & INITIALIZATION
// ============================================

// User session data - initialized on page load
window.userSession = {
  loggedIn: false,
  userName: null,
  email: null,
  passwordHash: null,
  preferences: {
    genres: [],
    language: null,
    mood: null,
    minRating: 1.0
  },
  currentMovie: null,
  userRatings: {},
  wishlist: []
};

// ============================================
// MOVIES DATABASE
// ============================================

const MOVIES_DATABASE = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    language: "English",
    mood: "emotional",
    rating: 4.9,
    description: "Two imprisoned men bond over a number of years, finding redemption through acts of common decency",
    duration: "2h 22min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    price: 250
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Drama",
    language: "English",
    mood: "suspenseful",
    rating: 4.9,
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son",
    duration: "2h 55min",
    showTimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:00 PM"],
    price: 280
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    language: "English",
    mood: "thrilling",
    rating: 4.9,
    description: "Batman faces off against the Joker, a criminal mastermind who wants to plunge Gotham into anarchy",
    duration: "2h 32min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    price: 300
  },
  {
    id: 4,
    title: "Inception",
    genre: "Sci-Fi",
    language: "English",
    mood: "thrilling",
    rating: 4.8,
    description: "A skilled thief who steals corporate secrets through the use of dream-sharing technology",
    duration: "2h 28min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    price: 300
  },
  {
    id: 5,
    title: "Dangal",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.9,
    description: "An ex-wrestler trains his daughters to become wrestlers and battle the societal norms and his own disappointments",
    duration: "2h 41min",
    showTimes: ["9:00 AM", "12:30 PM", "4:00 PM", "7:30 PM"],
    price: 200
  },
  {
    id: 6,
    title: "3 Idiots",
    genre: "Comedy",
    language: "Hindi",
    mood: "fun",
    rating: 4.8,
    description: "Two friends search for their estranged buddy from college and recall the memories of their college days and their friend",
    duration: "2h 51min",
    showTimes: ["11:00 AM", "3:00 PM", "7:00 PM", "10:00 PM"],
    price: 200
  },
  {
    id: 7,
    title: "Bajrangi Bhaijaan",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.7,
    description: "A Muslim man separates from his family for a noble cause, by helping and escaping with a young deaf and mute Pakistani girl",
    duration: "2h 44min",
    showTimes: ["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"],
    price: 220
  },
  {
    id: 8,
    title: "Gully Boy",
    genre: "Drama",
    language: "Hindi",
    mood: "thrilling",
    rating: 4.6,
    description: "A street rapper aspires to end the paucity and hardship for his family and achieve a stardom status that has always been a distant dream",
    duration: "2h 34min",
    showTimes: ["10:30 AM", "2:30 PM", "6:30 PM", "9:30 PM"],
    price: 250
  },
  {
    id: 9,
    title: "Chak De India",
    genre: "Sports",
    language: "Hindi",
    mood: "thrilling",
    rating: 4.7,
    description: "An Indian women's hockey team coach trains the team to lead them to victory and reclaim national pride",
    duration: "2h 3min",
    showTimes: ["9:00 AM", "1:00 PM", "5:00 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 10,
    title: "Taare Zameen Par",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.8,
    description: "A teacher discovers one of his students is a peculiar child who is hyperactive and refuses to follow the rules of the school",
    duration: "2h 45min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 11,
    title: "Lagaan",
    genre: "Drama",
    language: "Hindi",
    mood: "thrilling",
    rating: 4.8,
    description: "In 1893, Indian villagers rebel against the British Raj by playing a game of cricket to avoid heavy taxes",
    duration: "3h 44min",
    showTimes: ["11:00 AM", "3:00 PM", "7:00 PM", "11:00 PM"],
    price: 250
  },
  {
    id: 12,
    title: "Jab We Met",
    genre: "Romance",
    language: "Hindi",
    mood: "fun",
    rating: 4.7,
    description: "A lonely guy meets a spirited girl on a chaotic train journey and they start an unexpected romance",
    duration: "2h 9min",
    showTimes: ["10:00 AM", "12:30 PM", "3:00 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 13,
    title: "Rang De Basanti",
    genre: "Drama",
    language: "Hindi",
    mood: "thrilling",
    rating: 4.7,
    description: "Six friends unite for a social cause and become revolutionaries, fighting against corruption and injustice",
    duration: "2h 42min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    price: 220
  },
  {
    id: 14,
    title: "Titanic",
    genre: "Romance",
    language: "English",
    mood: "emotional",
    rating: 4.7,
    description: "A rich woman falls in love with a poor artist aboard the luxurious, ill-fated R.M.S. Titanic",
    duration: "3h 14min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    price: 280
  },
  {
    id: 15,
    title: "Avengers: Endgame",
    genre: "Action",
    language: "English",
    mood: "thrilling",
    rating: 4.8,
    description: "After the devastating events, remaining Avengers must reverse Thanos' actions and restore balance to the universe",
    duration: "3h 2min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    price: 300
  },
  {
    id: 16,
    title: "Interstellar",
    genre: "Sci-Fi",
    language: "English",
    mood: "emotional",
    rating: 4.8,
    description: "A team of explorers travel through a wormhole in space to ensure humanity's survival",
    duration: "2h 49min",
    showTimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
    price: 300
  },
  {
    id: 17,
    title: "Finding Nemo",
    genre: "Comedy",
    language: "English",
    mood: "fun",
    rating: 4.7,
    description: "An overprotective clownfish embarks on a journey to find his estranged son",
    duration: "1h 40min",
    showTimes: ["10:00 AM", "12:00 PM", "3:00 PM", "5:30 PM"],
    price: 200
  },
  {
    id: 18,
    title: "Back to the Future",
    genre: "Sci-Fi",
    language: "English",
    mood: "fun",
    rating: 4.8,
    description: "A teenager is accidentally sent 30 years into the past and must ensure his parents fall in love",
    duration: "1h 56min",
    showTimes: ["10:00 AM", "1:30 PM", "4:00 PM", "7:00 PM"],
    price: 250
  },
  {
    id: 19,
    title: "Jurassic Park",
    genre: "Action",
    language: "English",
    mood: "thrilling",
    rating: 4.8,
    description: "A tour of a genetic theme park goes horribly wrong when dinosaurs break containment",
    duration: "2h 7min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    price: 300
  },
  {
    id: 20,
    title: "The Lion King",
    genre: "Fantasy",
    language: "English",
    mood: "adventurous",
    rating: 4.8,
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne",
    duration: "1h 28min",
    showTimes: ["10:00 AM", "1:30 PM", "4:00 PM", "7:00 PM"],
    price: 250
  },
  {
    id: 21,
    title: "Mom",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.6,
    description: "A mother embarks on a dangerous journey to seek justice and take revenge on those who wronged her daughter",
    duration: "2h 28min",
    showTimes: ["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"],
    price: 220
  },
  {
    id: 22,
    title: "PK",
    genre: "Comedy",
    language: "Hindi",
    mood: "fun",
    rating: 4.6,
    description: "An alien lands on Earth and tries to understand human behavior and religion through the eyes of a man",
    duration: "2h 33min",
    showTimes: ["10:30 AM", "1:30 PM", "4:30 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 23,
    title: "Happy New Year",
    genre: "Comedy",
    language: "Hindi",
    mood: "fun",
    rating: 4.5,
    description: "A group of friends plan a daring heist to steal diamonds from a museum during New Year's Eve",
    duration: "2h 44min",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    price: 220
  },
  {
    id: 24,
    title: "Sholay",
    genre: "Action",
    language: "Hindi",
    mood: "thrilling",
    rating: 4.7,
    description: "A police officer recruits two small-time crooks to capture a bandit and his gang",
    duration: "3h 26min",
    showTimes: ["11:00 AM", "3:00 PM", "7:00 PM", "10:00 PM"],
    price: 200
  },
  {
    id: 25,
    title: "Munna Bhai M.B.B.S.",
    genre: "Comedy",
    language: "Hindi",
    mood: "fun",
    rating: 4.7,
    description: "A gangster pretends to study medicine and ends up learning profound truths about life",
    duration: "2h 24min",
    showTimes: ["10:00 AM", "12:30 PM", "3:00 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 26,
    title: "Hera Pheri",
    genre: "Comedy",
    language: "Hindi",
    mood: "fun",
    rating: 4.6,
    description: "Two out-of-work men get involved in a kidnapping case and a series of misadventures",
    duration: "2h 24min",
    showTimes: ["10:30 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    price: 200
  },
  {
    id: 27,
    title: "Ghajini",
    genre: "Thriller",
    language: "Hindi",
    mood: "suspenseful",
    rating: 4.6,
    description: "A man with short-term memory loss seeks revenge on the person responsible for his wife's death",
    duration: "2h 41min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 28,
    title: "Dhoom 2",
    genre: "Action",
    language: "Hindi",
    mood: "thrilling",
    rating: 4.5,
    description: "Police officers chase international thieves across exotic locations as they pull off daring heists",
    duration: "2h 39min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    price: 250
  },
  {
    id: 29,
    title: "Jodhaa Akbar",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.5,
    description: "A love story between Mughal Emperor Akbar and Rajput princess Jodhaa",
    duration: "3h 45min",
    showTimes: ["11:00 AM", "3:00 PM", "7:00 PM", "11:00 PM"],
    price: 250
  },
  {
    id: 30,
    title: "The Matrix",
    genre: "Sci-Fi",
    language: "English",
    mood: "thrilling",
    rating: 4.7,
    description: "A computer programmer discovers that reality as he knows it is a simulation created by machines",
    duration: "2h 16min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    price: 300
  },
  {
    id: 31,
    title: "Bhaag Milkha Bhaag",
    genre: "Drama",
    language: "Hindi",
    mood: "thrilling",
    rating: 4.6,
    description: "An athlete overcomes personal trauma to become one of India's greatest runners",
    duration: "2h 23min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 32,
    title: "Yeh Jawaani Hai Deewani",
    genre: "Romance",
    language: "Hindi",
    mood: "fun",
    rating: 4.5,
    description: "Two young people meet at a travel group and develop feelings for each other across the years",
    duration: "2h 26min",
    showTimes: ["10:30 AM", "1:00 PM", "4:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 33,
    title: "Kabhi Khushi Kabhi Gham",
    genre: "Comedy",
    language: "Hindi",
    mood: "emotional",
    rating: 4.6,
    description: "A estranged family reunites when a younger son brings home his love interest of a different faith",
    duration: "3h 34min",
    showTimes: ["11:00 AM", "3:00 PM", "7:00 PM", "11:00 PM"],
    price: 220
  },
  {
    id: 34,
    title: "Movie Galaxy",
    genre: "Action",
    language: "English",
    mood: "adventurous",
    rating: 4.7,
    description: "A group of misfits comes together to save the galaxy from destruction",
    duration: "2h 2min",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    price: 300
  },
  {
    id: 35,
    title: "Singham",
    genre: "Action",
    language: "Hindi",
    mood: "thrilling",
    rating: 4.4,
    description: "An honest police officer must fight corruption and take on powerful gangsters to bring justice",
    duration: "2h 19min",
    showTimes: ["10:30 AM", "1:30 PM", "4:30 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 36,
    title: "Padmaavat",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.5,
    description: "A Rajput queen chooses to go to war rather than be captured by an invading sultan",
    duration: "2h 34min",
    showTimes: ["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"],
    price: 280
  },
  {
    id: 37,
    title: "Baahubali",
    genre: "Action",
    language: "Hindi",
    mood: "thrilling",
    rating: 4.6,
    description: "A young man discovers his true identity and fights for his kingdom's honor and his father's legacy",
    duration: "2h 39min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    price: 300
  },
  {
    id: 38,
    title: "Raees",
    genre: "Thriller",
    language: "Hindi",
    mood: "suspenseful",
    rating: 4.5,
    description: "A crime lord rises to power in the criminal underground but faces a police officer determined to stop him",
    duration: "2h 32min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 250
  },
  {
    id: 39,
    title: "Secret Superstar",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.5,
    description: "A young girl becomes an anonymous music sensation while hiding from her abusive father",
    duration: "2h 29min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "8:30 PM"],
    price: 200
  },
  {
    id: 40,
    title: "Pink",
    genre: "Thriller",
    language: "Hindi",
    mood: "suspenseful",
    rating: 4.5,
    description: "Three women fight against injustice when they are falsely accused of a crime",
    duration: "2h 20min",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 41,
    title: "Pad Man",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.4,
    description: "A man dedicates his life to creating affordable menstrual hygiene products for women",
    duration: "2h 20min",
    showTimes: ["10:00 AM", "1:30 PM", "4:30 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 42,
    title: "Toilet: Ek Prem Katha",
    genre: "Comedy",
    language: "Hindi",
    mood: "fun",
    rating: 4.4,
    description: "A young man fights for bathroom rights in rural India to support his village",
    duration: "2h 36min",
    showTimes: ["10:30 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    price: 200
  },
  {
    id: 43,
    title: "Aamir",
    genre: "Thriller",
    language: "Hindi",
    mood: "suspenseful",
    rating: 4.3,
    description: "A man receives a phone call that forces him to commit crimes while being tracked",
    duration: "2h 8min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 44,
    title: "Natarang",
    genre: "Drama",
    language: "Marathi",
    mood: "emotional",
    rating: 4.5,
    description: "An obsessive theater actor's life is defined by a single role in a play",
    duration: "2h 20min",
    showTimes: ["10:30 AM", "1:30 PM", "4:30 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 45,
    title: "Bandit Queen",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.4,
    description: "The true story of a low-caste woman who becomes a feared bandit leader in India",
    duration: "2h 19min",
    showTimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:00 PM"],
    price: 220
  },
  {
    id: 46,
    title: "Hey Ram",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.3,
    description: "A man's traumatic experience during Partition leads him to seek revenge and redemption",
    duration: "2h 33min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 47,
    title: "Queen",
    genre: "Comedy",
    language: "Hindi",
    mood: "fun",
    rating: 4.6,
    description: "An rejected woman goes on her honeymoon alone and discovers independence and freedom",
    duration: "2h 16min",
    showTimes: ["10:30 AM", "1:00 PM", "4:00 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 48,
    title: "Neerja",
    genre: "Drama",
    language: "Hindi",
    mood: "emotional",
    rating: 4.5,
    description: "The true story of a flight attendant who sacrificed her life to save passengers during a hijacking",
    duration: "2h 2min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 49,
    title: "The Lunchbox",
    genre: "Comedy",
    language: "Hindi",
    mood: "fun",
    rating: 4.4,
    description: "A mistaken delivery creates a connection between a lonely widow and a retiring office worker",
    duration: "1h 44min",
    showTimes: ["10:00 AM", "12:30 PM", "3:00 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 50,
    title: "Article 15",
    genre: "Thriller",
    language: "Hindi",
    mood: "suspenseful",
    rating: 4.4,
    poster: "",
    description: "A police officer investigates a crime that exposes deep-rooted casteism and social issues",
    duration: "2h 21min",
    showTimes: ["10:30 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 51,
    title: "Arjun Reddy",
    genre: "Drama",
    language: "Telugu",
    mood: "emotional",
    rating: 4.6,
    poster: "",
    description: "A short-tempered young doctor's life changes after he falls in love with a nurse",
    duration: "2h 3min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 52,
    title: "Eega",
    genre: "Fantasy",
    language: "Telugu",
    mood: "thrilling",
    rating: 4.5,
    poster: "",
    description: "A murdered man is reincarnated as a fly seeking revenge on his killers",
    duration: "1h 39min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    price: 200
  },
  {
    id: 53,
    title: "Magadheera",
    genre: "Action",
    language: "Telugu",
    mood: "thrilling",
    rating: 4.7,
    poster: "",
    description: "A man is reincarnated to fight against his past life's enemy and win back his love",
    duration: "2h 48min",
    showTimes: ["11:00 AM", "3:00 PM", "7:00 PM", "10:30 PM"],
    price: 250
  },
  {
    id: 54,
    title: "Chandramukhi",
    genre: "Horror",
    language: "Tamil",
    mood: "suspenseful",
    rating: 4.5,
    poster: "",
    description: "A psychiatrist treats a woman who is possessed by the spirit of a vengeful dancer",
    duration: "2h 24min",
    showTimes: ["10:00 AM", "2:00 PM", "6:00 PM", "9:30 PM"],
    price: 200
  },
  {
    id: 55,
    title: "Pasanga",
    genre: "Comedy",
    language: "Tamil",
    mood: "fun",
    rating: 4.4,
    poster: "",
    description: "Two conmen get entangled in various misadventures while attempting to con a crime lord",
    duration: "2h 31min",
    showTimes: ["10:30 AM", "1:30 PM", "4:30 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 56,
    title: "Anjathe",
    genre: "Drama",
    language: "Tamil",
    mood: "emotional",
    rating: 4.6,
    poster: "",
    description: "A love story between a young man and woman working as help in the Middle East",
    duration: "2h 23min",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "8:00 PM"],
    price: 220
  },
  {
    id: 57,
    title: "Hey Ram",
    genre: "Drama",
    language: "Tamil",
    mood: "emotional",
    rating: 4.3,
    poster: "",
    description: "A man's traumatic experience during Partition leads him to seek revenge and redemption",
    duration: "2h 33min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    price: 220
  },
  {
    id: 58,
    title: "Rang De",
    genre: "Romance",
    language: "Telugu",
    mood: "fun",
    rating: 4.4,
    poster: "",
    description: "A spirited young girl meets a conservative guy and transforms his life",
    duration: "2h 24min",
    showTimes: ["10:00 AM", "12:30 PM", "3:00 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 59,
    title: "Mirchi",
    genre: "Romance",
    language: "Telugu",
    mood: "fun",
    rating: 4.3,
    poster: "",
    description: "A man overcomes obstacles to win over a fearless girl and her traditional family",
    duration: "2h 35min",
    showTimes: ["10:30 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    price: 220
  },
  {
    id: 60,
    title: "Mahesh",
    genre: "Crime",
    language: "Tamil",
    mood: "thrilling",
    rating: 4.5,
    poster: "",
    description: "A gangster attempts to escape his criminal past and lead a normal life",
    duration: "2h 27min",
    showTimes: ["10:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"],
    price: 230
  },
  {
    id: 61,
    title: "Thani Oruvan",
    genre: "Thriller",
    language: "Tamil",
    mood: "suspenseful",
    rating: 4.6,
    poster: "",
    description: "A brilliant cybercriminal battle between a hacker and a cop with dark secrets",
    duration: "2h 37min",
    showTimes: ["10:30 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    price: 240
  },
  {
    id: 62,
    title: "Natarang",
    genre: "Drama",
    language: "Tamil",
    mood: "emotional",
    rating: 4.5,
    poster: "",
    description: "An obsessive theater actor's life is defined by a single role in a play",
    duration: "2h 20min",
    showTimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:00 PM"],
    price: 200
  },
  {
    id: 63,
    title: "Poojai",
    genre: "Action",
    language: "Tamil",
    mood: "thrilling",
    rating: 4.4,
    poster: "",
    description: "A young man returns to fight for his village against a ruthless criminal",
    duration: "2h 34min",
    showTimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"],
    price: 240
  },
  {
    id: 64,
    title: "NTR: Kathanayakudu",
    genre: "Drama",
    language: "Telugu",
    mood: "emotional",
    rating: 4.3,
    poster: "",
    description: "A biographical film about the legendary actor and director N.T. Rama Rao",
    duration: "2h 15min",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "8:00 PM"],
    price: 200
  },
];

// Load user session from localStorage
function loadUserSession() {
  const saved = localStorage.getItem('userSession');
  if (saved) {
    window.userSession = JSON.parse(saved);
  }
}

// Save user session to localStorage
function saveUserSession() {
  localStorage.setItem('userSession', JSON.stringify(userSession));
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email && password) {
    userSession.loggedIn = true;
    userSession.userName = email.split('@')[0];
    userSession.email = email;
    saveUserSession();

    showAlert('Welcome back, ' + userSession.userName + '!', 'success');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000);
  } else {
    showAlert('Please enter both email and password', 'error');
  }
}

function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;

  if (!name || !email || !password || !confirmPassword) {
    showAlert('Please fill all fields', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showAlert('Passwords do not match', 'error');
    return;
  }

  userSession.loggedIn = true;
  userSession.userName = name;
  userSession.email = email;
  saveUserSession();

  showAlert('Account created successfully! Welcome, ' + name + '!', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

function handleLogout() {
  userSession.loggedIn = false;
  userSession.userName = null;
  userSession.email = null;
  saveUserSession();
  showAlert('Logged out successfully', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
}

// ============================================
// UI UPDATE FUNCTIONS
// ============================================

function updateAuthUI() {
  const authButtons = document.querySelector('.auth-buttons');
  if (!authButtons) return;

  if (userSession.loggedIn) {
    authButtons.innerHTML = `
      <span style="color: var(--accent-gold); font-weight: 600;">Welcome, ${userSession.userName}!</span>
      <button class="btn btn-secondary" onclick="handleLogout()">Logout</button>
    `;
  } else {
    authButtons.innerHTML = `
      <a href="login.html" class="btn btn-secondary">Login</a>
      <a href="register.html" class="btn btn-primary">Register</a>
    `;
  }
}

function showAlert(message, type = 'info') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;
  
  const container = document.querySelector('.container') || document.body;
  container.insertBefore(alertDiv, container.firstChild);
  
  setTimeout(() => {
    alertDiv.remove();
  }, 4000);
}

// ============================================
// MOVIE RENDERING FUNCTIONS
// ============================================

function renderMovieCard(movie) {
  const rating = userSession.userRatings[movie.id] || movie.rating;
  const stars = generateStars(rating);
  const poster = movie.poster || movie.emoji;

  return `
    <div class="movie-card" onclick="viewMovieDetails(${movie.id})">
      <div class="movie-poster">
        ${poster}
      </div>
      <div class="movie-info">
        <h3 class="movie-title">${movie.title}</h3>
        <p class="movie-genre">${movie.genre} • ${movie.language}</p>
        <div class="movie-rating">${stars}</div>
        <p class="movie-description">${movie.description}</p>
        <div class="movie-actions">
          <button onclick="event.stopPropagation(); rateMovie(${movie.id})">Rate</button>
        </div>
      </div>
    </div>
  `;
}

function generateStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    stars += i < fullStars ? '<span class="star">★</span>' : '<span class="star">☆</span>';
  }
  return stars;
}

function renderAllMovies() {
  const grid = document.getElementById('movies-grid');
  if (!grid) return;

  grid.innerHTML = MOVIES_DATABASE.map(movie => renderMovieCard(movie)).join('');
}

function filterMoviesByPreferences() {
  const grid = document.getElementById('movies-grid');
  if (!grid) return;

  const filtered = MOVIES_DATABASE.filter(movie => {
    const genreMatch = userSession.preferences.genres.length === 0 || 
                      userSession.preferences.genres.includes(movie.genre);
    const languageMatch = !userSession.preferences.language || 
                         userSession.preferences.language === movie.language;
    const moodMatch = !userSession.preferences.mood || 
                     userSession.preferences.mood === movie.mood;
    const ratingMatch = !userSession.preferences.minRating || 
                       movie.rating >= userSession.preferences.minRating;

    return genreMatch && languageMatch && moodMatch && ratingMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No movies match your preferences. Try adjusting your selections!</p>';
  } else {
    grid.innerHTML = filtered.map(movie => renderMovieCard(movie)).join('');
  }

  grid.scrollIntoView({ behavior: 'smooth' });
}

function viewMovieDetails(movieId) {
  const movie = MOVIES_DATABASE.find(m => m.id === movieId);
  if (!movie) return;

  if (!userSession.loggedIn) {
    showAlert('Please login to view movie details', 'info');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1000);
    return;
  }

  // Store and redirect to movie details page
  sessionStorage.setItem('selectedMovie', JSON.stringify(movie));
  window.location.href = 'movie.html';
}

// ============================================
// PREFERENCES FUNCTIONS
// ============================================

function handlePreferenceChange(event) {
  const target = event.target;
  const type = target.dataset.type;

  if (type === 'genre') {
    const value = target.value;
    if (target.checked) {
      userSession.preferences.genres.push(value);
    } else {
      userSession.preferences.genres = userSession.preferences.genres.filter(g => g !== value);
    }
  } else if (type === 'language') {
    userSession.preferences.language = target.value;
  } else if (type === 'mood') {
    userSession.preferences.mood = target.value;
  } else if (type === 'rating') {
    userSession.preferences.minRating = parseFloat(target.value);
    // Update the display values
    document.getElementById('ratingValue').textContent = target.value;
    document.getElementById('ratingDisplay').textContent = target.value;
  }

  saveUserSession();
}

function applyPreferences() {
  // Save preferences for the current user/session. Login not required.
  saveUserSession();
  showAlert('Preferences saved! Redirecting to recommendations...', 'success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1200);
}

// ============================================
// RATING SYSTEM
// (Handled by ratings.js on movie.html)
// These functions are defined in ratings.js for proper modal management

// Helper function to generate star display
function generateStars(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    stars += i < fullStars ? '<span class="star">★</span>' : '<span class="star">☆</span>';
  }
  return stars;
}

function rateMovie(movieId) {
  const movie = MOVIES_DATABASE.find(m => m.id === movieId);
  if (!movie) return;

  if (!userSession.loggedIn) {
    showAlert('Please login to rate movies', 'info');
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1000);
    return;
  }

  if (typeof openRatingModal === 'function') {
    openRatingModal(movieId);
  }
}

// ============================================
// MOVIE DETAILS PAGE FUNCTIONS
// ============================================

function displayMovieDetails() {
  const movieData = sessionStorage.getItem('selectedMovie');
  if (!movieData) {
    window.location.href = 'index.html';
    return;
  }

  const movie = JSON.parse(movieData);
  const detailsContainer = document.getElementById('movie-details');
  if (!detailsContainer) return;

  const rating = userSession.userRatings[movie.id] || movie.rating;
  const stars = generateStars(rating);
  const poster = movie.poster || movie.emoji;

  detailsContainer.innerHTML = `
    <div style="background: var(--dark-card); padding: 2rem; border-radius: 8px; border: 2px solid var(--border-color); animation: slideInUp 0.6s ease;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem; align-items: start;">
        <div style="text-align: center;">
          <div style="font-size: 8rem; margin-bottom: 1rem;">
            ${poster}
          </div>
          <div style="color: var(--accent-gold); font-weight: bold; margin-top: 0.5rem;">Rating: ${rating.toFixed(1)}/5</div>
        </div>
        <div>
          <h1 style="margin-bottom: 1rem;">${movie.title}</h1>
          <p><span style="color: var(--accent-gold);">Genre:</span> ${movie.genre}</p>
          <p><span style="color: var(--accent-gold);">Language:</span> ${movie.language}</p>
          <p><span style="color: var(--accent-gold);">Duration:</span> ${movie.duration}</p>
          <p><span style="color: var(--accent-gold);">Mood:</span> ${movie.mood}</p>
          <p style="margin-top: 1rem; color: var(--text-secondary); line-height: 1.8;">${movie.description}</p>
          <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <button class="btn btn-secondary" onclick="redirectToRating(${movie.id})">Rate Movie</button>
          </div>
        </div>
      </div>
    </div>
  `;
}



function redirectToRating(movieId) {
  openRatingModal(movieId);
}



// ============================================
// INITIALIZATION & PAGE LOAD
// ============================================

function initializePage() {
  // Shared initialization for all pages
  loadUserSession();
  updateAuthUI();

  // Modal close on background click (shared)
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('rating-modal');
    if (modal && e.target === modal) {
      closeRatingModal();
    }
  });
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);
