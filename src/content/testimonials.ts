export interface Testimonial {
  category: string
  quote: string
}

// Pairs of client reviews for the "kind words" carousel on the home page — one pair per shoot
// type, swiped between with the prev/next arrows. An empty quote (e.g. the second senior review)
// renders as-is until that testimonial is written.
export const testimonialPairs: [Testimonial, Testimonial][] = [
  [
    {
      category: 'wedding',
      quote:
        "Having you as our photographer was genuinely one of the best decisions I made for our wedding. It was also one of the easiest decisions. I knew you would do a good job, but you did so much more you were phenomenal. I sent you a few inspo pics and you gave me back our gallery of more than Pinterest worthy photos. You gave us a gallery of of photos that told the story of our wedding day and our love for each other in such a clear and beautiful way. Grandma couldn't be there for the wedding day but said she felt like she was there after seeing the photos. These photos will help our memories last a lifetime and then some. On top of that, having our photos taken was a great experience. During the private session you did such a good job guiding us that it felt easy. Normally I feel so drained after photos, but it was the opposite I felt confident that we got great photos because of your professionalism, and the whole time we were all giggling which made the experience feel natural and like we were just hanging out. And when photographing us getting ready, the ceremony, and the reception you got so many good photos that I didn't even know you took because you just blended right in. That gave us some stunning candid photos. I'm already trying to find reasons to need another photo shoot so I have a good excuse to book you again! A 10/10 experience in every single way.",
    },
    {
      category: 'wedding',
      quote:
        "Working with Payton was the most perfect experience! So professional, but also felt like just hanging out with a friend taking pictures! She was super prompt on sending sneak peaks and did overall an absolutely incredible job! We got so many comments about how great our engagement and wedding photos turned out and we can't stop looking at them! She made sure all of the shots we wanted were included, but also set us up with so many more we didn't know we were going to love so much! She collected inspiration info from us and totally matched the vibes we were looking for and more! Could not recommend Payton more!",
    },
  ],
  [
    {
      category: 'couple',
      quote:
        "Payton was amazing! She made my boyfriend and I feel so comfortable during our first professional photography experience and made the session so fun. She chose the perfect location and brought my vision to life through the posing, lighting, and editing. We absolutely love how our photos turned out and couldn't recommend her enough! 🤍",
    },
    {
      category: 'couple',
      quote:
        "I absolutely loved having you as my photographer! My boyfriend and I aren't very creative with posing in photos, but you came prepared with a ton of natural and romantic poses to try. You were so encouraging, and made the photo session so fun and enjoyable. When we received our gallery, I could not believe that you had captured us so beautifully. The photos looked like movie shots, and I literally wanted to put them all over my walls. I was so obsessed! You were so professional and efficient in the booking process, but also felt very approachable. I told my boyfriend to try and book you when he proposes because the photos were THAT good! I would definitely recommend you as a photographer to other couples who want gorgeous pictures, and an uplifting session.",
    },
  ],
  [
    {
      category: 'senior',
      quote:
        'I loved getting my pictures with you! You knew just the right places to go and were so kind in the process. I was nervous about my posing but you knew just how to position me. The editing was exactly what I was picturing and matched my reference photos. Lovely experience',
    },
    {
      category: 'senior',
      quote: '...',
    },
  ],
]
