const stations = [
  // { name: "Secretariat, Amaravati - APPCB", lat: 16.5042, lng: 80.5142741 },
  // {
  //   name: "Anand Kala Kshetram, Rajamahendravaram - APPCB",
  //   lat: 17.0005,
  //   lng: 81.8040345,
  // },
  // { name: "Tirumala, Tirupati - APPCB", lat: 13.6832, lng: 79.347417 },
  // { name: "PWD Grounds, Vijayawada - APPCB", lat: 16.5064, lng: 80.6320387 },
  // {
  //   name: "GVM Corporation, Visakhapatnam - APPCB",
  //   lat: 17.7227,
  //   lng: 83.3085,
  // },
  // { name: "Naharlagun, Naharlagun - APSPCB", lat: 27.1021, lng: 93.6795703 },
  // { name: "Pan Bazaar, Guwahati - APCB", lat: 26.1848, lng: 91.7409388 },
  // { name: "Railway Colony, Guwahati - APCB", lat: 26.1787, lng: 91.7842598 },
  // { name: "Kharahiya Basti, Araria - BSPCB", lat: 26.1353, lng: 87.467296 },
  // { name: "New DM Office, Arrah - BSPCB", lat: 25.5541, lng: 84.6664797 },
  // { name: "Kamalnath Nagar, Bettiah - BSPCB", lat: 26.8025, lng: 84.520147 },
  // {
  //   name: "DM Office_Kachari Chowk, Bhagalpur - BSPCB",
  //   lat: 25.2516,
  //   lng: 86.9896281,
  // },
  // { name: "Mayaganj, Bhagalpur - BSPCB", lat: 25.2610, lng: 87.0086927 },
  // {
  //   name: "D M Colony, Bihar Sharif - BSPCB",
  //   lat: 25.2039,
  //   lng: 85.5145552,
  // },
  // { name: "Central Jail, Buxar - BSPCB", lat: 25.5544, lng: 83.9504978 },
  // { name: "Darshan Nagar, Chhapra - BSPCB", lat: 25.7827, lng: 84.7459 },
  // {
  //   name: "Town Hall - Lal Bagh, Darbhanga - BSPCB",
  //   lat: 26.1554,
  //   lng: 85.8927659,
  // },
  // { name: "Collectorate, Gaya - BSPCB", lat: 24.7910, lng: 85.006364 },
  // { name: "Kareemganj, Gaya - BSPCB", lat: 24.7953, lng: 84.9882548 },
  // { name: "SFTI Kusdihra, Gaya - BSPCB", lat: 24.7625, lng: 84.9804538 },
  // {
  //   name: "Industrial Area, Hajipur - BSPCB",
  //   lat: 25.6927,
  //   lng: 85.2401164,
  // },
  // { name: "Mirchaibari, Katihar - BSPCB", lat: 25.5626, lng: 87.5628552 },
  // {
  //   name: "SDM Office_Khagra, Kishanganj - BSPCB",
  //   lat: 26.0982,
  //   lng: 87.9450379,
  // },
  // {
  //   name: "Forest Rest House, Manguraha - BSPCB",
  //   lat: 26.0774,
  //   lng: 84.7459203,
  // },
  // { name: "Gandak Colony, Motihari - BSPCB", lat: 26.6438, lng: 84.9040337 },
  // { name: "Town Hall, Munger - BSPCB", lat: 25.3707, lng: 86.4733903 },
  // { name: "Buddha Colony, Muzaffarpur - BSPCB", lat: 26.1167 ,lng: 85.3995 },
  // {
  //   name: "MIT-Daudpur Kothi, Muzaffarpur - BSPCB",
  //   lat: 26.1413,
  //   lng: 85.3654296,
  // },
  // {
  //   name: "Muzaffarpur Collectorate, Muzaffarpur - BSPCB",
  //   lat: 26.1235,
  //   lng: 85.3812437,
  // },
  // {
  //   name: "DRM Office Danapur, Patna - BSPCB",
  //   lat: 25.5856,
  //   lng: 85.0442993,
  // },
  // {
  //   name: "Govt. High School Shikarpur, Patna - BSPCB",
  //   lat: 25.5932,
  //   lng: 85.2272332,
  // },
  // {
  //   name: "IGSC Planetarium Complex, Patna - BSPCB",
  //   lat: 25.6361,
  //   lng: 85.1047332,
  // },
  // { name: "Muradpur, Patna - BSPCB", lat: 25.6195 ,lng: 85.1466 },
  // { name: "Rajbansi Nagar, Patna - BSPCB", lat: 25.5994, lng: 85.1136954 },
  // { name: "Samanpura, Patna - BSPCB", lat: 25.6047, lng: 85.088501 },
  // { name: "Mariam Nagar, Purnia - BSPCB", lat: 25.7771, lng: 87.4752551 },
  // { name: "Dangi Tola, Rajgir - BSPCB", lat: 25.0172, lng: 85.4161642 },
  // { name: "Police Line, Saharsa - BSPCB", lat: 25.8773, lng: 86.5927887 },
  // { name: "Dada Peer, Sasaram - BSPCB", lat: 24.9538, lng: 84.0142866 },
  // {
  //   name: "Chitragupta Nagar, Siwan - BSPCB",
  //   lat: 26.2327,
  //   lng: 84.3554004,
  // },
  // { name: "Sector 22, Chandigarh - CPCC", lat: 30.732,lng: 76.7726 },
  // { name: "Sector-25, Chandigarh - CPCC", lat: 30.7512 ,lng: 76.7584 },
  // {
  //   name: "Civic Center, Bhilai - Bhilai Steel Plant",
  //   lat: 21.1861,
  //   lng: 81.3428673,
  // },
  // { name: "Mangala, Bilaspur - NTPC", lat: 22.1242, lng: 82.2867269 },
  { name: "Alipur, Delhi - DPCC", lat: 28.7972 ,lng: 77.1331 },
  { name: "Anand Vihar, Delhi - DPCC", lat: 28.6502, lng: 77.3027 },
  { name: "Ashok Vihar, Delhi - DPCC", lat: 28.691,lng: 77.1765 },
  { name: "Aya Nagar, Delhi - IMD", lat: 28.472,lng: 77.1329 },
  { name: "Bawana, Delhi - DPCC", lat: 28.7932 ,lng: 77.0483 },
  { name: "Burari Crossing, Delhi - IMD", lat: 28.7284 ,lng: 77.1975 },
  { name: "CRRI Mathura Road, Delhi - IMD", lat: 28.5517, lng: 77.275 },
  { name: "Chandni Chowk, Delhi - IITM", lat: 28.6505 ,lng: 77.2303 },
  { name: "DTU, Delhi - CPCB", lat: 28.7495 ,lng: 77.1184 },
  {
    name: "Dr. Karni Singh Shooting Range, Delhi - DPCC",
    lat: 28.4997,
    lng: 77.2671,
  },
  { name: "Dwarka-Sector 8, Delhi - DPCC ", lat: 28.572,lng: 77.0708 },
  { name: "East Arjun Nagar, Delhi - CPCB", lat: 28.6562, lng: 77.2947 },
  { name: "IGI Airport (T3), Delhi - IMD", lat: 28.5562 ,lng: 77.1 },
  { name: "IHBAS, Dilshad Garden, Delhi - CPCB", lat: 28.6828, lng: 77.3121 },
  { name: "ITO, Delhi - CPCB", lat: 28.6308 ,lng: 77.2506 },
  { name: "Jahangirpuri, Delhi - DPCC", lat: 28.7296 ,lng: 77.1666 },
  {
    name: "Jawaharlal Nehru Stadium, Delhi - DPCC",
    lat: 28.5828,
    lng: 77.2344,
  },
  { name: "Lodhi Road, Delhi - IITM", lat: 28.5883 ,lng: 77.2217 },
  { name: "Lodhi Road, Delhi - IMD", lat: 28.5897 ,lng: 77.2205 },
  {
    name: "Major Dhyan Chand National Stadium, Delhi - DPCC",
    lat: 28.6126,
    lng: 77.2368,
  },
  { name: "Mandir Marg, Delhi - DPCC", lat: 28.6364 ,lng: 77.2011 },
  { name: "Mundka, Delhi - DPCC", lat: 28.6823 ,lng: 77.0349 },
  { name: "NSIT Dwarka, Delhi - CPCB", lat: 28.61, lng: 77.038 },
  { name: "Najafgarh, Delhi - DPCC", lat: 28.609,lng: 76.9855 },
  { name: "Narela, Delhi - DPCC", lat: 28.8549 ,lng: 77.0892 },
  { name: "Nehru Nagar, Delhi - DPCC", lat: 28.5639 ,lng: 77.2608 },
  { name: "North Campus, DU, Delhi - IMD", lat: 28.6574 ,lng: 77.1585 },
  { name: "Okhla Phase-2, Delhi - DPCC", lat: 28.5308 ,lng: 77.2713 },
  { name: "Patparganj, Delhi - DPCC", lat: 28.6347 ,lng: 77.3046 },
  { name: "Punjabi Bagh, Delhi - DPCC", lat: 28.6707 ,lng: 77.1285 },
  { name: "Pusa, Delhi - DPCC", lat: 28.6377 ,lng: 77.1571 },
  { name: "Pusa, Delhi - IMD", lat: 28.6396 ,lng: 77.1463 },
  { name: "R K Puram, Delhi - DPCC", lat: 28.566,lng: 77.1767 },
  { name: "Rohini, Delhi - DPCC", lat: 28.7383 ,lng: 77.0822 },
  { name: "Shadipur, Delhi - CPCB", lat: 28.651,lng: 77.1562 },
  { name: "Sirifort, Delhi - CPCB", lat: 28.5506 ,lng: 77.2148 },
  { name: "Sonia Vihar, Delhi - DPCC", lat: 28.7332 ,lng: 77.2496 },
  { name: "Sri Aurobindo Marg, Delhi - DPCC", lat: 28.5313 ,lng: 77.1902 },
  { name: "Vivek Vihar, Delhi - DPCC", lat: 28.6712 ,lng: 77.3177 },
  { name: "Wazirpur, Delhi - DPCC", lat: 28.6975 ,lng: 77.1604 },
  // { name: "Chandkheda, Ahmedabad - IITM", lat: 23.1067, lng: 72.5981471 },
  // { name: "Gyaspur, Ahmedabad - IITM", lat: 22.9786 ,lng: 72.5619 },
  // { name: "Maninagar, Ahmedabad - GPCB", lat: 22.9952 ,lng: 72.6041 },
  // { name: "Rakhial, Ahmedabad - IITM", lat: 23.0523, lng: 72.556483 },
  // {
  //   name: "SAC ISRO Bopal, Ahmedabad - IITM",
  //   lat: 23.0407,
  //   lng: 72.4564222,
  // },
  // {
  //   name: "SAC ISRO Satellite, Ahmedabad - IITM",
  //   lat: 23.0277,
  //   lng: 72.518888,
  // },
  // {
  //   name: "SVPI Airport Hansol, Ahmedabad - IITM",
  //   lat: 23.0734,
  //   lng: 72.626571,
  // },
  // {
  //   name: "Sardar Vallabhbhai Patel Stadium, Ahmedabad - IITM",
  //   lat: 23.0418,
  //   lng: 72.5635863,
  // },
  // { name: "GIDC, Ankleshwar - GPCB", lat: 21.6148, lng: 73.023276 },
  // { name: "GIFT City, Gandhinagar - IITM", lat: 23.1586, lng: 72.6831136 },
  // {
  //   name: "IIPHG Lekawada, Gandhinagar - IITM",
  //   lat: 23.2446,
  //   lng: 72.6873825,
  // },
  // { name: "Sector-10, Gandhinagar - GPCB", lat: 23.2119, lng: 72.6559541 },
  // {
  //   name: "GIDC, Nandesari - Nandesari Ind. Association",
  //   lat: 22.4149,
  //   lng: 73.0878263,
  // },
  // { name: "Phase-1 GIDC, Vapi - GPCB", lat: 20.3617, lng: 72.9179998 },
  // { name: "Phase-4 GIDC, Vatva - GPCB", lat: 22.9703, lng: 72.6476 },
  // { name: "Patti Mehar, Ambala - HSPCB", lat: 30.3779, lng: 76.7733 },
  // { name: "Arya Nagar, Bahadurgarh - HSPCB", lat: 28.6893, lng: 76.9528502 },
  // { name: "Nathu Colony, Ballabgarh - HSPCB", lat: 28.3388, lng: 77.3206 },
  // { name: "H.B. Colony, Bhiwani - HSPCB", lat: 28.7975, lng: 76.1322 },
  // {
  //   name: "Mini Secretariat, Charkhi Dadri - HSPCB",
  //   lat: 28.5946,
  //   lng: 76.2755277,
  // },
  // {
  //   name: "Municipal Corporation Office, Dharuhera -  HSPCB",
  //   lat: 28.2057,
  //   lng: 76.7915275,
  // },
  // {
  //   name: "New Industrial Town, Faridabad - HSPCB",
  //   lat: 28.3922,
  //   lng: 77.3017,
  // },
  // { name: "Sector 11, Faridabad - HSPCB", lat: 28.3699 ,lng: 77.3197 },
  // { name: "Sector 30, Faridabad - HSPCB", lat: 28.4425 ,lng: 77.331498 },
  // { name: "Sector- 16A, Faridabad - HSPCB", lat: 28.4128 ,lng: 77.3224 },
  // { name: "Huda Sector, Fatehabad - HSPCB", lat: 29.5031 ,lng: 75.4738 },
  // {
  //   name: "NISE Gwal Pahari, Gurugram - IMD",
  //   lat: 28.4235,
  //   lng: 77.1489412,
  // },
  // { name: "Sector-51, Gurugram - HSPCB", lat: 28.4220, lng: 77.0635663 },
  // { name: "Teri Gram, Gurugram - HSPCB", lat: 28.4275, lng: 77.1464583 },
  // { name: "Vikas Sadan, Gurugram - HSPCB", lat: 28.4501, lng: 77.0284938 },
  // { name: "Urban Estate-II, Hisar - HSPCB", lat: 29.1492 ,lng: 75.7217 },
  // { name: "Police Lines, Jind - HSPCB", lat: 29.3255 ,lng: 76.2998 },
  // { name: "Rishi Nagar, Kaithal - HSPCB", lat: 29.8029, lng: 76.4156016 },
  // { name: "Sector-12, Karnal - HSPCB", lat: 29.6988 ,lng: 77.003432 },
  // { name: "Sector-7, Kurukshetra - HSPCB", lat: 29.9692, lng: 76.8735374 },
  // {
  //   name: "General Hospital, Mandikhera - HSPCB",
  //   lat: 27.8966,
  //   lng: 76.9916675,
  // },
  // { name: "Sector-2 IMT, Manesar - HSPCB", lat: 28.3515, lng: 76.9427774 },
  // { name: "Shastri Nagar, Narnaul - HSPCB", lat: 28.0687, lng: 76.106789 },
  // { name: "Shyam Nagar, Palwal - HSPCB", lat: 28.1233, lng: 77.3314984 },
  // { name: "Sector-6, Panchkula - HSPCB ", lat: 30.7060, lng: 76.8529521 },
  // { name: "Sector-18, Panipat - HSPCB", lat: 29.3757, lng: 76.9757206 },
  // { name: "MD University, Rohtak - HSPCB", lat: 28.8768, lng: 76.621108 },
  // { name: "F-Block, Sirsa - HSPCB", lat: 29.5363, lng: 75.015843 },
  // { name: "Murthal, Sonipat - HSPCB", lat: 28.2077, lng: 76.7968275 },
  // { name: "Gobind Pura, Yamuna Nagar - HSPCB", lat: 30.1550, lng: 77.29294 },
  // { name: "Rajbagh, Srinagar - JKSPCB", lat: 34.0685, lng: 74.8256198 },
  // {
  //   name: "Tata Stadium, Jorapokhar - JSPCB",
  //   lat: 23.7040,
  //   lng: 86.4136687,
  // },
  // { name: "Vidayagiri, Bagalkot - KSPCB", lat: 16.1665, lng: 75.6699768 },
  // { name: "BTM Layout, Bengaluru - CPCB", lat: 27.8966, lng: 76.9916675 },
  // {
  //   name: "BWSSB Kadabesanahalli, Bengaluru - CPCB",
  //   lat: 28.3515,
  //   lng: 76.9427774,
  // },
  // { name: "Bapuji Nagar, Bengaluru - KSPCB", lat: 28.0687, lng: 76.106789 },
  // {
  //   name: "City Railway Station, Bengaluru - KSPCB",
  //   lat: 12.9797,
  //   lng: 77.5692365,
  // },
  // { name: "Hebbal, Bengaluru - KSPCB", lat: 13.0353, lng: 77.5987874 },
  // {
  //   name: "Hombegowda Nagar, Bengaluru - KSPCB",
  //   lat: 12.9375,
  //   lng: 77.5948946,
  // },
  // {
  //   name: "Jayanagar 5th Block, Bengaluru - KSPCB",
  //   lat: 12.9207,
  //   lng: 77.5841502,
  // },
  // { name: "Peenya, Bengaluru - CPCB", lat: 13.0285, lng: 77.5196763 },
  // {
  //   name: "Sanegurava Halli, Bengaluru - KSPCB",
  //   lat: 13.0385,
  //   lng: 77.646579,
  // },
  // { name: "Silk Board, Bengaluru - KSPCB", lat: 12.9172, lng: 77.6227728 },
  // { name: "Naubad, Bidar - KSPCB", lat: 17.9336, lng: 77.4788 },
  // { name: "Urban, Chamarajanagar - KSPCB", lat: 11.9265, lng: 76.931125 },
  // {
  //   name: "Chikkaballapur Rural, Chikkaballapur - KSPCB",
  //   lat: 13.4354,
  //   lng: 77.7315344,
  // },
  // {
  //   name: "Kalyana Nagara, Chikkamagaluru - KSPCB",
  //   lat: 12.9755,
  //   lng: 77.6032645,
  // },
  // {
  //   name: "Devaraj Urs Badavane, Davanagere - KSPCB",
  //   lat: 14.4759,
  //   lng: 75.9054958,
  // },
  // { name: "Panchal Nagar, Gadag - KSPCB", lat: 27.8966, lng: 76.9916675 },
  // { name: "B.Katihalli, Hassan - KSPCB", lat: 13.0084, lng: 76.1255608 },
  // {
  //   name: "Deshpande Nagar, Hubballi - KSPCB",
  //   lat: 15.3517,
  //   lng: 75.1407753,
  // },
  // {
  //   name: "Lal Bahadur Shastri Nagar, Kalaburagi - KSPCB",
  //   lat: 17.3202,
  //   lng: 76.819936,
  // },
  // { name: "Tamaka Ind. Area, Kolar - KSPCB", lat: 13.1276, lng: 78.1570487 },
  // { name: "Diwator Nagar, Koppal - KSPCB", lat: 12.9375, lng: 77.5948946 },
  // { name: "Stuart Hill, Madikeri - KSPCB", lat: 12.4198, lng: 75.7345151 },
  // { name: "Kadri, Mangalore - KSPCB", lat: 12.8891, lng: 74.8530068 },
  // {
  //   name: "Hebbal 1st Stage, Mysuru - KSPCB",
  //   lat: 12.3509,
  //   lng: 76.6270007,
  // },
  // { name: "Haji Colony, Raichur - KSPCB", lat: 16.2080, lng: 77.3549358 },
  // { name: "Vijay Nagar, Ramanagara - KSPCB", lat: 12.7336, lng: 77.2981954 },
  // {
  //   name: "Vinoba Nagara, Shivamogga - KSPCB",
  //   lat: 13.9398,
  //   lng: 75.5559672,
  // },
  // { name: "Brahmagiri, Udupi - KSPCB", lat: 13.3419, lng: 74.7468737 },
  // { name: "Ibrahimpur, Vijayapura - KSPCB", lat: 16.8027, lng: 75.7223577 },
  // { name: "Collector Office, Yadgir - KSPCB", lat: 16.7513, lng: 77.1363297 },
  // {
  //   name: "Udyogamandal, Eloor - Kerala PCB",
  //   lat: 10.0731,
  //   lng: 76.3041436,
  // },
  // {
  //   name: "Kacheripady, Ernakulam - Kerala PCB",
  //   lat: 9.9882,
  //   lng: 76.2812195,
  // },
  // { name: "Thavakkara, Kannur - Kerala PCB", lat: 11.8763, lng: 75.3771306 },
  // { name: "Vyttila, Kochi - Kerala PCB", lat: 9.9681, lng: 76.3182346 },
  // { name: "Polayathode, Kollam - Kerala PCB", lat: 8.8844, lng: 76.5834765 },
  // { name: "Palayam, Kozhikode - Kerala PCB", lat: 11.2465, lng: 75.782081 },
  // {
  //   name: "Kariavattom, Thiruvananthapuram - Kerala PCB",
  //   lat: 8.4874,
  //   lng: 76.948623,
  // },
  // {
  //   name: "Plammoodu, Thiruvananthapuram - Kerala PCB",
  //   lat: 8.5148,
  //   lng: 76.9459472,
  // },
  // {
  //   name: "Corporation Ground, Thrissur - Kerala PCB",
  //   lat: 10.5324,
  //   lng: 76.2170331,
  // },
  // { name: "T T Nagar, Bhopal - MPPCB", lat: 23.2099, lng: 77.4228497 },
  // {
  //   name: "Shrivastav Colony, Damoh - MPPCB",
  //   lat: 23.8184,
  //   lng: 79.4338188,
  // },
  // { name: "Bhopal Chauraha, Dewas - MPPCB", lat: 22.9687, lng: 76.0635763 },
  // { name: "City Center, Gwalior - MPPCB", lat: 26.2076, lng: 78.1728503 },
  // {
  //   name: "Phool Bagh, Gwalior - Mondelez Ind. Food",
  //   lat: 26.3802,
  //   lng: 78.3052572,
  // },
  // { name: "Chhoti Gwaltoli, Indore - MPPCB", lat: 22.7621, lng: 75.8847738 },
  // { name: "Marhatal, Jabalpur - MPPCB", lat: 23.1899, lng: 79.911423 },
  // { name: "Gole Bazar, Katni - MPPCB", lat: 23.8327, lng: 80.3978186 },
  // { name: "Sahilara, Maihar - KJS Cements", lat: 24.2693, lng: 80.7566275 },
  // {
  //   name: "Sector-D Industrial Area, Mandideep - MPPCB",
  //   lat: 23.0908,
  //   lng: 77.520067,
  // },
  // {
  //   name: "Sector-2 Industrial Area, Pithampur - MPPCB",
  //   lat: 22.6111,
  //   lng: 75.6772689,
  // },
  // {
  //   name: "Shasthri Nagar, Ratlam - IPCA Lab",
  //   lat: 23.3465,
  //   lng: 75.0374764,
  // },
  // { name: "Deen Dayal Nagar, Sagar - MPPCB", lat: 23.8388, lng: 78.7378068 },
  // {
  //   name: "Bandhavgar Colony, Satna - Birla Cement",
  //   lat: 24.5947,
  //   lng: 80.8585357,
  // },
  // {
  //   name: "Suryakiran Bhawan NCL, Singrauli - MPPCB",
  //   lat: 24.2024,
  //   lng: 82.6758142,
  // },
  // {
  //   name: "Mahakaleshwar Temple, Ujjain - MPPCB",
  //   lat: 23.1827,
  //   lng: 75.7682178,
  // },
  // {
  //   name: "More Chowk Waluj, Aurangabad - MPCB",
  //   lat: 19.8739,
  //   lng: 75.386355,
  // },
  // { name: "Chandrapur, Chandrapur - MPCB", lat: 19.9615, lng: 79.2961468 },
  // { name: "MIDC Khutala, Chandrapur - MPCB", lat: 19.9792, lng: 79.2388279 },
  // { name: "Khadakpada, Kalyan - MPCB", lat: 19.2378, lng: 73.1291718 },
  // {
  //   name: "Bandra Kurla Complex, Mumbai - IITM",
  //   lat: 19.0706,
  //   lng: 72.8792172,
  // },
  // { name: "Bandra, Mumbai - MPCB", lat: 19.0418, lng: 72.865228 },
  // { name: "Borivali East, Mumbai - IITM", lat: 19.2238, lng: 72.8545167 },
  // { name: "Borivali East, Mumbai - MPCB", lat: 19.1986, lng: 72.8483255 },
  // {
  //   name: "Chakala-Andheri East, Mumbai - IITM",
  //   lat: 19.1154,
  //   lng: 72.8578058,
  // },
  // {
  //   name: "Chhatrapati Shivaji Intl. Airport (T2), Mumbai - MPCB",
  //   lat: 19.0974,
  //   lng: 72.8745017,
  // },
  // { name: "Colaba, Mumbai - MPCB", lat: 18.9067, lng: 72.8147123 },
  // { name: "Deonar, Mumbai - IITM", lat: 19.0447, lng: 72.9102511 },
  // { name: "Kandivali East, Mumbai - MPCB", lat: 19.2004, lng: 72.8736892 },
  // {
  //   name: "Khindipada-Bhandup West, Mumbai - IITM",
  //   lat: 19.1334,
  //   lng: 72.9132679,
  // },
  // { name: "Kurla, Mumbai - MPCB", lat: 19.0726, lng: 72.8844721 },
  // { name: "Malad West, Mumbai - IITM", lat: 19.1889, lng: 72.835543 },
  // { name: "Mazgaon, Mumbai - IITM", lat: 18.9644, lng: 72.8421341 },
  // { name: "Mulund West, Mumbai - MPCB", lat: 19.1725, lng: 72.942537 },
  // {
  //   name: "Navy Nagar-Colaba, Mumbai - IITM",
  //   lat: 18.8979,
  //   lng: 72.8131432,
  // },
  // { name: "Powai, Mumbai - MPCB", lat: 19.1175, lng: 72.9059747 },
  // {
  //   name: "Siddharth Nagar-Worli, Mumbai - IITM",
  //   lat: 19.0031,
  //   lng: 72.8136893,
  // },
  // { name: "Sion, Mumbai - MPCB", lat: 19.0390, lng: 72.8618952 },
  // { name: "Vasai West, Mumbai - MPCB", lat: 19.4057, lng: 72.8730021 },
  // { name: "Vile Parle West, Mumbai - MPCB", lat: 19.1004, lng: 72.877075 },
  // { name: "Worli, Mumbai - MPCB", lat: 18.9986, lng: 72.8173599 },
  // {
  //   name: "Opp GPO Civil Lines, Nagpur - MPCB",
  //   lat: 21.1523,
  //   lng: 79.0692636,
  // },
  // { name: "Gangapur Road, Nashik - MPCB", lat: 19.9923, lng: 73.750374 },
  // { name: "Airoli, Navi Mumbai - MPCB", lat: 19.1590, lng: 72.9985686 },
  // { name: "Mahape, Navi Mumbai - MPCB", lat: 19.1182, lng: 73.0275875 },
  // { name: "Nerul, Navi Mumbai - MPCB", lat: 19.0338, lng: 73.0195871 },
  // {
  //   name: "Sector-19A Nerul, Navi Mumbai - IITM",
  //   lat: 19.0342,
  //   lng: 73.0164195,
  // },
  // { name: "Alandi, Pune - IITM", lat: 18.6729, lng: 73.8891827 },
  // { name: "Bhosari, Pune - IITM", lat: 18.5365, lng: 73.8055134 },
  // { name: "Hadapsar, Pune - IITM", lat: 18.5183, lng: 73.9235126 },
  // { name: "Karve Road, Pune - MPCB", lat: 18.5124, lng: 73.8396161 },
  // { name: "MIT-Kothrud, Pune - IITM", lat: 18.5076, lng: 73.8198312 },
  // { name: "Mhada Colony, Pune - IITM", lat: 18.5358, lng: 73.8077055 },
  // {
  //   name: "Revenue Colony-Shivajinagar, Pune - IITM",
  //   lat: 18.5295,
  //   lng: 73.8490332,
  // },
  // {
  //   name: "Transport Nagar-Nigdi, Pune - IITM",
  //   lat: 18.6653,
  //   lng: 73.767643,
  // },
  // { name: "Solapur, Solapur - MPCB", lat: 17.6560, lng: 75.9064457 },
  // { name: "Pimpleshwar Mandir, Thane - MPCB", lat: 19.2069, lng: 72.950784 },
  // {
  //   name: "Lumpyngngad, Shillong - Meghalaya PCB",
  //   lat: 25.5584,
  //   lng: 91.9008064,
  // },
  // {
  //   name: "Sikulpuikawn, Aizawl - Mizoram PCB",
  //   lat: 23.7302,
  //   lng: 92.7053464,
  // },
  // { name: "PWD Juction, Kohima - NPCB", lat: 25.8962, lng: 93.7199298 },
  // { name: "GM Office, Brajrajnagar - OSPCB", lat: 21.8550, lng: 83.9206955 },
  // {
  //   name: "Talcher Coalfields,Talcher - OSPCB",
  //   lat: 20.9472,
  //   lng: 85.1754758,
  // },
  // { name: "Jawahar Nagar, Puducherry - PPCC", lat: 11.9309, lng: 79.80304 },
  // { name: "Golden Temple, Amritsar - PPCB", lat: 31.6240, lng: 74.9175142 },
  // { name: "Hardev Nagar, Bathinda - PPCB", lat: 30.2064, lng: 74.9576877 },
  // { name: "Civil Line, Jalandhar - PPCB", lat: 31.3622, lng: 75.5754031 },
  // { name: "Kalal Majra, Khanna - PPCB", lat: 30.7420, lng: 76.2030061 },
  // {
  //   name: "Punjab Agricultural University, Ludhiana - PPCB",
  //   lat: 30.9010,
  //   lng: 75.8071228,
  // },
  // {
  //   name: "RIMT University, Mandi Gobindgarh - PPCB",
  //   lat: 30.6509,
  //   lng: 76.3292875,
  // },
  // { name: "Model Town, Patiala - PPCB", lat: 30.3448, lng: 76.3708347 },
  // {
  //   name: "Ratanpura, Rupnagar - Ambuja Cements",
  //   lat: 30.9658,
  //   lng: 76.5229511,
  // },
  // { name: "Civil Lines,  Ajmer - RSPCB", lat: 27.1891, lng: 73.7304415 },
  // { name: "Moti Doongri, Alwar - RSPCB", lat: 27.5516, lng: 76.6119578 },
  // {
  //   name: "RIICO Ind. Area III, Bhiwadi - RSPCB",
  //   lat: 28.2055,
  //   lng: 76.8626851,
  // },
  // { name: "Adarsh Nagar, Jaipur - RSPCB", lat: 26.9797, lng: 75.7738895 },
  // {
  //   name: "Police Commissionerate, Jaipur - RSPCB",
  //   lat: 26.9163,
  //   lng: 75.8017169,
  // },
  // { name: "Shastri Nagar, Jaipur - RSPCB", lat: 26.9401, lng: 75.7981977 },
  // { name: "Collectorate, Jodhpur - RSPCB", lat: 26.2920, lng: 73.0375214 },
  // { name: "Shrinath Puram, Kota - RSPCB", lat: 25.1438, lng: 75.8212555 },
  // {
  //   name: "Indira Colony Vistar, Pali - RSPCB",
  //   lat: 25.7731,
  //   lng: 73.3502377,
  // },
  // { name: "Ashok Nagar, Udaipur - RSPCB", lat: 24.5876, lng: 73.6974521 },
  // {
  //   name: "Alandur Bus Depot, Chennai - CPCB",
  //   lat: 12.9970,
  //   lng: 80.1913284,
  // },
  // { name: "Arumbakkam, Chennai - TNPCB", lat: 13.0772, lng: 80.2073893 },
  // { name: "Kodungaiyur, Chennai - TNPCB", lat: 13.1444, lng: 80.2477848 },
  // { name: "Manali Village, Chennai - TNPCB", lat: 32.2431, lng: 77.1891761 },
  // { name: "Manali, Chennai - CPCB", lat: 13.1619, lng: 80.2696744 },
  // { name: "Perungudi, Chennai - TNPCB", lat: 13.0121, lng: 80.2190516 },
  // { name: "Royapuram, Chennai - TNPCB", lat: 13.0818, lng: 80.255036 },
  // {
  //   name: "Velachery Res. Area, Chennai - CPCB",
  //   lat: 13.0826,
  //   lng: 80.2707184,
  // },
  // {
  //   name: "SIDCO Kurichi, Coimbatore - TNPCB",
  //   lat: 10.9860,
  //   lng: 76.9619701,
  // },
  // {
  //   name: "Anthoni Pillai Nagar, Gummidipoondi - TNPCB",
  //   lat: 13.4126,
  //   lng: 80.1149651,
  // },
  // {
  //   name: "Meelavittan, Thoothukudi - TNPCB",
  //   lat: 10.0087,
  //   lng: 77.4717857,
  // },
  // {
  //   name: "Bollaram Industrial Area, Hyderabad - TSPCB",
  //   lat: 17.5432,
  //   lng: 78.3514088,
  // },
  // {
  //   name: "Central University, Hyderabad - TSPCB",
  //   lat: 17.4600,
  //   lng: 78.3342703,
  // },
  // {
  //   name: "ICRISAT Patancheru, Hyderabad - TSPCB",
  //   lat: 17.5110,
  //   lng: 78.2751939,
  // },
  // {
  //   name: "IDA Pashamylaram, Hyderabad - TSPCB",
  //   lat: 17.5324,
  //   lng: 78.1849427,
  // },
  // { name: "Sanathnagar, Hyderabad - TSPCB", lat: 17.4562, lng: 78.4439295 },
  // { name: "Zoo Park, Hyderabad - TSPCB", lat: 17.3506, lng: 78.4513068 },
  // {
  //   name: "Kunjaban, Agartala - Tripura SPCB",
  //   lat: 23.8537,
  //   lng: 91.2810656,
  // },
  // { name: "Manoharpur, Agra - UPPCB", lat: 27.2344, lng: 78.0266735 },
  // { name: "Rohta, Agra - UPPCB", lat: 27.1092, lng: 78.0024134 },
  // { name: "Sanjay Palace, Agra - UPPCB", lat: 27.1986, lng: 78.0059814 },
  // {
  //   name: "Sector-3B Avas Vikas Colony, Agra - UPPCB",
  //   lat: 27.2017,
  //   lng: 77.966095,
  // },
  // { name: "Shahjahan Garden, Agra - UPPCB", lat: 27.1747, lng: 78.0251692 },
  // { name: "Shastripuram, Agra - UPPCB", lat: 27.2039, lng: 77.9253155 },
  // {
  //   name: "New Collectorate, Baghpat - UPPCB",
  //   lat: 28.9427,
  //   lng: 77.227607,
  // },
  // {
  //   name: "Yamunapuram, Bulandshahr - UPPCB",
  //   lat: 28.4051,
  //   lng: 77.8298701,
  // },
  // { name: "Nagla Bhau, Firozabad - UPPCB", lat: 27.1705, lng: 78.3772504 },
  // { name: "Indirapuram, Ghaziabad - UPPCB", lat: 28.6460, lng: 77.3695166 },
  // { name: "Loni, Ghaziabad - UPPCB", lat: 28.7333, lng: 77.2986264 },
  // { name: "Sanjay Nagar, Ghaziabad - UPPCB", lat: 28.6939, lng: 77.4549679 },
  // { name: "Vasundhara, Ghaziabad - UPPCB", lat: 28.6623, lng: 77.37344 },
  // {
  //   name: "Madan Mohan Malaviya University of Technology, Gorakhpur - UPPCB",
  //   lat: 26.7314,
  //   lng: 83.4331276,
  // },
  // {
  //   name: "Knowledge Park - III, Greater Noida - UPPCB",
  //   lat: 28.4785,
  //   lng: 77.4814,
  // },
  // {
  //   name: "Knowledge Park - V, Greater Noida - UPPCB",
  //   lat: 28.5509,
  //   lng: 77.4709,
  // },
  // { name: "Anand Vihar, Hapur - UPPCB", lat: 28.7222, lng: 77.7537913 },
  // {
  //   name: "FTI Kidwai Nagar, Kanpur - UPPCB",
  //   lat: 26.4267,
  //   lng: 80.3260053,
  // },
  // { name: "IITK, Kanpur - IITK", lat: 26.5123, lng: 80.2329 },
  // { name: "NSI Kalyanpur, Kanpur - UPPCB", lat: 26.5068, lng: 80.251966 },
  // { name: "Nehru Nagar, Kanpur - UPPCB", lat: 26.4715, lng: 80.3237548 },
  // {
  //   name: "B R Ambedkar University, Lucknow - UPPCB",
  //   lat: 26.7641,
  //   lng: 80.9294641,
  // },
  // { name: "Central School, Lucknow - CPCB", lat: 21.3976, lng: 78.935349 },
  // { name: "Gomti Nagar, Lucknow - UPPCB", lat: 26.8496, lng: 81.0072193 },
  // {
  //   name: "Kukrail Picnic Spot-1, Lucknow - UPPCB",
  //   lat: 26.9065,
  //   lng: 80.9838959,
  // },
  // { name: "Lalbagh, Lucknow - CPCB", lat: 26.8459, lng: 80.9415089 },
  // { name: "Nishant Ganj, Lucknow - UPPCB", lat: 26.8647, lng: 81.0048154 },
  // {
  //   name: "Talkatora District Industries Center, Lucknow - CPCB",
  //   lat: 26.8675,
  //   lng: 80.9967545,
  // },
  // { name: "Ganga Nagar, Meerut - UPPCB", lat: 29.0009, lng: 77.7599208 },
  // { name: "Jai Bhim Nagar, Meerut - UPPCB", lat: 28.9579, lng: 77.7595131 },
  // {
  //   name: "Pallavpuram Phase 2, Meerut - UPPCB",
  //   lat: 29.0641,
  //   lng: 77.7151616,
  // },
  // { name: "Buddhi Vihar, Moradabad - UPPCB", lat: 28.8320, lng: 78.7221251 },
  // {
  //   name: "Eco Herbal Park, Moradabad - UPPCB",
  //   lat: 28.8412,
  //   lng: 78.6966886,
  // },
  // {
  //   name: "Employment Office, Moradabad - UPPCB",
  //   lat: 28.8853,
  //   lng: 78.7387581,
  // },
  // { name: "Jigar Colony, Moradabad - UPPCB", lat: 28.8552, lng: 78.7709978 },
  // { name: "Lajpat Nagar, Moradabad - UPPCB", lat: 28.8253, lng: 78.7830383 },
  // { name: "New Mandi, Muzaffarnagar - UPPCB", lat: 29.4696, lng: 77.7096816 },
  // { name: "Sector - 125, Noida - UPPCB", lat: 28.5414, lng: 77.3323503 },
  // { name: "Sector - 62, Noida - IMD", lat: 28.6287, lng: 77.3596803 },
  // { name: "Sector-1, Noida - UPPCB", lat: 28.5896, lng: 77.3100474 },
  // { name: "Sector-116, Noida - UPPCB", lat: 28.5680, lng: 77.3940273 },
  // { name: "Jhunsi, Prayagraj - UPPCB", lat: 25.4356, lng: 81.911385 },
  // {
  //   name: "Motilal Nehru NIT, Prayagraj - UPPCB",
  //   lat: 25.4934,
  //   lng: 81.8627391,
  // },
  // { name: "Nagar Nigam, Prayagraj - UPPCB", lat: 25.4491, lng: 81.8273517 },
  // { name: "Ardhali Bazar, Varanasi - UPPCB", lat: 25.3476, lng: 82.9808861 },
  // { name: "Bhelupur, Varanasi - UPPCB", lat: 25.3016, lng: 82.9962631 },
  // {
  //   name: "IESD Banaras Hindu University, Varanasi - UPPCB",
  //   lat: 25.2622,
  //   lng: 82.995184,
  // },
  // { name: "Maldahiya, Varanasi - UPPCB", lat: 25.3254, lng: 82.9951758 },
  // {
  //   name: "Omex Eternity, Vrindavan - UPPCB",
  //   lat: 27.5650,
  //   lng: 77.6593393,
  // },
  // {
  //   name: "Asansol Court Area, Asansol - WBPCB",
  //   lat: 23.7041,
  //   lng: 86.9772186,
  // },
  // {
  //   name: "Sidhu Kanhu Indoor Stadium, Durgapur - WBPCB",
  //   lat: 23.5404,
  //   lng: 87.2914219,
  // },
  // { name: "Haldia, Haldia - WBPCB", lat: 22.0603, lng: 88.0465278 },
  // { name: "Belur Math, Howrah - WBPCB", lat: 22.6263, lng: 88.3555025 },
  // { name: "Ghusuri, Howrah - WBPCB", lat: 22.6114, lng: 88.3540145 },
  // { name: "Padmapukur, Howrah - WBPCB", lat: 22.5707, lng: 88.3008448 },
  // { name: "Ballygunge, Kolkata - WBPCB", lat: 22.5280, lng: 88.3659083 },
  // { name: "Bidhannagar, Kolkata - WBPCB", lat: 22.5796, lng: 88.414312 },
  // { name: "Fort William, Kolkata - WBPCB", lat: 22.5542, lng: 88.3358744 },
  // { name: "Jadavpur, Kolkata - WBPCB", lat: 22.4954, lng: 88.3709008 },
  // {
  //   name: "Rabindra Bharati University, Kolkata - WBPCB",
  //   lat: 22.5895,
  //   lng: 88.3558259,
  // },
  // {
  //   name: "Rabindra Sarobar, Kolkata - WBPCB",
  //   lat: 22.5121,
  //   lng: 88.3636952,
  // },
  // { name: "Victoria, Kolkata - WBPCB", lat: 22.5448, lng: 88.3425578 },
  // {
  //   name: "Ward-32 Bapupara, Siliguri - WBPCB",
  //   lat: 26.6922,
  //   lng: 88.4158141,
  // },
];
