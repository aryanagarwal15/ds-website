export type Testimonial = {
  video: string;
  quote: string;
  highlight: string;
  after: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    video: "/videos/testimonials/women_1.mp4",
    quote: "After 3 minutes with Krishna AI, I finally ",
    highlight: "paused instead of reacting.",
    after: " My 1:1 meeting at work went so much better.",
    name: "Ananya, 29",
  },
  {
    video: "/videos/testimonials/man_1.mp4",
    quote: "Five minutes with a story and ",
    highlight: "I'm calmer for the whole day.",
    after: "",
    name: "Rahul, 33",
  },
  {
    video: "/videos/testimonials/women_3.mp4",
    quote: "My 10-year-old asked what karma meant. ",
    highlight: "We listened together.",
    after: "",
    name: "Neha, 37",
  },
  {
    video: "/videos/testimonials/man_3.mp4",
    quote: "The Gita never felt this ",
    highlight: "relevant to my life before.",
    after: "",
    name: "Arjun, 28",
  },
  {
    video: "/videos/testimonials/women_4.mp4",
    quote: "I open the app every morning. It's become ",
    highlight: "my moment of stillness.",
    after: "",
    name: "Priya, 31",
  },
];
