export const business = {
  name: "Action Ace Plumbing",
  owner: "Greg Jober",
  phone: "+1 (780) 991-4612",
  phoneHref: "tel:+17809914612",
  email: "contact@actionaceplumbing.ca",
  city: "Edmonton, Alberta",
  yearsInBusiness: 14,
  reviewCount: 56,
  rating: 5.0,
};

export const serviceAreas = [
  "Edmonton",
  "Sherwood Park",
  "St. Albert",
  "Leduc",
  "Spruce Grove",
  "Beaumont",
  "Fort Saskatchewan",
];

export const services = [
  {
    title: "Emergency Plumbing",
    description:
      "Burst pipes and sudden leaks don't wait for business hours — Greg answers the call and gets to work fast.",
  },
  {
    title: "Drain Cleaning",
    description:
      "Slow or blocked drains cleared quickly, with a clear explanation of what caused it and how to prevent it.",
  },
  {
    title: "Leak Detection",
    description:
      "Precise leak location before any wall or floor is opened up, so you only pay for the repair you actually need.",
  },
  {
    title: "Leak Repair",
    description:
      "Lasting repairs on supply lines, fittings, and fixtures — done right the first time.",
  },
  {
    title: "Toilet Installation & Repair",
    description:
      "Installation and repair of non-skirted toilets, from running toilets to full replacements.",
  },
  {
    title: "Faucet Installation",
    description:
      "Kitchen and bathroom faucet upgrades and repairs, installed clean and leak-free.",
  },
  {
    title: "Sink Installation",
    description:
      "New sink installations for kitchens, bathrooms, and utility spaces.",
  },
  {
    title: "Tub Installation",
    description: "Bathtub installation and replacement, done to last.",
  },
  {
    title: "Shower Installation",
    description: "Shower installations and upgrades with clean, precise fittings.",
  },
  {
    title: "Bathroom Plumbing",
    description:
      "Full-scope bathroom plumbing — repairs, upgrades, and everyday fixes.",
  },
  {
    title: "Bathroom Rough-Ins",
    description:
      "Rough-in plumbing for bathroom renovations and new builds, set up right from the start.",
  },
  {
    title: "Bathroom Fixture Finishing",
    description:
      "Final fixture hookups and finishing work that ties a renovation together.",
  },
  {
    title: "Outside Hose Bibs",
    description: "Installation and repair of exterior hose bibs.",
  },
  {
    title: "Hot Water Tank Replacement",
    description:
      "Hot water tank replacement, including draft hood models by scheduled appointment.",
  },
  {
    title: "Garburator Installation",
    description: "Garburator installation for your kitchen sink.",
  },
  {
    title: "Dishwasher Water Line Installation",
    description:
      "Dishwasher water line hookups where existing water lines are exposed.",
  },
  {
    title: "Ice Maker Water Line Installation",
    description: "Ice maker water line installation for your refrigerator.",
  },
  {
    title: "Sump Pump Service",
    description: "Sump pump installation, repair, and service.",
  },
  {
    title: "Sewer Camera Inspections",
    description:
      "Camera inspections to see exactly what's happening inside your sewer line before any digging starts.",
  },
  {
    title: "Drain Pipe Locating",
    description: "Accurate drain pipe locating to plan repairs with confidence.",
  },
  {
    title: "Weeping Tile Access Point Location",
    description: "Locating weeping tile access points for foundation drainage work.",
  },
  {
    title: "Light Gas Fitting",
    description:
      "Light gas fitting work completed by a certified Gasfitter B.",
  },
];

export const whyChooseUs = [
  "Owner Operated",
  "14 Years Experience",
  "Licensed",
  "Bonded",
  "Fully Insured",
  "Gasfitter B Certified",
  "No Unnecessary Upselling",
  "Honest Pricing",
  "Professional Workmanship",
  "High Attention To Detail",
  "Clean Job Sites",
  "Friendly Service",
  "Excellent Communication",
  "Local Edmonton Business",
];

export type Review = {
  name: string;
  text: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    name: "Shawna O'Halloran",
    text: "Greg was outstanding, professional, and very knowledgeable. He cleaned up after himself and couldn't tell he was in our house. His rate was great - beating out the his competitors. I would definitely hire him again in the future for plumbing issues.",
    rating: 5,
  },
  {
    name: "Raymond Hailey",
    text: "I called Action Ace Plumbing expecting to book a service call, but instead he took the time to walk me through the issue over the phone. He patiently guided me step-by-step, and I was able to fix the problem myself. He easily could have charged me for a visit, but he chose honesty over profit. That kind of integrity is rare these days.",
    rating: 5,
  },
  {
    name: "Jesse Olthuizen",
    text: "Each time I've called Greg, he's been an excellent communicator, punctual, and very professional. He's considerate, tidy, and takes pride in his work. I've had great experiences with Action Ace Plumbing and would recommend their services to anyone.",
    rating: 5,
  },
  {
    name: "Richard Z Lewanczuk",
    text: "Greg provides craftsman-like workmanship and takes pride in his work. We were fed up with other plumbing companies who charge high prices yet send junior plumbers to domestic jobs. Not only is Greg responsive but his work superb, but he is reasonably priced too. Highly, highly recommend.",
    rating: 5,
  },
  {
    name: "Thomas Tran",
    text: "Greg has masterfully completed multiple jobs for us including two toilet swaps, three shower kits, hose bib replacements, and preventative sealing of hot tub pipes. He also explains his work in detail and offers maintenance tips, and will not upsell you on services you don't need.",
    rating: 5,
  },
  {
    name: "Mark Baergen",
    text: "Greg was fantastic to work with! I had a leaking sink that I couldn't figure out, and after sending him some pictures and a video of the issue, he quickly diagnosed the problem, and had it fixed in no time. He took the time to explain what was causing the leak and what was needed to fix it.",
    rating: 5,
  },
  {
    name: "Elexzo Bailey",
    text: "Greg is a gem. He diagnosed the issue with almost no information and delivered a fast, cost-efficient solution. All after two other plumbers couldn't figure it out. Highly recommend.",
    rating: 5,
  },
  {
    name: "Alexander Truong (Xeldlanor)",
    text: "Had a great experience with Greg! Came to fix my outdoor hose bib and ran into a bit of a roadblock, but instead of stopping, he found a smart workaround and got it done. Took the time to explain everything, worked efficiently, cleaned up after, and was in and out quick.",
    rating: 5,
  },
  {
    name: "Doug Thompson",
    text: "Very happy with Greg's service. He came to my home twice for service calls and did excellent work both times at a great rate. Very professional workmanship on both visits. Will be calling Greg for all my future plumbing service needs.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Do you offer emergency plumbing?",
    answer:
      "Yes. Burst pipes, major leaks, and other urgent issues can't wait — call Greg directly at (780) 991-4612 and he'll work with you to get to your property as quickly as possible.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Greg is a Certified Journeyman Plumber with a Gasfitter B Certification, and Action Ace Plumbing is licensed, bonded, and fully insured, with disability insurance as well.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. Greg will review the job with you and provide clear, honest pricing up front, with no pressure and no unnecessary upselling.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We proudly serve Edmonton, Sherwood Park, St. Albert, Leduc, Spruce Grove, Beaumont, Fort Saskatchewan, and surrounding areas.",
  },
  {
    question: "Do you install hot water tanks?",
    answer:
      "Yes, including draft hood models, which are completed by scheduled appointment.",
  },
  {
    question: "Do you perform sewer camera inspections?",
    answer:
      "Yes. A sewer camera inspection lets us see exactly what's happening inside your line so any recommended repair is based on what we actually find, not guesswork.",
  },
  {
    question: "Can you repair leaking faucets?",
    answer:
      "Absolutely. Faucet leaks are one of the most common calls we get, and most can be repaired or replaced in a single visit.",
  },
  {
    question: "Do you install toilets?",
    answer:
      "Yes, we install and repair non-skirted toilets for homes throughout the Edmonton area.",
  },
  {
    question: "How quickly can you respond?",
    answer:
      "As an owner-operated business, Greg manages his own schedule directly, which often means faster response times than companies juggling multiple technicians.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Call (780) 991-4612 to discuss payment options for your job — Greg is happy to walk you through it before any work begins.",
  },
];
