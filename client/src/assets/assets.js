import logo from './logo.png'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage11.png'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
  {
    id: 1,
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=WpW36ldAqnM"
  },
  {
    id: 2,
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-sAOWhvheK8"
  },
  {
    id: 3,
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1pHDWnXmK7Y"
  },
  {
    id: 4,
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=umiKiW4En9g"
  }
];




const dummyCastsData = [
    { id: 1, castId: "ranveer-singh", name: "Ranveer Singh", profile_path: "https://upload.wikimedia.org/wikipedia/commons/3/32/Ranveer_Singh_in_2023_%281%29_%28cropped%29.jpg" },
    { id: 2, castId: "deepika-padukone", name: "Deepika Padukone", profile_path: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Deepika_Padukone_2025_%281%29.png" },
    { id: 3, castId: "shah-rukh-khan", name: "Shah Rukh Khan", profile_path: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" },
    { id: 4, castId: "salman-khan", name: "Salman Khan", profile_path: "https://upload.wikimedia.org/wikipedia/commons/9/95/Salman_Khan_in_2023_%281%29_%28cropped%29.jpg" },
    { id: 5, castId: "hrithik-roshan", name: "Hrithik Roshan", profile_path: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hrithik_at_Rado_launch.jpg" },
    { id: 6, castId: "katrina-kaif", name: "Katrina Kaif", profile_path: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Katrina_Kaif_promoting_Bharat_in_2019.jpg" },
    { id: 7, castId: "alia-bhatt", name: "Alia Bhatt", profile_path: "https://upload.wikimedia.org/wikipedia/commons/1/10/Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg" },
    { id: 8, castId: "ayushmann-khurrana", name: "Ayushmann Khurrana", profile_path: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ayushmann_Khurrana_promotos_%27Anek%27_in_Delhi_%281%29_%28cropped%29.jpg" },
    { id: 9, castId: "priyanka-chopra", name: "Priyanka Chopra Jonas", profile_path: "https://upload.wikimedia.org/wikipedia/commons/4/45/Priyanka_Chopra_at_Bulgary_launch%2C_2024_%28cropped%29.jpg" },
    { id: 10, castId: "kareena-kapoor", name: "Kareena Kapoor Khan", profile_path: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kareena_Kapoor_in_2024_%28cropped%29.jpg" },
    { id: 11, castId: "milla-jovovich", name: "Milla Jovovich", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
    { id: 12, castId: "dave-bautista", name: "Dave Bautista", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
    { id: 13, castId: "arly-jover", name: "Arly Jover", profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
    { id: 14, castId: "amara-okereke", name: "Amara Okereke", profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" },
    { id: 15, castId: "fraser-james", name: "Fraser James", profile_path: "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg" },
    { id: 16, castId: "deirdre-mullins", name: "Deirdre Mullins", profile_path: "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg" },
    { id: 17, castId: "sebastian-stankiewicz", name: "Sebastian Stankiewicz", profile_path: "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg" },
    { id: 18, castId: "tue-lunding", name: "Tue Lunding", profile_path: "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg" },
    { id: 19, castId: "jacek-dzisiewicz", name: "Jacek Dzisiewicz", profile_path: "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg" },
    { id: 20, castId: "ian-hanmore", name: "Ian Hanmore", profile_path: "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg" },
    { id: 21, castId: "eveline-hall", name: "Eveline Hall", profile_path: "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg" },
    { id: 22, castId: "kamila-klamut", name: "Kamila Klamut", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
    { id: 23, castId: "caoilinn-springall", name: "Caoilinn Springall", profile_path: "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg" },
    { id: 24, castId: "jan-kowalewski", name: "Jan Kowalewski", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
    { id: 25, castId: "pawel-wysocki", name: "Pawel Wysocki", profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
    { id: 26, castId: "simon-loof", name: "Simon Lööf", profile_path: "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg" },
    { id: 27, castId: "tomasz-cymerman", name: "Tomasz Cymerman", profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" }
];

export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "In the Lost Lands",
        "overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
        "poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 14, "name": "Fantasy" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-02-27",
        "original_language": "en",
        "tagline": "She seeks the power to free her people.",
        "vote_average": 6.4,
        "vote_count": 15000,
        "runtime": 102,
    }, {
        "_id": "324513",
        "id": 324513,
        "title": "Dhurandhar",
        "overview": "An underworld saga following a network of criminals, informants and operatives whose lives intersect, navigating covert operations, espionage and betrayals.",
        "poster_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8I7XBHs7-cSDjm-CDzwZXlE1FFq_Vro4dA&s",
        "backdrop_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDH4oZoZDZfv-NI5SbHUvBPiwVA7YDO2X1iA&s",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 13, "name": "Crime Film" },
            { "id": 12, "name": "Adventure" },

        ],
        "casts": dummyCastsData,
        "release_date": "2025-12-05",
        "original_language": "hi",
        "tagline": "The power of indian army man",
        "vote_average": 9.0,
        "vote_count": 15000,
        "runtime": 214,
    },
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "Until Dawn",
        "overview": "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
        "poster_path": "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        "genres": [
            { "id": 27, "name": "Horror" },
            { "id": 9648, "name": "Mystery" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-23",
        "original_language": "en",
        "tagline": "Every night a different nightmare.",
        "vote_average": 6.405,
        "vote_count": 18000,
        "runtime": 103,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "Lilo & Stitch",
        "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
        "poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Comedy" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Hold on to your coconuts.",
        "vote_average": 7.117,
        "vote_count": 27500,
        "runtime": 108,
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": "Havoc",
        "overview": "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
        "poster_path": "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 80, "name": "Crime" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-25",
        "original_language": "en",
        "tagline": "No law. Only disorder.",
        "vote_average": 6.537,
        "vote_count": 35960,
        "runtime": 107,
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": "A Minecraft Movie",
        "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
        "poster_path": "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Comedy" },
            { "id": 12, "name": "Adventure" },
            { "id": 14, "name": "Fantasy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-03-31",
        "original_language": "en",
        "tagline": "Be there and be square.",
        "vote_average": 6.516,
        "vote_count": 15225,
        "runtime": 101,
    },
    {
        "_id": "575265",
        "id": 575265,
        "title": "Mission: Impossible - The Final Reckoning",
        "overview": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
        "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Our lives are the sum of our choices.",
        "vote_average": 7.042,
        "vote_count": 19885,
        "runtime": 170,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "Thunderbolts*",
        "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 878, "name": "Science Fiction" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-30",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    }
];

export const dummyDateTimeData = {
    "2025-12-19": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-12-20": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-12-21": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-12-22": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ],"2025-12-23": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],"2025-12-24": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],"2025-12-25": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 15107,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 590,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 600,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 181,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 381,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 490,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 379,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 245,
        },
        "amount": 590,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 245,
        },
        "amount": 245,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 245,
        },
        "amount": 735,
        "bookedSeats": ["A1", "A2", "A3"],
        "isPaid": true,
    },
]
export const dummyCastsDetail = [
    {
        id: 1,
        castId: "ranveer-singh",
        name: "Ranveer Singh",
        fullName: "Ranveer Singh Bhavnani",
        profile_path: "https://upload.wikimedia.org/wikipedia/commons/3/32/Ranveer_Singh_in_2023_%281%29_%28cropped%29.jpg",
        alsoKnownAs: ["Ranveer Singh Bhavnani", "Bittoo"],
        occupation: [
            "Actor",
            "Special Appearances",
            "Voice Cast"
        ],
        born: "July 6, 1985",
        age: 39,
        birthplace: "Mumbai, Maharashtra, India",
        spouse: "Deepika Padukone",
        about: `Ranveer Singh is one of the most commercially successful and high-energy actors in Indian cinema. 
Known for his versatility and bold personality, he has delivered standout performances across mainstream, 
romantic, and historical films.`,
        earlyLife: `Ranveer Singh was born into a Sindhi family in Mumbai. Growing up, he was deeply influenced by cinema 
and always knew he wanted to become an actor. He studied at H.R. College in Mumbai before moving to the 
United States for a Bachelor of Arts degree. After returning to India, he worked in advertising agencies 
before landing his breakthrough role in “Band Baaja Baaraat” (2010).`
    },
  {
    id: 2,
    castId: "deepika-padukone",
    name: "Deepika Padukone",
    fullName: "Deepika Padukone",
    profile_path: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Deepika_Padukone_2025_%281%29.png",
    alsoKnownAs: ["Deepika"],
    occupation: ["Actress"],
    born: "January 5, 1986",
    age: 38,
    birthplace: "Copenhagen, Denmark",
    spouse: "Ranveer Singh",
    about: "Deepika Padukone is among the most influential actresses in Indian cinema with several major film successes.",
    earlyLife: "She grew up in Bangalore and started as a model before transitioning into acting."
  },

  {
    id: 3,
    castId: "shah-rukh-khan",
    name: "Shah Rukh Khan",
    fullName: "Shah Rukh Khan",
    profile_path: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",
    alsoKnownAs: ["SRK", "King Khan"],
    occupation: ["Actor", "Producer"],
    born: "November 2, 1965",
    age: 58,
    birthplace: "New Delhi, India",
    spouse: "Gauri Khan",
    about: "Shah Rukh Khan is a globally recognized Indian actor known for his iconic roles across romance and drama genres.",
    earlyLife: "He grew up in Delhi and pursued theatre and television before moving into Bollywood films."
  },

  {
    id: 4,
    castId: "salman-khan",
    name: "Salman Khan",
    fullName: "Abdul Rashid Salim Salman Khan",
    profile_path: "https://upload.wikimedia.org/wikipedia/commons/9/95/Salman_Khan_in_2023_%281%29_%28cropped%29.jpg",
    alsoKnownAs: ["Bhai"],
    occupation: ["Actor"],
    born: "December 27, 1965",
    age: 58,
    birthplace: "Indore, India",
    spouse: "None",
    about: "Salman Khan is a leading Indian actor known for blockbuster action films and strong screen presence.",
    earlyLife: "He was raised in Mumbai and began his acting journey in the late 1980s."
  },

  {
    id: 5,
    castId: "hrithik-roshan",
    name: "Hrithik Roshan",
    fullName: "Hrithik Roshan",
    profile_path: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hrithik_at_Rado_launch.jpg",
    alsoKnownAs: ["Duggu"],
    occupation: ["Actor"],
    born: "January 10, 1974",
    age: 50,
    birthplace: "Mumbai, India",
    spouse: "None",
    about: "Hrithik Roshan is known for his dancing skills and impactful performances across commercial cinema.",
    earlyLife: "He was born into a film family and worked as a child actor before making his debut."
  },

  {
    id: 6,
    castId: "katrina-kaif",
    name: "Katrina Kaif",
    fullName: "Katrina Turquotte Kaif",
    profile_path: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Katrina_Kaif_promoting_Bharat_in_2019.jpg",
    alsoKnownAs: ["Kat"],
    occupation: ["Actress"],
    born: "July 16, 1983",
    age: 40,
    birthplace: "Hong Kong",
    spouse: "Vicky Kaushal",
    about: "Katrina Kaif is a successful Indian actress known for commercial hits and glamorous roles.",
    earlyLife: "She lived in several countries before starting her modelling and acting career in India."
  },

  {
    id: 7,
    castId: "alia-bhatt",
    name: "Alia Bhatt",
    fullName: "Alia Bhatt",
    profile_path: "https://upload.wikimedia.org/wikipedia/commons/1/10/Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg",
    alsoKnownAs: ["Alia"],
    occupation: ["Actress"],
    born: "March 15, 1993",
    age: 31,
    birthplace: "Mumbai, India",
    spouse: "Ranbir Kapoor",
    about: "Alia Bhatt is a critically acclaimed actress known for versatile roles in modern Bollywood.",
    earlyLife: "She was born into a film family and pursued acting from a young age."
  },

  {
    id: 8,
    castId: "ayushmann-khurrana",
    name: "Ayushmann Khurrana",
    fullName: "Ayushmann Khurrana",
    profile_path: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ayushmann_Khurrana_promotos_%27Anek%27_in_Delhi_%281%29_%28cropped%29.jpg",
    alsoKnownAs: ["Ayush"],
    occupation: ["Actor", "Singer"],
    born: "September 14, 1984",
    age: 40,
    birthplace: "Chandigarh, India",
    spouse: "Tahirra Kashyap",
    about: "Ayushmann Khurrana is known for socially driven films and unique character portrayals.",
    earlyLife: "He participated in theatre and radio before entering the film industry."
  },

  {
    id: 9,
    castId: "priyanka-chopra",
    name: "Priyanka Chopra Jonas",
    fullName: "Priyanka Chopra",
    profile_path: "https://upload.wikimedia.org/wikipedia/commons/4/45/Priyanka_Chopra_at_Bulgary_launch%2C_2024_%28cropped%29.jpg",
    alsoKnownAs: ["PC", "PeeCee"],
    occupation: ["Actress", "Producer"],
    born: "July 18, 1982",
    age: 42,
    birthplace: "Jamshedpur, India",
    spouse: "Nick Jonas",
    about: "Priyanka Chopra is an international actress who has worked in both Bollywood and Hollywood.",
    earlyLife: "She grew up across India and entered the entertainment industry after winning Miss World 2000."
  },

  {
    id: 10,
    castId: "kareena-kapoor",
    name: "Kareena Kapoor Khan",
    fullName: "Kareena Kapoor",
    profile_path: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Kareena_Kapoor_in_2024_%28cropped%29.jpg",
    alsoKnownAs: ["Bebo"],
    occupation: ["Actress"],
    born: "September 21, 1980",
    age: 44,
    birthplace: "Mumbai, India",
    spouse: "Saif Ali Khan",
    about: "Kareena Kapoor Khan is known for strong characters and long-standing success in Bollywood.",
    earlyLife: "She was raised in the Kapoor film family and studied acting before debuting."
  },

  {
    id: 11,
    castId: "milla-jovovich",
    name: "Milla Jovovich",
    fullName: "Milica Bogdanovna Jovovich",
    profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg",
    alsoKnownAs: ["Milla"],
    occupation: ["Actress", "Model"],
    born: "December 17, 1975",
    age: 48,
    birthplace: "Kyiv, Ukraine",
    spouse: "Paul W. S. Anderson",
    about: "Milla Jovovich is known for her roles in action and sci-fi films.",
    earlyLife: "She moved to the United States at a young age and began modeling before acting."
  },

  {
    id: 12,
    castId: "dave-bautista",
    name: "Dave Bautista",
    fullName: "David Michael Bautista Jr.",
    profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
    alsoKnownAs: ["Batista"],
    occupation: ["Actor", "Former Wrestler"],
    born: "January 18, 1969",
    age: 55,
    birthplace: "Washington D.C., USA",
    spouse: "None",
    about: "Dave Bautista is known for action and superhero films after a successful wrestling career.",
    earlyLife: "He grew up in Washington D.C. and pursued bodybuilding before wrestling."
  },

  {
    id: 13,
    castId: "arly-jover",
    name: "Arly Jover",
    fullName: "Arly Jover",
    profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg",
    alsoKnownAs: ["Arly"],
    occupation: ["Actress"],
    born: "1971",
    age: 53,
    birthplace: "Spain",
    spouse: "None",
    about: "Arly Jover is a Spanish actress known for roles in international films.",
    earlyLife: "She moved across Europe before starting her acting career."
  },

  {
    id: 14,
    castId: "amara-okereke",
    name: "Amara Okereke",
    fullName: "Amara Okereke",
    profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg",
    alsoKnownAs: [],
    occupation: ["Actress"],
    born: "1990",
    age: 34,
    birthplace: "UK",
    spouse: "None",
    about: "Amara Okereke is an emerging actress known for theatre and film roles.",
    earlyLife: "She trained in performance arts before entering acting."
  },

  {
    id: 15,
    castId: "fraser-james",
    name: "Fraser James",
    fullName: "Fraser James",
    profile_path: "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg",
    alsoKnownAs: [],
    occupation: ["Actor"],
    born: "1965",
    age: 59,
    birthplace: "UK",
    spouse: "None",
    about: "Fraser James is known for supporting roles in international films.",
    earlyLife: "He began acting in theatre before moving to screen roles."
  },

  {
    id: 16,
    castId: "deirdre-mullins",
    name: "Deirdre Mullins",
    fullName: "Deirdre Mullins",
    profile_path: "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg",
    alsoKnownAs: [],
    occupation: ["Actress"],
    born: "1980",
    age: 44,
    birthplace: "Ireland",
    spouse: "None",
    about: "Deirdre Mullins is an actress known for roles in drama and independent films.",
    earlyLife: "She studied theatre before entering film work."
  },

  {
    id: 17,
    castId: "sebastian-stankiewicz",
    name: "Sebastian Stankiewicz",
    fullName: "Sebastian Stankiewicz",
    profile_path: "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg",
    alsoKnownAs: [],
    occupation: ["Actor"],
    born: "1978",
    age: 46,
    birthplace: "Poland",
    spouse: "None",
    about: "Sebastian Stankiewicz is known for European film and TV roles.",
    earlyLife: "He grew up in Poland and pursued acting in local theatre."
  },

  {
    id: 18,
    castId: "tue-lunding",
    name: "Tue Lunding",
    fullName: "Tue Lunding",
    profile_path: "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg",
    alsoKnownAs: [],
    occupation: ["Actor"],
    born: "1987",
    age: 37,
    birthplace: "Denmark",
    spouse: "None",
    about: "Tue Lunding is an actor known for roles in Scandinavian cinema.",
    earlyLife: "He trained in local acting schools before entering film."
  },

  {
    id: 19,
    castId: "jacek-dzisiewicz",
    name: "Jacek Dzisiewicz",
    fullName: "Jacek Dzisiewicz",
    profile_path: "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg",
    alsoKnownAs: [],
    occupation: ["Actor"],
    born: "1982",
    age: 42,
    birthplace: "Poland",
    spouse: "None",
    about: "Jacek Dzisiewicz is known for dramatic and action film roles.",
    earlyLife: "He developed an interest in acting during school years."
  },

  {
    id: 20,
    castId: "ian-hanmore",
    name: "Ian Hanmore",
    fullName: "Ian Hanmore",
    profile_path: "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg",
    alsoKnownAs: [],
    occupation: ["Actor"],
    born: "1953",
    age: 71,
    birthplace: "UK",
    spouse: "None",
    about: "Ian Hanmore is a veteran actor known for roles in film and television.",
    earlyLife: "He studied acting in the UK before entering professional theatre."
  },

  {
    id: 21,
    castId: "eveline-hall",
    name: "Eveline Hall",
    fullName: "Eveline Hall",
    profile_path: "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg",
    alsoKnownAs: [],
    occupation: ["Actress", "Model"],
    born: "1945",
    age: 79,
    birthplace: "Germany",
    spouse: "None",
    about: "Eveline Hall is a model and actress known for European cinema work.",
    earlyLife: "She started as a dancer before moving to modelling and acting."
  },

  {
    id: 22,
    castId: "kamila-klamut",
    name: "Kamila Klamut",
    fullName: "Kamila Klamut",
    profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg",
    alsoKnownAs: [],
    occupation: ["Actress"],
    born: "1991",
    age: 33,
    birthplace: "Poland",
    spouse: "None",
    about: "Kamila Klamut is known for roles in Polish theatre and films.",
    earlyLife: "She studied acting and began her career in European productions."
  },

  {
    id: 23,
    castId: "caoilinn-springall",
    name: "Caoilinn Springall",
    fullName: "Caoilinn Springall",
    profile_path: "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg",
    alsoKnownAs: [],
    occupation: ["Actress"],
    born: "2008",
    age: 16,
    birthplace: "UK",
    spouse: "None",
    about: "Caoilinn Springall is a young actress known for roles in family and drama films.",
    earlyLife: "She began acting during childhood after appearing in school plays."
  },

  {
    id: 24,
    castId: "jan-kowalewski",
    name: "Jan Kowalewski",
    fullName: "Jan Kowalewski",
    profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg",
    alsoKnownAs: [],
    occupation: ["Actor"],
    born: "1979",
    age: 45,
    birthplace: "Poland",
    spouse: "None",
    about: "Jan Kowalewski is known for his work in Polish cinema and theatre.",
    earlyLife: "He trained in performing arts before joining film projects."
  },

  {
    id: 25,
    castId: "pawel-wysocki",
    name: "Pawel Wysocki",
    fullName: "Pawel Wysocki",
    profile_path: "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg",
    alsoKnownAs: [],
    occupation: ["Actor"],
    born: "1985",
    age: 39,
    birthplace: "Poland",
    spouse: "None",
    about: "Pawel Wysocki is an actor involved in regional European film productions.",
    earlyLife: "He showed interest in acting early and joined local theatre groups."
  },

  {
    id: 26,
    castId: "simon-loof",
    name: "Simon Lööf",
    fullName: "Simon Lööf",
    profile_path: "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg",
    alsoKnownAs: [],
    occupation: ["Actor"],
    born: "1994",
    age: 30,
    birthplace: "Sweden",
    spouse: "None",
    about: "Simon Lööf is known for his roles in Scandinavian film and TV projects.",
    earlyLife: "He trained in Swedish acting academies before entering film."
  },

  {
    id: 27,
    castId: "tomasz-cymerman",
    name: "Tomasz Cymerman",
    fullName: "Tomasz Cymerman",
    profile_path: "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg",
    alsoKnownAs: [],
    occupation: ["Actor"],
    born: "1988",
    age: 36,
    birthplace: "Poland",
    spouse: "None",
    about: "Tomasz Cymerman is known for acting roles in European films and theatre.",
    earlyLife: "He developed his acting skills through training and stage experience."
  }
];

// utils for movie filtering
export const getRecentMovies = (days = 100) => {
  const today = new Date();

  return dummyShowsData
    .filter(movie => {
      const releaseDate = new Date(movie.release_date);
      const diff =
        (today - releaseDate) / (4000 * 60 * 60 * 24);

      return diff >= 0 && diff <= days;
    })
    .sort(
      (a, b) =>
        new Date(b.release_date) - new Date(a.release_date)
    );
};


