export const programTracks = [
  {
    title: "AI & Robotics",
    bullets: [
      "Foundations and hands-on building",
      "Intro to engineering and coding control",
      "Creative AI with ethics and safety",
    ],
    tone: "bg-[#0f6d67] text-white",
  },
  {
    title: "STEM & Enrichments",
    bullets: [
      "Science, reading, math, and arts",
      "Technology-rich projects that stay playful",
      "Structured learning without a classroom feel",
    ],
    tone: "bg-[#f26f4d] text-white",
  },
  {
    title: "Life Skills",
    bullets: [
      "Hair braiding and wood work",
      "Cake baking and decoration",
      "Entrepreneurship and confidence-building",
    ],
    tone: "bg-[#fef1e7] text-[#153b32]",
  },
  {
    title: "Fun in the Sun",
    bullets: [
      "Field trips and outdoor play",
      "Pack-fun days with free breakfast and lunch",
      "Movement-heavy sessions that break up the day",
    ],
    tone: "bg-[#2181c2] text-white",
  },
  {
    title: "Musical Instrument Training",
    bullets: [
      "Keyboard, drum, and saxophone options",
      "Bring-your-instrument support for learners",
      "Practice blocks mixed into camp programming",
    ],
    tone: "bg-[#143f6b] text-white",
  },
] as const;

export const activityHighlights = [
  {
    title: "Active play",
    copy: "Movement-based games, bounce sessions, and outdoor energy releases.",
    image: "/images/activity-bounce.jpg",
  },
  {
    title: "Guided group learning",
    copy: "Instructors keep younger campers engaged through rhythm, movement, and small-group activities.",
    image: "/images/activity-dance.jpg",
  },
  {
    title: "Hands-on making",
    copy: "Campers rotate into practical stations that keep their hands busy and attention focused.",
    image: "/images/activity-crafts.jpg",
  },
] as const;

export const faqItems = [
  {
    id: "coaches",
    question: "Who are the coaches and instructors?",
    answer:
      "Camp Messiah uses certified and experienced instructors across the camp tracks.",
  },
  {
    id: "bring",
    question: "What should campers bring?",
    answer:
      "All campers should bring water and a backpack. Campers ages 3-6 should also bring a cover for naps. Musical learners should bring their instruments for training and practice.",
  },
  {
    id: "discounts",
    question: "Are there sibling discounts or other perks?",
    answer:
      "The first sibling receives a 10% discount. Families who sign up for more than two sessions receive a 10% discount on the third session.",
  },
  {
    id: "weather",
    question: "What if it rains?",
    answer:
      "Indoor activities continue during light rain. Heavy rain or other severe weather may reschedule outdoor activities depending on conditions.",
  },
  {
    id: "grouping",
    question: "How are campers grouped?",
    answer: "Campers are grouped by age first and then by schedule.",
  },
  {
    id: "instruments",
    question: "Do musical learners need instruments?",
    answer:
      "Yes. Musical instrument learners should come with their instruments for training and practice.",
  },
] as const;

export const faqCards = [
  {
    id: "01",
    number: "01",
    title: "What should campers bring?",
    body: [
      "Everyone: Water and a backpack.",
      "Ages 3-6: A cover for naps.",
      "Musical instrument learners: Bring your instruments.",
    ],
  },
  {
    id: "02",
    number: "02",
    title: "Are there discounts?",
    body: [
      "Absolutely. There is a 10% discount on the first sibling only.",
      "Sign up for more than two sessions and get a 10% discount on the third session.",
    ],
  },
  {
    id: "03",
    number: "03",
    title: "What happens if it rains?",
    body: [
      "Indoor activities continue with light rain.",
      "Heavy rain and other inclement weather may require outdoor activities to be rescheduled depending on severity.",
    ],
  },
  {
    id: "04",
    number: "04",
    title: "How are campers grouped?",
    body: ["Campers are grouped by age first and then by schedule."],
  },
  {
    id: "05",
    number: "05",
    title: "Do music learners need instruments?",
    body: [
      "Yes. Musical instrument learners should come with their instruments for training and practice.",
    ],
  },
  {
    id: "06",
    number: "06",
    title: "Who are the coaches and instructors?",
    body: [
      "Camp Messiah uses certified and experienced instructors across the camp tracks.",
    ],
  },
] as const;

export const explorerFocus = [
  "Gentle transitions and guided routines",
  "Rest support and age-appropriate pacing",
  "Creative play, movement, and early learning",
] as const;

export const builderFocus = [
  "Robotics, STEM, and project-based learning",
  "Creative skill tracks plus life-skills electives",
  "More independence across a longer camp day",
] as const;

export const campWindow = "June 22 - August 21, 2026";

export const scheduleRows = [
  {
    id: "robotics-ai",
    dates: "June 22 - July 3",
    ageGroup: "Modified for all age groups",
    price: "$200 per week",
    notes: ["Robotics & AI", "Maths and English enrichment included."],
  },
  {
    id: "life-skills",
    dates: "July 6 - July 17",
    ageGroup: "Modified for all age groups",
    price: "$200 per week",
    notes: ["Life Skills", "Maths and English enrichment included."],
  },
  {
    id: "music-training",
    dates: "July 20 - August 7",
    ageGroup: "Modified for all age groups",
    price: "$200 per week",
    notes: [
      "Musical Instrument Training (Piano / Drums / Saxophone)",
      "Please circle your instrument of choice.",
      "Maths and English enrichment included.",
    ],
  },
  {
    id: "steam",
    dates: "July 20 - August 7",
    ageGroup: "Modified for all age groups",
    price: "$200 per week",
    notes: ["STEAM", "Maths and English enrichment included."],
  },
  {
    id: "entrepreneurship",
    dates: "August 10 - August 21",
    ageGroup: "Modified for all age groups",
    price: "$200 per week",
    notes: ["Entrepreneurship", "Maths and English enrichment included."],
  },
] as const;

export const registrationAgeGroups = [
  {
    value: "ages-3-4",
    label: "Ages 3-4",
  },
  {
    value: "ages-5-6",
    label: "Ages 5-6",
  },
  {
    value: "ages-7-9",
    label: "Ages 7-9",
  },
  {
    value: "ages-10-12",
    label: "Ages 10-12",
  },
  {
    value: "ages-13-16",
    label: "Ages 13-16",
  },
] as const;
