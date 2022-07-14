import { ApolloClient, InMemoryCache, useQuery, gql  } from '@apollo/client';


 export const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
  });


  export const APIDATA = gql`
  query {
    continents {
      name
      countries {
        name
        currency
        phone
        emoji
      }
    }
    countries {
      name
      currency
      emoji
    }
  }
`;


// export const initial =[
//   {
//     "name": "American Samoa",
//     "phone": "1684",
//     "currency": "USD",
//     "emoji": "🇦🇸"
//   },
//   {
//     "name": "Australia",
//     "phone": "61",
//     "currency": "AUD",
//     "emoji": "🇦🇺"
//   },
//   {
//     "name": "Cook Islands",
//     "phone": "682",
//     "currency": "NZD",
//     "emoji": "🇨🇰"
//   },
//   {
//     "name": "Fiji",
//     "phone": "679",
//     "currency": "FJD",
//     "emoji": "🇫🇯"
//   },
//   {
//     "name": "Micronesia",
//     "phone": "691",
//     "currency": "USD",
//     "emoji": "🇫🇲"
//   },
//   {
//     "name": "Guam",
//     "phone": "1671",
//     "currency": "USD",
//     "emoji": "🇬🇺"
//   },
//   {
//     "name": "Kiribati",
//     "phone": "686",
//     "currency": "AUD",
//     "emoji": "🇰🇮"
//   },
//   {
//     "name": "Marshall Islands",
//     "phone": "692",
//     "currency": "USD",
//     "emoji": "🇲🇭"
//   },
//   {
//     "name": "Northern Mariana Islands",
//     "phone": "1670",
//     "currency": "USD",
//     "emoji": "🇲🇵"
//   },
//   {
//     "name": "New Caledonia",
//     "phone": "687",
//     "currency": "XPF",
//     "emoji": "🇳🇨"
//   },
//   {
//     "name": "Norfolk Island",
//     "phone": "672",
//     "currency": "AUD",
//     "emoji": "🇳🇫"
//   },
//   {
//     "name": "Nauru",
//     "phone": "674",
//     "currency": "AUD",
//     "emoji": "🇳🇷"
//   },
//   {
//     "name": "Niue",
//     "phone": "683",
//     "currency": "NZD",
//     "emoji": "🇳🇺"
//   },
//   {
//     "name": "New Zealand",
//     "phone": "64",
//     "currency": "NZD",
//     "emoji": "🇳🇿"
//   },
//   {
//     "name": "French Polynesia",
//     "phone": "689",
//     "currency": "XPF",
//     "emoji": "🇵🇫"
//   },
//   {
//     "name": "Papua New Guinea",
//     "phone": "675",
//     "currency": "PGK",
//     "emoji": "🇵🇬"
//   },
//   {
//     "name": "Pitcairn Islands",
//     "phone": "64",
//     "currency": "NZD",
//     "emoji": "🇵🇳"
//   },
//   {
//     "name": "Palau",
//     "phone": "680",
//     "currency": "USD",
//     "emoji": "🇵🇼"
//   },
//   {
//     "name": "Solomon Islands",
//     "phone": "677",
//     "currency": "SBD",
//     "emoji": "🇸🇧"
//   },
//   {
//     "name": "Tokelau",
//     "phone": "690",
//     "currency": "NZD",
//     "emoji": "🇹🇰"
//   },
//   {
//     "name": "East Timor",
//     "phone": "670",
//     "currency": "USD",
//     "emoji": "🇹🇱"
//   },
//   {
//     "name": "Tonga",
//     "phone": "676",
//     "currency": "TOP",
//     "emoji": "🇹🇴"
//   },
//   {
//     "name": "Tuvalu",
//     "phone": "688",
//     "currency": "AUD",
//     "emoji": "🇹🇻"
//   },
//   {
//     "name": "U.S. Minor Outlying Islands",
//     "phone": "1",
//     "currency": "USD",
//     "emoji": "🇺🇲"
//   },
//   {
//     "name": "Vanuatu",
//     "phone": "678",
//     "currency": "VUV",
//     "emoji": "🇻🇺"
//   },
//   {
//     "name": "Wallis and Futuna",
//     "phone": "681",
//     "currency": "XPF",
//     "emoji": "🇼🇫"
//   },
//   {
//     "name": "Samoa",
//     "phone": "685",
//     "currency": "WST",
//     "emoji": "🇼🇸"
//   }
// ]

