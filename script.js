const allQuestions = [
  {
    question: "Which Surah is known as the “Heart of the Quran”?",
    options: ["Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Yasin", "Surah Al-Ikhlas"],
    answer: "Surah Yasin",
    topic: "Quranic Basics",
    explanation: "Surah Yasin is called the 'Heart of the Quran' because it emphasizes core themes like resurrection, belief in Allah, and the message of the prophets."
  },
  {
    question: "How many Surahs are there in the Quran?",
    options: ["100", "110", "114", "120"],
    answer: "114",
    topic: "Quranic Basics",
    explanation: "The Quran consists of 114 Surahs, revealed over a span of 23 years."
  },
  {
    question: "Which Surah was revealed entirely at once?",
    options: ["Surah Al-Kahf", "Surah Maryam", "Surah Yusuf", "Surah Al-Fatiha"],
    answer: "Surah Al-Fatiha",
    topic: "Quranic Basics",
    explanation: "Surah Al-Fatiha was revealed all at once and is recited in every unit of Salah."
  },
  {
    question: "Which Surah is also called “Umm al-Kitab” (Mother of the Book)?",
    options: ["Surah Al-Baqarah", "Surah Yasin", "Surah Al-Fatiha", "Surah Al-Ikhlas"],
    answer: "Surah Al-Fatiha",
    topic: "Quranic Basics",
    explanation: "Surah Al-Fatiha is known as Umm al-Kitab because it summarizes the essence of the Quran’s teachings."
  },
  {
    question: "Which angel delivered the revelation to Prophet Muhammad (PBUH)?",
    options: ["Angel Michael", "Angel Gabriel (Jibril)", "Angel Israfil", "Angel Azrael"],
    answer: "Angel Gabriel (Jibril)",
    topic: "Quranic Basics",
    explanation: "Angel Jibril (Gabriel) was the messenger of revelation who brought the Quran to the Prophet Muhammad (PBUH)."
  },
  {
    question: "What is the meaning of the word “Quran”?",
    options: ["Guidance", "The Book", "The Recitation", "The Knowledge"],
    answer: "The Recitation",
    topic: "Quranic Basics",
    explanation: "The word Quran literally means 'The Recitation', as it was revealed to be recited aloud."
  },
  {
    question: "Which Surah is known for being a cure and protection, often recited for relief from anxiety?",
    options: ["Surah Al-Falaq", "Surah Al-Ikhlas", "Surah Al-Fatiha", "Surah Al-Baqarah"],
    answer: "Surah Al-Falaq",
    topic: "Quranic Basics",
    explanation: "Surah Al-Falaq is one of the protective chapters (Mu'awwidhat) recited for protection from evil."
  },
  {
    question: "Which Surah is recited for protection from the trials of Dajjal?",
    options: ["Surah Al-Baqarah", "Surah Al-Kahf", "Surah Al-Mulk", "Surah Al-Ma’un"],
    answer: "Surah Al-Kahf",
    topic: "Quranic Basics",
    explanation: "Reciting Surah Al-Kahf, especially on Fridays, protects from the fitnah (trial) of Dajjal."
  },
  {
    question: "In which Surah is the verse “Indeed, with hardship, there is ease” found?",
    options: ["Surah Al-Inshirah", "Surah Al-Ikhlas", "Surah Al-Fil", "Surah Al-Teen"],
    answer: "Surah Al-Inshirah",
    topic: "Quranic Basics",
    explanation: "Surah Al-Inshirah (94:6) reminds believers that relief always follows hardship."
  },
  {
    question: "Which Surah was revealed to console the Prophet (PBUH) during times of hardship?",
    options: ["Surah Al-Duha", "Surah Al-Muzzammil", "Surah Al-Mudathir", "Surah Al-Fajr"],
    answer: "Surah Al-Duha",
    topic: "Quranic Basics",
    explanation: "Surah Al-Duha was revealed to reassure the Prophet (PBUH) during a period of sadness."
  },
  {
    question: "What is the first revelation revealed to Prophet Muhammad (PBUH) through Jibreel (Gabriel)?",
    options: ["Surah Al-Alaq (96:1-5)", "Surah Al-Fatihah (1:1-7)", "Surah Al-Baqarah (2:1-5)", "Surah Al-Ikhlas (112:1-4)"],
    answer: "Surah Al-Alaq (96:1-5)",
    topic: "Quranic Basics",
    explanation: "The first verses revealed were from Surah Al-Alaq: 'Read in the name of your Lord who created...'"
  },
  {
    question: "How many Surahs (chapters) are there in the Quran?",
    options: ["100", "114", "120", "130"],
    answer: "114",
    topic: "Quranic Basics",
    explanation: "The Quran has 114 Surahs of varying lengths."
  },
  {
    question: "Which Surah is the longest in the Quran?",
    options: ["Surah Al-Baqarah", "Surah Al-Alaq", "Surah Al-Furqan", "Surah Al-Araf"],
    answer: "Surah Al-Baqarah",
    topic: "Quranic Basics",
    explanation: "Surah Al-Baqarah is the longest Surah with 286 verses."
  },
  {
    question: "What is the shortest Surah in the Quran?",
    options: ["Surah Al-Kawthar", "Surah Al-Ikhlas", "Surah Al-Nas", "Surah Al-Fil"],
    answer: "Surah Al-Kawthar",
    topic: "Quranic Basics",
    explanation: "Surah Al-Kawthar has only 3 verses, making it the shortest Surah."
  },
  {
    question: "Which Surah is considered the “Heart of the Quran”?",
    options: ["Surah Al-Fatiha", "Surah Ya-Sin", "Surah Al-Baqarah", "Surah Al-Mulk"],
    answer: "Surah Ya-Sin",
    topic: "Quranic Basics",
    explanation: "Surah Ya-Sin is considered the heart of the Quran due to its focus on faith, resurrection, and reminders of Allah’s power."
  },
  {
    question: "What does the word “Quran” literally mean?",
    options: ["Book", "Recitation", "Revelation", "Light"],
    answer: "Recitation",
    topic: "Quranic Basics",
    explanation: "The Quran literally means 'Recitation', highlighting its oral preservation."
  },
  {
    question: "Which Surah begins with the words “In the name of Allah, the Most Gracious, the Most Merciful”?",
    options: ["Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Al-Ikhlas", "Surah Al-Fil"],
    answer: "Surah Al-Fatiha",
    topic: "Quranic Basics",
    explanation: "Surah Al-Fatiha begins with Bismillah and is recited in every unit of Salah."
  },
  {
    question: "Which Surah was revealed to Prophet Muhammad (PBUH) when he was in Mecca?",
    options: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Muzzammil"],
    answer: "Surah Al-Muzzammil",
    topic: "Quranic Basics",
    explanation: "Surah Al-Muzzammil, a Makkan Surah, encouraged the Prophet (PBUH) to pray at night."
  },
  {
    question: "Which Surah is referred to as “The Cow”?",
    options: ["Surah Al-Baqarah", "Surah Al-Alaq", "Surah Al-Mulk", "Surah Al-Araf"],
    answer: "Surah Al-Baqarah",
    topic: "Quranic Basics",
    explanation: "Surah Al-Baqarah means 'The Cow' and includes the story of the cow during Bani Israel’s time."
  },
  {
    question: "Which Surah contains the verse of the Throne (Ayat al-Kursi)?",
    options: ["Surah Al-Baqarah", "Surah Al-Ikhlas", "Surah Al-Fatiha", "Surah Al-Nisa"],
    answer: "Surah Al-Baqarah",
    topic: "Quranic Basics",
    explanation: "Ayat al-Kursi (2:255) in Surah Al-Baqarah is regarded as one of the greatest verses in the Quran."
  },
  {
    question: "Which of the following Surahs is named after a woman?",
    options: ["Surah Maryam", "Surah Al-Araf", "Surah Al-Nisa", "Surah Al-Fatiha"],
    answer: "Surah Maryam",
    topic: "Quranic Basics",
    explanation: "Surah Maryam is named after Maryam (Mary), the mother of Prophet Isa (Jesus, peace be upon him)."
  },
  {
    question: "What is the total number of verses (Ayahs) in the Quran?",
    options: ["6,236", "6,666", "6,210", "6,112"],
    answer: "6,666",
    topic: "Quranic Basics",
    explanation: "The Quran is often counted as having 6,666 verses, though some scholars count 6,236 due to variations in numbering."
  },
  {
    question: "Which Surah was revealed to Prophet Muhammad (PBUH) during his Night Journey (Isra and Mi’raj)?",
    options: ["Surah Al-Bani Israel (Surah 17)", "Surah Al-Alaq", "Surah Al-Mulk", "Surah Al-Araf"],
    answer: "Surah Al-Bani Israel (Surah 17)",
    topic: "Quranic Basics",
    explanation: "Surah Al-Isra (Bani Israel) discusses the Night Journey and moral lessons for believers."
  },
  {
    question: "What is the term used in the Quran to refer to the written form of the Quranic revelation?",
    options: ["Al-Mushaf", "Al-Juz", "Al-Sahifa", "Al-Tafsir"],
    answer: "Al-Mushaf",
    topic: "Quranic Basics",
    explanation: "The compiled written copy of the Quran is called 'Al-Mushaf'."
  },
  {
    question: "Which Surah contains the verse “This day I have perfected for you your religion…” (5:3)?",
    options: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Al-Ma’idah", "Surah Al-Ikhlas"],
    answer: "Surah Al-Ma’idah",
    topic: "Quranic Basics",
    explanation: "Surah Al-Ma’idah (5:3) contains the verse in which Allah declares Islam as a complete religion."
  },
  {
    question: "What is the main theme of Surah Al-Ikhlas?",
    options: ["Belief in the Day of Judgment", "The Oneness of Allah", "Gratitude towards Allah", "The story of Prophet Ibrahim"],
    answer: "The Oneness of Allah",
    topic: "Quranic Basics",
    explanation: "Surah Al-Ikhlas focuses entirely on Tawheed (the Oneness of Allah)."
  },
  {
    question: "Which of the following Surahs was revealed in Madinah?",
    options: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Al-Nisa", "Surah Al-Mulk"],
    answer: "Surah Al-Nisa",
    topic: "Quranic Basics",
    explanation: "Surah Al-Nisa was revealed in Madinah and discusses family, justice, and social laws."
  },
  {
    question: "Which Surah mentions the story of Prophet Musa (Moses) and Pharaoh?",
    options: ["Surah Al-Baqarah", "Surah Yunus", "Surah Al-Araf", "Surah Taha"],
    answer: "Surah Taha",
    topic: "Quranic Basics",
    explanation: "Surah Taha narrates Prophet Musa’s mission and his confrontation with Pharaoh."
  },
  {
    question: "In which Surah is the verse “Indeed, Allah will not change the condition of a people until they change what is in themselves” (13:11)?",
    options: ["Surah Al-Baqarah", "Surah Al-Ra’d", "Surah Al-Nisa", "Surah Al-Tawbah"],
    answer: "Surah Al-Ra’d",
    topic: "Quranic Basics",
    explanation: "Surah Al-Ra’d (13:11) teaches that people must strive to change themselves before Allah changes their condition."
  },
  {
    question: "Which Surah contains the longest verse in the Quran (Verse 282 of Surah Al-Baqarah)?",
    options: ["Surah Al-Baqarah", "Surah Al-Ahzab", "Surah Al-Mulk", "Surah Al-Imran"],
    answer: "Surah Al-Baqarah",
    topic: "Quranic Basics",
    explanation: "The longest verse in the Quran is Ayah 282 of Surah Al-Baqarah, dealing with contracts and financial dealings."
  },
  {
    question: "Which Surah starts with the words “Say, ‘He is Allah, [Who is] One’”?",
    options: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah Al-Mumtahanah"],
    answer: "Surah Al-Ikhlas",
    topic: "Quranic Basics",
    explanation: "Surah Al-Ikhlas begins with 'Qul huwallahu ahad' and affirms Allah’s oneness."
  },
  {
    question: "Which Surah was revealed to the Prophet during his migration to Madinah?",
    options: ["Surah Al-Ahzab", "Surah Al-Tawbah", "Surah Al-Mujadila", "Surah Al-Baqarah"],
    answer: "Surah Al-Baqarah",
    topic: "Quranic Basics",
    explanation: "Surah Al-Baqarah was revealed in Madinah soon after the Prophet’s migration."
  },
  {
    question: "Which Prophet is mentioned the most in the Quran?",
    options: ["Prophet Ibrahim", "Prophet Musa", "Prophet Isa", "Prophet Muhammad"],
    answer: "Prophet Musa",
    topic: "Prophets in Islam",
    explanation: "Prophet Musa (Moses) is mentioned more than 100 times in the Quran, more than any other prophet."
  },
  {
    question: "Which Prophet was swallowed by a whale?",
    options: ["Prophet Isa", "Prophet Musa", "Prophet Yunus", "Prophet Yusuf"],
    answer: "Prophet Yunus",
    topic: "Prophets in Islam",
    explanation: "Prophet Yunus (Jonah) was swallowed by a great fish after leaving his people, and he prayed for forgiveness inside its belly."
  },
  {
    question: "Which Prophet was given the Zabur (Psalms)?",
    options: ["Prophet Isa", "Prophet Dawud", "Prophet Musa", "Prophet Ibrahim"],
    answer: "Prophet Dawud",
    topic: "Prophets in Islam",
    explanation: "The Zabur (Psalms) was given to Prophet Dawud (David), consisting mainly of praises and songs to Allah."
  },
  {
    question: "Which Prophet is associated with building the Kaaba?",
    options: ["Prophet Isa", "Prophet Ibrahim", "Prophet Musa", "Prophet Yusuf"],
    answer: "Prophet Ibrahim",
    topic: "Prophets in Islam",
    explanation: "Prophet Ibrahim (Abraham) and his son Ismail rebuilt the Kaaba in Makkah as a center for monotheistic worship."
  },
  {
    question: "Prophet Musa was given which holy book?",
    options: ["Quran", "Torah", "Injeel", "Zabur"],
    answer: "Torah",
    topic: "Prophets in Islam",
    explanation: "Prophet Musa (Moses) received the Torah (Tawrat), which guided the Children of Israel."
  },
  {
    question: "Which Prophet is known for his patience and steadfastness during the great flood?",
    options: ["Prophet Ibrahim", "Prophet Nuh", "Prophet Musa", "Prophet Isa"],
    answer: "Prophet Nuh",
    topic: "Prophets in Islam",
    explanation: "Prophet Nuh (Noah) preached for 950 years and built the Ark to save the believers from the flood."
  },
  {
    question: "Which Prophet was given the ability to speak directly to animals and control the wind and water?",
    options: ["Prophet Yusuf", "Prophet Sulayman", "Prophet Dawud", "Prophet Isa"],
    answer: "Prophet Sulayman",
    topic: "Prophets in Islam",
    explanation: "Prophet Sulayman (Solomon) was granted authority over animals, jinn, and even the wind."
  },
  {
    question: "Which Prophet is recognized in Islam as the “Seal of the Prophets”?",
    options: ["Prophet Musa", "Prophet Isa", "Prophet Muhammad", "Prophet Idris"],
    answer: "Prophet Muhammad",
    topic: "Prophets in Islam",
    explanation: "Prophet Muhammad (PBUH) is called the Seal of the Prophets because he is the last prophet sent by Allah."
  },
  {
    question: "Which Prophet was thrown into a fire by his people but remained unharmed by Allah’s protection?",
    options: ["Prophet Ibrahim", "Prophet Shuaib", "Prophet Hud", "Prophet Lut"],
    answer: "Prophet Ibrahim",
    topic: "Prophets in Islam",
    explanation: "Prophet Ibrahim (Abraham) was thrown into a fire, but Allah made the fire cool and safe for him."
  },
  {
    question: "Which Prophet is associated with the story of the miraculous birth to the Virgin Mary (Maryam) in Islam?",
    options: ["Prophet Dawud", "Prophet Zakariya", "Prophet Isa", "Prophet Yahya"],
    answer: "Prophet Isa",
    topic: "Prophets in Islam",
    explanation: "Prophet Isa (Jesus) was born miraculously to Maryam (Mary) without a father by Allah’s will."
  },
  {
    question: "Who was the first prophet of Islam?",
    options: ["Prophet Musa", "Prophet Nuh", "Prophet Adam", "Prophet Ibrahim"],
    answer: "Prophet Adam",
    topic: "Prophets in Islam",
    explanation: "Prophet Adam (AS) was the first human created by Allah and the first prophet."
  },
  {
    question: "Which prophet is known as Khalilullah (Friend of Allah)?",
    options: ["Prophet Musa", "Prophet Ibrahim", "Prophet Isa", "Prophet Yusuf"],
    answer: "Prophet Ibrahim",
    topic: "Prophets in Islam",
    explanation: "Prophet Ibrahim (Abraham) is honored with the title Khalilullah, meaning Friend of Allah."
  },
  {
    question: "Which prophet built the Ark and saved believers from the flood?",
    options: ["Prophet Nuh", "Prophet Lut", "Prophet Hud", "Prophet Saleh"],
    answer: "Prophet Nuh",
    topic: "Prophets in Islam",
    explanation: "Prophet Nuh (Noah) built the Ark by Allah’s command to save his followers from the flood."
  },
  {
    question: "To which prophet was the Zabur (Psalms) revealed?",
    options: ["Prophet Musa", "Prophet Dawud", "Prophet Isa", "Prophet Muhammad"],
    answer: "Prophet Dawud",
    topic: "Prophets in Islam",
    explanation: "Prophet Dawud (David) was given the Zabur, a scripture revealed before the Quran."
  },
  {
    question: "Which prophet was known for his beauty and was thrown into a well by his brothers?",
    options: ["Prophet Yusuf", "Prophet Yahya", "Prophet Harun", "Prophet Idris"],
    answer: "Prophet Yusuf",
    topic: "Prophets in Islam",
    explanation: "Prophet Yusuf (Joseph) was envied by his brothers, who cast him into a well, but Allah later elevated him to power in Egypt."
  },
  {
    question: "Who is referred to as Kalimullah (The one who spoke to Allah)?",
    options: ["Prophet Musa", "Prophet Ibrahim", "Prophet Muhammad", "Prophet Isa"],
    answer: "Prophet Musa",
    topic: "Prophets in Islam",
    explanation: "Prophet Musa (Moses) is called Kalimullah because he spoke directly to Allah on Mount Sinai."
  },
  {
    question: "Which prophet was sent to the people of ‘Ad?",
    options: ["Prophet Hud", "Prophet Saleh", "Prophet Shu’ayb", "Prophet Nuh"],
    answer: "Prophet Hud",
    topic: "Prophets in Islam",
    explanation: "Prophet Hud was sent to the people of ‘Ad, who rejected his message and were destroyed by a violent windstorm."
  },
  {
    question: "Who was swallowed by a great fish and prayed for forgiveness?",
    options: ["Prophet Musa", "Prophet Yunus", "Prophet Ibrahim", "Prophet Nuh"],
    answer: "Prophet Yunus",
    topic: "Prophets in Islam",
    explanation: "Prophet Yunus (Jonah) was swallowed by a large fish, but his dua was accepted by Allah, and he was saved."
  },
  {
    question: "Which prophet was commanded by Allah to sacrifice his son as a test?",
    options: ["Prophet Musa", "Prophet Dawud", "Prophet Ibrahim", "Prophet Lut"],
    answer: "Prophet Ibrahim",
    topic: "Prophets in Islam",
    explanation: "Prophet Ibrahim (Abraham) was tested with the command to sacrifice his son Ismail, but Allah replaced him with a ram."
  },
  {
    question: "Which prophet led the construction of the Kaaba with his son?",
    options: ["Prophet Nuh", "Prophet Ibrahim", "Prophet Isa", "Prophet Musa"],
    answer: "Prophet Ibrahim",
    topic: "Prophets in Islam",
    explanation: "Prophet Ibrahim and his son Ismail built the Kaaba as the first house of worship for Allah."
  },
  {
    question: "Who was the last prophet of Islam?",
    options: ["Prophet Isa", "Prophet Muhammad", "Prophet Musa", "Prophet Ibrahim"],
    answer: "Prophet Muhammad",
    topic: "Prophets in Islam",
    explanation: "Prophet Muhammad (PBUH) is the final prophet, and no prophet will come after him."
  },
  {
    question: "Which prophet was known for his wisdom and ability to judge fairly?",
    options: ["Prophet Sulaiman", "Prophet Dawud", "Prophet Yusuf", "Prophet Yahya"],
    answer: "Prophet Sulaiman",
    topic: "Prophets in Islam",
    explanation: "Prophet Sulaiman (Solomon) was blessed with wisdom and the ability to judge disputes with fairness."
  },
  {
    question: "What miracle was Prophet Musa (Moses) given by Allah?",
    options: [
      "Parting the Red Sea",
      "Bringing the dead back to life",
      "Speaking to animals",
      "Turning water into wine"
    ],
    answer: "Parting the Red Sea",
    topic: "Prophets in Islam",
    explanation: "Prophet Musa was given many miracles, including parting the Red Sea to save the Children of Israel from Pharaoh."
  },
  {
    question: "Which prophet was able to communicate with birds and control jinn?",
    options: ["Prophet Dawud", "Prophet Sulaiman", "Prophet Isa", "Prophet Idris"],
    answer: "Prophet Sulaiman",
    topic: "Prophets in Islam",
    explanation: "Prophet Sulaiman (Solomon) could understand the speech of birds and had control over jinn by Allah’s command."
  },
  {
    question: "Who was the father of Prophet Yusuf (Joseph)?",
    options: ["Prophet Ibrahim", "Prophet Yaqub", "Prophet Harun", "Prophet Nuh"],
    answer: "Prophet Yaqub",
    topic: "Prophets in Islam",
    explanation: "Prophet Yaqub (Jacob) was the father of Prophet Yusuf, known for his patience and trust in Allah."
  },
  {
    question: "Who warned the people of Thamud and brought forth a she-camel as a sign?",
    options: ["Prophet Saleh", "Prophet Hud", "Prophet Shu’ayb", "Prophet Ibrahim"],
    answer: "Prophet Saleh",
    topic: "Prophets in Islam",
    explanation: "Prophet Saleh was sent to the people of Thamud, and the miracle of the she-camel was given as a sign, but they rejected it."
  },
  {
    question: "Which prophet’s people were destroyed by a rain of stones for their sins?",
    options: ["Prophet Musa", "Prophet Lut", "Prophet Nuh", "Prophet Shu’ayb"],
    answer: "Prophet Lut",
    topic: "Prophets in Islam",
    explanation: "The people of Prophet Lut (Lot) were destroyed by a rain of stones due to their corruption and disobedience."
  },
  {
    question: "Which prophet was tested with severe illness but remained patient?",
    options: ["Prophet Ayyub", "Prophet Isa", "Prophet Idris", "Prophet Yahya"],
    answer: "Prophet Ayyub",
    topic: "Prophets in Islam",
    explanation: "Prophet Ayyub (Job) endured severe illness and loss, yet remained steadfast and patient, earning Allah’s reward."
  },
  {
    question: "Which prophet foretold the coming of Prophet Muhammad (PBUH)?",
    options: ["Prophet Musa", "Prophet Isa", "Prophet Ibrahim", "Prophet Sulaiman"],
    answer: "Prophet Isa",
    topic: "Prophets in Islam",
    explanation: "Prophet Isa (Jesus) foretold the coming of Prophet Muhammad (PBUH) as mentioned in the Quran (Surah As-Saff 61:6)."
  },
  {
    question: "Who was the prophet who prayed to Allah for a son and was granted Prophet Yahya (John)?",
    options: ["Prophet Zakariya", "Prophet Ibrahim", "Prophet Musa", "Prophet Harun"],
    answer: "Prophet Zakariya",
    topic: "Prophets in Islam",
    explanation: "Prophet Zakariya prayed earnestly for a child, and Allah blessed him with Prophet Yahya (John)."
  },
  {
    question: "Which prophet was taken to the heavens without experiencing death?",
    options: ["Prophet Isa", "Prophet Idris", "Prophet Musa", "Prophet Yusuf"],
    answer: "Prophet Isa",
    topic: "Prophets in Islam",
    explanation: "Prophet Isa (Jesus) was raised to the heavens alive and will return before the Day of Judgment."
  },
  {
    question: "Which prophet’s people were punished with an earthquake for their dishonesty in trade?",
    options: ["Prophet Saleh", "Prophet Shu’ayb", "Prophet Hud", "Prophet Nuh"],
    answer: "Prophet Shu’ayb",
    topic: "Prophets in Islam",
    explanation: "The people of Prophet Shu’ayb were destroyed by an earthquake due to their corruption and dishonesty in trade."
  },
  {
  question: "What is the first pillar of Islam?",
  options: ["Salah", "Zakat", "Shahada", "Sawm"],
  answer: "Shahada",
  topic: "Islamic Beliefs and Practices",
  explanation: "The Shahada, or testimony of faith, is the first pillar of Islam: 'There is no god but Allah, and Muhammad is His Messenger.'"
  },
  {
    question: "During which month do Muslims fast from dawn to sunset?",
    options: ["Muharram", "Ramadan", "Shawwal", "Dhul-Hijjah"],
    answer: "Ramadan",
    topic: "Islamic Beliefs and Practices",
    explanation: "Ramadan is the ninth month of the Islamic calendar, in which fasting (Sawm) is obligatory for Muslims."
  },
  {
    question: "What does “Zakat” mean?",
    options: ["Purification", "Charity", "Worship", "Fasting"],
    answer: "Purification",
    topic: "Islamic Beliefs and Practices",
    explanation: "Zakat means 'purification' and refers to purifying wealth by giving a portion to those in need."
  },
  {
    question: "What is the last pillar of Islam?",
    options: ["Salah", "Zakat", "Sawm", "Hajj"],
    answer: "Hajj",
    topic: "Islamic Beliefs and Practices",
    explanation: "Hajj, the pilgrimage to Makkah, is the fifth and last pillar of Islam, required once in a lifetime if possible."
  },
  {
    question: "What is the basic declaration of faith in Islam, known as the Shahada?",
    options: [
      "There is no god but Allah, and Muhammad is His messenger.",
      "Prayer is the key to paradise.",
      "Allah is the creator of all things.",
      "Fasting leads to righteousness."
    ],
    answer: "There is no god but Allah, and Muhammad is His messenger.",
    topic: "Islamic Beliefs and Practices",
    explanation: "The Shahada affirms Tawheed (Oneness of Allah) and acceptance of Prophet Muhammad (PBUH) as His Messenger."
  },
  {
    question: "Which Surah is recited in every unit of Salah (prayer)?",
    options: ["Surah Al-Baqarah", "Surah Al-Fatihah", "Surah Yasin", "Surah Al-Ikhlas"],
    answer: "Surah Al-Fatiha",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah Al-Fatiha, 'The Opening,' is recited in every rak’ah of Salah and is essential for prayer validity."
  },
  {
    question: "What is the purpose of Zakat according to the Quran?",
    options: [
      "To gain social status",
      "To purify wealth and help the needy",
      "To increase one’s savings",
      "To fulfill a cultural tradition"
    ],
    answer: "To purify wealth and help the needy",
    topic: "Islamic Beliefs and Practices",
    explanation: "The Quran states that Zakat purifies wealth and supports those in need, creating social balance."
  },
  {
    question: "Which pillar of Islam requires fasting during the month of Ramadan?",
    options: ["Zakat", "Hajj", "Salah", "Sawm"],
    answer: "Sawm",
    topic: "Islamic Beliefs and Practices",
    explanation: "Sawm, fasting during Ramadan, is the fourth pillar of Islam and teaches self-discipline and piety."
  },
  {
    question: "What does the Quran say about the Day of Judgment in Surah Al-Qariah (101)?",
    options: [
      "It will be a day of ease for all people.",
      "People’s deeds will be weighed in a balance.",
      "Only prophets will be judged.",
      "The day will never come."
    ],
    answer: "People’s deeds will be weighed in a balance.",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah Al-Qariah describes the weighing of deeds on the Day of Judgment, determining people’s destiny."
  },
  {
    question: "Which Surah emphasizes the importance of belief in the Oneness of Allah?",
    options: [
      "Surah Al-Ikhlas (112)",
      "Surah Al-Baqarah (2)",
      "Surah Al-An’am (6)",
      "Surah Yusuf (12)"
    ],
    answer: "Surah Al-Ikhlas (112)",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah Al-Ikhlas is a concise chapter affirming Tawheed (Oneness of Allah)."
  },
  {
    question: "How many times a day are Muslims required to perform Salah?",
    options: ["3", "4", "5", "6"],
    answer: "5",
    topic: "Islamic Beliefs and Practices",
    explanation: "Muslims are required to perform five daily prayers: Fajr, Dhuhr, Asr, Maghrib, and Isha."
  },
  {
    question: "What is the name of the pilgrimage to Mecca that Muslims must perform once in a lifetime, if able?",
    options: ["Sawm", "Zakat", "Hajj", "Jihad"],
    answer: "Hajj",
    topic: "Islamic Beliefs and Practices",
    explanation: "Hajj is the fifth pillar of Islam and is obligatory for Muslims who are physically and financially capable."
  },
  {
    question: "What is the Quran’s term for the unseen beings created from smokeless fire?",
    options: ["Angels", "Jinn", "Humans", "Animals"],
    answer: "Jinn",
    topic: "Islamic Beliefs and Practices",
    explanation: "The Quran describes Jinn as beings created from smokeless fire, distinct from humans and angels."
  },
  {
    question: "What does Surah Al-Baqarah (2:2) describe the Quran as?",
    options: [
      "A book of poetry",
      "A guidance for the righteous",
      "A storybook",
      "A warning for disbelievers only"
    ],
    answer: "A guidance for the righteous",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah Al-Baqarah states that the Quran is guidance for those who have Taqwa (God-consciousness)."
  },
  {
    question: "What is the Quran’s term for the obligatory charity given to the poor?",
    options: ["Sadaqah", "Zakat", "Khums", "Nafl"],
    answer: "Zakat",
    topic: "Islamic Beliefs and Practices",
    explanation: "Zakat is the obligatory charity, one of the Five Pillars of Islam, distinct from voluntary charity (Sadaqah)."
  },
  {
    question: "Which of the following is a characteristic of the believers mentioned in Surah Al-Mu’minun (23)?",
    options: [
      "They speak falsehood.",
      "They pray with humility.",
      "They avoid giving charity.",
      "They neglect their prayers."
    ],
    answer: "They pray with humility.",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah Al-Mu’minun describes true believers as those who perform Salah with humility."
  },
  {
    question: "What is the reward for fasting, as mentioned in the Quran?",
    options: [
      "Material wealth",
      "Forgiveness and closeness to Allah",
      "Fame and recognition",
      "Longer life on earth"
    ],
    answer: "Forgiveness and closeness to Allah",
    topic: "Islamic Beliefs and Practices",
    explanation: "The Quran mentions that fasting leads to forgiveness and increased Taqwa (piety)."
  },
  {
    question: "What does Surah Al-Asr (103) emphasize as essential for salvation?",
    options: [
      "Wealth and power",
      "Faith, good deeds, and mutual advice on truth and patience",
      "Performing Hajj annually",
      "Avoiding any hardship"
    ],
    answer: "Faith, good deeds, and mutual advice on truth and patience",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah Al-Asr teaches that success lies in faith, good deeds, truth, and patience."
  },
  {
    question: "Which angel is responsible for bringing revelations to the prophets?",
    options: ["Angel Israfil", "Angel Jibreel (Gabriel)", "Angel Mikail (Michael)", "Angel Malik"],
    answer: "Angel Jibreel (Gabriel)",
    topic: "Islamic Beliefs and Practices",
    explanation: "Angel Jibreel (Gabriel) was tasked with delivering Allah’s revelations to the prophets."
  },
  {
    question: "What does the Quran teach about the hereafter in Surah Al-Zalzalah (99)?",
    options: [
      "There is no life after death.",
      "Every deed, small or big, will be accounted for.",
      "Only major sins will be judged.",
      "Everyone will enter paradise regardless of actions."
    ],
    answer: "Every deed, small or big, will be accounted for.",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah Al-Zalzalah explains that on the Day of Judgment, even the smallest deeds will be shown."
  },
  {
    question: "What does the Quran say about alcohol and gambling in Surah Al-Baqarah (2:219)?",
    options: [
      "They have some benefits but their sin is greater than their benefit.",
      "They are completely permissible.",
      "They are necessary for social bonding.",
      "They are allowed only during celebrations."
    ],
    answer: "They have some benefits but their sin is greater than their benefit.",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah Al-Baqarah acknowledges some benefit in alcohol and gambling but declares their harm greater."
  },
  {
    question: "What is the significance of the night mentioned in Surah Al-Qadr (97)?",
    options: [
      "It is the night the Quran was revealed.",
      "It is the night of the Prophet’s birth.",
      "It is a night of fasting.",
      "It is the night of Eid."
    ],
    answer: "It is the night the Quran was revealed.",
    topic: "Islamic Beliefs and Practices",
    explanation: "Laylat al-Qadr is the night the Quran was first revealed and is better than a thousand months."
  },
  {
    question: "What does the Quran say about obeying parents in Surah Luqman (31:14)?",
    options: [
      "Parents should be obeyed in all circumstances.",
      "Be kind and dutiful to them, but not if they command disobedience to Allah.",
      "Ignore their advice.",
      "Disobey them to focus solely on worship."
    ],
    answer: "Be kind and dutiful to them, but not if they command disobedience to Allah.",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah Luqman instructs kindness to parents but prohibits obeying them in disobedience to Allah."
  },
  {
    question: "What does Surah An-Nahl (16:97) say about righteous deeds?",
    options: [
      "They lead to prosperity in this world only.",
      "Whoever does righteous deeds, male or female, will live a good life.",
      "They are only for the wealthy to perform.",
      "They have no bearing on the afterlife."
    ],
    answer: "Whoever does righteous deeds, male or female, will live a good life.",
    topic: "Islamic Beliefs and Practices",
    explanation: "Surah An-Nahl teaches that righteous deeds lead to a good life and reward in the Hereafter."
  },
  {
    question: "What is the Quran’s stance on the creation of humans, as mentioned in Surah Al-Alaq (96:1-2)?",
    options: [
      "Humans were created from clay.",
      "Humans were created from a clot.",
      "Humans were created from fire.",
      "Humans were created from light."
    ],
    answer: "Humans were created from a clot.",
    topic: "Islamic Beliefs and Practices",
    explanation: "The first revelation in Surah Al-Alaq states that Allah created humans from a clot (alaqah)."
  },
  {
    question: "What is the Quranic instruction regarding enjoining good and forbidding evil?",
    options: [
      "It is only for religious scholars.",
      "It is the duty of every Muslim.",
      "It is optional for most people.",
      "It is unnecessary in modern times."
    ],
    answer: "It is the duty of every Muslim.",
    topic: "Islamic Beliefs and Practices",
    explanation: "The Quran emphasizes that enjoining good and forbidding evil is a responsibility of all Muslims."
  },
  {
    question: "What is the declaration of faith (Shahada) in Islam?",
    options: [
      "There is no god but Allah, and Muhammad is His Messenger",
      "Allah is the most Merciful",
      "Prayer is the key to Paradise",
      "Charity brings blessings"
    ],
    answer: "There is no god but Allah, and Muhammad is His Messenger",
    topic: "Islamic Beliefs and Practices",
    explanation: "The Shahada is the testimony of faith that defines a Muslim’s belief."
  },
  {
    question: "How many times a day are Muslims required to perform Salah (prayer)?",
    options: ["3", "5", "6", "7"],
    answer: "5",
    topic: "Islamic Beliefs and Practices",
    explanation: "Muslims are required to perform five daily prayers at prescribed times."
  },
  {
    question: "What is the Arabic term for the obligatory charity that Muslims must give, which is one of the Five Pillars of Islam?",
    options: ["Sadaqah", "Zakat", "Hajj", "Sawm"],
    answer: "Zakat",
    topic: "Islamic Beliefs and Practices",
    explanation: "Zakat is the obligatory charity (2.5% of wealth) given annually to support the poor and needy."
  },
  {
    question: "During which month do Muslims fast from dawn until sunset as a form of worship and self-discipline?",
    options: ["Dhul-Hijjah", "Muharram", "Ramadan", "Shawwal"],
    answer: "Ramadan",
    topic: "Islamic Beliefs and Practices",
    explanation: "Ramadan is the blessed month in which fasting is prescribed and the Quran was revealed."
  },
  {
    question: "What is the pilgrimage to Mecca called, which Muslims must perform at least once in their lifetime if able?",
    options: ["Umrah", "Zakat", "Hajj", "Sawm"],
    answer: "Hajj",
    topic: "Islamic Beliefs and Practices",
    explanation: "Hajj is the obligatory pilgrimage to Makkah performed once in a lifetime by able Muslims."
  },
  {
    question: "What is the term used in Islam for the annual pilgrimage to Mecca, which is obligatory for those who are financially and physically able?",
    options: ["Sawm", "Zakat", "Hajj", "Salah"],
    answer: "Hajj",
    topic: "Islamic Beliefs and Practices",
    explanation: "The term 'Hajj' refers to the great pilgrimage, distinct from 'Umrah,' which is optional."
  },

  {
    question: "Which Surah narrates the story of Prophet Yusuf (Joseph) in detail?",
    options: ["Surah Maryam", "Surah Al-Baqarah", "Surah Yusuf", "Surah Al-Anbiya"],
    answer: "Surah Yusuf",
    topic: "Quranic Stories",
    explanation: "Surah Yusuf tells the life story of Prophet Yusuf (Joseph), including his childhood, imprisonment, and rise to power in Egypt."
  },
  {
    question: "In which Surah is the story of Prophet Musa and Khidr found?",
    options: ["Surah Al-Mulk", "Surah Al-Kahf", "Surah Maryam", "Surah Al-Anbiya"],
    answer: "Surah Al-Kahf",
    topic: "Quranic Stories",
    explanation: "Surah Al-Kahf includes the story of Prophet Musa (Moses) and Khidr, teaching lessons on divine wisdom and patience."
  },
  {
    question: "Which Prophet was known for his wisdom and ability to understand the speech of animals?",
    options: ["Prophet Musa (Moses)", "Prophet Sulayman (Solomon)", "Prophet Yusuf (Joseph)", "Prophet Dawud (David)"],
    answer: "Prophet Sulayman (Solomon)",
    topic: "Quranic Stories",
    explanation: "Prophet Sulayman (Solomon) was given the ability to understand animals and jinn, ruling with justice and wisdom."
  },
  {
    question: "Who was the Prophet that was tested by being swallowed by a whale but survived through the mercy of Allah?",
    options: ["Prophet Yunus (Jonah)", "Prophet Musa (Moses)", "Prophet Isa (Jesus)", "Prophet Ibrahim (Abraham)"],
    answer: "Prophet Yunus (Jonah)",
    topic: "Quranic Stories",
    explanation: "Prophet Yunus was swallowed by a whale and saved after making the famous dua: 'There is no god but You, Glory be to You, indeed I was of the wrongdoers.'"
  },
  {
    question: "In the Quran, which Prophet’s story includes interpreting the dreams of a king while imprisoned in Egypt?",
    options: ["Prophet Muhammad (PBUH)", "Prophet Zakariya (Zechariah)", "Prophet Yusuf (Joseph)", "Prophet Nuh (Noah)"],
    answer: "Prophet Yusuf (Joseph)",
    topic: "Quranic Stories",
    explanation: "Prophet Yusuf interpreted the king’s dream about years of famine and abundance, which saved Egypt from starvation."
  },
  {
    question: "Which Prophet is known in the Quran for being thrown into a fire by his people but miraculously surviving unharmed?",
    options: ["Prophet Isa (Jesus)", "Prophet Ibrahim (Abraham)", "Prophet Hud", "Prophet Shuayb"],
    answer: "Prophet Ibrahim (Abraham)",
    topic: "Quranic Stories",
    explanation: "Prophet Ibrahim was thrown into a blazing fire by his people, but Allah commanded the fire to be cool and safe for him."
  },
  {
    question: "In the Quran, which Prophet built the Ark to save his followers and pairs of animals from a great flood?",
    options: ["Prophet Isa (Jesus)", "Prophet Musa (Moses)", "Prophet Nuh (Noah)", "Prophet Yusuf (Joseph)"],
    answer: "Prophet Nuh (Noah)",
    topic: "Quranic Stories",
    explanation: "Prophet Nuh built the Ark by Allah’s command, saving the believers and animals from the flood."
  },
  {
    question: "Which Prophet was tested by severe illness and the loss of wealth and family, yet remained patient and steadfast?",
    options: ["Prophet Sulayman (Solomon)", "Prophet Ayyub (Job)", "Prophet Musa (Moses)", "Prophet Yunus (Jonah)"],
    answer: "Prophet Ayyub (Job)",
    topic: "Quranic Stories",
    explanation: "Prophet Ayyub (Job) endured extreme illness and hardship but never lost patience or faith in Allah."
  },
  {
    question: "In the Quran, which Prophet was instructed by Allah to sacrifice his son, but Allah replaced the son with a ram?",
    options: ["Prophet Dawud (David)", "Prophet Yusuf (Joseph)", "Prophet Ibrahim (Abraham)", "Prophet Musa (Moses)"],
    answer: "Prophet Ibrahim (Abraham)",
    topic: "Quranic Stories",
    explanation: "Prophet Ibrahim was commanded to sacrifice his son Ismail, but Allah replaced him with a ram as a test of obedience."
  },
  {
    question: "Which Prophet’s people were destroyed by a storm as a punishment for their disbelief?",
    options: ["Prophet Hud", "Prophet Ibrahim (Abraham)", "Prophet Isa (Jesus)", "Prophet Musa (Moses)"],
    answer: "Prophet Hud",
    topic: "Quranic Stories",
    explanation: "The people of Prophet Hud (the 'Ad) rejected him and were destroyed by a violent storm."
  },
  {
    question: "Who was the prophet swallowed by a great fish?",
    options: ["Prophet Musa (Moses)", "Prophet Yunus (Jonah)", "Prophet Ibrahim (Abraham)", "Prophet Nuh (Noah)"],
    answer: "Prophet Yunus (Jonah)",
    topic: "Quranic Stories",
    explanation: "Prophet Yunus was swallowed by a great fish, a lesson in patience and repentance."
  },
  {
    question: "Which prophet was born miraculously without a father?",
    options: ["Prophet Muhammad (PBUH)", "Prophet Isa (Jesus)", "Prophet Yahya (John)", "Prophet Idris (Enoch)"],
    answer: "Prophet Isa (Jesus)",
    topic: "Quranic Stories",
    explanation: "Prophet Isa (Jesus) was born to Maryam (Mary) without a father, a miraculous sign of Allah’s power."
  },
  {
    question: "Which prophet was given the ability to interpret dreams?",
    options: ["Prophet Yusuf (Joseph)", "Prophet Dawud (David)", "Prophet Harun (Aaron)", "Prophet Saleh"],
    answer: "Prophet Yusuf (Joseph)",
    topic: "Quranic Stories",
    explanation: "Prophet Yusuf was blessed with the ability to interpret dreams, which played a key role in his life story."
  },
  {
    question: "What punishment did Allah send upon the people of Prophet Lut (Lot)?",
    options: ["A flood", "Earthquakes and a rain of stones", "A plague", "Fire from the sky"],
    answer: "Earthquakes and a rain of stones",
    topic: "Quranic Stories",
    explanation: "The people of Prophet Lut were destroyed by earthquakes and a rain of stones for their immorality."
  },
  {
    question: "Who was the first man created by Allah?",
    options: ["Prophet Idris (Enoch)", "Prophet Adam", "Prophet Nuh (Noah)", "Prophet Ibrahim (Abraham)"],
    answer: "Prophet Adam",
    topic: "Quranic Stories",
    explanation: "Prophet Adam (AS) was the first human created by Allah and the first prophet."
  },
  {
    question: "Which prophet was given the miracle of parting the sea?",
    options: ["Prophet Musa (Moses)", "Prophet Isa (Jesus)", "Prophet Yusuf (Joseph)", "Prophet Ibrahim (Abraham)"],
    answer: "Prophet Musa (Moses)",
    topic: "Quranic Stories",
    explanation: "Prophet Musa was granted the miracle of parting the Red Sea, saving the Israelites from Pharaoh."
  },
  {
    question: "Who built the Ark to save believers from a great flood?",
    options: ["Prophet Nuh (Noah)", "Prophet Hud", "Prophet Saleh", "Prophet Shu’ayb"],
    answer: "Prophet Nuh (Noah)",
    topic: "Quranic Stories",
    explanation: "Prophet Nuh built the Ark as commanded by Allah, saving his followers from the flood."
  },
  {
    question: "Who was thrown into the fire by his people but emerged unharmed?",
    options: ["Prophet Musa (Moses)", "Prophet Yusuf (Joseph)", "Prophet Ibrahim (Abraham)", "Prophet Isa (Jesus)"],
    answer: "Prophet Ibrahim (Abraham)",
    topic: "Quranic Stories",
    explanation: "Prophet Ibrahim was thrown into a fire by his people, but Allah saved him unharmed."
  },
  {
    question: "Which prophet had the unique ability to communicate with birds and animals?",
    options: ["Prophet Dawud (David)", "Prophet Sulaiman (Solomon)", "Prophet Musa (Moses)", "Prophet Ibrahim (Abraham)"],
    answer: "Prophet Sulaiman (Solomon)",
    topic: "Quranic Stories",
    explanation: "Prophet Sulaiman could understand animals and command jinn, ruling with Allah-given power."
  },
  {
    question: "What was the miracle of Prophet Saleh to his people, the Thamud?",
    options: ["Turning water into wine", "A she-camel brought forth from a rock", "Parting the sea", "Rain of fire from the heavens"],
    answer: "A she-camel brought forth from a rock",
    topic: "Quranic Stories",
    explanation: "The people of Thamud asked for a sign, and Allah sent a she-camel, but they rejected and harmed it."
  },
  {
    question: "Which prophet’s people demanded a banquet from heaven?",
    options: ["Prophet Isa (Jesus)", "Prophet Musa (Moses)", "Prophet Shu’ayb", "Prophet Dawud (David)"],
    answer: "Prophet Isa (Jesus)",
    topic: "Quranic Stories",
    explanation: "The disciples of Prophet Isa requested a table from heaven as a sign, described in Surah Al-Ma’idah."
  },
  {
    question: "Which prophet was tested with the command to sacrifice his son?",
    options: ["Prophet Nuh (Noah)", "Prophet Yusuf (Joseph)", "Prophet Ibrahim (Abraham)", "Prophet Isa (Jesus)"],
    answer: "Prophet Ibrahim (Abraham)",
    topic: "Quranic Stories",
    explanation: "Prophet Ibrahim was commanded to sacrifice his son Ismail, but Allah replaced him with a ram."
  },
  {
    question: "What happened to Qarun (Korah), a wealthy man during Prophet Musa’s time?",
    options: ["He was turned into stone.", "He was swallowed by the earth due to his arrogance.", "He became a poor man.", "He repented and became righteous."],
    answer: "He was swallowed by the earth due to his arrogance.",
    topic: "Quranic Stories",
    explanation: "Qarun, arrogant in his wealth, was swallowed by the earth as punishment from Allah."
  },
  {
    question: "Which prophet was sent to the people of ‘Ad?",
    options: ["Prophet Hud", "Prophet Saleh", "Prophet Shu’ayb", "Prophet Lut (Lot)"],
    answer: "Prophet Hud",
    topic: "Quranic Stories",
    explanation: "Prophet Hud was sent to the people of 'Ad, who rejected him and were destroyed by a storm."
  },
  {
    question: "What miracle was given to Prophet Isa (Jesus) by Allah?",
    options: ["Healing the sick and raising the dead by Allah’s permission", "Parting the Red Sea", "Building an ark", "Bringing rain during droughts"],
    answer: "Healing the sick and raising the dead by Allah’s permission",
    topic: "Quranic Stories",
    explanation: "Prophet Isa healed the sick and raised the dead by Allah’s permission as signs of prophethood."
  },
  {
    question: "Who was known for his immense patience during trials?",
    options: ["Prophet Ayyub (Job)", "Prophet Dawud (David)", "Prophet Musa (Moses)", "Prophet Harun (Aaron)"],
    answer: "Prophet Ayyub (Job)",
    topic: "Quranic Stories",
    explanation: "Prophet Ayyub remained patient despite losing his health, wealth, and family, and Allah restored his blessings."
  },
  {
    question: "Which prophet challenged the magicians of Pharaoh?",
    options: ["Prophet Nuh (Noah)", "Prophet Musa (Moses)", "Prophet Ibrahim (Abraham)", "Prophet Isa (Jesus)"],
    answer: "Prophet Musa (Moses)",
    topic: "Quranic Stories",
    explanation: "Prophet Musa confronted Pharaoh’s magicians, and his staff turned into a serpent by Allah’s power."
  },
  {
    question: "What happened to the people of Prophet Shu’ayb for their dishonesty in trade?",
    options: ["They were destroyed by an earthquake.", "They were drowned in a flood.", "They were consumed by fire.", "They repented and were forgiven."],
    answer: "They were destroyed by an earthquake.",
    topic: "Quranic Stories",
    explanation: "The people of Prophet Shu’ayb were destroyed by an earthquake for cheating in trade and rejecting guidance."
  },
  {
    question: "Who was Prophet Dawud (David) known for defeating in battle?",
    options: ["Pharaoh", "Goliath (Jalut)", "Nimrod", "The Thamud"],
    answer: "Goliath (Jalut)",
    topic: "Quranic Stories",
    explanation: "Prophet Dawud defeated Goliath (Jalut), after which Allah granted him kingship and wisdom."
  },
  {
    question: "What was Prophet Yusuf (Joseph) accused of by the wife of the Aziz?",
    options: ["Stealing a valuable item", "Dishonesty in trade", "Attempting to harm her honor", "Disrespecting the king"],
    answer: "Attempting to harm her honor",
    topic: "Quranic Stories",
    explanation: "The wife of the Aziz tried to seduce Prophet Yusuf, but he resisted; she then falsely accused him."
  },
  {
    question: "What was the punishment for the People of the Sabbath who violated Allah’s command?",
    options: ["They were turned into apes.", "They were consumed by fire.", "They were banished from their land.", "They were drowned in the sea."],
    answer: "They were turned into apes.",
    topic: "Quranic Stories",
    explanation: "The People of the Sabbath were punished by being transformed into apes for disobeying Allah’s command."
  },
  {
    question: "Which of the following is strongly discouraged in Islam?",
    options: ["Kindness", "Gossiping", "Generosity", "Helping others"],
    answer: "Gossiping",
    topic: "Ethics and Morality in Islam",
    explanation: "Gossiping and backbiting are strongly condemned in Islam as they harm others and destroy brotherhood."
  },
  {
    question: "What does Islam say about respecting parents?",
    options: ["It’s optional", "It’s mandatory", "Only if they are Muslim", "Only if they are wealthy"],
    answer: "It’s mandatory",
    topic: "Ethics and Morality in Islam",
    explanation: "Respecting and obeying parents is an obligation in Islam, second only to worshipping Allah."
  },
  {
    question: "What is the Quran’s stance on honesty in speech and actions?",
    options: [
      "It is recommended but not obligatory.",
      "It is forbidden to speak the truth in all circumstances.",
      "Honesty is a fundamental ethical principle in Islam.",
      "Lying is allowed if it benefits oneself."
    ],
    answer: "Honesty is a fundamental ethical principle in Islam.",
    topic: "Ethics and Morality in Islam",
    explanation: "The Quran and Hadith emphasize truthfulness as a foundation of faith and morality."
  },
  {
    question: "Which verse emphasizes the importance of fulfilling promises?",
    options: [
      "Surah Al-Fatihah (1:7)",
      "Surah Al-Ma’idah (5:1)",
      "Surah An-Nas (114:6)",
      "Surah Al-Kafirun (109:1)"
    ],
    answer: "Surah Al-Ma’idah (5:1)",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Al-Ma’idah begins by commanding believers to fulfill their promises and covenants."
  },
  {
    question: "What does the Quran teach about justice in Surah An-Nisa (4:135)?",
    options: [
      "Justice is only required among Muslims.",
      "Uphold justice even if it is against yourself or family.",
      "Justice is secondary to personal interest.",
      "Revenge is a form of justice."
    ],
    answer: "Uphold justice even if it is against yourself or family.",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah An-Nisa commands fairness and justice even when it goes against oneself or relatives."
  },
  {
    question: "What does the Quran say about backbiting in Surah Al-Hujurat (49:12)?",
    options: [
      "It is a small sin that can be forgiven easily.",
      "It is like eating the flesh of your dead brother.",
      "It is encouraged to expose others’ faults.",
      "It is a necessary evil for societal reform."
    ],
    answer: "It is like eating the flesh of your dead brother.",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Al-Hujurat condemns backbiting, likening it to eating the flesh of one’s dead brother."
  },
  {
    question: "Which Surah advises against arrogance and pride?",
    options: [
      "Surah Al-Baqarah (2:2)",
      "Surah Luqman (31:18)",
      "Surah An-Nisa (4:34)",
      "Surah Al-Fil (105:1)"
    ],
    answer: "Surah Luqman (31:18)",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Luqman warns against arrogance, reminding believers to walk humbly on the earth."
  },
  {
    question: "According to the Quran, what should one do when facing an evil action?",
    options: [
      "Respond with greater evil.",
      "Seek forgiveness for the evildoer.",
      "Repel evil with what is better.",
      "Ignore the situation entirely."
    ],
    answer: "Repel evil with what is better.",
    topic: "Ethics and Morality in Islam",
    explanation: "The Quran teaches to repel evil with good, transforming enemies into friends."
  },
  {
    question: "What does Surah Al-Baqarah (2:177) describe as true righteousness?",
    options: [
      "Only praying regularly.",
      "Faith in Allah, kindness to relatives, and giving to the poor.",
      "Performing pilgrimage annually.",
      "Avoiding worldly pleasures completely."
    ],
    answer: "Faith in Allah, kindness to relatives, and giving to the poor.",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Al-Baqarah defines righteousness as faith combined with good deeds and charity."
  },
  {
    question: "How does the Quran view greed and miserliness?",
    options: [
      "They are signs of intelligence.",
      "They lead to self-purification.",
      "They are condemned and lead to destruction.",
      "They are irrelevant to faith."
    ],
    answer: "They are condemned and lead to destruction.",
    topic: "Ethics and Morality in Islam",
    explanation: "Greed and miserliness are condemned in the Quran as traits that destroy the soul and society."
  },
  {
    question: "What does Surah Al-Ankabut (29:69) teach about striving in Allah’s cause?",
    options: [
      "Striving leads to divine guidance.",
      "It is unnecessary in the modern age.",
      "Striving is only for prophets.",
      "Striving is futile without immediate results."
    ],
    answer: "Striving leads to divine guidance.",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Al-Ankabut promises that those who strive in Allah’s cause will be guided by Him."
  },
  {
    question: "What is the Quran’s command about dealing with orphans?",
    options: [
      "Exploit their wealth for personal benefit.",
      "Treat them with justice and care.",
      "Ignore their needs unless they ask for help.",
      "Avoid any contact with orphans."
    ],
    answer: "Treat them with justice and care.",
    topic: "Ethics and Morality in Islam",
    explanation: "The Quran repeatedly instructs believers to treat orphans kindly and safeguard their rights."
  },
  {
    question: "What does Surah Al-Hujurat (49:11) say about mocking others?",
    options: [
      "It is allowed if they belong to another religion.",
      "It is a serious sin and should be avoided.",
      "Mocking others is an act of bravery.",
      "It helps identify people’s flaws."
    ],
    answer: "It is a serious sin and should be avoided.",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Al-Hujurat prohibits mocking others, as no one knows who is more honorable before Allah."
  },
  {
    question: "Which Surah states the importance of giving charity openly and secretly?",
    options: [
      "Surah Al-Baqarah (2:271)",
      "Surah Al-Ma’un (107:4-5)",
      "Surah Al-Fil (105:1)",
      "Surah An-Nas (114:6)"
    ],
    answer: "Surah Al-Baqarah (2:271)",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Al-Baqarah mentions that giving charity openly is good, but secretly is even better for sincerity."
  },
  {
    question: "What does the Quran say about corruption in Surah Al-Baqarah (2:205)?",
    options: [
      "Corruption is an act of bravery.",
      "Allah does not love corruption or those who spread it.",
      "Corruption is only a sin if it harms Muslims.",
      "Corruption is part of life and inevitable."
    ],
    answer: "Allah does not love corruption or those who spread it.",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Al-Baqarah states that Allah dislikes corruption and those who spread disorder in the land."
  },
  {
    question: "How does the Quran encourage patience during trials?",
    options: [
      "Surah Al-Baqarah (2:286) teaches to avoid all trials.",
      "Surah Al-Baqarah (2:153) advises seeking help through patience and prayer.",
      "Surah Al-Ankabut (29:45) promotes complaining to others.",
      "The Quran does not mention patience."
    ],
    answer: "Surah Al-Baqarah (2:153) advises seeking help through patience and prayer.",
    topic: "Ethics and Morality in Islam",
    explanation: "The Quran repeatedly stresses patience, and Surah Al-Baqarah (2:153) links it with prayer for strength."
  },
  {
    question: "What does the Quran say about concealing the faults of others?",
    options: [
      "Expose them to prevent harm.",
      "Allah will conceal the faults of those who conceal others’ faults.",
      "It is irrelevant to Islamic teachings.",
      "It depends on the situation."
    ],
    answer: "Allah will conceal the faults of those who conceal others’ faults.",
    topic: "Ethics and Morality in Islam",
    explanation: "Islam teaches mercy and forgiveness; concealing others’ faults earns Allah’s mercy on the Day of Judgment."
  },
  {
    question: "Which Surah emphasizes maintaining the ties of kinship?",
    options: [
      "Surah Ar-Rum (30:38)",
      "Surah Al-Ikhlas (112:2)",
      "Surah An-Nasr (110:3)",
      "Surah Al-Asr (103:1)"
    ],
    answer: "Surah Ar-Rum (30:38)",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Ar-Rum commands giving relatives their due rights and maintaining family ties."
  },
  {
    question: "What does the Quran instruct about dealing with enemies?",
    options: [
      "Fight them aggressively without pause.",
      "Forgive them and seek reconciliation if possible.",
      "Avoid dealing with them altogether.",
      "Spread rumors to weaken their influence."
    ],
    answer: "Forgive them and seek reconciliation if possible.",
    topic: "Ethics and Morality in Islam",
    explanation: "The Quran encourages forgiveness and reconciliation where possible, as mercy is beloved to Allah."
  },
  {
    question: "What is the significance of truthfulness according to Surah Az-Zumar (39:33)?",
    options: [
      "Truthfulness has no bearing on faith.",
      "It leads to blessings and acceptance from Allah.",
      "It is only for prophets and messengers.",
      "Truthfulness can be avoided to maintain peace."
    ],
    answer: "It leads to blessings and acceptance from Allah.",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Az-Zumar highlights that truthfulness leads to Allah’s acceptance and success in the Hereafter."
  },
  {
    question: "What does the Quran say about excessive spending in Surah Al-Isra (17:27)?",
    options: [
      "Spend excessively to show generosity.",
      "Spend moderately and avoid wastefulness.",
      "Avoid spending entirely to save wealth.",
      "Excessive spending is always rewarded."
    ],
    answer: "Spend moderately and avoid wastefulness.",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Al-Isra warns that wasteful spenders are 'brothers of the devils,' urging moderation."
  },
  {
    question: "How does the Quran describe humility in Surah Al-Furqan (25:63)?",
    options: [
      "As a weakness in personality.",
      "As a characteristic of the servants of the Most Merciful.",
      "As unnecessary in worldly affairs.",
      "As irrelevant to true faith."
    ],
    answer: "As a characteristic of the servants of the Most Merciful.",
    topic: "Ethics and Morality in Islam",
    explanation: "Surah Al-Furqan describes true believers as those who walk humbly on the earth."
  },
  {
    question: "What is the Quran’s stance on gratitude?",
    options: [
      "Gratitude is optional in worship.",
      "Gratitude leads to more blessings from Allah.",
      "Gratitude is not necessary for divine mercy.",
      "Gratitude is only for those in authority."
    ],
    answer: "Gratitude leads to more blessings from Allah.",
    topic: "Ethics and Morality in Islam",
    explanation: "The Quran teaches that showing gratitude brings more blessings from Allah (Surah Ibrahim 14:7)."
  },
  {
    question: "Which name of Allah means “The Merciful”?",
    options: ["Al-Malik", "Al-Rahman", "Al-Jabbar", "Al-Ghaffar"],
    answer: "Al-Rahman",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Rahman means 'The Merciful,' reflecting Allah’s vast mercy that encompasses all creation."
  },
  {
    question: "What does “Al-Rahman” mean?",
    options: ["The Forgiving", "The Merciful", "The Sustainer", "The Creator"],
    answer: "The Merciful",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Rahman highlights Allah’s boundless mercy given to all creatures, believers and non-believers alike."
  },
  {
    question: "What is the meaning of “Al-Rahim”?",
    options: ["The Sustainer", "The Ever-Compassionate", "The Creator", "The Judge"],
    answer: "The Ever-Compassionate",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Rahim emphasizes Allah’s special mercy and compassion reserved for the believers."
  },
  {
    question: "Which attribute of Allah means “The All-Knowing”?",
    options: ["Al-Aziz", "Al-Alim", "Al-Hakam", "Al-Qadir"],
    answer: "Al-Alim",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Alim means 'The All-Knowing,' showing Allah’s knowledge of everything, hidden and apparent."
  },
  {
    question: "“Al-Quddus” refers to:",
    options: ["The Holy", "The Mighty", "The Wise", "The Forgiver"],
    answer: "The Holy",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Quddus means 'The Holy,' signifying Allah’s absolute purity and freedom from all imperfections."
  },
  {
    question: "What does “Al-Khaliq” mean?",
    options: ["The Sustainer", "The Creator", "The Provider", "The Judge"],
    answer: "The Creator",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Khaliq means 'The Creator,' the One who brings all things into existence."
  },
  {
    question: "What is the meaning of “Al-Malik”?",
    options: ["The King", "The Merciful", "The All-Knowing", "The Forgiving"],
    answer: "The King",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Malik means 'The King,' affirming Allah’s supreme sovereignty over all creation."
  },
  {
    question: "“As-Salam” signifies:",
    options: ["The All-Knowing", "The Source of Peace", "The Forgiving", "The Judge"],
    answer: "The Source of Peace",
    topic: "Names and Attributes of Allah",
    explanation: "As-Salam means 'The Source of Peace,' as Allah is free from defects and grants peace to His creation."
  },
  {
    question: "What does “Al-Aziz” mean?",
    options: ["The Forgiving", "The Sustainer", "The Mighty", "The Creator"],
    answer: "The Mighty",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Aziz means 'The Mighty,' showing Allah’s strength and honor that none can overcome."
  },
  {
    question: "Which name of Allah means “The Provider”?",
    options: ["Ar-Razzaq", "Al-Aziz", "Al-Khaliq", "Al-Hakam"],
    answer: "Ar-Razzaq",
    topic: "Names and Attributes of Allah",
    explanation: "Ar-Razzaq means 'The Provider,' emphasizing that Allah sustains all creatures with their needs."
  },
  {
    question: "What is the meaning of “Al-Hakam”?",
    options: ["The Sustainer", "The Just Judge", "The Merciful", "The Creator"],
    answer: "The Just Judge",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Hakam means 'The Just Judge,' showing Allah’s perfect justice in this world and the Hereafter."
  },
  {
    question: "What does “Al-Wadud” signify?",
    options: ["The Loving One", "The Mighty", "The All-Knowing", "The Creator"],
    answer: "The Loving One",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Wadud means 'The Loving One,' highlighting Allah’s immense love for His creation."
  },
  {
    question: "“Al-Ghaffar” refers to:",
    options: ["The Sustainer", "The Forgiving", "The Judge", "The Holy"],
    answer: "The Forgiving",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Ghaffar means 'The Forgiving,' the One who repeatedly forgives sins."
  },
  {
    question: "What does “Al-Mu’min” mean?",
    options: ["The Sustainer", "The Protector of Faith", "The Provider", "The Judge"],
    answer: "The Protector of Faith",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Mu’min means 'The Giver of Faith' and 'Protector,' granting security to His servants."
  },
  {
    question: "“Al-Hayy” signifies:",
    options: ["The Creator", "The Ever-Living", "The Forgiver", "The Sustainer"],
    answer: "The Ever-Living",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Hayy means 'The Ever-Living,' affirming that Allah never dies or sleeps."
  },
  {
    question: "Which name of Allah means “The Self-Sustaining”?",
    options: ["Al-Aziz", "Al-Qayyum", "Al-Hakam", "Al-Malik"],
    answer: "Al-Qayyum",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Qayyum means 'The Self-Sustaining,' the One who maintains everything without need."
  },
  {
    question: "What does “Al-Adl” signify?",
    options: ["The Sustainer", "The Just", "The Creator", "The Forgiving"],
    answer: "The Just",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Adl means 'The Just,' highlighting Allah’s absolute fairness in all matters."
  },
  {
    question: "“Ar-Rahman” and “Ar-Rahim” both reflect Allah’s attribute of:",
    options: ["Knowledge", "Mercy", "Justice", "Power"],
    answer: "Mercy",
    topic: "Names and Attributes of Allah",
    explanation: "Both names emphasize Allah’s mercy: Ar-Rahman refers to His general mercy, while Ar-Rahim refers to His special mercy for believers."
  },
  {
    question: "What does “Al-Qadir” mean?",
    options: ["The Forgiving", "The Creator", "The All-Powerful", "The Merciful"],
    answer: "The All-Powerful",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Qadir means 'The All-Powerful,' showing Allah’s ability to do all things."
  },
  {
    question: "“Al-Basir” signifies:",
    options: ["The All-Seeing", "The Mighty", "The Creator", "The Forgiver"],
    answer: "The All-Seeing",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Basir means 'The All-Seeing,' as Allah sees everything, no matter how hidden."
  },
  {
    question: "What does “As-Sami'” mean?",
    options: ["The Judge", "The All-Hearing", "The Forgiving", "The Sustainer"],
    answer: "The All-Hearing",
    topic: "Names and Attributes of Allah",
    explanation: "As-Sami' means 'The All-Hearing,' as Allah hears everything, including whispers and unspoken thoughts."
  },
  {
    question: "“Al-Latif” refers to:",
    options: ["The Subtle One", "The Mighty", "The Creator", "The Sustainer"],
    answer: "The Subtle One",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Latif means 'The Subtle One,' indicating Allah’s delicate kindness and care for His creation."
  },
  {
    question: "Which name of Allah means “The Most Generous”?",
    options: ["Al-Aziz", "Al-Karim", "Al-Hakam", "Al-Malik"],
    answer: "Al-Karim",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Karim means 'The Most Generous,' as Allah grants blessings beyond measure."
  },
  {
    question: "What is the meaning of “Al-Jabbar”?",
    options: ["The Compeller", "The Creator", "The Sustainer", "The Forgiving"],
    answer: "The Compeller",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Jabbar means 'The Compeller,' showing Allah’s power to enforce His will over creation."
  },
  {
    question: "“Al-Majeed” signifies:",
    options: ["The Sustainer", "The Glorious", "The Judge", "The Holy"],
    answer: "The Glorious",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Majeed means 'The Glorious,' highlighting Allah’s majesty and honor."
  },
  {
    question: "What does “Al-Awwal” mean?",
    options: ["The Last", "The First", "The Forgiver", "The Sustainer"],
    answer: "The First",
    topic: "Names and Attributes of Allah",
    explanation: "Al-Awwal means 'The First,' affirming that Allah existed before all creation."
  },
  {
    question: "Who is the most prolific narrator of Hadith?",
    options: ["Aisha (RA)", "Abu Bakr (RA)", "Abu Hurairah (RA)", "Umar (RA)"],
    answer: "Abu Hurairah (RA)",
    topic: "Hadith and the Sunnah",
    explanation: "Abu Hurairah narrated more Hadith than any other companion, preserving over 5,000 sayings of the Prophet."
  },
  {
    question: "The famous Hadith that states “Actions are judged by intentions” is narrated by which companion?",
    options: ["Abdullah ibn Mas’ud (RA)", "Umar ibn Al-Khattab (RA)", "Abu Hurairah (RA)", "Ali ibn Abi Talib (RA)"],
    answer: "Umar ibn Al-Khattab (RA)",
    topic: "Hadith and the Sunnah",
    explanation: "This Hadith, narrated by Umar ibn Al-Khattab, highlights that sincerity is the basis of all deeds."
  },
  {
    question: "In a well-known Hadith, the Prophet Muhammad (PBUH) said, “The best among you are those who ____.”",
    options: ["Pray the most", "Recite the Quran daily", "Are kind to their neighbors", "Have the best manners"],
    answer: "Have the best manners",
    topic: "Hadith and the Sunnah",
    explanation: "The Prophet emphasized that good character and manners are the hallmark of true believers."
  },
  {
    question: "Which book is widely regarded as the most authentic collection of Hadith after the Quran?",
    options: ["Sunan Abu Dawood", "Sahih al-Bukhari", "Sunan an-Nasa’i", "Jami’ at-Tirmidhi"],
    answer: "Sahih al-Bukhari",
    topic: "Hadith and the Sunnah",
    explanation: "Sahih al-Bukhari is considered the most authentic Hadith collection in Islam."
  },
  {
    question: "In the Sunnah, what did the Prophet Muhammad (PBUH) emphasize as the best form of charity?",
    options: ["Donating money", "Feeding the hungry", "Teaching beneficial knowledge", "Giving gifts to friends"],
    answer: "Teaching beneficial knowledge",
    topic: "Hadith and the Sunnah",
    explanation: "The Prophet said the best charity is imparting beneficial knowledge that continues to benefit others."
  },
  {
    question: "According to a Hadith, which action is said to be equal in reward to fasting, praying, and giving charity?",
    options: ["Smiling at others", "Greeting others with peace", "Saying “SubhanAllah” 100 times", "Helping someone in need"],
    answer: "Helping someone in need",
    topic: "Hadith and the Sunnah",
    explanation: "Helping others is highly rewarded in Islam, sometimes equal to major acts of worship."
  },
  {
    question: "What does the Hadith say about those who show no mercy to others?",
    options: ["They will not be helped by Allah", "They will not receive mercy themselves", "They will lose their good deeds", "They will live in hardship"],
    answer: "They will not receive mercy themselves",
    topic: "Hadith and the Sunnah",
    explanation: "The Prophet (PBUH) taught that those who do not show mercy will not receive Allah’s mercy."
  },
  {
    question: "According to a Hadith, what should a Muslim say when they begin any important task to ensure blessing in it?",
    options: ["Allahu Akbar", "Alhamdulillah", "Bismillah", "SubhanAllah"],
    answer: "Bismillah",
    topic: "Hadith and the Sunnah",
    explanation: "Saying 'Bismillah' before an action brings Allah’s blessings and protection."
  },
  {
    question: "In a Hadith, what did the Prophet Muhammad (PBUH) describe as the “key to Paradise”?",
    options: ["Fasting", "Patience", "Charity", "Prayer (Salah)"],
    answer: "Prayer (Salah)",
    topic: "Hadith and the Sunnah",
    explanation: "The Prophet said that prayer is the key to Paradise, highlighting its importance in a Muslim’s life."
  },
  {
    question: "What does the term “Hadith” mean?",
    options: ["Saying", "Action", "Report", "All of the above"],
    answer: "All of the above",
    topic: "Hadith and the Sunnah",
    explanation: "Hadith refers to the sayings, actions, and approvals of Prophet Muhammad (PBUH)."
  },
  {
    question: "What is the Sunnah?",
    options: [
      "The sayings of the Prophet Muhammad (PBUH)",
      "The actions and approvals of the Prophet Muhammad (PBUH)",
      "The Quran",
      "Islamic jurisprudence"
    ],
    answer: "The actions and approvals of the Prophet Muhammad (PBUH)",
    topic: "Hadith and the Sunnah",
    explanation: "The Sunnah refers to the practices, sayings, and approvals of the Prophet, complementing the Quran."
  },
  {
    question: "Which of the following is the most authentic book of Hadith in Islam?",
    options: ["Sunan Abu Dawood", "Sahih Bukhari", "Sahih Muslim", "Muwatta Imam Malik"],
    answer: "Sahih Bukhari",
    topic: "Hadith and the Sunnah",
    explanation: "Sahih Bukhari is widely regarded as the most authentic Hadith collection."
  },
  {
    question: "How many types of Hadith are there based on authenticity?",
    options: ["Two", "Three", "Four", "Five"],
    answer: "Four",
    topic: "Hadith and the Sunnah",
    explanation: "Hadith are classified into Sahih (authentic), Hasan (good), Da’if (weak), and Mawdu’ (fabricated)."
  },
  {
    question: "What does “Sahih” mean in the context of Hadith?",
    options: ["Weak", "Authentic", "Fabricated", "Narrated"],
    answer: "Authentic",
    topic: "Hadith and the Sunnah",
    explanation: "Sahih means 'authentic,' indicating the highest reliability in Hadith classification."
  },
  {
    question: "What is the purpose of Hadith in Islam?",
    options: [
      "To provide examples of the Prophet’s life",
      "To explain the Quran",
      "To guide Muslims in daily life",
      "All of the above"
    ],
    answer: "All of the above",
    topic: "Hadith and the Sunnah",
    explanation: "Hadith serve as a source of law, guidance, and explanation of Quranic teachings."
  },
  {
    question: "What is the term for the chain of narrators of a Hadith?",
    options: ["Matn", "Isnad", "Sanad", "Both b and c"],
    answer: "Both b and c",
    topic: "Hadith and the Sunnah",
    explanation: "The chain of narrators is called Isnad or Sanad, used to verify Hadith authenticity."
  },
  {
    question: "What does “Matn” refer to in Hadith?",
    options: ["The chain of narrators", "The text or content of the Hadith", "The Quranic verse", "The name of the narrator"],
    answer: "The text or content of the Hadith",
    topic: "Hadith and the Sunnah",
    explanation: "Matn refers to the actual wording or content of the Hadith."
  },
  {
    question: "Which of the following is a famous collector of Hadith?",
    options: ["Imam Bukhari", "Imam Muslim", "Imam Tirmidhi", "All of the above"],
    answer: "All of the above",
    topic: "Hadith and the Sunnah",
    explanation: "Imam Bukhari, Imam Muslim, and Imam Tirmidhi are among the most renowned Hadith collectors."
  },
  {
    question: "What is the significance of the Sunnah?",
    options: [
      "It complements the Quran",
      "It provides practical examples of Islamic teachings",
      "It is a source of Islamic law",
      "All of the above"
    ],
    answer: "All of the above",
    topic: "Hadith and the Sunnah",
    explanation: "The Sunnah complements the Quran, provides guidance, and serves as a source of Islamic law."
  },
  {
    question: "How are Hadith classified based on their acceptance?",
    options: ["Accepted (Maqbul) and Rejected (Mardud)", "Sahih and Hasan", "Da’if and Mawdu’", "All of the above"],
    answer: "Accepted (Maqbul) and Rejected (Mardud)",
    topic: "Hadith and the Sunnah",
    explanation: "Hadith are broadly categorized as accepted (Maqbul) or rejected (Mardud), with further subcategories."
  },
  {
    question: "What is “Mawdu'” in the context of Hadith?",
    options: ["Authentic Hadith", "Fabricated Hadith", "Weak Hadith", "Chain of narrators"],
    answer: "Fabricated Hadith",
    topic: "Hadith and the Sunnah",
    explanation: "Mawdu’ means fabricated Hadith, falsely attributed to the Prophet."
  },
  {
    question: "Which Hadith book is commonly referred to as “Sahihain”?",
    options: [
      "Sahih Bukhari and Sunan Abu Dawood",
      "Sahih Bukhari and Sahih Muslim",
      "Sahih Muslim and Muwatta Malik",
      "Sunan Nasa’i and Sahih Bukhari"
    ],
    answer: "Sahih Bukhari and Sahih Muslim",
    topic: "Hadith and the Sunnah",
    explanation: "The term Sahihain refers to the two most authentic Hadith books: Sahih Bukhari and Sahih Muslim."
  },
  {
    question: "What does “Hasan” mean in the context of Hadith?",
    options: ["Weak", "Good", "Authentic", "Fabricated"],
    answer: "Good",
    topic: "Hadith and the Sunnah",
    explanation: "Hasan means 'good,' referring to Hadith that are reliable but slightly less strong than Sahih."
  },
  {
    question: "What is the Arabic term for “Tradition” often used interchangeably with Hadith?",
    options: ["Sunnah", "Isnad", "Sanad", "Matn"],
    answer: "Sunnah",
    topic: "Hadith and the Sunnah",
    explanation: "Sunnah means 'tradition' and refers to the practices of the Prophet."
  },
  {
    question: "Which Hadith collection focuses specifically on legal rulings?",
    options: ["Sunan Abu Dawood", "Sahih Bukhari", "Sahih Muslim", "Sunan Nasa’i"],
    answer: "Sunan Abu Dawood",
    topic: "Hadith and the Sunnah",
    explanation: "Sunan Abu Dawood emphasizes Hadith related to Islamic law and rulings."
  },
  {
    question: "What is the role of the Prophet’s Sunnah in understanding the Quran?",
    options: [
      "It explains and elaborates on the Quranic verses",
      "It replaces the Quran",
      "It contradicts the Quran",
      "It has no role"
    ],
    answer: "It explains and elaborates on the Quranic verses",
    topic: "Hadith and the Sunnah",
    explanation: "The Sunnah explains and clarifies Quranic verses, making them practical in daily life."
  },
  {
    question: "Who was the first person to compile a book of Hadith?",
    options: ["Imam Bukhari", "Imam Malik", "Imam Abu Hanifa", "Imam Shafi’i"],
    answer: "Imam Malik",
    topic: "Hadith and the Sunnah",
    explanation: "Imam Malik compiled the 'Muwatta,' one of the earliest Hadith collections."
  },
  {
    question: "What is the “Sahih Muslim” collection known for?",
    options: [
      "Focusing on weak Hadith",
      "Arranging Hadith in a logical manner",
      "Only collecting fabricated Hadith",
      "Avoiding duplicate narrations"
    ],
    answer: "Arranging Hadith in a logical manner",
    topic: "Hadith and the Sunnah",
    explanation: "Sahih Muslim is praised for its organization and authenticity of narrations."
  },
  {
    question: "Which Hadith collection is considered one of the “Six Authentic Books” of Hadith?",
    options: ["Sunan Ibn Majah", "Sahih Bukhari", "Sunan Abu Dawood", "All of the above"],
    answer: "All of the above",
    topic: "Hadith and the Sunnah",
    explanation: "The six authentic collections include Sahih Bukhari, Sahih Muslim, Sunan Abu Dawood, Sunan Ibn Majah, Sunan al-Nasa’i, and Jami at-Tirmidhi."
  },
  {
    question: "What does “Mutawatir” mean in the context of Hadith?",
    options: [
      "A Hadith narrated by a single person",
      "A Hadith transmitted by a large number of narrators",
      "A fabricated Hadith",
      "A weak Hadith"
    ],
    answer: "A Hadith transmitted by a large number of narrators",
    topic: "Hadith and the Sunnah",
    explanation: "Mutawatir refers to Hadith reported by so many narrators that it is impossible they conspired to fabricate it."
  },
  {
    question: "How many Hadiths are there approximately in Sahih Bukhari?",
    options: ["1,000", "5,000", "7,000", "10,000"],
    answer: "7,000 (including repetitions)",
    topic: "Hadith and the Sunnah",
    explanation: "Sahih Bukhari contains about 7,000 Hadith with repetitions; without them, around 2,600 unique Hadith."
  },
  {
    question: "What is “Qudsi Hadith”?",
    options: [
      "Sayings of the Prophet (PBUH)",
      "Words of Allah relayed by the Prophet (PBUH)",
      "Fabricated narrations",
      "Weak Hadith"
    ],
    answer: "Words of Allah relayed by the Prophet (PBUH)",
    topic: "Hadith and the Sunnah",
    explanation: "Hadith Qudsi are sayings where the Prophet quotes Allah directly, but they are not part of the Quran."
  },
  {
    question: "Which Hadith collector was also a jurist and wrote “Muwatta”?",
    options: ["Imam Bukhari", "Imam Malik", "Imam Abu Dawood", "Imam Muslim"],
    answer: "Imam Malik",
    topic: "Hadith and the Sunnah",
    explanation: "Imam Malik authored 'Muwatta,' combining Hadith and juristic rulings."
  },
  {
    question: "What is the Arabic term for the biography of the Prophet (PBUH) that includes his sayings and actions?",
    options: ["Sira", "Sunnah", "Hadith", "Matn"],
    answer: "Sira",
    topic: "Hadith and the Sunnah",
    explanation: "Sira refers to the biography of the Prophet Muhammad (PBUH), covering his life, sayings, and actions."
  },
  {
    question: "What does “Salah” mean?",
    options: ["Charity", "Prayer", "Fasting", "Pilgrimage"],
    answer: "Prayer",
    topic: "The Five Pillars of Islam",
    explanation: "Salah refers to the five daily prayers, a direct connection between a Muslim and Allah."
  },
  {
    question: "What is the declaration of faith, known as the Shahada, in Islam?",
    options: [
      "Allah is the Most Merciful",
      "There is no god but Allah, and Muhammad is His Messenger",
      "Prayer is the key to Paradise",
      "Charity brings blessings"
    ],
    answer: "There is no god but Allah, and Muhammad is His Messenger",
    topic: "The Five Pillars of Islam",
    explanation: "The Shahada affirms belief in the oneness of Allah and the prophethood of Muhammad (PBUH)."
  },
  {
    question: "How many times a day are Muslims required to perform Salah (prayer)?",
    options: ["3", "5", "7", "2"],
    answer: "5",
    topic: "The Five Pillars of Islam",
    explanation: "Muslims must pray five times daily: Fajr, Dhuhr, Asr, Maghrib, and Isha."
  },
  {
    question: "What is the Arabic term for the obligatory charity that Muslims must give as one of the Five Pillars of Islam?",
    options: ["Sadaqah", "Zakat", "Hajj", "Sawm"],
    answer: "Zakat",
    topic: "The Five Pillars of Islam",
    explanation: "Zakat is a mandatory charity that purifies wealth and supports the needy."
  },
  {
    question: "During which month do Muslims fast from dawn until sunset as a form of worship and self-discipline?",
    options: ["Dhul-Hijjah", "Muharram", "Ramadan", "Shawwal"],
    answer: "Ramadan",
    topic: "The Five Pillars of Islam",
    explanation: "Ramadan is the ninth month of the Islamic calendar, during which fasting (Sawm) is obligatory."
  },
  {
    question: "Which of the following is the pilgrimage to Mecca that Muslims must perform at least once in their lifetime, if able?",
    options: ["Umrah", "Zakat", "Hajj", "Sawm"],
    answer: "Hajj",
    topic: "The Five Pillars of Islam",
    explanation: "Hajj is the annual pilgrimage to Makkah, obligatory once in a lifetime for those able."
  },
  {
    question: "Zakat, one of the Five Pillars of Islam, requires Muslims to give what percentage of their wealth to the poor?",
    options: ["5%", "10%", "2.5%", "1.5%"],
    answer: "2.5%",
    topic: "The Five Pillars of Islam",
    explanation: "Zakat is 2.5% of one’s accumulated wealth, distributed to those in need."
  },
  {
    question: "In Islam, Salah is meant to be performed facing which direction?",
    options: ["North", "East", "The Kaaba in Mecca", "Towards the nearest mosque"],
    answer: "The Kaaba in Mecca",
    topic: "The Five Pillars of Islam",
    explanation: "Muslims face the Kaaba in Makkah, a direction called Qiblah, during Salah."
  },
  {
    question: "Which of the Five Pillars of Islam emphasizes the importance of fasting during Ramadan?",
    options: ["Shahada", "Salah", "Sawm", "Zakat"],
    answer: "Sawm",
    topic: "The Five Pillars of Islam",
    explanation: "Sawm refers to fasting in Ramadan, cultivating self-discipline and Taqwa."
  },
  {
    question: "Which pillar of Islam is considered a public declaration of a Muslim’s faith?",
    options: ["Salah", "Shahada", "Zakat", "Sawm"],
    answer: "Shahada",
    topic: "The Five Pillars of Islam",
    explanation: "The Shahada is the verbal testimony of faith that makes one a Muslim."
  },
  {
    question: "What is the first pillar of Islam?",
    options: ["Salah", "Zakah", "Shahada", "Hajj"],
    answer: "Shahada",
    topic: "The Five Pillars of Islam",
    explanation: "The first pillar, Shahada, is the foundation of Islamic belief."
  },
  {
    question: "How many daily prayers are obligatory in Islam?",
    options: ["Three", "Four", "Five", "Six"],
    answer: "Five",
    topic: "The Five Pillars of Islam",
    explanation: "Islam requires five daily prayers at fixed times."
  },
  {
    question: "What is Zakah?",
    options: ["Fasting", "Charity given to the poor", "Pilgrimage", "Daily prayer"],
    answer: "Charity given to the poor",
    topic: "The Five Pillars of Islam",
    explanation: "Zakah is a duty to help the poor and purify one’s wealth."
  },
  {
    question: "During which month is Sawm (fasting) observed?",
    options: ["Dhul-Hijjah", "Muharram", "Ramadan", "Shawwal"],
    answer: "Ramadan",
    topic: "The Five Pillars of Islam",
    explanation: "Sawm is observed in Ramadan, the month of Quran’s revelation."
  },
  {
    question: "What is the significance of the Shahada?",
    options: [
      "It declares the oneness of Allah and Muhammad (PBUH) as His prophet",
      "It is a prayer",
      "It is a pilgrimage",
      "It is a form of charity"
    ],
    answer: "It declares the oneness of Allah and Muhammad (PBUH) as His prophet",
    topic: "The Five Pillars of Islam",
    explanation: "The Shahada is the central creed of Islam, declaring Tawheed and prophethood."
  },
  {
    question: "What is the fifth pillar of Islam?",
    options: ["Shahada", "Salah", "Hajj", "Zakah"],
    answer: "Hajj",
    topic: "The Five Pillars of Islam",
    explanation: "The fifth pillar, Hajj, is the pilgrimage to Makkah."
  },
  {
    question: "To whom is Zakah primarily given?",
    options: ["The wealthy", "The poor and needy", "Scholars", "Businessmen"],
    answer: "The poor and needy",
    topic: "The Five Pillars of Islam",
    explanation: "The Quran instructs Zakah be given to the poor, needy, and others specified in Surah At-Tawbah (9:60)."
  },
  {
    question: "How many times is the Adhan called daily for Salah?",
    options: ["Four", "Five", "Six", "Seven"],
    answer: "Five",
    topic: "The Five Pillars of Islam",
    explanation: "The Adhan is called five times daily to remind Muslims of prayer."
  },
  {
    question: "What is the significance of Hajj?",
    options: [
      "It is a weekly ritual",
      "It is a once-in-a-lifetime obligation for those who are able",
      "It is a monthly fast",
      "It is a daily prayer"
    ],
    answer: "It is a once-in-a-lifetime obligation for those who are able",
    topic: "The Five Pillars of Islam",
    explanation: "Hajj is a unique act of worship performed once in life if possible."
  },
  {
    question: "Where do Muslims go to perform Hajj?",
    options: ["Madinah", "Jerusalem", "Makkah", "Baghdad"],
    answer: "Makkah",
    topic: "The Five Pillars of Islam",
    explanation: "Hajj is performed in Makkah, including rituals around the Kaaba and Mina."
  },
  {
    question: "What is the purpose of fasting during Ramadan?",
    options: ["To lose weight", "To gain Taqwa (piety)", "To rest", "To celebrate"],
    answer: "To gain Taqwa (piety)",
    topic: "The Five Pillars of Islam",
    explanation: "Fasting develops self-control and closeness to Allah."
  },
  {
    question: "How much of one’s wealth is given as Zakah?",
    options: ["2.5%", "5%", "10%", "20%"],
    answer: "2.5%",
    topic: "The Five Pillars of Islam",
    explanation: "Zakah is fixed at 2.5% of savings held for a year."
  },
  {
    question: "What does Salah involve?",
    options: ["Only reciting Quran", "Physical movements and recitations", "Fasting", "Charity"],
    answer: "Physical movements and recitations",
    topic: "The Five Pillars of Islam",
    explanation: "Salah combines physical actions, Quranic recitation, and supplication."
  },
  {
    question: "What do Muslims face during Salah?",
    options: ["The Kaaba in Makkah", "The Prophet’s Mosque", "Jerusalem", "Any direction"],
    answer: "The Kaaba in Makkah",
    topic: "The Five Pillars of Islam",
    explanation: "Facing the Kaaba (Qiblah) symbolizes unity of Muslims in worship."
  },
  {
    question: "What is the Arabic term for fasting?",
    options: ["Zakah", "Sawm", "Salah", "Hajj"],
    answer: "Sawm",
    topic: "The Five Pillars of Islam",
    explanation: "Sawm means fasting, abstaining from food, drink, and desires during Ramadan."
  },
  {
    question: "When is Zakah due?",
    options: [
      "Annually on accumulated wealth",
      "Monthly on income",
      "Daily on earnings",
      "Whenever a person wishes"
    ],
    answer: "Annually on accumulated wealth",
    topic: "The Five Pillars of Islam",
    explanation: "Zakah becomes due once a year when wealth reaches the nisab threshold."
  },
  {
    question: "Which of the following breaks the fast during Ramadan?",
    options: ["Eating deliberately", "Forgetting to eat", "Drinking water accidentally", "Sleeping"],
    answer: "Eating deliberately",
    topic: "The Five Pillars of Islam",
    explanation: "Deliberately eating or drinking invalidates the fast, but forgetfulness is excused."
  },
  {
    question: "What is the reward for completing Hajj according to the Prophet (PBUH)?",
    options: ["Wealth", "Forgiveness of sins", "Long life", "Knowledge"],
    answer: "Forgiveness of sins",
    topic: "The Five Pillars of Islam",
    explanation: "The Prophet (PBUH) said an accepted Hajj erases all past sins."
  },
  {
    question: "What does the term “Ihram” refer to in Hajj?",
    options: [
      "A state of consecration and clothing worn during Hajj",
      "A prayer",
      "Charity",
      "A ritual sacrifice"
    ],
    answer: "A state of consecration and clothing worn during Hajj",
    topic: "The Five Pillars of Islam",
    explanation: "Ihram is the sacred state and clothing worn by pilgrims during Hajj."
  },
  {
    question: "Which prayer is offered after the sunset?",
    options: ["Fajr", "Dhuhr", "Maghrib", "Isha"],
    answer: "Maghrib",
    topic: "The Five Pillars of Islam",
    explanation: "Maghrib is performed just after sunset, consisting of three rak’ahs."
  },
  {
    question: "What does the term “Tawaf” refer to in Hajj?",
    options: [
      "Standing at Arafat",
      "Circling the Kaaba",
      "Throwing stones at Jamarat",
      "Drinking Zamzam water"
    ],
    answer: "Circling the Kaaba",
    topic: "The Five Pillars of Islam",
    explanation: "Tawaf is the ritual of circling the Kaaba seven times in worship."
  },
  {
    question: "What time of the day is Suhoor consumed during Ramadan?",
    options: ["After sunset", "Before dawn", "Midday", "Midnight"],
    answer: "Before dawn",
    topic: "The Five Pillars of Islam",
    explanation: "Suhoor is the pre-dawn meal before the daily fast begins."
  },
  {
    question: "What is the term for the charity given at the end of Ramadan?",
    options: ["Zakah", "Sadaqah", "Zakat-ul-Fitr", "Hadiya"],
    answer: "Zakat-ul-Fitr",
    topic: "The Five Pillars of Islam",
    explanation: "Zakat-ul-Fitr is a charity given at the end of Ramadan to purify the fast and help the poor."
  },
  {
    question: "What is the meaning of “Salah” in Arabic?",
    options: ["Worship", "Supplication", "Blessing", "Connection"],
    answer: "Connection",
    topic: "The Five Pillars of Islam",
    explanation: "Salah is often described as 'connection' because it connects the servant to Allah."
  },
  {
    question: "Which Eid celebrates the completion of Ramadan?",
    options: ["Eid-ul-Adha", "Eid-ul-Fitr", "Eid-e-Milad", "Eid-ul-Jumuah"],
    answer: "Eid-ul-Fitr",
    topic: "The Five Pillars of Islam",
    explanation: "Eid-ul-Fitr is celebrated after Ramadan as a festival of gratitude and joy."
  },
  {
    question: "What does the term “Halal” mean?",
    options: ["Forbidden", "Lawful", "Prayer", "Charity"],
    answer: "Lawful",
    topic: "Islamic Terminology",
    explanation: "Halal means 'lawful' or permissible according to Islamic law."
  },
  {
    question: "What does the term “Tawhid” refer to in Islam?",
    options: ["The concept of charity", "Belief in the oneness of Allah", "Obligatory prayers", "The pilgrimage to Mecca"],
    answer: "Belief in the oneness of Allah",
    topic: "Islamic Terminology",
    explanation: "Tawhid is the belief in the absolute oneness of Allah, the foundation of Islam."
  },
  {
    question: "What is the meaning of “Sunnah”?",
    options: [
      "The sayings and actions of the Prophet Muhammad (PBUH)",
      "The five daily prayers",
      "Charity given to the poor",
      "Fasting during Ramadan"
    ],
    answer: "The sayings and actions of the Prophet Muhammad (PBUH)",
    topic: "Islamic Terminology",
    explanation: "Sunnah refers to the teachings and practices of the Prophet Muhammad (PBUH)."
  },
  {
    question: "In Islamic terminology, what is “Halal”?",
    options: ["Forbidden", "Permissible", "Prayer", "Charity"],
    answer: "Permissible",
    topic: "Islamic Terminology",
    explanation: "Halal means permissible, covering food, actions, and lifestyle choices."
  },
  {
    question: "What does “Haram” mean in Islam?",
    options: ["Recommended", "Forbidden", "Encouraged", "Permissible"],
    answer: "Forbidden",
    topic: "Islamic Terminology",
    explanation: "Haram means forbidden and refers to acts prohibited by Islamic law."
  },
  {
    question: "What is the meaning of “Sharia” in Islam?",
    options: ["A type of charity", "The way or path, referring to Islamic law", "A type of prayer", "A chapter of the Quran"],
    answer: "The way or path, referring to Islamic law",
    topic: "Islamic Terminology",
    explanation: "Sharia means 'the way' and refers to the divine law in Islam."
  },
  {
    question: "What does “Ummah” refer to in Islamic teachings?",
    options: ["The Islamic declaration of faith", "The community of Muslims worldwide", "A chapter in the Quran", "The pilgrimage to Mecca"],
    answer: "The community of Muslims worldwide",
    topic: "Islamic Terminology",
    explanation: "Ummah means the collective community of Muslims around the world."
  },
  {
    question: "What is the meaning of “Iman” in Islamic terminology?",
    options: ["Charity", "Belief or faith in Allah", "Fasting", "Knowledge"],
    answer: "Belief or faith in Allah",
    topic: "Islamic Terminology",
    explanation: "Iman means belief, encompassing faith in Allah, His angels, books, messengers, and the Hereafter."
  },
  {
    question: "What is “Wudu” in Islam?",
    options: ["An obligatory charity", "Ritual purification before prayer", "An annual pilgrimage", "A day of fasting"],
    answer: "Ritual purification before prayer",
    topic: "Islamic Terminology",
    explanation: "Wudu is the ablution (washing) performed before prayer for purity."
  },
  {
    question: "What does the term “Akhirah” refer to in Islamic beliefs?",
    options: ["The Quran", "The afterlife", "Fasting in Ramadan", "Prayers"],
    answer: "The afterlife",
    topic: "Islamic Terminology",
    explanation: "Akhirah means the afterlife, including resurrection, judgment, paradise, and hell."
  },
  {
    question: "What does “Tawheed” mean?",
    options: ["Worship", "Oneness of Allah", "Prayer", "Fasting"],
    answer: "Oneness of Allah",
    topic: "Islamic Terminology",
    explanation: "Tawheed emphasizes that Allah is One, with no partners or equals."
  },
  {
    question: "What is the meaning of “Salah”?",
    options: ["Prayer", "Charity", "Fasting", "Pilgrimage"],
    answer: "Prayer",
    topic: "Islamic Terminology",
    explanation: "Salah refers to the structured daily prayers in Islam."
  },
  {
    question: "What does “Zakah” refer to?",
    options: ["Voluntary charity", "Obligatory charity", "Pilgrimage", "Prayer"],
    answer: "Obligatory charity",
    topic: "Islamic Terminology",
    explanation: "Zakah is the obligatory charity given annually to support the poor."
  },
  {
    question: "What is “Sawm”?",
    options: ["Prayer", "Fasting", "Charity", "Pilgrimage"],
    answer: "Fasting",
    topic: "Islamic Terminology",
    explanation: "Sawm means fasting, abstaining from food, drink, and desires during daylight hours in Ramadan."
  },
  {
    question: "Define “Hajj.”",
    options: ["Pilgrimage to Madinah", "Pilgrimage to Jerusalem", "Pilgrimage to Makkah", "Pilgrimage to Karbala"],
    answer: "Pilgrimage to Makkah",
    topic: "Islamic Terminology",
    explanation: "Hajj is the pilgrimage to Makkah, one of the five pillars of Islam."
  },
  {
    question: "What is “Shirk” in Islam?",
    options: ["Worshiping Allah alone", "Associating partners with Allah", "Fasting", "Charity"],
    answer: "Associating partners with Allah",
    topic: "Islamic Terminology",
    explanation: "Shirk is the gravest sin in Islam, meaning associating partners with Allah."
  },
  {
    question: "What is the meaning of “Sunnah”?",
    options: ["Quranic verses", "Practices of the Prophet (PBUH)", "Islamic laws", "Charity"],
    answer: "Practices of the Prophet (PBUH)",
    topic: "Islamic Terminology",
    explanation: "Sunnah refers to the Prophet’s way of life, complementing the Quran."
  },
  {
    question: "What is “Hadith”?",
    options: ["Quranic verses", "Sayings and actions of the Prophet (PBUH)", "Islamic jurisprudence", "Laws of inheritance"],
    answer: "Sayings and actions of the Prophet (PBUH)",
    topic: "Islamic Terminology",
    explanation: "Hadith are narrations of the sayings, actions, and approvals of the Prophet."
  },
  {
    question: "What is “Jannah”?",
    options: ["Paradise", "Hell", "Worldly life", "Charity"],
    answer: "Paradise",
    topic: "Islamic Terminology",
    explanation: "Jannah means paradise, the eternal abode for the righteous."
  },
  {
    question: "What is “Jahannam”?",
    options: ["Paradise", "Hell", "Grave", "Life"],
    answer: "Hell",
    topic: "Islamic Terminology",
    explanation: "Jahannam means hell, the place of punishment for disbelievers and wrongdoers."
  },
  {
    question: "What does “Iman” mean?",
    options: ["Charity", "Faith", "Fasting", "Knowledge"],
    answer: "Faith",
    topic: "Islamic Terminology",
    explanation: "Iman is faith in Allah, His messengers, books, angels, and the Last Day."
  },
  {
    question: "What is “Dawah”?",
    options: ["Inviting others to Islam", "Charity", "Fasting", "Pilgrimage"],
    answer: "Inviting others to Islam",
    topic: "Islamic Terminology",
    explanation: "Dawah means calling or inviting others to Islam through wisdom and good character."
  },
  {
    question: "What is “Hijrah”?",
    options: [
      "Journey of Muslims to Abyssinia",
      "Migration of the Prophet (PBUH) to Madinah",
      "Pilgrimage",
      "Night prayer"
    ],
    answer: "Migration of the Prophet (PBUH) to Madinah",
    topic: "Islamic Terminology",
    explanation: "Hijrah refers to the Prophet’s migration from Makkah to Madinah, marking the start of the Islamic calendar."
  },
  {
    question: "What does “Ummah” mean?",
    options: ["Muslim community", "Worldly life", "Paradise", "Charity"],
    answer: "Muslim community",
    topic: "Islamic Terminology",
    explanation: "Ummah signifies the global community of Muslims united in faith."
  },
  {
    question: "What is “Qiblah”?",
    options: ["Direction of Madinah", "Direction of the Kaaba", "Direction of Jerusalem", "Direction of Karbala"],
    answer: "Direction of the Kaaba",
    topic: "Islamic Terminology",
    explanation: "Qiblah is the direction Muslims face in prayer, towards the Kaaba in Makkah."
  },
  {
    question: "Define “Dunya.”",
    options: ["Paradise", "Afterlife", "Worldly life", "Charity"],
    answer: "Worldly life",
    topic: "Islamic Terminology",
    explanation: "Dunya means the worldly life, temporary compared to the eternal Akhirah (afterlife)."
  },
  {
    question: "What is “Akhirah”?",
    options: ["Charity", "Worldly life", "Afterlife", "Hell"],
    answer: "Afterlife",
    topic: "Islamic Terminology",
    explanation: "Akhirah refers to the life after death, including judgment, paradise, and hell."
  },
  {
    question: "What is “Taqwa”?",
    options: ["Consciousness and fear of Allah", "Charity", "Prayer", "Fasting"],
    answer: "Consciousness and fear of Allah",
    topic: "Islamic Terminology",
    explanation: "Taqwa means God-consciousness, being mindful of Allah in all actions."
  },
  {
    question: "What is the Holy Quran?",
    options: ["A book of hadith", "The holy book of Islam", "A historical record", "A collection of poems"],
    answer: "The holy book of Islam",
    topic: "Basic Quran Knowledge",
    explanation: "The Quran is the final revelation from Allah, preserved as guidance for all humanity."
  },
  {
    question: "In which language was the Quran revealed?",
    options: ["Hebrew", "Persian", "Arabic", "Greek"],
    answer: "Arabic",
    topic: "Basic Quran Knowledge",
    explanation: "The Quran was revealed in classical Arabic, making it accessible to the first recipients."
  },
  {
    question: "How many surahs are there in the Quran?",
    options: ["110", "114", "120", "124"],
    answer: "114",
    topic: "Basic Quran Knowledge",
    explanation: "The Quran contains 114 chapters (surahs) of varying lengths."
  },
  {
    question: "What is the longest surah in the Quran?",
    options: ["Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Al-Imran", "Surah An-Nisa"],
    answer: "Surah Al-Baqarah",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Baqarah is the longest surah with 286 verses."
  },
  {
    question: "What is the shortest surah in the Quran?",
    options: ["Surah Al-Asr", "Surah Al-Kawthar", "Surah Al-Ikhlas", "Surah Al-Falaq"],
    answer: "Surah Al-Kawthar",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Kawthar has only three verses, making it the shortest surah."
  },
  {
    question: "Over how many years was the Quran revealed?",
    options: ["20 years", "23 years", "25 years", "30 years"],
    answer: "23 years",
    topic: "Basic Quran Knowledge",
    explanation: "The Quran was revealed gradually over 23 years to address various situations."
  },
  {
    question: "Who was the first caliph to compile the Quran into a single book?",
    options: ["Umar ibn Al-Khattab", "Uthman ibn Affan", "Abu Bakr Siddiq", "Ali ibn Abi Talib"],
    answer: "Abu Bakr Siddiq",
    topic: "Basic Quran Knowledge",
    explanation: "Abu Bakr ordered the compilation of the Quran into a single book after many memorizers were martyred."
  },
  {
    question: "Which angel brought the revelation of the Quran to Prophet Muhammad (PBUH)?",
    options: ["Angel Jibrael (Gabriel)", "Angel Israfil", "Angel Mikail", "Angel Azrael"],
    answer: "Angel Jibrael (Gabriel)",
    topic: "Basic Quran Knowledge",
    explanation: "Angel Jibreel (Gabriel) delivered the Quranic revelations to the Prophet Muhammad (PBUH)."
  },
  {
    question: "Where was the first revelation of the Quran received?",
    options: ["Cave Hira", "Mount Arafat", "Masjid Al-Haram", "Madinah"],
    answer: "Cave Hira",
    topic: "Basic Quran Knowledge",
    explanation: "The first revelation came in Cave Hira near Makkah, beginning with 'Iqra' (Read)."
  },
  {
    question: "In which Islamic month was the Quran first revealed?",
    options: ["Muharram", "Ramadan", "Dhul-Hijjah", "Rajab"],
    answer: "Ramadan",
    topic: "Basic Quran Knowledge",
    explanation: "The Quran was first revealed in Ramadan, making it a blessed month."
  },
  {
    question: "How many verses are there in the Quran?",
    options: ["6,236", "6,114", "6,000", "5,623"],
    answer: "6,236",
    topic: "Basic Quran Knowledge",
    explanation: "The Quran contains approximately 6,236 verses, depending on the method of counting."
  },
  {
    question: "Which surah is known as “The Opening”?",
    options: ["Surah Al-Baqarah", "Surah Al-Fatiha", "Surah Al-Ikhlas", "Surah An-Nas"],
    answer: "Surah Al-Fatiha",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Fatiha, 'The Opening,' begins the Quran and is recited in every prayer."
  },
  {
    question: "Which surah is called the “Heart of the Quran”?",
    options: ["Surah Yasin", "Surah Rahman", "Surah Al-Fatiha", "Surah Al-Mulk"],
    answer: "Surah Yasin",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Yasin is considered the 'heart of the Quran' due to its themes of resurrection and guidance."
  },
  {
    question: "Which surah was revealed in its entirety in one night?",
    options: ["Surah Maryam", "Surah Al-Anfal", "Surah Al-Fatiha", "Surah Al-Muddathir"],
    answer: "Surah Al-Fatiha",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Fatiha was revealed in full, making it unique among many surahs revealed gradually."
  },
  {
    question: "Which surah is also called “Umm Al-Kitab”?",
    options: ["Surah Al-Ikhlas", "Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Al-Nisa"],
    answer: "Surah Al-Fatiha",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Fatiha is called Umm Al-Kitab (Mother of the Book) for summarizing the Quran’s message."
  },
  {
    question: "Which surah emphasizes the oneness of Allah?",
    options: ["Surah Al-Falaq", "Surah Al-Kafirun", "Surah Al-Ikhlas", "Surah Al-Baqarah"],
    answer: "Surah Al-Ikhlas",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Ikhlas declares Allah’s absolute oneness and uniqueness."
  },
  {
    question: "What does the Quran teach about the Day of Judgment?",
    options: [
      "It is a myth",
      "It will come unexpectedly",
      "It will not happen",
      "It will happen according to scientific predictions"
    ],
    answer: "It will come unexpectedly",
    topic: "Basic Quran Knowledge",
    explanation: "The Quran states that the Day of Judgment will come suddenly, known only to Allah."
  },
  {
    question: "Which surah speaks about the Prophet’s night journey (Isra and Miraj)?",
    options: ["Surah Al-Kahf", "Surah Al-Isra", "Surah Al-Najm", "Surah Al-Anfal"],
    answer: "Surah Al-Isra",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Isra narrates the Prophet’s night journey from Makkah to Jerusalem and beyond."
  },
  {
    question: "What does Surah Al-Kawthar speak about?",
    options: ["Battle of Badr", "Abundance of blessings", "Laws of inheritance", "Rules of prayer"],
    answer: "Abundance of blessings",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Kawthar reassures the Prophet (PBUH) of Allah’s abundant blessings."
  },
  {
    question: "Which surah advises Muslims to avoid backbiting?",
    options: ["Surah Al-Falaq", "Surah Al-Hujurat", "Surah Al-Baqarah", "Surah Al-Maidah"],
    answer: "Surah Al-Hujurat",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Hujurat warns against backbiting, comparing it to eating one’s dead brother’s flesh."
  },
  {
    question: "Which prophet is mentioned most frequently in the Quran?",
    options: ["Prophet Isa (Jesus)", "Prophet Ibrahim (Abraham)", "Prophet Musa (Moses)", "Prophet Nuh (Noah)"],
    answer: "Prophet Musa (Moses)",
    topic: "Basic Quran Knowledge",
    explanation: "Prophet Musa (Moses) is mentioned more than any other prophet in the Quran."
  },
  {
    question: "Which surah is named after a prophet?",
    options: ["Surah Yusuf", "Surah Maryam", "Surah Yunus", "All of the above"],
    answer: "All of the above",
    topic: "Basic Quran Knowledge",
    explanation: "Several surahs are named after prophets, including Surah Yunus, Surah Yusuf, and Surah Maryam."
  },
  {
    question: "What is the main theme of Surah Yusuf?",
    options: [
      "Laws of marriage",
      "The life of Prophet Yusuf (Joseph)",
      "Rules of war",
      "The Day of Judgment"
    ],
    answer: "The life of Prophet Yusuf (Joseph)",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Yusuf narrates the story of Prophet Yusuf, highlighting patience and reliance on Allah."
  },
  {
    question: "Which surah describes the story of the People of the Cave?",
    options: ["Surah Al-Baqarah", "Surah Al-Kahf", "Surah Al-Nisa", "Surah Maryam"],
    answer: "Surah Al-Kahf",
    topic: "Basic Quran Knowledge",
    explanation: "Surah Al-Kahf tells the story of the People of the Cave, young believers saved by Allah."
  },
  {
    question: "Which surah narrates the story of the Prophet Nuh (Noah)?",
    options: ["Surah Hud", "Surah Nuh", "Surah Yunus", "Both A and B"],
    answer: "Both A and B",
    topic: "Basic Quran Knowledge",
    explanation: "The story of Prophet Nuh is mentioned in Surah Hud and Surah Nuh, stressing patience in calling to faith."
  }
];

// 🔹 Ensure every question has an explanation field
allQuestions.forEach((q, i) => {
  if (!q.hasOwnProperty("explanation")) {
    q.explanation = "No explanation available for this question.";
    console.log(`⚠️ Placeholder explanation added at index ${i}:`, q.question);
  }
});

let filteredQuestions = [];
let currentQuestion = 0;
let answeredQuestions = {}; // key: question index, value: { selected, correct }
let score = 0;
let timerInterval;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("high-score");
const restartBtn = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress-bar");
const startBtn = document.getElementById("start-btn");
const categorySelect = document.getElementById("category");
const setupBox = document.getElementById("setup-box");
const quizBox = document.getElementById("quiz-box");
const stopBtn = document.getElementById("stop-btn");

function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startTimer() {
  clearInterval(timerInterval); // Always clear any previous timer
  timerInterval = null;
  let duration = 10;
  let elapsed = 0;

  progressBar.style.width = "0%";
  progressBar.classList.remove("blink");

  timerInterval = setInterval(() => {
    elapsed++;
    let progress = (elapsed / duration) * 100;
    progressBar.style.width = `${progress}%`;

    if (duration - elapsed <= 3) {
      progressBar.classList.add("blink");
    }

    if (elapsed >= duration) {
      handleTimeout();
    }
  }, 1000);
}

function handleTimeout() {
  clearInterval(timerInterval);
  timerInterval = null;
  progressBar.classList.remove("blink");
  progressBar.style.width = "100%";

  const currentQ = filteredQuestions[currentQuestion];
  const correct = currentQ.answer;
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add("correct-blink");
    }
  });

  answeredQuestions[currentQuestion] = {
    selected: null,
    correct,
    timedOut: true
  };

  const explanationBox = document.getElementById("explanation");
  explanationBox.textContent = "- " + currentQ.explanation;
  explanationBox.style.display = "block";

  nextBtn.classList.remove("hidden");
}

function showQuestion() {

  const q = filteredQuestions[currentQuestion];

  const hasAnswer = Boolean(answeredQuestions[currentQuestion]);

  questionEl.textContent = q.question;

  optionsEl.innerHTML = "";

  document.getElementById("question-count").textContent =

    `Question ${currentQuestion + 1} of ${filteredQuestions.length}`;

  const explanationBox = document.getElementById("explanation");

  explanationBox.textContent = "";

  explanationBox.style.display = "none";

  if (hasAnswer) {

    explanationBox.textContent = "- " + q.explanation;

    explanationBox.style.display = "block";

    nextBtn.classList.remove("hidden");

  } else {

    nextBtn.classList.add("hidden");

  }

  q.options.forEach(option => {

    const btn = document.createElement("button");

    btn.textContent = option;

    if (hasAnswer) {

      const { selected, correct } = answeredQuestions[currentQuestion];

      btn.disabled = true;

      if (option === correct) {

        btn.classList.add("correct-blink");

      } else if (option === selected) {

        btn.classList.add("wrong");

      }

    } else {

      btn.onclick = () => checkAnswer(option);

    }

    optionsEl.appendChild(btn);

  });

  clearInterval(timerInterval);

  progressBar.classList.remove("blink");

  if (hasAnswer) {

    progressBar.style.width = "100%";

  } else {

    progressBar.style.width = "0%";

    startTimer();

  }

}

function checkAnswer(selected) {
  clearInterval(timerInterval);
  progressBar.classList.remove("blink");

  const currentQ = filteredQuestions[currentQuestion];
  const correct = currentQ.answer;
  const buttons = optionsEl.querySelectorAll("button");

  answeredQuestions[currentQuestion] = {
    selected,
    correct
  };

  buttons.forEach(btn => {
    if (btn.textContent === correct) {
      btn.classList.add("correct-blink");
    } else if (btn.textContent === selected) {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  if (selected === correct) {
    score++;
  }

  // 🔹 Show explanation under the question (safe — always defined now)
  const explanationBox = document.getElementById("explanation");
  explanationBox.textContent = "- " + currentQ.explanation;
  explanationBox.style.display = "block";

  // 🔹 Show "Next" button only after answering
  nextBtn.classList.remove("hidden");
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${filteredQuestions.length}`;

  const previousHigh = localStorage.getItem("jsQuizHighScore") || 0;
  if (score > previousHigh) {
    localStorage.setItem("jsQuizHighScore", score);
  }

  highScoreEl.textContent = localStorage.getItem("jsQuizHighScore");
  stopBtn.classList.add("hidden");
}

// Ensure topics dropdown is populated before anything else
populateTopicsDropdown();
shuffleQuestions(allQuestions);

startBtn.onclick = () => {
  const selectedTopic = categorySelect.value;

  filteredQuestions = selectedTopic === "all"
    ? [...allQuestions]
    : allQuestions.filter(q => q.topic === selectedTopic);

  answeredQuestions = {}; // Reset answers

  if (filteredQuestions.length === 0) {
    alert("No questions available for the selected topic.");
    return;
  }

  shuffleQuestions(filteredQuestions);
  currentQuestion = 0;
  score = 0;

  setupBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  showQuestion();

  stopBtn.classList.remove("hidden");
};

nextBtn.onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  progressBar.classList.remove("blink");

  currentQuestion++;

  if (currentQuestion < filteredQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

restartBtn.onclick = () => {

  clearInterval(timerInterval);

  timerInterval = null;

  progressBar.classList.remove("blink");

  progressBar.style.width = "0%";

  answeredQuestions = {};

  shuffleQuestions(allQuestions);

  setupBox.classList.remove("hidden");

  quizBox.classList.add("hidden");

  resultBox.classList.add("hidden");

  stopBtn.classList.add("hidden");

};



document.getElementById("prev-btn").onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
};

document.getElementById("restart-current-btn").onclick = () => {

  clearInterval(timerInterval);

  timerInterval = null;

  progressBar.classList.remove("blink");

  progressBar.style.width = "0%";

  const confirmRestart = confirm("Are you sure you want to restart this quiz? Your current score will be lost.");

  if (confirmRestart) {

    const selectedTopic = categorySelect.value;



    filteredQuestions = selectedTopic === "all"

      ? [...allQuestions]

      : allQuestions.filter(q => q.topic === selectedTopic);



    shuffleQuestions(filteredQuestions);

    currentQuestion = 0;

    score = 0;

    answeredQuestions = {};

    nextBtn.classList.add("hidden");



    showQuestion();

  }

};



stopBtn.onclick = () => {
  clearInterval(timerInterval);
  timerInterval = null;
  const confirmStop = confirm("Are you sure you want to stop the quiz and return to the home page?");
  if (confirmStop) {
    setupBox.classList.remove("hidden");
    quizBox.classList.add("hidden");
    resultBox.classList.add("hidden");
    stopBtn.classList.add("hidden");
  }
};

// ----------------------
// 🌙 Modern Theme Toggle
// ----------------------
document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");

  function setTheme(isDark) {
    if (isDark) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      // Sun Icon for Light Mode Toggle
      themeIcon.innerHTML = `
        <circle cx="12" cy="12" r="5" fill="yellow"/>
        <g stroke="yellow" stroke-width="2">
          <line x1="12" y1="1" x2="12" y2="4"/>
          <line x1="12" y1="20" x2="12" y2="23"/>
          <line x1="1" y1="12" x2="4" y2="12"/>
          <line x1="20" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
        </g>`;
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      // Moon Icon for Dark Mode Toggle
      themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
    }
  }

  // Initial Load
  setTheme(localStorage.getItem("theme") === "dark");

  // Toggle on Click
  themeToggleBtn.addEventListener("click", () => {
    const isDark = !body.classList.contains("dark");
    setTheme(isDark);
  });
});

function populateTopicsDropdown() {
  const topics = [...new Set(allQuestions.map(q => q.topic))].sort();

  categorySelect.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All Categories";
  categorySelect.appendChild(allOption);

  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    categorySelect.appendChild(option);
  });
}

populateTopicsDropdown();
shuffleQuestions(allQuestions);
