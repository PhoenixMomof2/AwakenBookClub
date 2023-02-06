puts "🌱 Seeding..."

puts "Deleting User/Books data...."
User.destroy_all
Book.destroy_all
Group.destroy_all

puts "Creating users..."
User.create([
  {username: "Kandis Arzu", password: "fitmomof2", age: 39},
  {username: "Kal Logan", password: "superman",  age: 19},
  {username: "Lyric Jones", password: "lyricist",  age: 23},
  {username: "Sanai Kelly", password: "bookreader",  age: 48},
  {username: "Desmond Carter", password: "booklover",  age: 35}
  ])


puts "Creating books..."
Book.create([
  {title: "Stamped: Racism, Antiracism, and You", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1568739320l/52220686.jpg", author: "Jason Reynolds, Ibram X. Kendi", stars: 5, category: "Anti-Racism", content: "A remix of the National Book Award-winning Stamped from the Beginning for ages 12 and up.

    A timely, crucial, and empowering exploration of racism--and antiracism--in America.
    
    This is NOT a history book.
    This is a book about the here and now.
    A book to help us better understand why we are where we are.
    A book about race.
    
    The construct of race has always been used to gain and keep power, to create dynamics that separate and silence. This is a remarkable reimagining of Dr. Ibram X. Kendi's Stamped from the Beginning, winner of a National Book Award. It reveals the history of racist ideas in America and inspires hope for an antiracist future.
    
    Stamped takes you on a race journey from then to now, shows you why we feel how we feel, and why the poison of racism lingers. It also proves that while racist ideas have always been easy to fabricate and distribute, they can also be discredited.
    
    Through a gripping, fast-paced, and energizing narrative, Jason Reynolds shines a light on the many insidious forms of racist ideas--and on ways readers can identify and stamp out racist thoughts in their daily lives."},
  {title: "How to Be an Antiracist", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560163756i/40265832.jpg", author: "Ibram X. Kendi", stars: 4, category: "Anti-Racism", content: "Ibram X. Kendi's concept of antiracism reenergizes and reshapes the conversation about racial justice in America--but even more fundamentally, points us toward liberating new ways of thinking about ourselves and each other. In How to be an Antiracist, Kendi asks us to think about what an antiracist society might look like, and how we can play an active role in building it.

    In this book, Kendi weaves together an electrifying combination of ethics, history, law, and science, bringing it all together with an engaging personal narrative of his own awakening to antiracism. How to Be an Antiracist is an essential work for anyone who wants to go beyond an awareness of racism to the next step: contributing to the formation of a truly just and equitable society."},
  {title: "White Like Me: Reflections on Race from a Privileged Son", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328690631i/88362.jpg", author: "Tim Wise", stars: 4, category: "White-Privilege", content: "In White Like Me, Tim Wise offers a highly personal examination of the ways in which racial privilege shapes the lives of most white Americans, overtly racist or not, to the detriment of people of color, themselves, and society. The book shows the breadth and depth of the phenomenon within institutions such as education, employment, housing, criminal justice, and healthcare. By critically assessing the magnitude of racial privilege and its enormous costs, Wise provides a rich memoir that will inspire activists, educators, or anyone interested in understanding the way that race continues to shape the experiences of people in the U.S. Using stories instead of stale statistics, Wise weaves a narrative that is at once readable and scholarly, analytical and accessible."},
  {title: "White Fragility: Why It’s So Hard for White People to Talk About Racism", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1614966481i/43708708.jpg", author: "Robin Diangelo", stars: 4, category: "White-Privilege", content: "Referring to the defensive moves that white people make when challenged racially, white fragility is characterized by emotions such as anger, fear, and guilt and by behaviors including argumentation and silence. These behaviors, in turn, function to reinstate white racial equilibrium and prevent any meaningful cross-racial dialogue. In this in-depth exploration, anti-racist educator Robin DiAngelo examines how white fragility develops, how it protects racial inequality, and what can be done to engage more constructively."},
  {title: "The New Jim Crow: Mass Incarceration in the Age of Colorblindness", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328751532i/6792458.jpg", author: "Michelle Alexander", stars: 4, category: "Justice-Reform", content: "Jarvious Cotton's great-great-grandfather could not vote as a slave. His great-grandfather was beaten to death by the Klu Klux Klan for attempting to vote. His grandfather was prevented from voting by Klan intimidation; his father was barred by poll taxes and literacy tests. Today, Cotton cannot vote because he, like many black men in the United States, has been labeled a felon and is currently on parole.

    As the United States celebrates the nation's 'triumph over race' with the election of Barack Obama, the majority of young black men in major American cities are locked behind bars or have been labeled felons for life. Although Jim Crow laws have been wiped off the books, an astounding percentage of the African American community remains trapped in a subordinate status--much like their grandparents before them.
    
    In this incisive critique, former litigator-turned-legal-scholar Michelle Alexander provocatively argues that we have not ended racial caste in America: we have simply redesigned it. Alexander shows that, by targeting black men and decimating communities of color, the U.S. criminal justice system functions as a contemporary system of racial control, even as it formally adheres to the principle of color blindness. The New Jim Crow challenges the civil rights community--and all of us--to place mass incarceration at the forefront of a new movement for racial justice in America."},
  {title: "So You Want to Talk About Race", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1499224833i/35099718.jpg", author: "Ijeoma Oluo", stars: 4, category: "Anti-Racism", content: "In this breakout book, Ijeoma Oluo explores the complex reality of today's racial landscape--from white privilege and police brutality to systemic discrimination and the Black Lives Matter movement--offering straightforward clarity that readers need to contribute to the dismantling of the racial divide. In So You Want to Talk About Race, Editor at Large of The Establishment Ijeoma Oluo offers a contemporary, accessible take on the racial landscape in America, addressing head-on such issues as privilege, police brutality, intersectionality, micro-aggressions, the Black Lives Matter movement, and the 'N' word. Perfectly positioned to bridge the gap between people of color and white Americans struggling with race complexities, Oluo answers the questions readers don't dare ask, and explains the concepts that continue to elude everyday Americans. Oluo is an exceptional writer with a rare ability to be straightforward, funny, and effective in her coverage of sensitive, hyper-charged issues in America. Her messages are passionate but finely tuned, and crystalize ideas that would otherwise be vague by empowering them with aha-moment clarity. Her writing brings to mind voices like Ta-Nehisi Coates and Roxane Gay, and Jessica Valenti in Full Frontal Feminism, and a young Gloria Naylor, particularly in Naylor's seminal essay 'The Meaning of a Word.'"},
  {title: "How to Raise an Antiracist", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651581955i/59149034.jpg", author: "Ibram X. Kendi", stars: 4, category: "Anti-Racism", content: "The book that every parent, caregiver, and teacher needs to raise the next generation of antiracist thinkers, from the #1 New York Times bestselling author of How to Be an Antiracist

The tragedies and reckonings around racism that have rocked the country have created a specific crisis for parents and other caregivers: How do we talk to our children about it? How do we raise our children to avoid repeating our racist history and the ongoing errors of the present? While we do the work of dismantling racist behaviors in ourselves and the world around us, how do we raise our children to be antiracists?

  After he wrote the National Book Award–winning Stamped from the Beginning, readers asked Ibram Kendi, “How can I be antiracist?” After he wrote the bestsellers How to Be an Antiracist and Antiracist Baby, readers began asking a different question: “How do I raise an antiracist child?” This is a question Dr. Kendi had been asking himself ever since he became a teacher—but the question became more personal and urgent when he found out his partner, Sadiqa, was pregnant. Like many parents, he didn’t know how answer the question—and wasn’t sure he wanted to. He didn’t want to educate his child on antiracism; he wanted to shield her from the toxicity of racism altogether.
  
  But research and experience changed his mind: He realized that antiracism has to be taught and modeled as early as possible—not just to armor them against the racism that is still indoctrinated and normalized in our children’s world, but to remind parents and caregivers to build a more just future for us all.
  
  Following the model of his bestselling How to Be an Antiracist, Kendi combines vital scholarship with a compelling personal narrative of his own journey as a parent to create a work whose advice is grounded in research and relatable real-world experience. The chapters follow the stages of child development and don’t just help parents to raise antiracists, but also to create an antiracist world for them to grow and thrive in."},
  {title: "Debating Race: with Michael Eric Dyson", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1400962565i/108424.jpg", author: "Michael Eric Dyson", stars: 4, category: "Anti-Racism", content: "Whether chronicling the class conflict in the African-American community or exposing the failings of the government response in the wake of Hurricane Katrina, Michael Eric Dyson has never shied away from controversy. No stranger to intellectual combat, Dyson has always been ready to engage friends and foes alike in open conversation about the issues that matter. Debating Race collects many of Dyson’s most memorable encounters and most poignant arguments. Dyson shows that he is as eloquent off the cuff as he is on the book page, and Debating Race gives readers a front row seat as he spars with politicians, pundits, and public intellectuals. From John Kerry and John McCain to Ann Coulter and the hosts of television’s “The View”-Dyson shows the mental agility and rhetorical tenacity that have made him one of America’s most astute intellectuals, and with topics ranging from civil rights, the legacy of the O.J. Simpson trial, and the authenticity of Colin Powell there is something in Debating Race to touch a nerve in all of us."},
  {title: "Teaching/Learning Anti-Racism: A Developmental Approach", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348523848i/1219528.jpg", author: "Louise Derman-Sparks, Carol Brunson Phillips", stars: 4, category: "Anti-Racism", content: "Louise Derman-Sparks and Carol Brunson Phillips have been teaching anti-racism to adults for over 20 years. Based on their real classroom experience, Teaching/Learning Anti-Racism offers us a guide to the development of anti-racist identity, awareness, and behavior. By integrating methodology and course content descriptions with student writings and analyses of students' growth, the book highlights the interaction between teaching and learning. Organized chronologically from the first to the last class, the text describes how each session contributed to the students' fascinating journey from pro-racist consciousness to active anti-racism.

This volume is much more than a curriculum guide for implementing anti-racism education with adults. Here, the authors, one White and one African American, also share their experiences--the successes, the failures, the difficulties, and, most important, what they learned from their students.

Teaching/Learning Anti-Racism provides both a how-to and a conceptual framework to help teachers and trainers adapt anti-racism education for their programs."},
  {title: "Between The World and Me", book_img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451435027i/25489625.jpg", author: "Ta-Nehisi Coates", stars: 4, category: "Anti-Racism", content: "“This is your country, this is your world, this is your body, and you must find some way to live within the all of it.”
 
In a profound work that pivots from the biggest questions about American history and ideals to the most intimate concerns of a father for his son, Ta-Nehisi Coates offers a powerful new framework for understanding our nation’s history and current crisis. Americans have built an empire on the idea of “race,” a falsehood that damages us all but falls most heavily on the bodies of black women and men—bodies exploited through slavery and segregation, and, today, threatened, locked up, and murdered out of all proportion. What is it like to inhabit a black body and find a way to live within it? And how can we all honestly reckon with this fraught history and free ourselves from its burden?
 
Between the World and Me is Ta-Nehisi Coates’s attempt to answer these questions in a letter to his adolescent son. Coates shares with his son—and readers—the story of his awakening to the truth about his place in the world through a series of revelatory experiences, from Howard University to Civil War battlefields, from the South Side of Chicago to Paris, from his childhood home to the living rooms of mothers whose children’s lives were taken as American plunder. Beautifully woven from personal narrative, reimagined history, and fresh, emotionally charged reportage, Between the World and Me clearly illuminates the past, bracingly confronts our present, and offers a transcendent vision for a way forward."}  
])

puts "Creating groups..."
Group.create([
  {name: "Anti-Racist", comments: [""], user_id: 1, book_id: 1},
  {name: "Pro-Education", comments: [""], user_id: 2, book_id: 2},
  {name: "Pro-Justice-Reform", comments: [""], user_id: 3, book_id: 3},
  {name: "Anti-Racist", comments: [""], user_id: 1, book_id: 4},
  {name: "Pro-Education", comments: [""], user_id: 4, book_id: 5},
  {name: "Pro-Justice-Reform", comments: [""], user_id: 3, book_id: 6},
  {name: "Anti-Racist", comments: [""], user_id: 1, book_id: 7},
  {name: "Pro-Education", comments: [""], user_id: 4, book_id: 8},
  {name: "Pro-Justice-Reform", comments: [""], user_id: 5, book_id: 9}
])

puts "✅ Done seeding!"

