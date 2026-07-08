export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string[]
}

export const posts: Post[] = [
  {
    slug: 'chasing-a-chance',
    title: 'The story behind Chasing a Chance',
    date: '2026-06-15',
    excerpt:
      "Why our studio is named after a dog, and how it grew from freelance side work into a full-service firm building sites for everyone from local plumbers to federal contractors.",
    content: [
      "Chasing a Chance is named after Chance, a dog Chelsey and I adopted from the Kanawha County Animal Shelter back in 2017. He was around for every late night of freelance work that eventually turned into this studio. The logo is even drawn from a photo of him in our backyard.",
      "We started Chasing a Chance in 2023, based out of Hurricane, West Virginia. It began as freelance work on the side and grew into a full-service web design and software studio once it was clear there was enough demand, and enough of our own opinions about how the work should be done, to make it a real thing.",
      "The approach has always been simple. Figure out what the client wants, build it well, and make sure they can use it without a manual. No bloated proposals, no hidden invoices, just solid, custom, template-free work. \"Big attention, small studio\" is the tagline, and it's meant literally. It's still just the two of us.",
      "The client list ended up more varied than we expected. Local service businesses, political campaigns, media companies, and even software supporting U.S. Department of Defense operations, alongside our own in-house projects like WVCams, a live WV traffic camera aggregator, and ChanceCMS, the CMS platform that ships with every site we build.",
      "Chance passed away in 2025 after a cancer diagnosis. Keeping his name on the business wasn't really a decision so much as the obvious thing to do. He had a way of making everything feel worth showing up for.",
    ],
  },
]
